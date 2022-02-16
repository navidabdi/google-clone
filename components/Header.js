import Avatar from '../components/Avatar'

import { MicrophonIcon, ViewGridIcon } from '@heroicons/react/solid'
const Header = () => {
  return (
    <header className="flex w-full justify-between py-5 text-sm text-gray-700">
      {/* Left */}

      <div className="flex items-center space-x-4">
        <p>About</p>
        <p>Store</p>
      </div>

      {/* Right */}

      <div className="flex items-center space-x-4">
        <p>Gmail</p>
        <p>Images</p>

        {/* Icons */}
        <ViewGridIcon className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100" />
        {/* Avatar */}
        <Avatar url="https://avatars.githubusercontent.com/u/32398454?s=400&u=54c4d8332402eefc950c42093be156ed583b427c&v=4" />
      </div>
    </header>
  )
}

export default Header
