import { IBillet } from "../models/IBillet";
import { requests } from "./constants";

export const POST = async (n: number, body?: IBillet[]) => {
  const { TYPE, SUCCESSFULL_REQUEST, POST } = requests;
  const request = await fetch(`http://localhost:13337/${n}`, {
    method: `${POST}`,
    headers: {
      Accept: `${TYPE}`,
      "Content-Type": `${TYPE}`,
    },
    body: JSON.stringify(body ?? []),
  });

  const responce: IBillet[] = await request.json();
  return responce;
};
