import Image from "next/image";

export default function Header() {
  return (
    <div className="text-5xl z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="bg-gray-500 text-white p-2 rounded">
        <b>UFOP Chatbot</b>
        <p className="text-xs">Desenvolvido por Lucas Barbosa</p>
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

          <Image
            className="rounded-xl bold"
            src="/logo-decom.png"
            alt="Decom Logo"
            width={180}
            height={60}
            priority
          />
      </div>
    </div>
  );
}
