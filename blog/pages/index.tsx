import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Blog With Multi Zones</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/blog/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Blog!</Link>
        </h1>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>Go Home &rarr;</h2>
            <p>Click here and go home on our other Next.js app :D</p>
          </a>

          <Link href="/posts/it-works" passHref>
            <a href="/blog/posts/it-works" className={styles.card}>
              <h2>Go to It Works post &rarr;</h2>
              <p>Click here and go to the It Works post</p>
            </a>
          </Link>

          <Link href="/posts/hello-hello" passHref>
            <a href="/blog/posts/hello-hello" className={styles.card}>
              <h2>Go to Hello post &rarr;</h2>
              <p>Click here and go to the Hello Hello post</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/blog/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Blog
