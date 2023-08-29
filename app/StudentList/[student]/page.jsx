"use client";
import { Card, Layout, Typography } from "antd";
import { useParams } from "next/navigation";

const { Content } = Layout;
const { Title } = Typography;
const studentData = [
  {
    name: "Hariom",
    age: 21,
    grade: "A",
    address: "Palia",
  },
  {
    name: "Yuvraj",
    age: 20,
    grade: "B",
    address: "Sanwer",
  },
  {
    name: "Raj",
    age: 21,
    grade: "A",
    address: "Indore",
  },
  {
    name: "Ajay",
    age: 25,
    grade: "C",
    address: "Indore",
  },
];

const StudentDetails = () => {
  const params = useParams();
  const studentName = params.student;
  const singleStudentData = studentData.find(
    (student) => student.name === studentName
  );
  return (
    <Layout>
      <Content style={{ padding: "24px", minHeight: "calc(100vh - 64px)" }}>
        {singleStudentData ? (
          <Card>
            <Title level={2}>{singleStudentData.name} Details</Title>
            <p>Name: {singleStudentData.name}</p>
            <p>Age: {singleStudentData.age}</p>
            <p>Grade: {singleStudentData.grade}</p>
            <p>Address: {singleStudentData.address}</p>{" "}
          </Card>
        ) : (
          <p>Student not found</p>
        )}
      </Content>
    </Layout>
  );
};

export default StudentDetails;
