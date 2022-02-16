import Head from 'next/head'

import Header from '../components/Header'
import SearchInput from '../components/SearchInput'

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
      </Head>
      <div class="container flex min-h-full flex-grow flex-col justify-between">
        <Header />
        <SearchInput />
      </div>
    </>
  )
}
