import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Pure RIC - Signia Hearing Aids | Al-Barakat",
  description: "Discover Signia Pure RIC hearing aids - receiver-in-canal design for comfort and clarity.",
}

export default function PureRICPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Signia Pure RIC</h1>
            <p className="text-lg text-muted-foreground">
              Experience premium hearing with our receiver-in-canal technology designed for natural sound and maximum
              comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <img
                src="/images/Signia-Pure-Charge-Go-AX.png"
                alt="Signia Pure RIC"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold">Product Features</h2>
              <ul className="mb-8 space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Receiver-in-canal design for natural sound quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Discreet and comfortable to wear all day</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Advanced noise reduction technology</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Wireless connectivity to your devices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Long battery life</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button asChild size="lg" className="transition-all hover:scale-105">
                  <Link href="/booking">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all hover:scale-105 bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Advanced Technology</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Noise Reduction</h3>
                <p className="text-muted-foreground">
                  Intelligent algorithms automatically reduce background noise while preserving speech clarity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Connectivity</h3>
                <p className="text-muted-foreground">
                  Seamlessly connect to smartphones, TVs, and other Bluetooth devices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Comfort</h3>
                <p className="text-muted-foreground">
                  Lightweight design with soft earpieces for all-day comfort and stability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Ready to Experience Better Hearing?</h2>
              <p className="mb-6 text-lg opacity-90">
                Schedule a free consultation with our hearing specialists today.
              </p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Book Your Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
