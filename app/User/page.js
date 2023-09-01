"use client";
import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Loading from "./loading";
async function UserList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}
export default function User() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const userList = await UserList();
      setUsers(userList);
      setIsLoading(false);
    }, 2000);
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Birth Date",
      dataIndex: "birthDate",
      key: "birthDate",
    },
  ];
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>Users</h1>
          <Table
            dataSource={users}
            columns={columns}
            bordered
            size="middle"
            style={{ marginBottom: "20px" }}
          />
        </div>
      )}
    </div> 
   );
}
