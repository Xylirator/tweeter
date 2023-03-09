import Image from "next/Image";
import { EllipsisHorizontalIcon, HomeIcon } from "@heroicons/react/24/solid";
import SidebarLink from "./SidebarLink";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ListBulletIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:item-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="/twitter-icon-svg-28.jpg" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ListBulletIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>
      <button className="text-white hidden xl:inline ml-auto bg-[#1d9bf0] rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8] ">
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5">
        <img
          src="https://yt3.ggpht.com/yti/AHXOFjVEzGBrRr_in2P3gy4VNhGNe0p2UkuyyOI8i1K3=s88-c-k-c0x00ffffff-no-rj-mo"
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">test</h4>
          <p className="text-[#6e767d]">Manaager</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
