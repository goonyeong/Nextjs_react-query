import { IFrontendMember } from "@/types/interfaceData";
import { NextResponse } from "next/server";

const members: IFrontendMember[] = [
  {
    name: "Asher",
    age: 29,
    is아줌마: false,
  },
  {
    name: "Jayhock",
    age: 33,
    is아줌마: false,
  },
  {
    name: "Blair",
    age: 32,
    is아줌마: true,
  },
  {
    name: "Wisdom",
    age: 32,
    is아줌마: true,
  },
];

export async function GET(req: Request) {
  return NextResponse.json(members);
}

export async function POST(req: Request) {
  const data: IFrontendMember = await req.json();
  members.push(data);
  return NextResponse.json("success");
}
