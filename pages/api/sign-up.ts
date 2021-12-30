import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../utils/config";

type Data = {
  _id: string;
  username: string;
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  axios
    .post(config.apiUrl + "/users", req.body.param)
    .then((r) => {
      let data: Data = r.data;
      res.status(200).json(data);
    })
    .catch((e: AxiosError) => {
      return res.status(e.response?.status || 500).end(e.message);
    });
}
