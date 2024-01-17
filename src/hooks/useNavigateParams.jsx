import { useNavigate, createSearchParams } from "react-router-dom";

const useNavigateParams = () => {
  const navigate = useNavigate();
  const navigateParams = (url, params) => {
    if (params) {
      const searchParams = createSearchParams(params).toString();
      return navigate(url + "?" + searchParams);
    }
    return navigate(url);
  };

  return navigateParams;
};
export default useNavigateParams;
