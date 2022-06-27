import type {NextPage} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Comics.module.css'
import BaseHead from '../components/BaseHead'
import Header from '../components/Header'
import Footer from '../components/Footer'
import comic1 from '../assets/images/page_x-_prologue_1.png'
import comic2 from '../assets/images/page_x-_prologue_2.png'

const TEMP_DATA = [
  {src: comic1, alt: 'hello'},
  {src: comic2, alt: 'world'}
]

export const Comics: NextPage = () => {
  return (
    <>
      <BaseHead title='Comics' />
      <Header />
      <main className={styles.Comics}>
        {TEMP_DATA.map((comic, idx) => (
          <Link href='#' key={idx}>
            <a className={styles.thumbContainer}>
              <Image className={styles.thumb} src={comic.src} alt={comic.alt} width={100} height={100} />
            </a>
          </Link>
        ))}
      </main>
      <Footer />
    </>
  )
}

export default Comics