import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { ItemList, parseItems } from '../components/ItemList'

const fetcher = url => fetch(url).then(r => r.json())

export const HomePage: NextPage = () => {
  const router = useRouter()
  const { data } = useSWR('/api/shows', fetcher)
  const loading = data === undefined
  
  if (loading) return <div data-testid='loading'>Loading...</div>
  
  const items = parseItems(data, router, '/show')
  return <ItemList items={items} />
}

export default HomePage
