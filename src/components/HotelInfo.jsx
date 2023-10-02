import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function HotelInfo() {
  const { id } = useParams();
  const state = useSelector((state) => state.hotel);
  let hotel = "";
  if (state.hotelData) {
    hotel = state.hotelData.find((hotel) => hotel.HotelId == id);
  }
  return (
    hotel && (
      <div className='bg-white h-screen p-5'>
        <Link
          className='ml-16 bg-blue-100 text-gray-900  px-6 py-4 hover:bg-blue-700 hover:text-white rounded-full'
          to='/'
        >
          Home
        </Link>
        <div className='mx-auto  grid max-w-6xl  grid-cols-1 gap-10 p-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
          <div className='relative flex items-end overflow-hidden rounded-xl'>
            <img
              src='https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg'
              alt='wallpaper'
            />

            <div className='absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-yellow-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>

              <span className='ml-1 text-sm text-slate-400'>
                {hotel.Rating}
              </span>
            </div>
          </div>

          <div className='mt-1 p-2'>
            <h2 className='text-slate-700 font-semibold'>
              {hotel.HotelName}-{hotel.Address.StreetAddress},
              {hotel.Address.City}
            </h2>
            <ul className='text-xs  sm:font-semibold my-2 flex flex-row flex-wrap  justify-around w-full sm:w-auto text-black'>
              <li className='my-1  flex flex-col items-center text-gray-600'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='wifi'
                  className='mr-1 h-3 w-3 fill-current'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'
                  ></path>
                </svg>
                Free cancelation
              </li>
              <li className='my-1 text-gray-600 flex items-center flex-col'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='wifi'
                  className='mr-1 h-3 w-3 fill-current'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z'
                  ></path>
                </svg>
                Breakfast included
              </li>
              <li className='my-1 text-gray-600 flex items-center flex-col'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='wifi'
                  className='mr-1 h-3 w-3 fill-current'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 512'
                >
                  <path
                    fill='currentColor'
                    d='M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z'
                  ></path>
                </svg>
                Wifi included
              </li>
            </ul>
            <div className='mt-3 flex items-end justify-between'>
              <p>
                <span className='text-lg font-bold text-blue-500'>$1,421</span>
                <span className='text-sm text-slate-400'>/month</span>
              </p>

              <div className='group inline-flex rounded-full border border-blue-600 px-4 py-2 text-white  hover:bg-blue-900'>
                <p className='h-6 w-full text-blue-600 group-hover:text-white z-10 '>
                  Read More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default HotelInfo;
