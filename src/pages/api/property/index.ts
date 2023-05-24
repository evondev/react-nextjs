import { NextApiRequest, NextApiResponse } from "next";
import properties from "@data/properties.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(properties);
}
