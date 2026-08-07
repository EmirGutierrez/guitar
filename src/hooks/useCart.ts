import { useState, useEffect, useMemo } from "react"
import { db } from "../data/db"
import type {Guitar, CartItem} from '../types/'


export const useCart = () => {

    const initialCart = () : CartItem[] => {
        if (typeof window === 'undefined') {
            return []
        }

        const localStorageCart = window.localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])


    function addToCart(item : Guitar) {
        const itemsExists = cart.findIndex(guitar => guitar.id === item.id)
        if (itemsExists >= 0) {
            if(cart[itemsExists].quantity >= MAX_ITEMS) return
            const updateCart = [...cart]
            updateCart[itemsExists].quantity++
            setCart(updateCart)
        } else {
            const newItem : CartItem = {...item, quantity : 1}
            setCart([...cart, newItem])
        }
    }

    function removeFromCart(id : Guitar['id']) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    function decreaseQuantity(id : Guitar['id']) {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    function increaseQuantity(id : Guitar['id']) {
        const updateCrat = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updateCrat)
    }

    function cleanCart() {
        setCart([])
    }


    // Derived state
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce( (total, item) => total + (item.quantity * item.price), 0), [cart])


    return{

        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        cleanCart, 
        isEmpty,
        cartTotal

    }
}

