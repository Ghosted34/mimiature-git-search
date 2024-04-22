import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="flex items-center justify-center w-full h-screen flex-col gap-4">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <i>{error.status}</i>
      </p>
    </main>
  );
};

export default ErrorPage;
