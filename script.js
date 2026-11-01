const markForeverInput = document.getElementById("markForever");

let markForever = false;
let keysMarkedForever = [];

document.addEventListener("keydown", (e) => {
    let keyName = e.code;

    let element = document.querySelectorAll(`.${keyName}`);
    element.forEach(key => {
        key.classList.add("pressed");
        keysMarkedForever.push(`${keyName}`)
    })

    e.preventDefault();
}) 

document.addEventListener("keyup", (e) => {
    if (markForever) {
        return;
    }

    let keyName = e.code;

    let element = document.querySelectorAll(`.${keyName}`);
    element.forEach(key => {
        key.classList.remove("pressed");
    })

    e.preventDefault();
})

markForeverInput.addEventListener("input", () => {
    if (markForeverInput.checked == true) {
        markForever = true;
    }
    else {
        markForever = false;

        for (let i = 0; i < keysMarkedForever.length; i++) {
            const keyName = keysMarkedForever[i];

            let element = document.querySelectorAll(`.${keyName}`);
            element.forEach(key => {
                key.classList.remove("pressed");
            })
        }
        keysMarkedForever = [];
    }
})