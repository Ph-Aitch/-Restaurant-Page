import master from "./assets/master.jpg"
import nuggets from "./assets/nuggets_wSauce_PDP.png"
import spicysandwich from "./assets/spicysandwich.png"
import Salads from "./assets/Salads.jpg"
import sides from "./assets/sides.jpg"
import pepperments from "./assets/pepperments.png"
import fudge from "./assets/fudge.jpg"

export function menu() {
    const menubtn = document.querySelector("#menu")
    const content = document.querySelector("#content")

    menubtn.addEventListener("click", (e)=>{
        e.preventDefault()
        content.classList = ``
        content.classList.toggle("menu", true)
        content.innerHTML = ``
        content.innerHTML = `<h1>Chick 'N' Crunch<sup>&reg;</sup> Menu</h1>
        <span>Availability may differ at different locations.</span>
        <div class="itembig">
            <img src="${master}" alt="sandwich">
            <div class="description">
                <div class="desCard">
                    <h2>Entrées</h2>
                    <p>From our original Chick'n'Crunch® Chicken Sandwich to our Chick'n'Crunch® Nuggets and more, we
                        have something for everyone.</p>
                    <button class="cardBtn">View all entrées</button>
                </div>
                <div class="mini">
                    <img src="${nuggets}" alt="nuggets">
                    <div class="descard">
                        <h3>Chick'N'Crunch® Nuggets</h3>
                        <button class="cardBtn">Order now</button>
                    </div>
                </div>
                <div class="mini">
                    <img src="${spicysandwich}" alt="Spicy sandwich">
                    <div class="descard">
                        <h3>Spicy Chicken Sandwich</h3>
                        <button class="cardBtn">Order now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemGrid">
            <div class="item">
                <img src="${Salads}" alt="salads">
                <div class="itemDesc">
                    <h2>Salads</h2>
                    <p>Go green with these options, prepared fresh daily, and perk them up with our variety of
                        dressings.
                    </p>
                    <button class="cardBtn">View all salads</button>
                </div>
            </div>
            <div class="item">
                <img src="${sides}" alt="side dishes">
                <div class="itemDesc">
                    <h2>Sides</h2>
                    <p>An entrée without a side is like a day without sunshine. Whether you choose an old favorite like Waffle Fries or mix it up with something new like Chicken Tortilla Soup, make it a meal by adding a side.</p>
                    <button class="cardBtn">View all sides</button>
                </div>
            </div>
        </div>
        <div class="itemGrid">
            <div class="item">
                <img src="${pepperments}" alt="peppermints">
                <div class="itemDesc">
                    <h2>Peppermints</h2>
                    <p>peppermint treats and sips are back. Treating yourself and those you love is what the holidays are meant for.
                    </p>
                    <button class="cardBtn">View all peppermints</button>
                </div>
            </div>
            <div class="item">
                <img src="${fudge}" alt="Treats">
                <div class="itemDesc">
                    <h2>Treats</h2>
                    <p>You deserve a little something sweet. How does a Chocolate Chunk Cookie, Fudge Brownie, or Milkshake sound?</p>
                    <button class="cardBtn">View all Treats</button>
                </div>
            </div>
        </div>`
    })
}

