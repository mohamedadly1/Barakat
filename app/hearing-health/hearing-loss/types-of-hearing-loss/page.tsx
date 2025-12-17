"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Ear, 
  AudioLines,
  Zap, 
  Combine, 
  Activity, 
  CheckCircle2, 
  Stethoscope,
  Info
} from "lucide-react"

export default function TypesOfHearingLossPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Types of Hearing Loss
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hearing loss isn’t the same for everyone. The type determines how sound is affected, 
            which part of the ear is involved, and what treatment options are best.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            
            {/* Introductory Note */}
            <div className="flex gap-4 p-6 bg-secondary/5 rounded-xl border border-secondary/20">
              <Info className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">
                At <strong>Al Barakat Hearing Centers</strong>, our audiologists across Saudi Arabia carefully diagnose the degree of loss using advanced technology to recommend solutions like <strong>Signia</strong> and <strong>Rexton</strong> hearing aids.
              </p>
            </div>

            

[Image of the anatomy of the human ear showing outer, middle, and inner ear sections]


            {/* 1. Conductive Hearing Loss */}
            <div id="conductive" className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <AudioLines className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">1. Conductive Hearing Loss</h2>
              </div>
              <Card className="border-none shadow-md overflow-hidden">
                <CardContent className="p-8">
                  <p className="text-lg mb-6">Occurs when sound waves cannot travel efficiently through the <strong>outer or middle ear</strong>. Sound is blocked before it reaches the inner ear.</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-primary mb-3 underline decoration-secondary">Common Causes</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Earwax blockage (cerumen)</li>
                        <li>• Fluid behind the eardrum</li>
                        <li>• Ear infections (otitis media)</li>
                        <li>• Eardrum perforation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Symptoms</h4>
                      <p className="text-sm text-muted-foreground italic">Muffled sounds, feeling of "fullness" in ears, or hearing your own voice louder than usual.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 2. Sensorineural Hearing Loss */}
            <div id="sensorineural" className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Zap className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">2. Sensorineural Hearing Loss (SNHL)</h2>
              </div>
              <Card className="border-none shadow-md overflow-hidden bg-primary/5 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <p className="text-lg mb-6">The most common and permanent form. It happens due to damage in the <strong>inner ear (cochlea)</strong> or the auditory nerve.</p>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold">Key Factors:</h4>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="p-3 bg-background rounded border border-primary/10">Aging (Presbycusis)</div>
                      <div className="p-3 bg-background rounded border border-primary/10">Noise Exposure</div>
                      <div className="p-3 bg-background rounded border border-primary/10">Ototoxic Medications</div>
                      <div className="p-3 bg-background rounded border border-primary/10">Genetic Factors</div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm">
                      <strong>The Al Barakat Advantage:</strong> We use Signia and Rexton technology featuring AI adaptation and Bluetooth connectivity to restore clarity to distorted speech.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 3. Mixed Hearing Loss */}
            <div id="mixed" className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Combine className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">3. Mixed Hearing Loss</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A combination of both conductive and sensorineural components. For example, a person may have age-related loss (SNHL) while also suffering from a temporary blockage like earwax or fluid (Conductive).
              </p>
            </div>

            {/* 4. Auditory Neuropathy */}
            <div id="neuropathy" className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Activity className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">4. Auditory Neuropathy (ANSD)</h2>
              </div>
              <Card className="border-dashed border-2">
                <CardContent className="p-6">
                  <p className="text-sm italic text-muted-foreground">
                    Inner ear detects sound, but the nerve fails to send signals properly to the brain. Often seen in premature births or genetic conditions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Why It Matters */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Why Knowing Your Type Matters</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Correct Treatment", "Prevent Damage", "Better Tech Choice", "Improved Life"].map((text, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="text-xs font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Expert Diagnosis for Better Hearing</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our specialists perform Pure-tone audiometry, Speech testing, and OAE for infants to ensure a perfect diagnosis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/hearing-test">Free Online Evaluation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors font-bold">
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