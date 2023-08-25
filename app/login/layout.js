"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      {path !== "/login/loginstudent" ? (
        <ul className="login-main">
          <li>
            <h4 className="heading">Login NavBar</h4>
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
      ) : null}
      {children}
    </div>
  );
}
