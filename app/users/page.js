"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import GetUsers from "/services/getUsers";
import Link from "next/link";

export default function Page() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function Data() {
      const users = await GetUsers();
      setUserList(users);
    }

    Data();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, user) => <Link href={`/users/${user.id}`}>{text}</Link>,
    },
  ];

  return (
    <div>
      <h1 >Users List</h1>
      <Table dataSource={userList} columns={columns} />
    </div>
  );
}
