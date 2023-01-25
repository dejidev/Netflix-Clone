import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import { Movies } from '../interface';
import requests from '../utils/request';

export interface Props {
  netflixOriginals: Movies[]
  trendingNow: Movies[]
  topRated: Movies[]
  actionMovies: Movies[]
  comedyMovies: Movies[]
  horrorMovies: Movies[]
  romanceMovies: Movies[]
  documentaries: Movies[]
}

const Home = ({ 
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow, }: Props) => {

  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#011511] lg:h-[140vh]'>
      {/* className="flex min-h-screen flex-col items-center justify-center py-2" */}
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner netflixOriginals={netflixOriginals}/>
      </main>

      <section>
        {/* Row */}
        {/* Row */}
        {/* Row */}
        {/* Row */}
        {/* Row */}
        {/* Row */}
      </section>
      {/* Modal */}
    </div>
  )
}

export default Home


export const getServerSideProps = async () => {

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}