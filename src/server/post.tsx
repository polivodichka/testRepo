import { IBillet } from "../models/IBillet";
import { requests } from "./constants";

export const POST = async (n: number, body?: IBillet[]) => {
  const { TYPE, POST } = requests;
  const request = await fetch(`https://hex2048-lambda.octa.wtf/${n}`, {
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
