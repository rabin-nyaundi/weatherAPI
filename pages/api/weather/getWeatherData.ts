// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getWeatherData } from "@/services/api";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  data?: string;
};
const APIKey: string | undefined = process.env.API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    let {
      data: { city, units },
    } = req.body;

    if (units === "") {
      units = "standard";
    }

    let weather = await getWeatherData(city, units, APIKey);

    console.log("====================================");
    console.log(weather);
    console.log("====================================");

    return res.status(200).json({ data: weather });
  }
  return res.status(400).json({ message: "Method not allowed" });
}
