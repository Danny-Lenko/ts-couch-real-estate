import { Review } from './interfaces'
import { reviews, you, properties } from './data'
import { checkPlural, checkLoyalty, createReviewCard } from './utils'
import { MainProperty } from './classes'

const returningEl = document.querySelector('#returning-user')!
const userEl = document.querySelector('#user')!
const mainImageContainer = document.querySelector('.main-image')!
const mainImage = document.createElement('img')
const reviewsEl = document.querySelector('#reviews')!
const reviewsButton = document.querySelector('button')!
const reviewsHidden = document.querySelector('.reviews')!
const propertiesEl = document.querySelector('.properties')!
const footerEl = document.querySelector('.footer')!

// nav-bar functionality
function displayHeaderContents(
   returning: boolean,
   name: string
) {
   if (returning) returningEl.innerHTML = ' back, '
   userEl.innerHTML = name
}

displayHeaderContents(you.isReturning, you.firstName)

// main property functionality
const homePageMainProperty = new MainProperty(
   'images/italian-property.jpg',
   'Italian House',
   45, 
   true
)

mainImage.setAttribute('src', homePageMainProperty.image)
mainImageContainer.appendChild(mainImage)

// reviews functionality
function displayReviewsSummary(reviews: Review[]) {
   reviewsEl.innerHTML = `
      ${reviews.length} Review${checkPlural(reviews.length)} 
      | last reviewed by ${reviews[0].name} ${checkLoyalty(reviews[0].loyaltyUser)}
   `
}

displayReviewsSummary(reviews)

function createAndOpenHiddenReviews(reviews: Review[]) {
   const firstReview = createReviewCard()
   const secondReview = createReviewCard()

   firstReview.innerHTML = `${reviews[0].stars} stars from ${reviews[0].name}`
   secondReview.innerHTML = `${reviews[1].stars} stars from ${reviews[1].name}`

   reviewsHidden.appendChild(firstReview)
   reviewsHidden.appendChild(secondReview)
   reviewsButton.style.display = 'none'
}

reviewsButton.addEventListener('click', () => createAndOpenHiddenReviews(reviews))

// properties functionality
const propertiesContent: string = properties.map(property => `
   <div class='card'>
      <p>${property.title}</p>
      <img src=${property.image} alt=${property.title} />
      <p>${property.price}/night<p>
   </div>
`).join('')

propertiesEl.innerHTML = propertiesContent

// footer functionality
let lat: number = 51.509865
let lon: number = -0.118092
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4a105fc22179d414d598d7fe6e54b716&units=metric`

fetch(url)
   .then(res => res.json())
   .then(data => {
      console.log(data)
      footerEl.innerHTML = `${data.name} | 08/04 | `
   })
   .catch(err => console.log(err))

// footerEl.innerHTML

navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      lat = position.coords.latitude
      lon = position.coords.longitude
      footerEl.innerHTML = `${lat}, ${lon} | 08/04 | 24&#xb0`
})






