import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#00aeef] flex item-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#00aeef] mr-2" />
          Go to Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#00aeef]">
          <h1 className="font-bold text-white">Want to do donation?</h1>
          <Link
            href="https://donaco.online"
            className="text-[#00aeef] font-bold ml-2"
          >
            donaco.online
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
