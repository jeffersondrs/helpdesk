import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    },
  });
  return res.status(201).json(result);
}
