import Head from 'next/head';
import Header from '../components/Header';
import News from '../components/News';
import NewProjects from '../components/NewProjects';
import Popular from '../components/Popular';
import SendNovel from '../components/SendNovel';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

import Data from '../Datas/CardsToCarousel.json'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Novel Mania • Light Novels e Webnovels em português</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand&display=swap" rel="stylesheet"/> 
      </Head>
      <main>
        <Header/>
        <News/>
        <Carousel
          title='Novidades'
          data={Data.news}
        />
        <Carousel
          title='Em alta'
          data={Data.popular}
        />
        <NewProjects/>
        <Popular/>
        <Carousel
          title='Original Novel Mania'
          data={Data.original}
        />
        <Carousel
          title='Recomendações'
          data={Data.recommendation}
        />
        <SendNovel/>
        <Footer/>
      </main>
    </div>
  )
}

export default Home
