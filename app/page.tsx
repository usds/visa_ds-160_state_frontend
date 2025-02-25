import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h1 className="text-4xl font-bold">U.S. Department of State</h1>
        <h2 className="text-2xl font-bold">Consular Electronic Application Center</h2>
        <div className="flex justify-center">
          <Image src="/images/ca-logo.png" alt="DOS Logo" width={100} height={100} />
        </div>
        <Link href="/user-form">
          <button className="bg-blue-500 text-black px-4 py-2 rounded mt-4">Enter</button>
        </Link>
      </div>
    </div>
  );
}