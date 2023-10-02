/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { resetPageSize, setFilter } from "../reducers/hotelSlice";

function Filter({ selectedFilter }) {
  const locations = ["Durham", "New York", "Bothell", "Wilsonville"];
  const dispatch = useDispatch();
  function handleClick(location) {
    if (location === selectedFilter) {
      dispatch(setFilter(""));
    } else {
      dispatch(setFilter(location));
      dispatch(resetPageSize());
    }
  }

  return (
    <div>
      <ul className='flex flex-wrap text-sm ml-20 font-medium text-center text-black  mt-10'>
        {locations.map((location) => {
          return (
            <li className='mr-2' key={location}>
              <button
                onClick={() => handleClick(location)}
                className={`${
                  selectedFilter === location
                    ? "bg-blue-600 active text-white"
                    : " bg-blue-100 "
                } inline-block px-4 py-3  rounded-full hover:bg-blue-600  hover:text-white active`}
                aria-current='page'
              >
                {location}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
