"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "antd";
import "./login.css";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const path = usePathname();
  console.log(path);

  return (
    <div>
      {path !== "/login/loginstudent" ? (
        <Menu theme="dark" mode="horizontal" className="login-main">
          <Menu.Item key="main">
            <Link href="/login">Login Main</Link>
          </Menu.Item>
          <Menu.Item key="student">
            <Link href="/login/loginstudent">Login Student</Link>
          </Menu.Item>
          <Menu.Item key="teacher">
            <Link href="/login/loginteacher">Login Teacher</Link>
          </Menu.Item>
        </Menu>
      ) : null}
      {children}
    </div>
  );
};

export default Layout;
