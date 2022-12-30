import Public from "./pages/Public";
import Protected from "./pages/Protected";
import Error404 from "./pages/Error404";
import PublicLayout from "./hoc/PublicLayout";
import { Navigate } from "react-router-dom";
import ProtectedLayout from "./hoc/ProtectedLayout";

const routes = (isAuthenticated) => [
  {
    path: "/protected",
    element: isAuthenticated ? (
      <ProtectedLayout />
    ) : (
      <Navigate to="/public/home" />
    ),
    children: [{ path: "home", element: <Protected /> }],
  },
  {
    path: "/public",
    element: !isAuthenticated ? (
      <PublicLayout />
    ) : (
      <Navigate to="/protected/home" />
    ),
    children: [{ path: "home", element: <Public /> }],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default routes;
