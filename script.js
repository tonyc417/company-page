console.log("Working buddy")

function showMenu() {

    console.log("Function fired")

    let element = document.getElementById('header');

    if (element.style.display === "block") {
        console.log("This is a block display works");
        element.style.display = "none";
    } else {
        element.style.display = "block";
        console.log("This is not a block display");
    }
}
