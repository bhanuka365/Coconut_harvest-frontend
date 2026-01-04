import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
         <Link href="/login-as-harvester">
         continue as havester
         </Link>
    </div>
  );
}
