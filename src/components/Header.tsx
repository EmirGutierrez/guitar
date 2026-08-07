import type { CartItem, Guitar} from "../types"

type HeaderProps = {
    cart: CartItem[]
    removeFromCart: (id: Guitar['id']) => void
    increaseQuantity: (id: Guitar['id']) => void
    decreaseQuantity: (id: Guitar['id']) => void
    cleanCart: () => void
    isEmpty: boolean
    cartTotal: number
}

export default function Header({ 
        cart, 
        removeFromCart, 
        increaseQuantity, 
        decreaseQuantity, 
        cleanCart, 
        isEmpty, 
        cartTotal,
    } : HeaderProps) {

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)
    const text = {
      empty: 'The cart is empty',
      image: 'Image',
      name: 'Name',
      price: 'Price',
      quantity: 'Quantity',
      totalLabel: 'Total to pay:',
      clearCart: 'Clear Cart'
    }

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="/">
                            <img className="img-fluid" src="/img/logo.svg" alt="logo image" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="cart-dropdown position-relative">
                            <img className="img-fluid" src="/img/carrito.png" alt="cart icon" />
                            {cartItemCount > 0 && (
                                <div className="cart-badge badge bg-danger text-white rounded-circle d-flex align-items-center justify-content-center">
                                    {cartItemCount}
                                </div>
                            )}

                            <div id="cart" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-center">{text.empty}</p>

                                ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>{text.image}</th>
                                                    <th>{text.name}</th>
                                                    <th>{text.price}</th>
                                                    <th>{text.quantity}</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(guitar => (
                                                    <tr key={guitar.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="guitar image" />
                                                        </td>
                                                        <td> {guitar.name} </td>
                                                        <td className="fw-bold">
                                                            Q {guitar.price}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => decreaseQuantity(guitar.id)}
                                                            >
                                                                -
                                                            </button>
                                                            {guitar.quantity}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseQuantity(guitar.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(guitar.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>

                                        <p className="text-end">{text.totalLabel} <span className="fw-bold">Q{cartTotal}</span></p>
                                        <button
                                            className="btn btn-dark w-100 mt-3 p-2"
                                            onClick={cleanCart}>{text.clearCart}</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    )
}

