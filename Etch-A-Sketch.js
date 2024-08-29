document.addEventListener("DOMContentLoaded", () =>
{
    const container = document.querySelector(".container");
    for(let i=0; i<16*16; i++) {
        let grid = document.createElement("div");
        grid.setAttribute("class","grid-item");
        grid.style.flex =  `1 0 ${100/16}%`;
        grid.addEventListener("mouseover", () =>
            {
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                grid.style.backgroundColor = randomColor;
            });

        container.appendChild(grid);
    }
});

let btn = document.querySelector("button");

btn.addEventListener("click", () =>
{
    const container = document.querySelector(".container");
    container.innerHTML = "";
    let result = prompt("Enter the number of square per side:");
    result = parseInt(result, 10);
    if (isNaN(result)) {
        alert("wrong type");
    }
    else if (result > 100) {
        alert("the number you entered is beyond scale");
    }
    else{
        for(let i=0; i<result*result; i++) {
            let grid = document.createElement("div");
            grid.setAttribute("class","grid-item");
            grid.style.flex =  `1 0 ${100/result}%`;
            grid.addEventListener("mouseover", () =>
                {
                    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                    grid.style.backgroundColor = randomColor;
                });
    
            container.appendChild(grid);
        }
    }
});

