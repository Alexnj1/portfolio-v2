// line clamp buttons

let fDevBtn = document.querySelector("#f-dev-view-more");
let fDevInfo = document.querySelector("#f-end-info");
let bDevBtn = document.querySelector("#b-dev-view-more");
let bDevInfo = document.querySelector("#b-end-info");


function fDevHandler() {
    fDevInfo.classList.remove('line-clamp')
    fDevBtn.classList.add('d-none')
}

function bDevHandler() {
    bDevInfo.classList.remove('line-clamp')
    bDevBtn.classList.add('d-none')
}

fDevBtn.addEventListener('click', fDevHandler);
bDevBtn.addEventListener('click', bDevHandler);

// app viewer buttons

let appView = document.querySelectorAll('.app-view-btn');
let appViewport = document.querySelector('iframe');

function appViewer (event) {
    console.log(event.target)

    appViewport.classList.remove('d-none')
    appViewport.setAttribute('src', event.target.name)

}

appView.forEach((element)=> {
    element.addEventListener('click', appViewer)
})
