import { useState, useEffect } from "react";
import axios from "axios";
import CardGrid from "../elements/CardGrid";

// URL della chiamata API
const urlApiActor = "https://lanciweb.github.io/demo/api/actors/";
const urlApiActresses = "https://lanciweb.github.io/demo/api/actresses/";

export default function Main() {
  // Stato che contiene l'elenco degli attori
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

  //# Funzione per chiamare l'API e salvare i dati puliti ATTORI
  const getApiDataActor = () => {
    axios
      .get(urlApiActor)
      .then((response) => {
        const data = response.data;
        console.log("Dati attori:", data);

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
        console.error("Errore nel fetch attori:", error);
      });
  };

  //# Funzione per chiamare l'API e salvare i dati puliti ATTRICI
  const getApiDataActresses = () => {
    axios
      .get(urlApiActresses)
      .then((response) => {
        const data = response.data;
        console.log("Dati attrici:", data);

        // Pulizia dei dati ricevuti
        const cleanedData = data.map((actress) => ({
          id: actress.id,
          name: actress.name,
          birth_year: actress.birth_year,
          nationality: actress.nationality,
          biography: actress.biography,
          image: actress.image,
        }));

        // Aggiorno lo stato con i dati puliti
        setActresses(cleanedData);
      })
      .catch((error) => {
        console.error("Errore nel fetch attrici:", error);
      });
  };
  // 👇 Spread dei due array nel render
  const allPeople = [...actors, ...actresses];

  // Eseguo la chiamata API al primo render
  useEffect(() => {
    getApiDataActor();
    getApiDataActresses();
  }, []);

  // Renderizzo i componenti con le liste
  return (
    <>
      <FilterBar data={allPeople} />
      <CardGrid data={allPeople} />
    </>
  );
}
