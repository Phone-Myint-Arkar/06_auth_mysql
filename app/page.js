import Link from "next/link";

// home page: links to every page in the project
export default function Home() {
  return (
    <div className="auth-box">
      <div className="avatar">PA</div>
      <h1>Phone Myint Arkar</h1>
      <p>Auth Demo with Next.js and MySQL</p>
      <span className="badge">Student ID · 6807870</span>

      <div className="divider" />

      <ul className="menu">
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/dashboard">
            Dashboard <small>members only</small>
          </Link>
        </li>
      </ul>
    </div>
  );
}
