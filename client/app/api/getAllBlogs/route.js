import { NextResponse } from "next/server";

export const GET = async (req) => {
  // `http://127.0.0.1:8000/api/v1/blogs?timestamp=${Date.now()}`

  const URL = `https://blogiify.vercel.app/api/v1/blogs?timestamp=${Date.now()}`;

  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/v1/blogs?timestamp=${Date.now()}`,
      {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { message: "Failed to fetch data" },
        { status: res.status }
      );
    }

    const result = await res.json();
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
