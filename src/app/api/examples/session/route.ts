// This is an example of how to access a session from an API route

import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";

export async function GET(req: NextRequest) {
  const session = await auth();
  return new NextResponse(JSON.stringify(session, null, 2));
  //return NextResponse.json(session, { status: 200 });
}
