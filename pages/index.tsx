import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Xmas-Zone 2023</title>
        <meta name="description" content="Vietnam Christmas Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            The site is in development, please wait until&nbsp;
            <code className={styles.code}>December 1st, 2023</code>
          </p>
          <div>
            <a
              href="https://www.youtube.com/channel/UCj94ms5ojYZvhL1SHaxpmAA"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/logo.png"
                alt="Xmas-Zone Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className='text-2xl'>Christmas informations all around the world</div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Traditions  <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover Christmas traditions in many countries in the world
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Food & Drinks <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover foods and drinks in many places
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Quiz <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get fun with many Christmas quizs and minigames
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Carols <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Enjoy Christmas carols with us here
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Decorations <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              How to decorate everything in Christmas?
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Countdown <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Christmas is coming... Let&apos;s countdown with us
            </p>
          </a>

          <Link href="/feedback" className={styles.card}>
            <h2 className={inter.className}>
              Feedback <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              We are very appreciate for your feedbacks to improve this site
            </p>
          </Link>

          <Link href="/about-us" className={styles.card}>
            <h2 className={inter.className}>
              About us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              It&apos;s our pleasure to bring Christmas spirit to all of you
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
