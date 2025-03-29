import { Navbar } from "@/src/components/Navbar"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container max-w-6xl py-12 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">AI-Powered Text Rewriting</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your writing with our advanced paraphrasing tool while preserving the original meaning
          </p>
          <div className="mt-8">
            <Link href="/paraphrase">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Smart Rewriting",
              desc: "AI understands context to provide meaningful alternatives"
            },
            {
              title: "Multiple Variations", 
              desc: "Get different versions of your text with a single click"
            },
            {
              title: "Preserve Meaning",
              desc: "Maintain original intent while improving expression"
            }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="container py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ParaphraseAI. All rights reserved.
      </footer>
    </div>
  )
}
