export class Products {
    category?: string;
    id: string;
    image: string;
    nameProduct: string;
    message: string;
    timeEnd?: any;
    price: number | string;
    auction?: Auction[];
    isActive?: boolean;

}
export class Auction {
    userId: string;
    price: number;
    time?: string;
}