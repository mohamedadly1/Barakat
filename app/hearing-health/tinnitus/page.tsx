"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ClipboardList, 
  Search, 
  Headphones, 
  Waves, 
  BarChart3, 
  CheckCircle2, 
  Brain, 
  Stethoscope,
  ShieldCheck,
  Baby
} from "lucide-react"

export default function HearingTestPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-primary">
            Understanding Hearing Tests
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            A hearing test is a painless, non-invasive procedure used to measure how well you hear different sounds and speech. At Al Barakat, we use advanced diagnostic technology to provide accurate evaluations across Saudi Arabia.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            
            {/* Why Hearing Tests Matter */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Why Hearing Tests Are Important</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="shrink-0 bg-secondary/10 p-3 rounded-lg h-fit">
                    <Search className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Early Detection</h4>
                    <p className="text-sm text-muted-foreground">Detect problems before they become serious. Hearing loss often develops gradually without being noticed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 bg-secondary/10 p-3 rounded-lg h-fit">
                    <Brain className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Protect Brain Health</h4>
                    <p className="text-sm text-muted-foreground">Research shows untreated hearing loss can contribute to cognitive decline and memory issues.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 bg-secondary/10 p-3 rounded-lg h-fit">
                    <ShieldCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Choose the Right Solution</h4>
                    <p className="text-sm text-muted-foreground">Get suitable recommendations for Signia or Rexton devices customized to your specific profile.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 bg-secondary/10 p-3 rounded-lg h-fit">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Prevent Isolation</h4>
                    <p className="text-sm text-muted-foreground">Avoid the frustration and isolation that comes with untreated communication problems.</p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* How It Works - Step by Step */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">How the Hearing Test Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                  <div className="font-bold text-2xl text-primary/30">01</div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2"><ClipboardList className="h-4 w-4" /> Case History & Consultation</h4>
                    <p className="text-sm text-muted-foreground">Discussing your lifestyle, medical history, and specific hearing concerns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                  <div className="font-bold text-2xl text-primary/30">02</div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2"><Stethoscope className="h-4 w-4" /> Physical Ear Examination</h4>
                    <p className="text-sm text-muted-foreground">Visual inspection of the ear canal and eardrum for any blockages or damage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/10 rounded-xl shadow-sm">
                  <div className="font-bold text-2xl text-primary">03</div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2"><Headphones className="h-4 w-4 text-primary" /> Pure-Tone Audiometry (PTA)</h4>
                    <p className="text-sm text-muted-foreground">The most common test. You'll wear headphones and listen for beeps at different volumes. Results are mapped on an <strong>audiogram</strong>.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                  <div className="font-bold text-2xl text-primary/30">04</div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2"><Waves className="h-4 w-4" /> Tympanometry</h4>
                    <p className="text-sm text-muted-foreground">Testing how your middle ear and eardrum react to air pressure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Tests Table/Grid */}
            <Card className="border-none bg-secondary/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Hearing Assessments We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Comprehensive adult assessments",
                    "Pediatric hearing evaluations",
                    "Tinnitus assessments",
                    "Pre-employment hearing screening",
                    "Noise-induced hearing monitoring",
                    "Hearing aid verification tests"
                  ].map((test, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-secondary/10 last:border-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{test}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interpreting Results */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Interpreting Your Audiogram</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your audiologist will explain your results by showing which frequencies (low to high) are affected and the degree of loss: <strong>Mild, Moderate, Severe, or Profound</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h5 className="font-bold text-sm mb-1">Medical Referral</h5>
                  <p className="text-xs text-muted-foreground">If tests show infections or wax buildup.</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h5 className="font-bold text-sm mb-1">Hearing Solutions</h5>
                  <p className="text-xs text-muted-foreground">Expert fitting for Signia or Rexton hearing aids.</p>
                </div>
              </div>
            </div>

            {/* Why Al Barakat Advantage */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">Why Choose Al Barakat?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-background border rounded-full text-xs font-semibold shadow-sm">Soundproof Testing Rooms</span>
                <span className="px-4 py-2 bg-background border rounded-full text-xs font-semibold shadow-sm">Certified Specialists</span>
                <span className="px-4 py-2 bg-background border rounded-full text-xs font-semibold shadow-sm">Free Initial Consultation</span>
                <span className="px-4 py-2 bg-background border rounded-full text-xs font-semibold shadow-sm flex items-center gap-2"><Baby className="h-3 w-3"/> Pediatric Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Accurate Hearing Care Across the KSA</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our clinics are conveniently located in Riyadh, Jeddah, and across Saudi Arabia. Book your diagnostic assessment today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/booking">Book a Clinic Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors font-bold">
              <Link href="/hearing-test">Free Online Evaluation</Link>
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