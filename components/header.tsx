import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="container">
      <div className="flex items-center justify-between border-b py-4">
        <Link className="flex font-black uppercase" href="/">
          <Image alt="default logo" src="logo.svg" width={50} height={50} />
        </Link>
        <div className="flex items-center justify-between gap-2">
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-6 w-6"
              viewBox="0 0 32 32"
            >
              <path d="M 16.003906 14.0625 L 16.003906 18.265625 L 21.992188 18.265625 C 21.210938 20.8125 19.082031 22.636719 16.003906 22.636719 C 12.339844 22.636719 9.367188 19.664063 9.367188 16 C 9.367188 12.335938 12.335938 9.363281 16.003906 9.363281 C 17.652344 9.363281 19.15625 9.96875 20.316406 10.964844 L 23.410156 7.867188 C 21.457031 6.085938 18.855469 5 16.003906 5 C 9.925781 5 5 9.925781 5 16 C 5 22.074219 9.925781 27 16.003906 27 C 25.238281 27 27.277344 18.363281 26.371094 14.078125 Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
