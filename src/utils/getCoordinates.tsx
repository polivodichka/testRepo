import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBillet } from "../models/IBillet";
import { POST } from "../server/post";

export const getCoordinates = createAsyncThunk(
  "board/initBoard",
  async ({ n, oldCoordinates }: { n: number; oldCoordinates?: IBillet[] }) => {
    const coordinates: IBillet[] = oldCoordinates ? [...oldCoordinates] : [];
    if (!oldCoordinates || oldCoordinates.length === 0) {
      for (let x = -n + 1; x < n; x++) {
        for (let y = -n + 1; y < n; y++) {
          for (let z = -n + 1; z < n; z++) {
            if (x + y + z === 0) coordinates.push({ x, y, z });
          }
        }
      }
    }
    console.log(coordinates);

    const filtred = coordinates.filter((coordinate) => coordinate.value);
    const values: IBillet[] = await POST(n, filtred);

    console.log(values);
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
