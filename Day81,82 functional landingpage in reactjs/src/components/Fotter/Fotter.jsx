import React from "react";
import logo from "../../assets/logo.png";
import Move from "../Move.jsx";
const Fotter = () => {
  return (
    <div className="bg-stone-600 pt-16 ">
      <div className=" mx-auto max-w-7xl text-white p-8">
        <div className="flex flex-col gap-8 lg:gap-24 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <img src={logo} alt="logo of the companey" className=" p-4" />
            <p className="mt-4">
              Accompagnement des PME et des grands comptes dans leur
              structuration et leur stratégie de croissance.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-orange-400 text-xl">Services</h1>
            <p className="w-3/4">
              Structuration et organisation des entreprises
            </p>
            <p>Conseil stratégique et opérationnel</p>
            <p>Management de la qualité</p>
            <p>Voir plus</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-orange-400 text-xl ">Plan du site</h1>
            <p className="cursor-pointer" onClick={() => Move("hero")}>
              Accueil
            </p>
            <p className="cursor-pointer" onClick={() => Move("services")}>
              Nos Services
            </p>
            <p className="cursor-pointer" onClick={() => Move("advices")}>
              Apropos
            </p>
          </div>
        </div>
        <div className="">
          <hr className="my-8" />
          <p>© 2023 DLC - Tous droits réservés - Conçu par Vision Metrik</p>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
