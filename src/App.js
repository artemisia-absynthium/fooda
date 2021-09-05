import './App.css';
import Carousel from 'react-bootstrap/Carousel'
import hamburger from './assets/images/jonathan-borba-8l8Yl2ruUsg-unsplash.jpg'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-name">FOODA</h1>
            </header>
            <main className="Main">
                <h3 className="centered">
                    Fresh food at your door
                </h3>
                <Carousel className="Carousel">
                    <Carousel.Item>
                        <img className="Carousel-content" src={hamburger} alt="Hamburger" />
                    </Carousel.Item>
                </Carousel>
            </main>
        </div>
    );
}

export default App;
