import { IStarRating } from "./IStarRating";

export interface IFlowerCard {
    src: string;
    title: string;
    description: string;
    price: number;
    rating?: IStarRating;
    occasion: string[];
    flowerType: string;
}