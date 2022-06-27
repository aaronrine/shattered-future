import Image, { StaticImageData } from "next/image"

export function Character({img}:{img:StaticImageData}) {
  return (
    <div>
      <Image src={img} alt='char 1' width={100} height={100}/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, accusantium, vitae eligendi, non asperiores quam accusamus cum repellendus doloribus dicta fugit laborum aut perspiciatis illum neque numquam iusto nesciunt ut.</p>
    </div>
  )
}

export default Character