import React from "react";
const Detail = ({ item }) => {
  const { text, personImg, personName, personOccupation } = item;
  return (
    <div className="bg-orange-50 rounded-lg flex flex-col gap-8 px-6 py-12 ">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Vector"
            d="M21 3C21.552 3 22 3.448 22 4V18C22 18.552 21.552 19 21 19H6.455L2 22.5V4C2 3.448 2.448 3 3 3H21ZM10.962 8.1L10.515 7.412C8.728 8.187 7.5 9.755 7.5 11.505C7.5 12.5 7.777 13.114 8.292 13.661C8.616 14.005 9.129 14.25 9.666 14.25C10.632 14.25 11.416 13.466 11.416 12.5C11.416 11.58 10.705 10.839 9.802 10.755C9.642 10.74 9.478 10.743 9.323 10.765V10.673C9.329 10.251 9.415 9.04 10.777 8.207L10.962 8.1L10.515 7.412L10.962 8.1ZM15.515 7.412C13.728 8.187 12.5 9.755 12.5 11.505C12.5 12.5 12.777 13.114 13.292 13.661C13.616 14.005 14.129 14.25 14.666 14.25C15.632 14.25 16.416 13.466 16.416 12.5C16.416 11.58 15.705 10.839 14.802 10.755C14.642 10.74 14.478 10.743 14.323 10.765C14.323 10.452 14.294 9.003 15.962 8.1L15.515 7.412Z"
            fill="#AD682B"
          />
        </g>
      </svg>

      <div className="px-1 py-4">
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className="flex items-center">
        <img src={personImg} alt="person" className="mr-4" />
        <div>
          <h1 className="font-bold capitalize">{personName}</h1>
          <p className="text-gray-400 capitalize">{personOccupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
