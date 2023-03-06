// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { get, getCityGeoCodes } from "@/services/api";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
const APIKey = process.env.API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await getCityGeoCodes(
    "http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid=a9101ce40d96c9b827b3874cf182fd7e"
  );

  const { lat, lon } = data[0];

  console.log(lat, lon);

  const weather = await get(lat, lon, APIKey);

  console.log("====================================");
  console.log(weather, "Weastehh");
  console.log("====================================");

  // @ts-ignore
  return res.status(200).json({ data });
}
