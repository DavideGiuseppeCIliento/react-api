import Card from "./Card";

export default function CardGrid({ actors }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {actors.map((actor) => (
          <Card key={actor.id} name={actor.name} image={actor.image} />
        ))}
      </div>
    </div>
  );
}
