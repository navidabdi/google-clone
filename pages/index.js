import Head from 'next/head'

import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
      </Head>
      <div className="container flex min-h-screen flex-grow flex-col items-center justify-between">
        <Header />
        <SearchInput />
        <Footer />
      </div>
    </>
  )
}
