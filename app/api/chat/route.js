import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro", // ✅ FIX DI SINI
    });

    const result = await model.generateContent(message);
    const response = result.response.text();

    return Response.json({ reply: response });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "AI error" },
      { status: 500 }
    );
  }
}
