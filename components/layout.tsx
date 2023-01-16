import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Lelouch Vi Britannia (Cong Son Hoang)'
export const siteTitle = 'Xmas-Zone 2023'

export default function Layout({ children, home }: {children: any, home?: any}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/posts">
            ← Back to other posts
          </Link>
        </div>
      )}
    </div>
  )
}