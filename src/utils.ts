import { LoyaltyUser } from "./enums"

export function checkPlural(reviewsNumber: number) {
   if (reviewsNumber === 1) {
      return ''
   }
   return 's'
}

export function checkLoyalty(userLoyalty: string) {
   if (userLoyalty === 'GOLD_USER') {
      return '⭐'
   }
   return ''
}

export function createReviewCard() {
   const reviewCard = document.createElement('div')
   reviewCard.classList.add('review-card')
   return reviewCard
}