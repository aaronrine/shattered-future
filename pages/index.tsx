import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shattered Future | Home</title>
        <meta name="description" content="The official home of Shattered Future!" />
        <meta charSet="utf-8" />
        <meta name="author" content="Aaron Rine" />
        <meta name="theme-color" media="(prefer-color-scheme: light)" content="#4285f4" />
        <meta name="theme-color" media="(prefer-color-scheme: dark)" content="#4285f4" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>hello world</p>
      </main>
    </div>
  )
}

export default Home
