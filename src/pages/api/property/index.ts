import { NextApiRequest, NextApiResponse } from "next";
import properties from "@data/properties.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let filteredData = properties;
  const params = req.query;
  const { text, state, status, type, country, offset, limit } = params;

  if (text && typeof text === "string") {
    filteredData = filteredData.filter((item) => {
      return (
        item.title.toLowerCase().includes(text.toLowerCase() as string) ||
        item.address.toLowerCase().includes(text.toLowerCase() as string)
      );
    });
  }

  if (state) {
    filteredData = filteredData.filter((item) => {
      return item.state === state;
    });
  }

  if (status) {
    filteredData = filteredData.filter((item) => {
      return item.status === status;
    });
  }

  if (type) {
    filteredData = filteredData.filter((item) => {
      return item.type === type;
    });
  }

  if (country) {
    filteredData = filteredData.filter((item) => {
      return item.country === country;
    });
  }

  if (offset && limit) {
    const start = parseInt(offset as string);
    const end = start + parseInt(limit as string);
    filteredData = filteredData.slice(start, end);
  }

  res.status(200).json({
    properties: filteredData,
    total: filteredData.length,
  });
}
