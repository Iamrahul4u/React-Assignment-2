import { useDispatch, useSelector } from "react-redux";
import Hotel from "./Hotel";
import Filter from "./Filter";
import { setPageSize } from "../reducers/hotelSlice";

function HotelList() {
  const state = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  const filter = state.filter;
  const pageSize = state.pageSize;
  const hotels = state.hotelData.filter((hotel) =>
    hotel.Address.City.includes(filter)
  );
  function handlePageSize() {
    dispatch(setPageSize());
  }

  return (
    <>
      <div className='flex flex-col self-center'>
        <Filter selectedFilter={filter} />
        <div className='mx-auto  grid max-w-6xl  grid-cols-1 gap-10 p-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
          {hotels &&
            hotels
              .slice(0, pageSize)
              .map((hotel) => <Hotel key={hotel.HotelId} hotel={hotel} />)}
        </div>
        <button
          onClick={() => handlePageSize()}
          className='inline-block  text-sm mx-auto mb-5  px-4 py-3 text-white bg-blue-600 rounded-lg active'
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default HotelList;
