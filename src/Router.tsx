import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewTodoPage from "./pages/NewTodoPage";
import EditTodoPage from "./pages/EditTodoPage";
import ViewTodoPage from "./pages/ViewTodoPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      errorElement: <Navigate to={"/"} />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "newTodo",
          element: <NewTodoPage />,
        },
        {
          path: `editTodo/:todoId`,
          element: <EditTodoPage />,
        },
        { path: "viewTodo/:todoId", element: <ViewTodoPage /> },
      ],
    },
  ]);

  return (
    <>
      |<RouterProvider router={router} />
    </>
  );
}

function MainContainer() {
  return (
    <>
      <div className="font-inter mt-24 flex w-full flex-col items-center justify-center">
        <Outlet />
      </div>
    </>
  );
}
