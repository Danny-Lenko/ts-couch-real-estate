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

export function getAndDisplayWeather(lon: number, lat: number, domElement: Element) {
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4a105fc22179d414d598d7fe6e54b716&units=metric`
   const date = new Date()
   const dateArr: string[] = date.toString().split(' ')
   
   fetch(url)
      .then(res => res.json())
      .then(data => {
         domElement.innerHTML = `${data.name} | ${dateArr[1]} ${dateArr[2]} | ${Math.floor(data.main.temp)}&#xb0`
      })
      .catch(err => console.log(err))
}