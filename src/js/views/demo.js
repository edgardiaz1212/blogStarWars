import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store } = useContext(Context);
  const { people, planets, vehicles, starships, species,films, IMAGEURL  } = store;
  const [detail, setDetail] = useState({})
  const params = useParams()
  // console.log(params)
  

  const finder = () => {
    let detail = store[params.nature].find((item) =>
      item._id == params.id
    )
    setDetail(detail)
    
  }
  useEffect(() => {
    finder()

  }, [people, planets, vehicles, starships, species,films])

  console.log(detail)

  const propertiesFound = () => {
    if (detail.properties) {
      let propertiesNeeded;
      if (params.nature === "planets") {
        propertiesNeeded = [
          { key: "name", name: "Name" },
          { key: "climate", name: "Climate" },
          { key: "population", name: "Population" },
          { key: "orbital_period", name: "Orbital Period" },
          { key: "rotation_period", name: "Rotation Period" },
          { key: "diameter", name: "Diameter" },

        ];
      } else if (params.nature === "people") {
        propertiesNeeded = [
          { key: "name", name: "Name" },
          { key: "birth_year", name: "Birth Year" },
          { key: "gender", name: "Gender" },
          { key: "height", name: "Height" },
          { key: "skin_color", name: "Skin Color" },
          { key: "eye_color", name: "Eye Color" },

        ];
      }else if (params.nature ==="vehicles"){
        propertiesNeeded=[
          {key:"model", name:"Model"},
          {key:"Vehicle_class", name:"Vehicle Class"},
          {key:"manufacturer", name:"Manufacturer"},
          {key:"length", name:"Length"},
          {key:"max_atmosphering_speed", name:"Max Atmosphering Speed"},
          {key:"cargo_capacity", name:"Cargo Capacity"}
        ]
      } else if (params.nature === "starships"){
        propertiesNeeded=[
          {key:"model", name:"Model"},
          {key:"Vehicle_class", name:"Vehicle Class"},
          {key:"manufacturer", name:"Manufacturer"},
          {key:"max_atmosphering_speed", name:"Max Atmosphering Speed"},
          {key:"cargo_capacity", name:"Cargo Capacity"}
        ]
      }else if (params.nature === "species"){
        propertiesNeeded=[
          {key:"classification", name:"Clasiffication"},
          {key:"language", name:"Language"},
          {key:"average_height", name:"Average Height"},
          {key:"average_lifespan", name:"Average Lifespan"},
          {key:"designation", name:"Designation"},
          {key:"eye_colors", name:"Eye Colors"},
          
        ]
      }

      return propertiesNeeded.map(({ key, name }) => (
        <div key={key} className="col-2 text-danger text-center">
          <strong>{name}: </strong>
          <hr className="invisible" />
          {detail.properties[key]}
        </div>
      ));
    }

  };

  return (
    <>

      <div className="container fluid">
        <div className="row m-3">
          
          <div className="col-6 ">
            <img
              src={
                    IMAGEURL +
                    (params.nature === "people"
                      ? "/characters"
                      : params.nature === "planets"
                      ? "/planets"
                      : params.nature== "vehicles"
                      ?"/vehicles"
                      :params.nature=="starships"
                      ? "/starships"
                      :params.nature=="species"
                      ? "/species"
                      : "/films"
                      )+
                    `/${detail.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-6 text-center">

            <h1>{detail.properties?.name}</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. {" "}

            </p>
          </div>
        </div>
      </div>

      <div className="container fluid">
        <hr className="bg-danger" />
        <div className="row m-3">
          {propertiesFound()}

        </div>
      </div>
    </>
  );
};
