"use client"
import { Result, Button } from "antd";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
const router= useRouter();
  const handleGoBack = () => {
    router.back(); 
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleGoBack}>
          Go Back
        </Button>
      }
    />
  );
};

export default NotFoundPage;
