import { ITile } from "../models/ITile";
import { requests } from "./constants";

export const POST = async (n: number, body?: ITile[]) => {
  const { TYPE, POST } = requests;
  const request = await fetch(`https://hex2048-lambda.octa.wtf/${n}`, {
    method: `${POST}`,
    headers: {
      Accept: `${TYPE}`,
      "Content-Type": `${TYPE}`,
    },
    body: JSON.stringify(body ?? []),
  });

  const responce: ITile[] = await request.json();
  return responce;
};
