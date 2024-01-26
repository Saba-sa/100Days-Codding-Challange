import React from "react";

const Banner = () => {
  return (
    <div
      className="w-11/12 bg-orange-400 rounded-lg lg:w-9/12 m-auto px-16 py-20 text-center text-white flex items-center justify-center mt-24  mx-auto max-w-7xl sm:px-6"
      id="banner"
    >
      <div className="w-5/6 flex items-center justify-center flex-col gap-4 text-orange-50">
        <p>Transformez votre entreprise dès aujourd'hui !!!</p>
        <p className="text-2xl font-semibold">
          Réservez un entretien en ligne de 30 minutes avec nos experts pour
          discuter de vos besoins spécifiques et découvrir comment DLC peut vous
          aider à atteindre de nouveaux sommets.
        </p>
        <button className="py-2 px-8 text-black rounded-full flex items-center justify-between bg-slate-100">
          <span className="mr-2">Réservez maintenant</span>
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <path
                id="Vector"
                d="M6.572 25.9281C5.33205 24.6913 4.34872 23.2218 3.67851 21.6038C3.0083 19.9858 2.66443 18.2514 2.66667 16.5001C2.66667 9.13608 8.636 3.16675 16 3.16675C23.364 3.16675 29.3333 9.13608 29.3333 16.5001C29.3333 23.8641 23.364 29.8334 16 29.8334H2.66667L6.572 25.9281ZM14.6667 8.50008V24.5001H17.3333V8.50008H14.6667ZM9.33333 12.5001V20.5001H12V12.5001H9.33333ZM20 12.5001V20.5001H22.6667V12.5001H20Z"
                fill="#000"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
