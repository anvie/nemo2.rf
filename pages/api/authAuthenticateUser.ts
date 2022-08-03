// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import getConfig from "next/config";

const db = require("../../lib/db");

const { serverRuntimeConfig } = getConfig();

import { generateCode } from "../../lib/auth";

const messageFormat = "Please sign this message to ensure you have access to your RSVPs."

type Data = {
  error?: string | null;
  result?: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    body: { address },
    method,
  } = req;
  if (method !== "POST") {
    res.status(405).end();
    return;
  }

  if (!address) {
    res.json({ error: "No address" });
    return;
  }

  // @TODO(you): code here

  res.json({ result: { code: generateCode() } });
}

