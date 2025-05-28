import { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../elements/CardGrid";

// URL della chiamata API
const urlApiActor = "https://lanciweb.github.io/demo/api/actors/";
const urlApiActresses = "https://lanciweb.github.io/demo/api/actresses/";

export default function Main() {
  // Stato che contiene l'elenco degli attori
  const [actors, setActors] = useState([]);
  const [actresses, setAcrtesses] = useState([]);

  //# Funzione per chiamare l'API e salvare i dati puliti ATTORI
  const getApiDataActor = () => {
    axios
      .get(urlApiActor)
      .then((response) => {
        const data = response.data;
        console.log("Dati originali:", data);

        // Pulizia dei dati ricevuti
        const cleanedData = data.map((actor) => ({
          id: actor.id,
          name: actor.name,
          birth_year: actor.birth_year,
          nationality: actor.nationality,
          biography: actor.biography,
          image: actor.image,
        }));

        // Aggiorno lo stato con i dati puliti
        setActors(cleanedData);
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });
  };

  //# Funzione per chiamare l'API e salvare i dati puliti ATTORI
  const getApiDataActresses = () => {
    axios
      .get(urlApiActor)
      .then((response) => {
        const data = response.data;
        console.log("Dati originali:", data);

        // Pulizia dei dati ricevuti
        const cleanedData = data.map((actress) => ({
          id: actor.id,
          name: actor.name,
          birth_year: actor.birth_year,
          nationality: actor.nationality,
          biography: actor.biography,
          image: actor.image,
        }));

        // Aggiorno lo stato con i dati puliti
        setAcrtesses(cleanedData);
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });
  };

  // Eseguo la chiamata API al primo render ATTORI
  useEffect(() => {
    getApiDataActor();
    getApiDataActresses();
  }, []);

  // Renderizzo il componente con la lista degli attori
  return <CardGrid actors={actors} />;
}
