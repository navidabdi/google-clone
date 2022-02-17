import HeaderOption from './HeaderOption'
import {
  SearchIcon,
  PlayIcon,
  PhotographIcon,
  NewspaperIcon,
  MapIcon,
  DotsVerticalIcon,
} from '@heroicons/react/outline'
const HeaderOptions = () => {
  return (
    <div className="border-b-5 flex w-full justify-between border-b-[2px] pt-7 text-sm text-gray-700 sm:justify-start sm:space-x-5 lg:text-base ">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Video" />
        <HeaderOption Icon={NewspaperIcon} title="New" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className=" flex space-x-4 ">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  )
}

export default HeaderOptions
