import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { QuickStart } from '@/components/QuickStart'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <QuickStart />
      </main>
    </div>
  )
}