import React from "react";
import config from "../../config";
import { useNavigateParams } from "../../hooks";
const { routesConfig } = config;
function Profile() {
  const navigateParams = useNavigateParams();

  const handleClick = () => {
    navigateParams(routesConfig.login);
  };
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleClick}>Go Link</button>
    </div>
  );
}

export default Profile;
