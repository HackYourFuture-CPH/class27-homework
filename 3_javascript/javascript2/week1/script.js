const dishesArray = ['french fries', 'cheese burger', 'cappuchno'];
const myUlElem = document.getElementById("list");

const listElement = dishesArray.forEach(dish => {
    // create a li element and put it inside the dish variable
    const liElement = document.createElement('li')
    // for this li element, set the text to its favorite dish text
    liElement.textContent = dish;
    // then append the li element to the ul element
    myUlElem.appendChild(liElement);
})

//Podcasts
const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const pocastUl = document.getElementById("podcasts");
console.log(pocastUl);
const podcastItem = podcasts.forEach((podcast) => {
    const podcastElem = document.createElement('li');
    const podcastTitle = document.createElement('h1');
    podcastTitle.innerHTML = podcast.name;
    podcastElem.appendChild(podcastTitle);

    if (podcast.imageUrl) {
        const podcastImg = document.createElement("img");
        podcastImg.src = podcast.imageUrl;
        podcastElem.appendChild(podcastImg);
    }
   
    pocastUl.appendChild(podcastElem);
})
    