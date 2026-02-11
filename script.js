function bookCar(car){
    alert("Booking confirmed for " + car);
}

/* Search Filter */

let input = document.getElementById("searchInput");

input.addEventListener("keyup", function(){
    let filter = input.value.toLowerCase();
    let cards = document.querySelectorAll(".car-card");

    cards.forEach(card=>{
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(filter) ? "" : "none";
    });
});
