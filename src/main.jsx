import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HotelList from "./components/HotelsList.jsx";
import hotelSlice from "./reducers/hotelSlice.js";
import HotelInfo from "./components/HotelInfo.jsx";

const store = configureStore({
  reducer: {
    hotel: hotelSlice,
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HotelList />,
      },
      {
        path: "property/:id",
        element: <HotelInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
