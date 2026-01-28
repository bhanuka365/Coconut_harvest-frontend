import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-dvh bg-green-100 text-gray-900 flex flex-col gap-5 justify-center items-center font-sans text-sm">
      <h1 className="inline-block bg-gradient-to-r from-gray-700 via-green-600 to-yellow-200 text-transparent bg-clip-text text-5xl lg:text-9xl font-bold">
        404
      </h1>
      <h2 className="font-bold text-gray-700">Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800"
      >
        Go to main
      </Link>
    </div>
  );
}
