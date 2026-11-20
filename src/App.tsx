import { Adopters } from './components/Adopters.tsx'
import { Footer } from './components/Footer.tsx'
import { Frieze } from './components/Frieze.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { Members } from './components/Members.tsx'
import { Principles } from './components/Principles.tsx'
import { Programs } from './components/Programs.tsx'
import { WhySetMaat } from './components/WhySetMaat.tsx'
import { Work } from './components/Work.tsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Frieze />
        <WhySetMaat />
        <Principles />
        <Programs />
        <Frieze thin />
        <Work />
        <Adopters />
        <Frieze thin />
        <Members />
      </main>
      <Footer />
    </>
  )
}
