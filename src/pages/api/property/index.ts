import { NextApiRequest, NextApiResponse } from "next";
import properties from "@data/properties.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // const params = req.query;
  let filteredData = properties;

  // if (filter1) {
  //   filteredData = filteredData.filter(item => item.category === filter1);
  // }

  res.status(200).json(filteredData);
}
