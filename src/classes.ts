import { Price } from './interfaces'

export class MainProperty {
   image: string;
   title: string;
   price: Price
   isAvailable: boolean;
   constructor(
      image = 'images/italian-property.jpg',
      title = 'Italian House',
      price = 35,
      isAvailable = false
   ) {
      this.image = image;
      this.title = title;
      this.price = price;
      this.isAvailable = isAvailable;
   }
}