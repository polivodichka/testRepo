import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBillet } from "../models/IBillet";
import { POST } from "../server/post";
import { store } from "../store/store";

export const getCoordinates = createAsyncThunk(
  "board/initBoard",
  async (radius: number) => {
    const oldCoordinates = store.getState().board.coordinates;
    const coordinates: IBillet[] = oldCoordinates ? [...oldCoordinates] : [];
    if (!oldCoordinates || oldCoordinates.length === 0) {
      for (let x = -radius + 1; x < radius; x++) {
        for (let y = -radius + 1; y < radius; y++) {
          for (let z = -radius + 1; z < radius; z++) {
            if (x + y + z === 0) coordinates.push({ x, y, z });
          }
        }
      }
    }

    const values: IBillet[] = await POST(radius, store.getState().board.tiles);
    values.forEach((value) => {
      const current = coordinates.find(
        (coordinate) =>
          coordinate.x === value.x &&
          coordinate.y === value.y &&
          coordinate.z === value.z
      );
      if (current) {
        const index = coordinates.indexOf(current);
        coordinates[index] = { ...value };
      }
    });
    return coordinates;
  }
);
