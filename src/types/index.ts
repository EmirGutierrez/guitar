export type Guitar = {
    id : number
    name : string
    nameEs?: string
    image : string
    description : string
    descriptionEs?: string
    price : number
}

export type CartItem = Guitar & { /** This inherits from Guitar */
    quantity : number
}