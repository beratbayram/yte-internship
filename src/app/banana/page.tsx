import Link from "next/link";

export default function Page() {

  // throw new Error('God Damn!');

  return (
    <main>
      <h1>BANANA 🍌</h1>
      <Link href="/apple" target="_blank" >Go to 🍎</Link>
    </main>
  );
}
