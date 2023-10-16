import Hero from '../components/home/hero'
import Stats from '../components/home/stats'
import Story from '@/components/home/story'
import Action from '@/components/home/action'
import Mission from '@/components/home/mission'
import Teams from '@/components/home/teams'
import Magazine from '@/components/home/magazine'
import Tesmonial from '@/components/home/tesmonials'
import Articles from '@/components/home/articles'
import {getHomeData, infosHome} from '@/lib/graphql/request'


export default async  function Home() {

  const sliders = await getHomeData()
  const {historique} = await infosHome()

  return (
    <section>
      <div className="lg:relative flex flex-col items-center">
        <Hero {...sliders[0]} />
        <Stats />
      </div> 
      <Story data={historique} />
      <Action />
      <Mission />
      <Teams />
      <Magazine />
      <Tesmonial />
      <Articles/>

    </section>
  )
}
