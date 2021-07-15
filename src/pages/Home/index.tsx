import '../Home/index.scss';
import logoImg from '../../assets/images/logo.jpg';
import logoFoodImg from '../../assets/images/logo-food.jpg';
import pizzaImg from '../../assets/images/pizza.jpg';

function Home() {
    return (
        <div id="home-page">
            <header>
                <div>
                    <img src={logoImg} alt="Logo PizzaStoom" />
                </div>
                <div>
                    <p><img src={logoFoodImg} alt="Imagem prato de comida" />StoomPoints<br /> 0 pontos.</p>
                </div>
            </header>
            <main>
                <div className="main-content">
                    <h2>Pizza do dia: </h2>
                    <div>
                        <div>
                            <img src={pizzaImg} alt="Pizza Napolitana" />
                        </div>
                        <div>
                            <h2>Pizza Napolitana</h2>
                            <h3>Massa: </h3>
                            <p>Napolitana</p>
                            <h3>Ingredientes:</h3>
                            <p>mussarela, peito de peru, palmito, parmesão, orégano.</p>
                            <div>
                                <p>R$37,00</p>
                                <button>Quero</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
