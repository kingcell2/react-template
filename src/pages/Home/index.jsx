import React from "react";
import config from "../../config";
import { useNavigateParams } from "../../hooks";
import "./home.scss";

const { routesConfig } = config;

function Home() {
  const navigateParams = useNavigateParams();

  const handleClick = () => {
    navigateParams(routesConfig.profile, { userId: "123" });
  };
  return (
    <div className="homepage">
      <h1 className="headline1">Home</h1>
      <button className="link" onClick={handleClick}>
        Go link
      </button>
    </div>
  );
}

export default Home;
