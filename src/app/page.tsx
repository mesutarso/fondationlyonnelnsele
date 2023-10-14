import Hero from '../components/home/hero'
import Stats from '../components/home/stats'
import Story from '@/components/home/story'
import Action from '@/components/home/action'
import Mission from '@/components/home/mission'
import Teams from '@/components/home/teams'
import Magazine from '@/components/home/magazine'
import Tesmonial from '@/components/home/tesmonials'
import Articles from '@/components/home/articles'


export default function Home() {
  return (
    <section>
      <div className="lg:relative flex flex-col items-center">
        <Hero />
        <Stats />
      </div>
      <Story />
      <Action />
      <Mission />
      <Teams />
      <Magazine />
      <Tesmonial />
      <Articles/>

    </section>
  )
}
