'use client'
export default function StudentDetiles({params}) {
  console.log(params);
  return (
    <div>
      <h1>StudentDetiles</h1>
      <h3>Name: {params.Student}</h3>
    </div>
  );
}
