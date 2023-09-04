"use client"
import { Card } from "antd";
import GetUsers from "@/services/getUsers";
const cardStyle = {
  width: 300,
  margin: "0 auto",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};
const titleStyle = {
  fontSize: "24px",
  marginBottom: "16px",
};
const textStyle = {
  fontSize: "16px",
  marginBottom: "8px",
};
export default async function Page(props) {
    const users = await GetUsers();

  const currentId = props.params.usersId;
  const userData = users[currentId - 1];

  return (
    <div>
      <h1 style={titleStyle}>{userData.name}: Detail</h1>
      <Card title="User Information" style={cardStyle}>
        <p style={textStyle}>
          <strong>ID:</strong> {userData.id}
        </p>
        <p style={textStyle}>
          <strong>Name:</strong> {userData.name}
        </p>
        <p style={textStyle}>
          <strong>Email:</strong> {userData.email}
        </p>
        <p style={textStyle}>
          <strong>Contact:</strong> {userData.phone}
        </p>
      </Card>
    </div>
  );
}
export async function generateStaticParams() {
  const users = await GetUsers();
  return users.map((user) => ({
    usersId: user.id.toString(),
  }));
}
