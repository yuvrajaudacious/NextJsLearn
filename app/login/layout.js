import Link from "next/link";
import "./login.css";
export default function Layout({ children }) {
  return (
    <div>
      <ul className="login-main">
        <li>
          <h4 className='heading'>
          Login NavBar
          </h4>
        </li>
        <li>
          <Link href="/login">Login Main</Link>{" "}
        </li>
        <li>
          <Link href="/login/loginstudent">Login Student</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/login/loginteacher">Login Teacher</Link>{" "}
        </li>
      </ul>
      {children}
    </div>
  );
}
