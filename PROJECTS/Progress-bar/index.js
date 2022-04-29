console.log("hello there");

// create variables
let html = document.querySelector(".html span");
let css = document.querySelector(".css span");
let php = document.querySelector(".php span");
let javascript = document.querySelector(".javascript span");
let python = document.querySelector(".python span");
let react = document.querySelector(".react span");

// crate keyFrames
let keyFrames = document.createElement("style");

keyFrames.innerHTML = `
@keyframes html {
    100% {
        width: ${html.innerHTML};
    }
}
@keyframes css {
    100% {
        width: ${css.innerHTML};
    }
}
@keyframes php {
    100% {
        width: ${php.innerHTML};
    }
}
@keyframes javascript {
    100% {
        width: ${javascript.innerHTML};
    }
}
@keyframes python {
    100% {
        width: ${python.innerHTML};
    }
}
@keyframes react {
    100% {
        width: ${react.innerHTML};
    }
}

`;

// append keyFrames

html.appendChild(keyFrames);
css.appendChild(keyFrames);
php.appendChild(keyFrames);
javascript.appendChild(keyFrames);
python.appendChild(keyFrames);
react.appendChild(keyFrames);
