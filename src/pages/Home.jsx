import Hero from '../components/sections/Hero'
import Identity from '../components/sections/Identity'
import Projects from '../components/sections/Projects'
import Results from '../components/sections/Results'
import Process from '../components/sections/Process'
import Stack from '../components/sections/Stack'
import Creative from '../components/sections/Creative'
import Gallery from '../components/sections/Gallery'
import Timeline from '../components/sections/Timeline'
import Testimonials from '../components/sections/Testimonials'
import CurrentlyBuilding from '../components/sections/CurrentlyBuilding'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Identity />
      <Projects />
      <Results />
      <Process />
      <Stack />
      <Creative />
      <Gallery />
      <Timeline />
      <Testimonials />
      <CurrentlyBuilding />
      <FAQ />
      <FinalCTA />
    </>
  )
}
