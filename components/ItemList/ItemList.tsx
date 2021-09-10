import React from 'react'
import { NextRouter } from 'next/router'
import { ItemCard } from '../ItemCard'

interface ItemData {
  id: number
  title: string,
  image: string,
  onClick?: () => void
}

interface IParseItem {
  id: number
  title: string
  image?: string
  [key: string]: any
}

interface ItemListProps {
  layout?: 'grid' | 'horizontal' | 'vertical'
  items: ItemData[]
}

export const parseItems = (items: IParseItem[], router: NextRouter, path?: string): ItemData[] => {
  return items.map(({ id, title, image }) => {
    if (!image) image = 'https://via.placeholder.com/150'
    return {
      id, title, image,
      onClick: () => {
        if (path) router.push(`${path}/${id}`)
      }
    }
  })
}

export const ItemList: React.FC<ItemListProps> = ({
  items,
  layout = 'grid'
}) => {

  return (
    <div>
      {items.map(({ id, title, image, onClick }) => (
        <div key={id} onClick={onClick}>
          <ItemCard title={title} img={image} />
        </div>
      ))}
    </div>
  )
}

export default ItemList
