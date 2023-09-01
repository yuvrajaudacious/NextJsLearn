"use client";
import Link from "next/link";
import { Button, Menu } from "antd";

import { useRouter } from "next/navigation";
import { Header } from "antd/es/layout/layout";

const page = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item href="/" key="1">
            <Link href="/login"> Home </Link>
          </Menu.Item>
          <Menu.Item href="/login" key="2">
            <Link href="/login"> Login </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/about"> About </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/ProductList">ProductList</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/Study">Study</Link>
          </Menu.Item>{" "}
          <Menu.Item key="6">
            <Link href="/StudentList">StudentList</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link href="/ServerPList">Server List</Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link href="/Location">Location</Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link href="/User">User</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default page;
