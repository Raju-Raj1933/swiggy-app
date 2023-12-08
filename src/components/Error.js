import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Ooop's</h1>
      <h3>You Visit on Wrong Page</h3>
      <h4>
        {err.status}:{err.statusText}
      </h4>
    </>
  );
};
export default Error;
