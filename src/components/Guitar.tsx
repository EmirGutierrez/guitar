import type {Guitar} from '../types/'

type GuitarProps = {
    guitar : Guitar
    addToCart: (item: Guitar) => void
}

export default function Guitar({guitar, addToCart} : GuitarProps) {
    const displayName = guitar.name
    const displayDescription = guitar.description

    return (

        <div className="col-md-6 col-lg-4 my-4">
            <div className="row align-items-center guitar-card gx-3 py-3">
                <div className="col-4">
                    <img className="img-fluid rounded-4" src={`/img/${guitar.image}.jpg`} alt={displayName} />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-5 fw-bold text-uppercase">{displayName}</h3>
                    <p className="text-secondary mb-3">{displayDescription}</p>
                    <p className="fw-bold text-primary fs-4">Q {guitar.price}</p>
                    <button
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => addToCart(guitar)}
                    >Add to Cart</button>
                </div>
            </div>
        </div>

    )
}

