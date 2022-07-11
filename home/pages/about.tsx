import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div>
      <p>About us :O</p>
      <hr />
      <div>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </div>
    </div>
  )
}

export default About
