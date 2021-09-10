import React from 'react'
import Image from 'next/image'

interface ItemCardProps {
  primary?: boolean,
  size?: 'small' | 'medium' | 'large'
  title: string
  img: string
}

export const ItemCard: React.FC<ItemCardProps> = ({
  title,
  img,
  size = 'medium',
  primary = false,
}) => {
  return (
    <div>
      <Image alt={title} src={img} height={150} width={150} />
      <p>{title}</p>
    </div>
  )
}

export default ItemCard
