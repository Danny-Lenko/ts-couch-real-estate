import { LoyaltyUser } from './enums'

export interface Review {
   name: string;
   stars: number;
   loyaltyUser: LoyaltyUser;
   date: string;
}

export type Price = 25 | 30 | 35 | 40 | 45
export interface Property {
   image: string;
   title: string;
   price: Price;
   location: {
       firstLine: string;
       city: string;
       code: (string | number);
       country: string;
   };
   contact: (number | string)[];
   isAvailable: boolean; 
}