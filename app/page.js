"use client";
import Link from "next/link";
import { Button } from "antd";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div>
      <ul className="login-main">
        <li>
          <Link href="/login">Go to Login page</Link>
        </li>
        <li>
          <Link href="/about">Go to About page</Link>
        </li>
      </ul>
      <h1 className="heading"> Home Page </h1>
      <Link href="/ProductList">ProductList</Link>
      <br/>
      <br/>
      <br/>
      <br/>

      <Link href="/ServerPList">ServerPList </Link>

    </div>
  );
};

export default page;
