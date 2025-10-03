import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}> </RouterProvider>
    </Provider>
  );
};

export default App;
