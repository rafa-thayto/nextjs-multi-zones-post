import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <p>Our Home Page :D</p>
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <a href="/blog/post/hello-world">Hello World Post</a>
      </div>
      <div>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
