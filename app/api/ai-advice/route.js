import OpenAI from "openai";
import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
export async function POST(request) {
  try {
    const apiKey =
      process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    if (!apiKey) {
      console.error("❌ No OpenAI API key found in environment variables");
      return NextResponse.json(
        { message: "AI advice is disabled. Set OPENAI_API_KEY to enable it." },
        { status: 503 },
      );
    }
    console.log("✅ API key found, length:", apiKey.length);
    const { totalBudget, totalIncome, totalSpend } = await request.json();
    console.log("📊 Data received:", { totalBudget, totalIncome, totalSpend });

    const userPrompt = `
Based on the following financial data:
- Total Budget: ${totalBudget} USD
- Expenses: ${totalSpend} USD
- Incomes: ${totalIncome} USD
Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `.trim();

    // const client = new OpenAI({ apiKey });
    // const chatCompletion = await client.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: userPrompt }],
    // });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
    });
    console.log(response.text);

    const advice =
      chatCompletion?.choices?.[0]?.message?.content?.trim() ||
      "No advice generated.";

    return NextResponse.json({ advice });
  } catch (error) {
    console.error("AI advice error:", error);
    const message =
      process.env.NODE_ENV === "production"
        ? "Sorry, I couldn't fetch the financial advice at this moment. Please try again later."
        : error?.message ||
          "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
