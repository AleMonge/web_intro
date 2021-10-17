const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)



// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    if (request.status == 404) {
        console.log("No encontramos el sitio")
        return
    }


    // Begin accessing JSON data here
      var data = JSON.parse(this.response)

      data.forEach((peli) => {
            // console.log(peli.director)
          
            // Create a div with a card class
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1')
            h1.textContent = peli.title

            // Create a p and set the text content to the film's description
            const p = document.createElement('p')
            peli.description = peli.description.substring(0, 300) // Limit to 300 chars
            p.textContent = `${peli.description}...` // End with an ellipses 

            // Create movie image
            const img = document.createElement('img')
            img.src = peli.image


            // Append the cards to the container element
            container.appendChild(card)

            // Each card will contain an h1 and a p
            card.appendChild(h1)
            card.appendChild(p)
            // card.appendChild(img)

      })
}

// Send request
request.send()

// Create a request variable and assign a new XMLHttpRequest object to it.
var request2 = new XMLHttpRequest()
