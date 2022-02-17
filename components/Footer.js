import { PencilIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 text-sm">
      <div className="py-3">
        <p>United States</p>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-1 gap-y-2 py-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-center space-x-1 md:col-span-2 lg:col-span-1 lg:col-start-2 ">
          <PencilIcon className="h-5 text-gray-900" />
          <p>Designed By Navid Dev</p>
        </div>

        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="link">Advertising</p>
          <p className="link">Business</p>
          <p className="link">How Search works</p>
        </div>

        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
