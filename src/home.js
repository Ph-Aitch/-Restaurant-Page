import sandwich from './assets/sandwich.jpg';
import friedChicken from './assets/friedChicken.jpg';
import friedChicken2 from './assets/friedChicken2.jpg';
import favicon from './assets/favicon.png';

export const home = (() => {
    const homeBtn = document.querySelector("#home")
    const content = document.querySelector("#content")

    content.classList = ``
    content.classList.toggle("home", true)
    content.innerHTML = ``
    content.innerHTML = `<main>
            <section class="hero">
                <div class="slogan">
                    <h1>Cluckin' Good Flavor in Every Crunch!</h1>
                    <button><span class="material-symbols-outlined">
                            shopping_bag
                        </span> Order pickup</button>
                    <button><span class="material-symbols-outlined">
                            delivery_truck_speed
                        </span> Order dilevery</button>
                </div>
                <div class="heroimg">
                    <img src="${sandwich}" alt="chicken sandwich">
                </div>
            </section>
            <div class="grid">
                <div class="card">
                    <img src="${friedChicken}" alt="fried chicken">
                    <h3>Get Everything Y’all Love Starting At $20</h3>
                    <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p>
                    <button>Gimme</button>
                </div>
                <div class="card">
                    <img src="${friedChicken2}" alt="fried chicken">
                    <h3>Holiday Happiness Starts with One Easy Order</h3>
                    <p>Give your guests the flavors they love. No haters when Popeyes caters.</p>
                    <button>Order Ahead</button>
                </div>
                <div class="card">
                    <img src="${favicon}" alt="fried chicken">
                    <h3>C'n'C Foundation &trade;</h3>
                    <p>Through our Serving with Love initiative, we are strengthening communities with food and support
                        during times of need.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </main>`

    homeBtn.addEventListener("click", (e) => {
        e.preventDefault()
        content.classList = ``
        content.classList.toggle("home",true)
        content.innerHTML = ``
        content.innerHTML = `<main>
            <section class="hero">
                <div class="slogan">
                    <h1>Cluckin' Good Flavor in Every Crunch!</h1>
                    <button><span class="material-symbols-outlined">
                            shopping_bag
                        </span> Order pickup</button>
                    <button><span class="material-symbols-outlined">
                            delivery_truck_speed
                        </span> Order dilevery</button>
                </div>
                <div class="heroimg">
                    <img src="${sandwich}" alt="chicken sandwich">
                </div>
            </section>
            <div class="grid">
                <div class="card">
                    <img src="${friedChicken}" alt="fried chicken">
                    <h3>Get Everything Y’all Love Starting At $20</h3>
                    <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p>
                    <button>Gimme</button>
                </div>
                <div class="card">
                    <img src="${friedChicken2}" alt="fried chicken">
                    <h3>Holiday Happiness Starts with One Easy Order</h3>
                    <p>Give your guests the flavors they love. No haters when Popeyes caters.</p>
                    <button>Order Ahead</button>
                </div>
                <div class="card">
                    <img src="${favicon}" alt="fried chicken">
                    <h3>C'n'C Foundation &trade;</h3>
                    <p>Through our Serving with Love initiative, we are strengthening communities with food and support
                        during times of need.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </main>`
    })
})();