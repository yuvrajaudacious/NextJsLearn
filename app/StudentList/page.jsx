"use client";
import { List } from "antd";
import Link from "next/link";

export default function StudentList() {
  const students = ["Hariom", "Yuvraj", "Raj", "Ajay"];

  return (
    <div>
      <h1>Student List</h1>
      <List
        dataSource={students}
        renderItem={(student) => (
          <List.Item>
            <Link href={`/StudentList/${student}`}>{student}</Link>
          </List.Item>
        )}
      />
    </div>
  )
}
