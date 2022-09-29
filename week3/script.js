let clrBtn = document.getElementById("colorBtn");
        const mnElements = document.getElementById("mainElem");
        const txtBtn = document.getElementById("textBtn");
        const imgBtn = document.getElementById("imageBtn");

        const addSomeText = () => {
            let htmlElem = document.createElement("h3");
            let someText = "This is a string of text";

            htmlElem.innerText = someText;

            mnElements.appendChild(htmlElem);
        }

        const addAnImage = () => {
            let imgElem = document.createElement("img");
            imgElem.src = "SNice.svg";
            imgElem.alt = "smiley face";
            imgElem.classList.add("my-class");


            mnElements.appendChild(imgElem);
        }

        txtBtn.addEventListener("click", addSomeText);
        imgBtn.addEventListener("click", addAnImage);

        clrBtn.addEventListener("click", ()=>{
            let red = Math.random()*255;
            let green = Math.random()*255;
            let blue = Math.random()*255;
            mnElements.style.backgroundColor = "rgb("+ red +","+ green +","+ blue+")";
        })