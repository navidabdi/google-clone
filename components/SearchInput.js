import { useRef } from 'react'
import Image from 'next/image'
import googleLogo from '../public/img/google-logo.png'
import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const SearchInput = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }
  return (
    <form className="flex w-5/6 flex-grow flex-col items-center justify-center">
      <Image loading="lazy" src={googleLogo} width="272" height="92" />
      <div className="mt-5 mb-7 flex w-full max-w-md items-center rounded-full border border-gray-200 px-4 transition duration-200 ease-in focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-7 cursor-pointer p-1 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow  p-2 text-lg focus:outline-none"
        />
        <MicrophoneIcon className="h-7 cursor-pointer p-1 text-gray-500" />
      </div>
      <div className="flex  justify-center space-x-2">
        <button onClick={search} className="btn">
          Google Search
        </button>
        <button onClick={search} className="btn">
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  )
}

export default SearchInput
