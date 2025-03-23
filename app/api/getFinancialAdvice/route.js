import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { totalBudget, totalIncome, totalSpend } = await req.json();

    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in two sentences to help the user manage their finances more effectively.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent(userPrompt);
    const response = await result.response;
    const advice = response.text();

    return Response.json({ advice });
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return Response.json({ error: "Failed to fetch financial advice." }, { status: 500 });
  }
}
