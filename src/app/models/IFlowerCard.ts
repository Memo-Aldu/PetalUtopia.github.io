import { IStarRating } from "./IStarRating";

export interface IFlowerCard {
    src: string;
    title: string;
    description: string;
    price: string;
    rating?: IStarRating;
    occasion: string[];
    flowerType: string;
}