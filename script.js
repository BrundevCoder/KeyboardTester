const keyboard = document.getElementById("keyboard");

document.addEventListener("keydown", (e) => {
    console.log(e.code)
    let keyName = e.code;

    let element = document.querySelectorAll(`.${keyName}`);
    element.forEach(key => {
        key.classList.add("pressed");
    })

    e.preventDefault();
})