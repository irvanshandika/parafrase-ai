"use client"

import { useChat } from "ai/react"
import { Button } from "@/src/components/ui/button"
import { Textarea } from "@/src/components/ui/textarea"
import { Navbar } from "@/src/components/Navbar"

export default function ParaphrasePage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/paraphrase"
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container max-w-4xl py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Rewrite with AI</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your text while preserving meaning using Google Gemini's advanced AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold">Original Text</h2>
            <Textarea
              className="min-h-[200px]"
              placeholder="Enter text to paraphrase..."
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate"}
            </Button>
          </form>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paraphrased Result</h2>
            <div className="min-h-[200px] p-3 rounded-lg border bg-muted/50">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : messages.length > 0 ? (
                <div className="whitespace-pre-wrap">
                  {messages[messages.length - 1].content}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Your paraphrased text will appear here...
                </p>
              )}
            </div>
            <Button variant="outline" className="w-full" disabled={messages.length === 0}>
              Copy Result
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
