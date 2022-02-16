import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
      </Head>

      {/* Header */}
      <div class="container">
        <Header />
      </div>
    </>
  )
}
