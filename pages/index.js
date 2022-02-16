import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div class="container">
        <header className="flex w-full justify-between py-5 text-sm text-gray-700">
          {/* Left */}

          <div className="flex items-center space-x-4">
            <p>About</p>
            <p>Store</p>
          </div>

          {/* Right */}

          <div className="flex items-center space-x-4">
            <p>Gmail</p>
            <p>Image</p>

            {/* Icons */}

            {/* Avatar */}
          </div>
        </header>
      </div>
    </>
  )
}
