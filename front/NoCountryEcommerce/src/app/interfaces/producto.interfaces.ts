export interface Producto {
    name: string,
    description: string,
    type:string,
    sku:string,
    barCode: string,
    weight: number,
    height: number,
    width: number,
    depth: number,
    showInStore: boolean,
    isPromotional: boolean,
    price: number,
    promotionPrice: number,
    stock: number,
    photo: string,
    category: {
        id: number,
        name: string,
        description: string
    }
}