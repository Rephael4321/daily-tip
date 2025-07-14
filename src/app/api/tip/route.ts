import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { subject } = await req.json();

  if (!subject || typeof subject !== "string") {
    return NextResponse.json({ tip: "נושא לא תקין." }, { status: 400 });
  }

  try {
    const prompt = `תן טיפ יומי קצר, מעשי ומעורר השראה בנושא הבא: "${subject}" (בלא יותר מ-2 משפטים).`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 300,
    });

    const tip = completion.choices[0]?.message?.content?.trim();

    return NextResponse.json({ tip: tip || "לא התקבל טיפ. נסה שוב." });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("OpenAI Error:", message);
    return NextResponse.json(
      { tip: "שגיאה בשירות הטיפים. נסה שוב מאוחר יותר." },
      { status: 500 }
    );
  }
}
