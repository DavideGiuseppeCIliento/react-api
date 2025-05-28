export default function Card({
  name,
  image,
  birth_year,
  nationality,
  biography,
}) {
  return (
    <div className="col">
      <div className="card h-100 mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start h-100 object-fit-cover"
              alt={name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{biography}</p>
              <p className="card-text">
                <small className="text-body-secondary">{birth_year}</small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">{nationality}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
