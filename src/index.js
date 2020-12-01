// console.log('%c HI', 'color: firebrick')
function fetchImages() {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  fetch(imgUrl)
  .then(function(response) {
    return response.json();
 })
 .then(function(json) {
   renderImages(json)
 });

}

function renderImages(images) {
  const container = document.querySelector('dog-image-container')

  images.forEach(image => {
    const link = document.createElement('a')
    const elem = document.createElement('img')
    elem.src = image
    container.appendChild(elem)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
})
