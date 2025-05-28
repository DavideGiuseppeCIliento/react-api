import { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../elements/CardGrid";

const urlApi = "https://lanciweb.github.io/demo/api/actors/";

export default function Main() {
  const [actors, setActors] = useState([]);

  //   Uso use effect per importare i dati alla creazione del componente
  useEffect(() => {
    axios
      .get(urlApi)
      .then((response) => {
        const data = response.data;
        console.log("Dati originali:", data);

        // Creo l'Array di attori
        const cleanedData = data.map((actor) => ({
          id: actor.id,
          name: actor.name,
          birth_year: actor.birth_year,
          nationality: actor.nationality,
          biography: actor.biography,
          image: actor.image,
        }));

        setActors(cleanedData);
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });
  }, []);

  console.log(actors);

  return <CardGrid actors={actors}></CardGrid>;
}
