import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/calendar">
        <i className="fa-solid fa-calendar-days fa-xl"></i>
      </Link>
      <Link href="/signin">Signin</Link>
      <Link href="/landing">fly</Link>
      <Link href="/borad">mama</Link>
    </>
  );
}
