//Routes
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);
  const routing = useRoutes(routes(true));
  return routing;
};

export default App;
