import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
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
        <div className={styles.description}>
          <p>
            Susdeck v3,
            <code className={styles.code}> Companion v2</code>
          </p>
          <div>
            <a
              href="#"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/test.png"
                alt="Roizor"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={inter.className}>Try It</h1>
        </div>
        <div className={styles.center}>
          <h2 className={inter.className}>This is how you can try Susdeck.</h2>
        </div>

        <p className={inter.className}>Welcome to susdeck.</p>
      </main>
    </>
  )
}
