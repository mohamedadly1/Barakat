"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  AlertCircle, 
  Clock, 
  VolumeX, 
  Stethoscope, 
  Baby, 
  Pill, 
  ShieldAlert, 
  Zap,
  CheckCircle2
} from "lucide-react"

export default function CausesOfHearingLossPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Causes of Hearing Loss
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hearing loss can affect anyone—from newborns to older adults—and it can happen suddenly or gradually. 
            Understanding the cause is the first step toward the right treatment.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            
            {/* Overview Card */}
            <div className="rounded-2xl bg-primary/5 p-8 border border-primary/10">
              <p className="text-lg leading-relaxed text-foreground/80">
                At <strong>Al Barakat Hearing Centers</strong>, our audiologists across the Kingdom of Saudi Arabia 
                use advanced diagnostics to identify if your hearing loss is caused by earwax buildup, 
                infections, or permanent inner-ear damage. We specialize in solutions like 
                <strong> Signia</strong> and <strong>Rexton</strong> digital hearing aids.
              </p>
            </div>

            {/* Causes Grid */}
            <div className="grid gap-8">
              {/* 1. Age-Related */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-primary">
                    <Clock className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">1. Age-Related (Presbycusis)</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Natural deterioration of tiny hair cells in the cochlea. Once damaged, they cannot regenerate, 
                    leading to gradual, permanent loss, typically after age 50.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg italic text-sm">
                    <strong>Solution:</strong> We recommend Signia and Rexton aids for their natural sound clarity.
                  </div>
                </CardContent>
              </Card>

              {/* 2. Noise-Induced */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-primary">
                    <VolumeX className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">2. Noise-Induced Hearing Loss</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Entirely preventable. Repeated exposure to loud music, machinery, or sirens damages 
                    the cochlea. Tinnitus (ringing) is often the first warning sign.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Use custom protection</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Limit volume to 60%</li>
                  </ul>
                </CardContent>
              </Card>

              {/* 3. Infections & Fluid */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-primary">
                    <Stethoscope className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">3. Ear Infections and Fluid Build-Up</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Common in children due to shorter Eustachian tubes. Fluid blocks sound vibrations. 
                    While often temporary, chronic cases may require medical drainage or hearing aids to recover clarity.
                  </p>
                </CardContent>
              </Card>

              {/* 4. Genetic */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-primary">
                    <Baby className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">4. Genetic or Congenital</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Inherited conditions or pregnancy complications. Early newborn screening is critical 
                    to detect issues in infants and provide pediatric hearing solutions early.
                  </p>
                </CardContent>
              </Card>

              {/* 5. Medications */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-primary">
                    <Pill className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">5. Ototoxic Medications</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Certain antibiotics, chemotherapy drugs, or high doses of aspirin can damage the inner ear. 
                    Watch for sudden changes or balance issues if taking these.
                  </p>
                </CardContent>
              </Card>

              {/* 6. Physical Trauma */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-primary">
                    <ShieldAlert className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">6. Physical Trauma or Head Injury</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Skull fractures or rapid pressure changes (barotrauma) can injure ear bones or nerves. 
                    Immediate medical attention is vital for sudden hearing loss after injury.
                  </p>
                </CardContent>
              </Card>

              {/* 7. Sudden Loss */}
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-destructive">
                    <Zap className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">7. Sudden Sensorineural Hearing Loss (SSHL)</h2>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>A Medical Emergency.</strong> If hearing loss happens suddenly without an identifiable cause, 
                    seek immediate treatment to prevent permanent damage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Expert Care Across Saudi Arabia</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our centers provide comprehensive tests, ear cleaning, and Signia/Rexton digital hearing aids with AI.
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