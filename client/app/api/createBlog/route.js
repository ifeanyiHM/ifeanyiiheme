import { NextResponse } from "next/server";

const password = process.env.API_PASSWORD;

export const POST = async (req) => {
  try {
    const body = await req.json();
    console.log("boddyyyy", body);

    const res = await fetch(
      `https://blogiify.vercel.app/api/v1/blogs?timestamp=${Date.now()}`,
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": password,
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const result = await res.json(); // Get the response body in case of failure
      console.error("Error from external API:", result);
      return NextResponse.json(
        { message: "Failed to post blog", error: result },
        { status: res.status }
      );
    }

    const result = await res.json();
    console.log("Successful response:", result); // Log successful response
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    console.error("Error posting blog:", error); // Log the internal server error
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
};
