import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Motion - Signia Hearing Aids | Al-Barakat",
  description: "Discover Signia Motion hearing aids - powerful, comfortable, and perfect for active lifestyles.",
}

export default function MotionPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Signia Motion</h1>
            <p className="text-lg text-muted-foreground">
              Power and performance combined. Perfect for active lifestyles and demanding hearing needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <img
                src="/images/SIGNIA_MOTION_X.jpg"
                alt="Signia Motion"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold">Built for Activity</h2>
              <ul className="mb-8 space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Rugged design for active lifestyles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Superior water and dust resistance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Powerful amplification for greater hearing loss</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Extended battery life</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Easy handling and operation</span>
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

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Performance Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Durability</h3>
                <p className="text-muted-foreground">
                  Built to withstand sweat, moisture, and active use throughout the day.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Power</h3>
                <p className="text-muted-foreground">Superior amplification to handle even severe hearing loss.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Battery</h3>
                <p className="text-muted-foreground">Extended battery life keeps you connected all day long.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Get Active Again</h2>
              <p className="mb-6 text-lg opacity-90">
                Discover how Signia Motion can fit your lifestyle. Schedule a free consultation.
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
