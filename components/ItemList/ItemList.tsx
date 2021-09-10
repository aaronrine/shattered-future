import React from 'react'
import { ItemCard } from '../ItemCard'

interface ItemData {
  id: number
  title: string,
  image: string,
  onClick?: () => void
}

interface ItemListProps {
  layout: 'grid' | 'horizontal' | 'vertical'
  items: ItemData[]
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
