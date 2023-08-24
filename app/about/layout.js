import Link from "next/link";
import "./about.css";
export default function Layout({ children }) {
  return (
    <div>
      <ul className="login-main">
        <li>
          <h4 className='heading'>
          About NavBar
          </h4>
        </li>
        <li>
        </li>
        <li>
          <Link href="/about/aboutstudent">About Student</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/about/aboutclg">About Clg</Link>{" "}
        </li>
      </ul>
      {children}
    </div>
  );
}
