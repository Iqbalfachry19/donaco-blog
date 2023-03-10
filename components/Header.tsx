import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/logo.png"
            width={50}
            className="rounded-full"
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Donaco Blog</h1>
      </div>
      <div>
        <Link href="https://donaco.online" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#00aeef] flex items-center rounded-full text-center" >
            Sign up to Donaco</Link>
      </div>
    </header>
  );
}

export default Header;
