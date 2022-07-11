import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const Post = () => {
  const router = useRouter()

  return (
    <main>
      <div className={styles.card}>
        <h2>Post - {router.query.slug} &rarr;</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet minus
          odit necessitatibus nostrum doloribus ratione minima quam, repellendus
          excepturi saepe voluptatibus mollitia eveniet quod odio quaerat
          dolores repellat quos enim?
        </p>
      </div>
      <h1 className={styles.title}>
        Go back <a href="/">Home!</a>
      </h1>
      <h1 className={styles.title}>
        Go back <Link href="/">Blog!</Link>
      </h1>
    </main>
  )
}

export default Post
