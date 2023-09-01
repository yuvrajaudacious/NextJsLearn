import { Spin } from "antd";
import "./Loading.css"; 

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading">
        <Spin size="large" tip="Loading..." />
      </div>
    </div>
  );
}
