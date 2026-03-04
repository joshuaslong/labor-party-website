import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-sanity-webhook-secret");

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { _type, slug } = body;

    if (_type === "blogPost") {
      revalidateTag("blog-index", "max");
      if (slug?.current) {
        revalidateTag(`blog-${slug.current}`, "max");
      }
    }

    if (_type === "platformSection") {
      revalidateTag("platform-index", "max");
      if (slug?.current) {
        revalidateTag(`platform-${slug.current}`, "max");
      }
    }

    if (_type === "category") {
      revalidateTag("blog-index", "max");
    }

    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
