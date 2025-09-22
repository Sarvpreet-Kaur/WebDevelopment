// Fetching the JSON dummy data
fetch("./data.json")
.then(res => res.json())
.then(restaurants => {
    getRestaurants(restaurants);

    // Alcohol filter
    document.getElementById("Alcohol").addEventListener("click", () => {
        const result = restaurants.filter(obj => obj.alcohol);
        document.getElementById("root").replaceChildren();
        getRestaurants(result);
    });

    // Rating filter
    document.getElementById("Rating").addEventListener("click", () => {
        const result = restaurants.filter(obj => obj.rating > 4.5);
        document.getElementById("root").replaceChildren();
        getRestaurants(result);
    });

    // Show filter popup
    document.getElementById("Filters").addEventListener("click", () => {
        document.getElementById("filterPopup").classList.remove("hidden");
    });

    // Apply filter
    document.getElementById("applyFilter").addEventListener("click", () => {
        const element = document.querySelector('input[name="filterOptions"]:checked');
        if (!element) return;

        const answer = element.value;

        if (answer === "rating") {
            restaurants.sort((a, b) => b.rating - a.rating);
        } 
        else if (answer === "highLow") {
            restaurants.sort((a, b) => b.Price_for_two - a.Price_for_two);
        } 
        else if (answer === "costLowHigh") {
            restaurants.sort((a, b) =>
                a.distance_from_customer_residence -
                b.distance_from_customer_residence);
        } 
        else if (answer === "distance") {
        restaurants.sort(
            (a, b) =>
            a.distance_from_customer_residence -
            b.distance_from_customer_residence);
        }

        document.getElementById("root").replaceChildren();
        document.getElementById("filterPopup").classList.add("hidden");
        getRestaurants(restaurants);
    });

});

// Function to create restaurant cards
function getRestaurants(restaurants) {
    const root = document.getElementById("root");

    restaurants.forEach(restaurant => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = `images/${restaurant.image}.jpeg`;

        const Card_content = document.createElement("div");
        Card_content.classList.add("card-content");

        // Card header
        const Card_header = document.createElement("div");
        Card_header.classList.add("card-header");

        const h3 = document.createElement("h3");
        h3.textContent = restaurant.name;

        const rate = document.createElement("span");
        rate.textContent = "Rating: " + restaurant.rating;
        rate.classList.add("rating");

        Card_header.appendChild(h3);
        Card_header.appendChild(rate);

        // Card footer
        const Card_footer = document.createElement("div");
        Card_footer.classList.add("card-footer");

        const food = document.createElement("span");
        food.textContent = restaurant.food_type;

        const price = document.createElement("span");
        price.textContent = "₹" + restaurant.Price_for_two;

        Card_footer.appendChild(food);
        Card_footer.appendChild(price);

        // Card location
        const Card_location = document.createElement("div");
        Card_location.classList.add("card-location");

        const location = document.createElement("span");
        location.textContent = restaurant.location;

        const distance = document.createElement("span");
        distance.textContent = restaurant.distance_from_customer_residence + "km";

        Card_location.appendChild(location);
        Card_location.appendChild(distance);

        // Build card
        Card_content.appendChild(Card_header);
        Card_content.appendChild(Card_footer);
        Card_content.appendChild(Card_location);

        card.appendChild(image);
        card.appendChild(Card_content);

        root.appendChild(card);
    });
}
