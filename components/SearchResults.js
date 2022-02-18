import PaginationButtons from '../components/PaginationButtons'
const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 ">
      <p className="text-md mb-5 mt-3 text-gray-600  ">
        About {results.searchInformation?.formattedTotalResults} results(
        {results.searchInformation?.formattedSearchTime} seconds )
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group">
            <a href={result.link} className="text-sm">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="truncate text-[1.1rem] font-medium text-blue-800 group-hover:underline">
                {result.title}
              </h2>
            </a>

            <p className="text-sm text-gray-500 line-clamp-2">
              {result.snippet}
            </p>
          </div>
        </div>
      ))}
      <PaginationButtons />
    </div>
  )
}

export default SearchResults
