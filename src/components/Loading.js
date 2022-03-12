import React from "react";
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <div className="text-center vh-100">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;