import { XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Avatar from '../components/Avatar'
import HeaderOptions from '../components/HeaderOptions'
const SearchHeader = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    console.log(term)
    if (!term) return
    router.push(`/search?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="container">
        <div className="flex w-full items-center pt-5">
          <Image
            src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            height={40}
            width={112}
            className="cursor-pointer "
            onClick={() => router.push('/')}
          />

          <form className="mr-5 ml-10 flex w-full max-w-3xl flex-grow items-center rounded-full border border-gray-200 px-5  py-2 shadow-lg focus-within:shadow-lg ">
            {/* sm:max-w-xl lg:max-w-2xl */}
            <input
              ref={searchInputRef}
              type="text"
              className="w-full flex-grow focus:outline-none"
              defaultValue={router.query.term}
            />
            <XIcon
              className="h-6 transform cursor-pointer text-gray-500 transition duration-100 hover:scale-125 sm:mr-3 "
              onClick={() => (searchInputRef.current.value = '')}
            />
            <MicrophoneIcon className="mr-3 hidden h-6 transform cursor-pointer border-l-2 border-gray-300 pl-4 text-blue-500 transition duration-100 hover:scale-125 sm:inline-flex" />

            <SearchIcon className="hidden h-6 transform cursor-pointer border-l-2 border-gray-300 pl-4 text-blue-500 transition duration-100 hover:scale-125 sm:inline-flex " />
            <button hidden className="btn " onClick={search}>
              {' '}
              Google Search
            </button>
          </form>
          <Avatar
            className="ml-auto"
            url="https://avatars.githubusercontent.com/u/32398454?s=400&u=54c4d8332402eefc950c42093be156ed583b427c&v=4"
          />
        </div>
        {/* Header option component */}
        <HeaderOptions />
      </div>
    </header>
  )
}

export default SearchHeader
