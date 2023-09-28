// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req });
  return new NextResponse(JSON.stringify(token, null, 2));
  //return NextResponse.json(token, { status: 200 });
}
