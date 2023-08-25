import Link from "next/link";
import React from "react";

const StudentList = () => {
  return (
    <div>
      <h1>StudentList</h1>
      <ul>
        <li>
          <Link href="/StudentList/Hariom">Hariom</Link>
        </li>
        <li>
          <Link href="/StudentList/Yuvraj">Yuvraj</Link>
        </li>
        <li>
          {" "}
          <Link href="/StudentList/Raj">Raj</Link>
        </li>
        <li>
          {" "}
          <Link href="/StudentList/Ajay">Ajay</Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentList;
