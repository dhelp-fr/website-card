// local reviews data
const reviews = [
    {
      id: 1,
      name: "Satrex",
      job: "Fondateur de DHelp",
      img:
        "https://cdn.discordapp.com/attachments/1111757577211093071/1167024423061168128/discordpp.png?ex=654c9f30&is=653a2a30&hm=0b07224a4bd42f6eb7afc6ddd3cfa27a71e9140bc5a33267b095b6712d47903c&",
      text:
        "Je suis un jeune développeur débutant, en quête de nouvelles connaissances et expériences pour m'améliorer dans ce domaine.",
    },
    {
      id: 2,
      name: "Ines",
      job: "Développeur",
      img:
        "https://cdn.discordapp.com/attachments/1148643302434938951/1167025619423461437/3f703e7088cee4bddc69e2cbc0804ba3.png?ex=654ca04d&is=653a2b4d&hm=61584cd1bcdf8ac3fd9ae8e3ef86b0cd65371a8aef7ffcb6c3bfa6571ab93e55&",
      text:
        "Salut, je fais partie de l'équipe DHelp en tant que développeur et modérateur.",
    },
    {
      id: 3,
      name: "Blackbird",
      job: "Co-fondateur de DHelp",
      img:
        "https://cdn.discordapp.com/attachments/1148643302434938951/1167026116700155924/a_9b91b920e139604cf73f4909d90e2fce.gif?ex=654ca0c4&is=653a2bc4&hm=4f9d82398619dde653fddf930855b34d45c1337d4f2219013a1d40af18a1cfb9&",
      text:
        "Je suis un jeune apprenti développeur passionné de développement web.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });