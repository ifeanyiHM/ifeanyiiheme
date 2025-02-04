import { NextResponse } from "next/server";

const password = process.env.API_PASSWORD;

export const PATCH = async (req) => {
  // `http://127.0.0.1:8000/api/v1/blogs/${blogID}`,
  try {
    const body = await req.json();
    console.log("ressponse body:", body);
    console.log("ressponse:", req.body);

    console.log(body);

    const { id, update } = body;

    const res = await fetch(
      // `http://127.0.0.1:8000/api/v1/blogs/${id}`,
      `https://blogiify.vercel.app/api/v1/blogs/${id}?timestamp=${Date.now()}`,
      // `https://ifeanyiiheme.onrender.com/api/v1/blogs/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": password,
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify(update),
      }
    );

    if (!res.ok) {
      const errorResponse = await res.json();
      return NextResponse.json(
        { message: "Failed to update data", error: errorResponse },
        { status: res.status }
      );
    }

    const result = await res.json();
    return NextResponse.json(
      { data: result, message: "Update successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating data:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
