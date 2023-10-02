import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { initializeCities } from "./reducers/hotelSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCities() {
      dispatch(initializeCities());
    }
    fetchCities();
  }, [dispatch]);
  return (
    <div className='bg-blue-50'>
      <Outlet />
    </div>
  );
}

export default App;
