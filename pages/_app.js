import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <!-- Favicon--> */}
        <link rel='icon' href='./logo.ico' />

        {/* <!-- Mobile Specific Meta --> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />

        {/* <!-- Author Meta --> */}
        <meta name='description' content='Portfolio app' />

        <title>Portfolio</title>
        <meta property='og:title' content='Portfolio' key='title' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
