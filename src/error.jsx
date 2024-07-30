import { useRouteError } from "react-router-dom";

export default function Errorpage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="text-2xl text-center my-52">
      <h1 className="text-red-500 font-semibold">Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
