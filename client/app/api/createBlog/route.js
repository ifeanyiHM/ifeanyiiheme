import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // const res = await fetch(`https://blogiify.vercel.app/api/v1/blogs`);
    const res = await fetch(`https://ifeanyiiheme.onrender.com/api/v1/blogs/`);

    if (!res.ok) {
      return NextResponse.json(
        { message: "Failed to fetch data" },
        { status: res.status }
      );
    }
    console.log(res);

    const result = await res.json();
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
