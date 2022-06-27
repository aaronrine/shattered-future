import type { NextPage } from 'next'
import styles from '/styles/Home.module.css'
import BaseHead from '../components/BaseHead'
import Header from '../components/Header'
import Character from '../components/Character'
import Footer from '../components/Footer'
import Link from 'next/link'
import logo from '/assets/ms-icon-310x310.png'


const Home: NextPage = () => {
  return (
    <div className={styles.Home}>
      <BaseHead title='Home' />
      <Header />
      <aside className={styles.Hero}>
        <h1>Welcome to Shattered Future!</h1>
        <p>A webcomic of the apocalypse.</p>
      </aside>
      <main className={styles.Main}>
        <Link href='#' ><a className='navLink'>Read it here</a></Link>
        <article className={styles.about}>
          <h2>About the comic:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Sit amet commodo nulla facilisi nullam. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Tempus iaculis urna id volutpat. Nunc vel risus commodo viverra maecenas. Nunc congue nisi vitae suscipit tellus mauris a diam. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Diam quam nulla porttitor massa id neque aliquam vestibulum. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Porttitor massa id neque aliquam vestibulum. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Rutrum quisque non tellus orci ac auctor augue mauris augue. Pellentesque sit amet porttitor eget dolor morbi non. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Varius vel pharetra vel turpis.</p>
        </article>
        <article>
          <h2>Meet the characters:</h2>
          <Character img={logo} />
          <Character img={logo} />
          <Character img={logo} />
          <Character img={logo} />
          <Character img={logo} />
          <Character img={logo} />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Home
