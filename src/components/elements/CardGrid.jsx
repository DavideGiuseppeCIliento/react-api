import Card from "./Card";

export default function CardGrid({ data }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            image={data.image}
            birth_year={data.birth_year}
            nationality={data.nationality}
            biography={data.biography}
          />
        ))}
      </div>
    </div>
  );
}
