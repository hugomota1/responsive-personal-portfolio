import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { id: 1, name: "Página Incial", route: "#home" },
  { id: 2, name: "Sobre mim", route: "#about" },
  { id: 3, name: "Portfolio", route: "#portfolio" },
  { id: 4, name: "eBook", route: "#ebook" },
  { id: 5, name: "Contate-me", route: "#contact" },
];

export default function Header() {
  return (
    <header className="z-10 max-w-5xl w-full items-center justify-center font-mono text-lg">
      <nav className="fixed left-0 top-0 flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <a
          className="flex gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{""}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
        <ul className="flex gap-8 max-md:hidden">
          {navLinks.map((link) => (
            <Link
              href={link.route}
              key={link.id}
              className="hover:underline hover:text-pink-400 transition-all duration-500"
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
