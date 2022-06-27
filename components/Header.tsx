import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'
import logo from '../assets/ms-icon-310x310.png'

export function Header() {
  return (
    <>
      <Link href='#'><a className={styles.backToTop}>^</a></Link>
      <header className={styles.Header} id='top'>
        <Link href='/' className={styles.logo}><a><Image src={logo} alt='Home' width={40} height={40}/></a></Link>
        <nav className={styles.nav}>
          <Link href='/Comics' ><a className='navLink'>All Pages</a></Link>
        </nav>
      </header>
    </>
  )
}

export default Header