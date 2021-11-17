import './card.scss';

function Card({car}) {
    return (
        <div className="card" key={car._id}>
            <h3 className="card__name">{car.name}</h3>
            <p className="card__model">{car.model}</p>
            <p className="card__price">R{car.price}</p>
        </div>
    )
}

export default Card
