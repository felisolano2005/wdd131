const temples = [
  {
    name: "Albuquerque New Mexico Temple",
    location: "Albuquerque, New Mexico, USA",
    dedicated: "2000, March, 5",
    year: 2000,
    area: 34000,
    imageUrl: "images/albuquerque.jpg"
  },
  {
    name: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    year: 2019,
    area: 26900,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Arequipa_Peru_Temple.jpg"
  },
  {
    name: "Bangkok Thailand Temple",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    year: 2023,
    area: 48500,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Bangkok_Thailand_Temple.jpg"
  },
  {
    name: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955, September, 11",
    year: 1955,
    area: 35500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54640-thumb.jpg"
  },
  {
    name: "Bogota Colombia Temple",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    year: 1999,
    area: 53500,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Bogota_Colombia_Temple.jpg"
  },
  {
    name: "Boise Idaho Temple",
    location: "Boise, Idaho, USA",
    dedicated: "1984, May, 25",
    year: 1984,
    area: 35800,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Boise_Idaho_Temple.jpg"
  },
  {
    name: "Brasilia Brazil Temple",
    location: "Brasília, Brazil",
    dedicated: "2023, September, 17",
    year: 2023,
    area: 25000,
    imageUrl: "images/brasilia-temple"
  },
];

function displayTemples(templesList) {
  const container = document.getElementById("temple-container");
  container.innerHTML = "";

  templesList.forEach(temple => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

function filterTemples(type) {
  let filtered = [];

  switch(type) {
    case "old":
      filtered = temples.filter(t => t.year < 1900);
      break;

    case "new":
      filtered = temples.filter(t => t.year > 2000);
      break;

    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;

    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;

    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

displayTemples(temples);

document.getElementById("year").textContent =
  `© ${new Date().getFullYear()}`;

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;