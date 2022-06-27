import Head from "next/head"

export function BaseHead({title}:{title:string}) {
  return (
    <Head>
      <title>Shattered Future | {title}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default BaseHead