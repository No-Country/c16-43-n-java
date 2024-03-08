export interface Producto {
    id: number | null
    name: string,
    description: string,
    type:string,
    sku:string,
    barCode: string,
    weight: number | null,
    height: number | null,
    width: number | null,
    depth: number | null,
    showInStore: boolean,
    isPromotional: boolean | null,
    price: number | null,
    promotionPrice: number | null,
    stock: number | null,
    photo: string | null,
    category: {
        id: number | null,
        name: string,
        description: string
    }
}