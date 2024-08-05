import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-lg font-semibold">
      <span className="">Nobounce</span>
      <span className="text-secondary">Mail</span>
    </Link>
  );
}
