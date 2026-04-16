import { NextResponse } from 'next/server';

let viewsCount = 0;

export async function GET() {
  viewsCount += 1;

  return NextResponse.json({ views: viewsCount });
}
