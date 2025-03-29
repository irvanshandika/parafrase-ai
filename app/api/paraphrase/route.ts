import { streamText, UIMessage } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

export const runtime = 'edge'

const google = createGoogleGenerativeAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
})

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()
  
  const systemPrompt = `You are an expert paraphrasing assistant. Your task is to:
1. Rewrite the given text while preserving its original meaning
2. Maintain the same tone and style as the original
3. Improve clarity and readability when possible
4. Keep technical terms and proper nouns unchanged
5. Output only the paraphrased text without additional commentary`

  const result = streamText({
    model: google("gemini-2.5-pro-exp-03-25"),
    messages: [
      {
        role: "system",
        content: systemPrompt
      },
      ...messages
    ],
    temperature: 0.7,
    maxTokens: 8192,
    topP: 0.9,
    frequencyPenalty: 0.2,
    presencePenalty: 0.1
  })

  return result.toDataStreamResponse()
}
