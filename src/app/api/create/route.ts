import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await prisma.user.create({
    data: {
      name: "Teste4",
      email: "teste4@gmail.com",
      password: "124456",
      role: "ADMIN",
    },
  });
  return NextResponse.json(user);
}
