 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { AlertCircle, CheckCircle2, Phone, Volume2, Users, Ear, Brain, MessageSquare ,Activity} from "lucide-react"

export default function SignsOfHearingLossPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
              Signs of Hearing Loss
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hearing loss is a partial or total inability to hear sound in one or both ears. 
              At Al Barakat Hearing Centers, we emphasize early detection to help prevent communication problems and social withdrawal.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            
            {/* Why Early Detection Matters */}
            <Card className="border-primary/20 bg-primary/5 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Why Early Detection Matters</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Untreated hearing loss can lead to more than just missing sounds. Research shows it can impact your overall well-being:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { icon: Brain, text: "Cognitive decline and memory challenges" },
                        { icon: Activity, text: "Fatigue from constant listening effort" },
                        { icon: Users, text: "Social isolation or anxiety" },
                        { icon: CheckCircle2, text: "Reduced job performance and confidence" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
                          <item.icon className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The 8 Signs Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center mb-8">8 Common Warning Signs</h2>
              
              <div className="grid gap-6">
                {[
                  {
                    title: "1. Difficulty Understanding Speech",
                    desc: "You might hear that someone is speaking but struggle to understand the words clearly. High-frequency sounds like 's', 'f', and 'th' are often the first to disappear.",
                    clues: ["People sound like they are mumbling", "Women’s and children’s voices are harder to understand"]
                  },
                  {
                    title: "2. Frequently Asking People to Repeat",
                    desc: "If you often say 'pardon?' or 'what?', it's a classic sign. You may not notice how often this happens until friends or family point it out.",
                    icon: MessageSquare
                  },
                  {
                    title: "3. Turning Up the Volume",
                    desc: "If others complain that the TV or radio is too loud, it's a strong indicator that you aren't hearing softer speech frequencies.",
                    icon: Volume2
                  },
                  {
                    title: "4. Trouble in Noisy Environments",
                    desc: "Restaurants and malls make conversations difficult. Background noise competes with speech, leading to 'hearing fatigue.'",
                    icon: Users
                  },
                  {
                    title: "5. Trouble Hearing on the Phone",
                    desc: "Without visual cues or lip reading, phone calls become exhausting. If you require speaker mode for clarity, your hearing may need testing.",
                    icon: Phone
                  },
                  {
                    title: "6. Ringing or Buzzing (Tinnitus)",
                    desc: "Hearing ringing or hissing often accompanies hearing loss. It suggests inner ear hair cell damage or auditory stress.",
                    icon: Activity
                  },
                  {
                    title: "7. Depending on Lip Reading",
                    desc: "If you need to see people's lips to follow a conversation, your brain is compensating for missing audio information.",
                    icon: Ear
                  },
                  {
                    title: "8. Feeling Tired After Conversations",
                    desc: "Listening effort causes mental fatigue. If you feel drained after meetings, your hearing is likely straining to keep up.",
                    icon: Brain
                  }
                ].map((sign, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-bold mb-3 text-primary">{sign.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{sign.desc}</p>
                      {sign.clues && (
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {sign.clues.map((clue, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm italic">
                              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                              {clue}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* What to Do Next */}
            <div className="rounded-2xl bg-secondary/5 border border-secondary/20 p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-center">What to Do If You Notice These Signs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>Book a hearing test at your nearest Al Barakat center.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>Explore <strong>Signia</strong> or <strong>Rexton</strong> digital hearing aids.</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>Avoid self-diagnosing—most hearing loss is treatable.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>Protect your hearing from further damage by reducing noise exposure.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey to Better Hearing</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our specialists across Saudi Arabia are ready to perform a complete evaluation and explain your results clearly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/hearing-test">Take Free Online Test</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors font-bold">
              <Link href="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Al Barakat Hearing Centers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}