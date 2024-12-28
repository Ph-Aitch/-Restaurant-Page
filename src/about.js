import eating from "./assets/eating.jpg"
import founder from "./assets/founder.jpg"
import herosupa from "./assets/herosupa.jpg"

export function about() {
    const aboutbtn = document.querySelector("#about")
    const content = document.querySelector("#content")

    aboutbtn.addEventListener("click", (e)=>{
        e.preventDefault()
        content.classList = ``
        content.classList.toggle("about", true)
        content.innerHTML = ``
        content.innerHTML = `<h1>It starts with a Smile 😊</h1>
        <span>Whether greeting you at the drive-thru or making your meal inside the restaurant, Chick'N'Crunch<sup>&reg;</sup> Team Members strive to serve up memorable experiences for each and every guest. And we hope that dining with us inspires you to spread that sense of warmth to others, too.</span>
        <div class="abt_item">
            <img src="${eating}" alt="eating">
            <div class="abt_item_desc">
                <h2>Experience the Joy of Dining Together at Our Restaurant!</h2>
                <p>Gather your friends and indulge in a delightful culinary adventure at our restaurant, where every meal is a celebration! From our mouthwatering dishes crafted with the freshest ingredients to our warm and inviting atmosphere, we create the perfect setting for unforgettable moments. Whether you're sharing a hearty feast or savoring our signature cocktails, the laughter and camaraderie will make your dining experience truly special. Join us for a memorable evening filled with great food, good company, and lasting memories. Come hungry, leave happy—because at our restaurant, every meal is better when shared with friends!</p>
            </div>
        </div>
        <div class="abt_item">
            <img src="${founder}" alt="founder">
            <div class="abt_item_desc">
                <h2>A Legacy of Flavor: The Story of James Anderson</h2>
                <p>Our restaurant was founded in 1973 by James Anderson, a passionate culinary visionary dedicated to creating exceptional dining experiences. With a commitment to quality and a love for bringing people together, James transformed a small eatery into a beloved local gem. Today, we honor his legacy by serving delicious dishes made from the finest ingredients, ensuring every guest feels like part of our family.</p>
                <button class="cardBtn">Know more about our Company</button>
            </div>
        </div>
        <div class="abt_item">
            <img src="${herosupa}" alt="herosupalego">
            <div class="abt_item_desc">
                <h2>Our hometown heroes, your local Operator</h2>
                <p>As your local operator, we are dedicated to serving delicious meals while fostering connections within our community. Our passionate team supports local suppliers and celebrates the unique flavors of our region. Join us in honoring the hardworking heroes behind the scenes who ensure every dining experience is memorable and filled with warmth. Together, let’s celebrate the essence of home!</p>
                <button class="cardBtn">Know more about our Company</button>
            </div>
        </div>`
    })
}