import { LoyaltyUser, Permissions } from './enums'
import { Review, Property } from './interfaces'

export const reviews: Review[] = [
   {
       name: 'Sheila',
       stars: 5,
       loyaltyUser: LoyaltyUser.GOLD_USER,
       date: '01-04-2021'
   },
   {
       name: 'Andrzej',
       stars: 3,
       loyaltyUser: LoyaltyUser.BRONZE_USER,
       date: '28-03-2021'
   },
   {
       name: 'Omar',
       stars: 4,
       loyaltyUser: LoyaltyUser.SILVER_USER,
       date: '27-03-2021',
   },
]

export const you = {
   firstName: 'Bobby',
   lastName: 'Brown',
   permissions: Permissions.ADMIN,
   isReturning: true,
   age: 35,
   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array of Properties
export const properties: Property[] = [
   {
       image: 'images/colombia-property.jpg',
       title: 'Colombian Shack',
       price: 45,
       location: {
           firstLine: 'shack 37',
           city: 'Bogota',
           code: 45632,
           country: 'Colombia'
       },
       contact: [+112343823978921, 'marywinkle@gmail.com'],
       isAvailable: true  
   },
   {
       image: 'images/poland-property.jpg',
       title: 'Polish Cottage',
       price: 30,
       location: {
           firstLine: 'no 23',
           city: 'Gdansk',
           code: 343903,
           country: 'Poland'
       },
       contact: [+1298239028490830, 'garydavis@hotmail.com'],
       isAvailable: false 
   },
   {
       image: 'images/london-property.jpg',
       title: 'London Flat',
       price: 25,
       location: {
           firstLine: 'flat 15',
           city: 'London',
           code: 'SW4 5XW',
           country: 'United Kingdom',
       },
       contact: [+34829374892553, 'andyluger@aol.com'],
       isAvailable: true
   },
   {
       image: 'images/malaysian-hotel.jpeg',
       title: 'Malia Hotel',
       price: 35,
       location: {
           firstLine: 'Room 4',
           city: 'Malia',
           code: 45334,
           country: 'Malaysia'
       },
       contact: [ +60349822083, 'lee34@gmail.com'],
       isAvailable: false
   }
]
