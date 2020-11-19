export class Products {
    category?: string;
    id: string;
    image: string;
    nameProduct: string;
    message: string;
    price: number | string;
    auction?: Auction[];

}
export class Auction {
    userId: string;
    price: number;
    time?: string;
}