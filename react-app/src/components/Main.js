//import foodImg from "../assets/images/food-tray.jpg"
export default function Main({menuOpen, setMenuOpen}) {
    return <main className="container">
        <article className="hero-section">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Taste the Mediterranean by the sea. fresh ingredients, vibrant flavors, and warm hospitality, inviting you to relax and savor every moment.</p>
                <button className="reserve-button">
                    <p>Reserve a Table</p>
                </button>
                </div>
            <div id="img"/>
        </article>
        <div className="highlights">
            <h2>Our Specials</h2>
            <div className="card"></div>
        </div>
    </main>
}