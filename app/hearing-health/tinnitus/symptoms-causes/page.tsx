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
  HeartPulse
} from "lucide-react"

export default function TinnitusTherapyPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Tinnitus Therapy & Management
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            While there is no "cure-all" pill for tinnitus, it is highly treatable. 
            At Al Barakat Hearing Centers, we provide personalized therapy plans designed to 
            retrain your brain and reduce the impact of phantom sounds.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            
            {/* Treatment Philosophy */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">How Therapy Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                The goal of tinnitus therapy is <strong>habituation</strong>—teaching your brain to 
                classify the tinnitus sound as "background noise" (like a ceiling fan) so you no 
                longer notice it.
              </p>
            </div>

            

[Image of the neural pathways from the ear to the brain's auditory cortex]


            {/* Core Therapy Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                    <Music className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Sound Masking Therapy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Uses external sounds—like white noise, ocean waves, or soft tones—to make the 
                    internal ringing less noticeable. This provides immediate relief and helps the 
                    brain focus elsewhere.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Tinnitus Retraining Therapy (TRT)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A combination of low-level sound therapy and counseling. TRT aims to change the 
                    emotional response to tinnitus, reducing stress and anxiety levels.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Advanced Technology Section */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Signia & Rexton Solutions</h2>
                  <p className="text-muted-foreground">
                    Modern hearing aids are the most effective tool for tinnitus. 
                    <strong> Al Barakat Hearing Centers</strong> offer premium Signia and Rexton 
                    models with built-in tinnitus therapy features:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Static Noise & Ocean Wave masking",
                      "Notch Therapy (exclusive to Signia)",
                      "Smartphone app control for custom therapy",
                      "Bluetooth streaming for relaxing sounds"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-square bg-white rounded-2xl shadow-inner flex items-center justify-center p-8">
                   <div className="text-center">
                      <Sparkles className="h-12 w-12 text-secondary mx-auto mb-4" />
                      <p className="font-bold text-primary">AI-Powered Notch Therapy</p>
                      <p className="text-xs text-muted-foreground mt-2">Targeted treatment that "hides" the tinnitus sound frequency.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Lifestyle & Management Tips */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <HeartPulse className="text-primary" />
                At-Home Management Tips
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-6 bg-background border rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                  <Headphones className="h-6 w-6 text-secondary mb-3" />
                  <h4 className="font-bold text-sm mb-1">Avoid Silence</h4>
                  <p className="text-xs text-muted-foreground">Keep background music or a fan on to prevent the brain from seeking internal sounds.</p>
                </div>
                <div className="p-6 bg-background border rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                  <Mic2 className="h-6 w-6 text-secondary mb-3" />
                  <h4 className="font-bold text-sm mb-1">Stress Control</h4>
                  <p className="text-xs text-muted-foreground">Tinnitus often worsens during stress. Practice deep breathing or yoga.</p>
                </div>
                <div className="p-6 bg-background border rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                  <Ear className="h-6 w-6 text-secondary mb-3" />
                  <h4 className="font-bold text-sm mb-1">Protect Hearing</h4>
                  <p className="text-xs text-muted-foreground">Use earplugs in loud environments to prevent further sensitivity.</p>
                </div>
              </div>
            </div>

            {/* Specialist Guidance */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">The First Step is a Tinnitus Audit</h2>
                <p className="opacity-90 mb-6">
                  Every patient's tinnitus is unique. Our specialists across Riyadh, Jeddah, 
                  and all our branches in Saudi Arabia will identify your specific "pitch" 
                  and match it with the correct therapy sound.
                </p>
                <Button asChild size="lg" variant="secondary" className="font-bold">
                  <Link href="/booking">Schedule Your Tinnitus Audit</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-muted py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience World-Class Hearing Care</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/contact">Contact Our Specialists</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/booking">Book a Clinic Visit</Link>
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