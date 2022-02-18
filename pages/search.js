import Head from 'next/head'
import Response from '../Response'
import SearchHeader from '../components/SearchHeader'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'
const Search = ({ results }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <SearchHeader />
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const CONTEXT_KEY = process.env.NEXT_PUBLIC_CONTEXT_KEY
  const useDummyData = false
  const startIndex = context.query.start || '0'

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json())

  //After the server has rendered .... Pass the results to the client ...

  return {
    props: {
      results: data,
    },
  }
}
