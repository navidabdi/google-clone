import Image from 'next/image'
import googleLogo from '../public/img/google-logo.png'
import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
const SearchInput = () => {
  return (
    <form className="flex w-5/6 flex-grow flex-col items-center justify-center">
      <Image loading="lazy" src={googleLogo} width="272" height="92" />
      <div className="mt-5 mb-7 flex w-full max-w-md items-center rounded-full border border-gray-200 px-4 transition duration-200 ease-in focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-7 cursor-pointer p-1 text-gray-500" />
        <input
          type="text"
          className="flex-grow  p-2 text-lg focus:outline-none"
        />
        <MicrophoneIcon className="h-7 cursor-pointer p-1 text-gray-500" />
      </div>
      <div className="flex  justify-center space-x-2">
        <button className="btn">Google Search</button>
        <button className="btn">I'm Feeling Lucky</button>
      </div>
    </form>
  )
}

export default SearchInput
