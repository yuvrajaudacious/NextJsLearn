"use client";
// import Link from "next/link";

import { useRouter } from "next/navigation";

const login = () => {
  const router = useRouter();
const navigate=(page)=>{
  router.push("/login/"+page)
}
  return (
    <div>
      <h1 className='heading'>Login</h1>
     

    </div>
  );
};

export default login;
