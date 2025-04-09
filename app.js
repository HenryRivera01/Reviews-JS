const reviews = [
    {
        id: 1,
        name: "Cat Jhones",
        job: "Web Designer",
        img: "src/img1.jpeg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Dolorum, accusamus ratione excepturi optio repellendus laceat delectus exercitationem temporibus commodi.",
    },
    {
        id: 2,
        name: "The Walking Dog",
        job: "Intern",
        img: "src/img2.jpeg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Dolorum, accusamus ratione excepturi optio repellendus laceat delectus exercitationem temporibus commodi.",
    },
    {
        id: 3,
        name: "Podcast Dog",
        job: "UX Designer",
        img: "src/img3.jpeg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Dolorum, accusamus ratione excepturi optio repellendus laceat delectus exercitationem temporibus commodi.",
    },
    {
        id: 4,
        name: "Nerd Cat",
        job: "Backend Dev",
        img: "src/img4.jpeg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Dolorum, accusamus ratione excepturi optio repellendus laceat delectus exercitationem temporibus commodi.",
    },
    {
        id: 5,
        name: "Selfie Dog",
        job: "Data Analist",
        img: "src/img5.jpeg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Dolorum, accusamus ratione excepturi optio repellendus laceat delectus exercitationem temporibus commodi.",
    },
];

//Select Items

const img = document.getElementById('animal-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prevButton");
const nextBtn = document.querySelector(".nextButton");
const randomBtn = document.querySelector(".random-button");
console.log(prevBtn);
//Set Starting Item
let currentItem = 0;

//Load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPet(currentItem);
});


nextBtn.addEventListener('click', ()=>{
    showNextPet()
})
prevBtn.addEventListener('click', ()=>{
    showPrevPet()
})
randomBtn.addEventListener('click', ()=>{
    showRandomPet()
})

function showPet(pet){
    const item = reviews[pet];//Accediendo al objeto mediante el indice
    img.src = item.img;//Traer la foto y demas atributos
    author.textContent = item.name; 
    job.textContent = item.job;
    info.textContent = item.text
    console.log(reviews.length);;
    console.log(currentItem);
}

function showNextPet(){
    currentItem++;
    checkNextIndex();
    showPet(currentItem)
    console.log(currentItem);
}

function showPrevPet(){
        currentItem--;
        checkPrevIndex();
        showPet(currentItem);
        console.log(currentItem);
}

function showRandomPet(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPet(currentItem);
    console.log(currentItem);
}

function checkNextIndex(){
    if(currentItem===reviews.length){
        currentItem = 0;
    }
}
function checkPrevIndex(){
    if(currentItem<0){
        currentItem = reviews.length-1;
    }
}


