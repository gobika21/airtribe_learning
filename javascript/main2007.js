console.log(1);
let a=2;
function xyz() {
    console.log(33);
}
xyz()
setTimeout(() => console.log(22), 5);
setTimeout(() => console.log(12), 0);
function abc() {
    console.log(3113);
}
abc()



const heading = document.querySelector("h1");
const button = document.querySelector("button");
const div = document.querySelector("div");

button.addEventListener("click", () => {
    heading.style.color = "green";
    heading.textContent = "I am a super woman"
    const para = document.createElement("p");
    para.textContent = "I always feel good to my happening";
    // document.body.appendChild(para);

    // document.body.prepend(para);
    div.prepend(para);

    // div.appendChild(para);
    // div.insertBefore(para, div.childrem[0]);
    // div.insertAdjacentElement(para, div.children[0]);

    heading.remove(); // will remove the h1 tag
})



const plateSection  = document.querySelector('.plates');
const addPlateBtn = document.querySelector('.addPlate');

addPlateBtn.addEventListener('click', addPlateAndGuess);

function addPlateAndGuess() {
    const plate = document.createElement('div');
    // plate.classList.add('plate');
    // plateSection.appendChild(plate);

    plate.id = 'newplate';
    const randomPosition = genRandomNum();
    // posText.textContent = posText.textContent + ' ' + (randomPosition + 1); // to show the count in the html page
    plateSection.insertBefore(plate, plateSection.children[randomPosition]);
    // alert('plate added');
}

function genRandomNum() {
    return Math.floor(Math.random() * plateSection.children.length);
}