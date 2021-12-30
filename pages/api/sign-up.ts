// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../utils/config";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await axios.post(config.apiUrl + "/users", req.body.param);
  res.status(200).json({ name: "Hello" });
}
