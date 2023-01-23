function more() {
    let nav = document.getElementById('nav');

    console.log(nav.style.display)
    if (nav.style.display == "none")
        nav.style.display = "block";
    else
        nav.style.display = "none";
}