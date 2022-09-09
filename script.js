const ratings = document.querySelector('.ratings')
const ratingCard = document.querySelector('.rating-card')
const tyCard = document.querySelector('.thank-you-card')
const rated = document.querySelector('.selected-rating')

let selectedRating

function handleRatingClick(e) {
    if (!e.target.classList.contains('rating')) return
    const selected = ratings.querySelector('.selected')
    if (selected) {
        selected.classList.remove('selected')
    }
    e.target.classList.add('selected')
    selectedRating = e.target.textContent
}

function handleSubmit() {
    ratingCard.classList.add('hide')
    tyCard.classList.remove('hide')
    rated.textContent = selectedRating
}

ratings.addEventListener('click', (e) => handleRatingClick(e))