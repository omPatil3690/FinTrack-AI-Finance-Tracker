import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;
const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";

export async function POST(request) {
  try {
    if (!apiKey) {
      console.error("No Gemini API key found in environment variables");
      return NextResponse.json(
        { message: "AI advice is disabled. Set GEMINI_API_KEY to enable it." },
        { status: 503 },
      );
    }

    const { totalBudget, totalIncome, totalSpend } = await request.json();

    const userPrompt = `
Based on the following financial data:
- Total Budget: ${totalBudget} USD
- Expenses: ${totalSpend} USD
- Incomes: ${totalIncome} USD
Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `.trim();

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: modelName,
      contents: userPrompt,
    });

    const advice = response?.text?.trim() || "No advice generated.";

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
