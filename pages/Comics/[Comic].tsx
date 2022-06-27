export function Comic() {
  return (
    <div>comic</div>
  )
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        comic: 'hello'
      }
    },
    {
      params: {
        comic: 'world'
      }
    }
  ]
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {}

export default Comic