import Head from 'next/head'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Susdeck</title>
        <meta name="description" content="Susdeck is love. Susdeck is life. Susdeck is not a Stream Deck." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>Redirecting you to Susdeck&#39;s GitHub repo. Give us a second</h1>
        <Script id="redir">
        window.location.href = "https://github.com/Susdeck/Susdeck"
        </Script>
      </main>
    </>
  )
}
