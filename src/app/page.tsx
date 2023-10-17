import Hero from '../components/home/hero'
import Stats from '../components/home/stats'
import Story from '@/components/home/story'
import Action from '@/components/home/action'
import Mission from '@/components/home/mission'
import Teams from '@/components/home/teams'
import Magazine from '@/components/home/magazine'
import Tesmonial from '@/components/home/tesmonials'
import Articles from '@/components/home/articles'
import { getHomeData } from '@/lib/graphql/requests/home'


export const dynamic = 'force-dynamic'


export default async function Home() {

  const { historique, infos, heroSliders, homeActions, missions, homeTeams, homeMagazine, homeTemoignage, homePosts } = await getHomeData()

  return (
    <section>
      <div className="lg:relative flex flex-col items-center">
        <Hero {...heroSliders[0]} />
        <Stats data={infos} />
      </div>
      <Story data={historique} />
      <Action data={homeActions} />
      <Mission data={missions} />
      <Teams data={homeTeams} />
      <Magazine data={homeMagazine} />
      <Tesmonial data={homeTemoignage} />
      <Articles data={homePosts} />
    </section>
  )
}
