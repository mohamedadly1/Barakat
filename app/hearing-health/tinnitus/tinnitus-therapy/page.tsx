"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Music, 
  BrainCircuit, 
  Ear, 
  Sparkles, 
  CheckCircle2, 
  Headphones, 
  Mic2,
  HeartPulse,
  Waves,
  MessageSquare,
  ShieldCheck
} from "lucide-react"

export default function TinnitusTherapyPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-primary">
            Tinnitus Therapy
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Tinnitus therapy is a customized treatment approach designed to reduce the perception and discomfort caused by tinnitus—the ringing, buzzing, or humming sounds in your ears that others can’t hear.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            
            {/* What is Tinnitus Therapy Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">What Is Tinnitus Therapy?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Although tinnitus cannot always be “cured,” with proper therapy, <strong>its impact can be significantly reduced</strong>, allowing you to regain focus, sleep better, and enjoy daily life again. At <strong>Al Barakat Hearing Centers</strong>, we offer personalized tinnitus therapy programs that combine advanced hearing technology, sound therapy, and counseling, all guided by certified audiologists.
              </p>
            </div>

            {/* How It Works Card */}
            <Card className="border-none shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">How Tinnitus Therapy Works</h3>
                    <p className="opacity-90 leading-relaxed text-sm">
                      Tinnitus originates in the auditory system. When the ear or hearing nerve sends irregular signals, the brain interprets them as sound. <strong>Tinnitus therapy retrains your brain</strong> to tune out or ignore these unwanted noises.
                    </p>
                    <div className="grid grid-cols-1 gap-2 text-sm pt-2">
                      <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Sound therapy to mask or distract</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Hearing aids with tinnitus functions</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Counseling and relaxation training</div>
                    </div>
                  </div>
                  <BrainCircuit className="h-32 w-32 opacity-20 hidden md:block" />
                </div>
              </CardContent>
            </Card>

            {/* 1. Sound Therapy Relief */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg"><Waves className="h-6 w-6 text-secondary" /></div>
                <h2 className="text-2xl font-bold">1. Sound Therapy Relief for Tinnitus</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Sound therapy uses gentle, pleasant sounds to cover or reduce the awareness of tinnitus. It helps your brain focus on external sounds rather than internal ringing.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {["White & Pink Noise", "Nature Sounds", "Customized Maskers", "Music Therapy"].map((item, i) => (
                  <div key={i} className="p-4 bg-muted/30 rounded-xl text-center text-xs font-bold border border-transparent hover:border-secondary/20 transition-all">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                At Al Barakat Hearing Centers, we personalize each sound program to match your tinnitus frequency and comfort level.
              </p>
            </div>

            {/* 2. Hearing Aids Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg"><Ear className="h-6 w-6 text-primary" /></div>
                <h2 className="text-2xl font-bold">2. Hearing Aids with Tinnitus Masking Features</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Many people with tinnitus also have hearing loss. Amplifying external sounds can naturally reduce tinnitus perception. Modern hearing aids from <strong>Signia and Rexton</strong> include built-in tinnitus therapy options.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-background border rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-sm">Built-in sound generators</h4>
                    <p className="text-xs text-muted-foreground">Internal maskers designed to blend with your tinnitus.</p>
                  </div>
                </div>
                <div className="p-4 bg-background border rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-sm">Bluetooth Connectivity</h4>
                    <p className="text-xs text-muted-foreground">Stream music and therapy apps directly to your ears.</p>
                  </div>
                </div>
                <div className="p-4 bg-background border rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-sm">Rechargeable Batteries</h4>
                    <p className="text-xs text-muted-foreground">Daily convenience without changing small batteries.</p>
                  </div>
                </div>
                <div className="p-4 bg-background border rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-sm">Natural Hearing Tech</h4>
                    <p className="text-xs text-muted-foreground">Cutting-edge technology for clear, natural sound adjustment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 & 4. Counseling & TRT */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <MessageSquare className="h-5 w-5" /> 3. Counseling & CBT
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tinnitus is not just a hearing issue; it often affects mental well-being. Our specialists provide Counseling and Cognitive Behavioral Therapy (CBT) to help patients reduce anxiety, change negative emotional reactions, and improve sleep.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Sparkles className="h-5 w-5" /> 4. Tinnitus Retraining Therapy (TRT)
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  TRT combines sound therapy with counseling to help the brain reclassify tinnitus as an unimportant sound. Over time, the brain learns to ignore tinnitus automatically, just like background sounds from a fan.
                </p>
              </div>
            </div>

            {/* Why Al Barakat Advantages */}
            <div className="bg-muted/30 rounded-2xl p-8 border border-muted">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Al Barakat Hearing Centers</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Certified audiologists with tinnitus specialization",
                  "Comprehensive diagnosis using state-of-the-art equipment",
                  "Access to Signia and Rexton tinnitus relief hearing aids",
                  "Personalized therapy programs tailored to everyone"
                ].map((advantage, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Regain Your Focus and Peace of Mind</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our specialized therapy programs are available across Saudi Arabia. Start your journey toward habituation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/booking">Book a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors font-bold">
              <Link href="/contact">Speak to a Specialist</Link>
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