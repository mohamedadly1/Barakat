 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  User, 
  Clock, 
  Volume2, 
  HeartPulse, 
  Ear, 
  Zap, 
  Brain, 
  Users, 
  CheckCircle2,
  AlertTriangle
} from "lucide-react"

export default function AdultHearingLossPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Hearing Loss in Adults
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            In Saudi Arabia, thousands of adults experience hearing difficulty. With today’s technology, 
            hearing loss is highly manageable, helping you reconnect with the sounds of life.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            
            {/* Intro Card */}
            <Card className="border-none shadow-sm bg-secondary/5">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <User className="h-12 w-12 text-secondary" />
                </div>
                <p className="text-lg leading-relaxed">
                  At <strong>Al Barakat Hearing Centers</strong>, we specialize in adult hearing care. 
                  We offer comprehensive assessments and advanced solutions from <strong>Signia</strong> and <strong>Rexton</strong> 
                  to ensure your hearing loss doesn't hold you back.
                </p>
              </CardContent>
            </Card>

            {/* Causes Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Common Causes in Adults</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Age-Related (Presbycusis)",
                    icon: Clock,
                    desc: "The most common form, caused by gradual damage to inner ear hair cells. It usually affects both ears and makes speech difficult to understand in noise."
                  },
                  {
                    title: "Noise-Induced Loss",
                    icon: Volume2,
                    desc: "Exposure to machinery, concerts, or loud headphones. This is often preventable but irreversible once the damage is done."
                  },
                  {
                    title: "Medical & Health Related",
                    icon: HeartPulse,
                    desc: "Conditions that reduce blood flow or damage auditory structures, including side effects from specific medications."
                  },
                  {
                    title: "Earwax & Middle Ear Issues",
                    icon: Ear,
                    desc: "Simple earwax buildup or conditions like Otosclerosis (bone stiffening) can significantly reduce sound transmission."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors">
                    <item.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sudden Hearing Loss Warning */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6 flex gap-4">
                <AlertTriangle className="h-8 w-8 text-destructive shrink-0" />
                <div>
                  <h3 className="font-bold text-destructive text-lg">Sudden Hearing Loss (Medical Emergency)</h3>
                  <p className="text-sm mt-1 text-muted-foreground">
                    Sudden Sensorineural Hearing Loss (SSHL) often occurs in one ear. <strong>Treatment must begin within 48 hours</strong> for the best recovery results.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Impact Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">The Impact of Untreated Loss</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Untreated hearing loss doesn’t just affect your ears; it impacts your mental health and relationships.
              </p>
              

 

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Brain, title: "Cognitive Decline", text: "Reduced memory function and mental fatigue." },
                  { icon: Users, title: "Social Isolation", text: "Feelings of depression or withdrawal from groups." },
                  { icon: Zap, title: "Communication Strain", text: "Difficulties in both personal and professional life." },
                  { icon: HeartPulse, title: "Increased Stress", text: "Constant effort to listen leading to physical exhaustion." }
                ].map((item, idx) => (
                  <Card key={idx} className="border-none bg-muted/30">
                    <CardContent className="p-6">
                      <item.icon className="h-6 w-6 text-secondary mb-3" />
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why Al Barakat Section */}
            <div className="rounded-2xl border p-8 space-y-6">
              <h2 className="text-2xl font-bold">Why Choose Al Barakat?</h2>
              <p className="text-muted-foreground">
                With locations across <strong>Riyadh, Jeddah, and all major cities</strong>, we are Saudi Arabia's trusted partner for Signia and Rexton solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Comprehensive Assessments
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Customized Aid Fittings
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Tinnitus Therapy
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Hearing Protection
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Active, Engaged, and Confident</h2>
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