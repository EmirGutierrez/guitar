export type Guitar = {
    id : number
    name : string
    image : string
    description : string
    price : number
}

export type CartItem = Guitar & { /** This inherits from Guitar */
    quantity : number
}