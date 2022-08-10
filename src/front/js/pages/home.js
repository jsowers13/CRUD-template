import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import LogoUrl from "../../img/1822logo.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <p>
        <img src={LogoUrl} />
      </p>
      <h1>CRUD Template</h1>
      <p>
        A small tool using Flask and SQLAlchemy along with React to build and
        interact with a RESTful API.
      </p>
      <p>
        This Template uses simple employee records as the example, but can be
        scaled to fit whatever needs a client has.
      </p>
    </div>
  );
};
