"use client"

import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useCart } from "./hooks/useCart"
import "./App.css"

const translations = {
  en: {
    heroLabel: "Premium Guitar Store",
    heroTitle: "Find Your Next Electric Guitar",
    heroDescription: "Discover our exclusive collection of guitars with professional design, affordable prices, and fast delivery.",
    collectionTitle: "Our Collection",
    footerText: "GuitarLA - All rights reserved",
    spanishButton: "ES",
    englishButton: "EN",
  },
  es: {
    heroLabel: "Tienda de guitarras premium",
    heroTitle: "Encuentra tu próxima guitarra eléctrica",
    heroDescription: "Explora nuestra colección exclusiva de guitarras con diseño profesional, precios accesibles y envíos rápidos.",
    collectionTitle: "Nuestra Colección",
    footerText: "GuitarLA - Todos los derechos reservados",
    spanishButton: "ES",
    englishButton: "EN",
  },
}

function App() {
    const [lang, setLang] = useState<'en' | 'es'>('es')
    const labels = translations[lang]
    const {data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, cleanCart, isEmpty, cartTotal } = useCart()

    return (
        <>
            <Header
                cart={cart}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                cleanCart={cleanCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
                lang={lang}
            />

            <section className="hero text-center">
                <div className="container-xl">
                    <div className="d-flex justify-content-end mb-4">
                        <button
                            type="button"
                            className={`btn btn-outline-light btn-sm me-2 ${lang === 'es' ? 'active' : ''}`}
                            onClick={() => setLang('es')}
                        >
                            {labels.spanishButton}
                        </button>
                        <button
                            type="button"
                            className={`btn btn-outline-light btn-sm ${lang === 'en' ? 'active' : ''}`}
                            onClick={() => setLang('en')}
                        >
                            {labels.englishButton}
                        </button>
                    </div>
                    <p className="text-uppercase text-warning mb-3 fw-semibold">{labels.heroLabel}</p>
                    <h1 className="display-5 fw-bold text-white mb-4">{labels.heroTitle}</h1>
                    <p className="lead mx-auto text-white" style={{ maxWidth: '720px' }}>
                        {labels.heroDescription}
                    </p>
                </div>
            </section>

            <main className="container-xl mt-5">
                <h2 className="text-center mb-4">{labels.collectionTitle}</h2>

                <div className="row mt-4">
                    {data.map((guitar) => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                            addToCart={addToCart}
                            lang={lang}
                        />
                    ))}
                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">{labels.footerText}</p>
                </div>
            </footer>

        </>
    )
}

export default App
