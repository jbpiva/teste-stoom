import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Home/index.scss';
import logoImg from '../../assets/images/logo.jpg';
import logoFoodImg from '../../assets/images/logo-food.jpg';
import pizzaImg from '../../assets/images/pizza.jpg';
import api from '../../services/api';
import starImg from '../../assets/images/star.png';

interface PropsPizza {
    id: string,
    sabor: string,
    massa: string,
    ingredientes: string,
    valor: string,
    do_dia: Boolean,
    pontos: number
}

function Home() {
    const history = useHistory();
    const [pizzas, setPizzas] = useState<PropsPizza[]>([]);
    const initialCount = () => Number(window.localStorage.getItem('count'));
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        window.localStorage.setItem('count', JSON.stringify(count))
    }, [count]
    );

    useEffect(() => {
        api.get('/pizzas').then((response) => {
            setPizzas(response.data);
        })
    }, []);

    function increment(pontos: number) {
        setCount(count + pontos);
    }

    function handleCreatePizza() {
        history.push('/massas/new');
    }

    return (
        <div id="home-page">
            <header>
                <div>
                    <img src={logoImg} alt="Logo PizzaStoom" />
                </div>
                <div>
                    <p><img src={logoFoodImg} alt="Imagem prato de comida" />StoomPoints<br /> {count} pontos.</p>
                </div>
            </header>
            <main>
                {pizzas.map(({ sabor, massa, ingredientes, valor, id, do_dia, pontos }) => (
                    <div key={id} className="main-content">
                        <div className={`star ${do_dia ? 'active' : ''}`}>
                            {do_dia ?
                                <img src={starImg} alt="50 Pontos" /> : ''
                            }
                        </div>
                        <h2>Pizza do dia: </h2>
                        <div>
                            <div>
                                <img src={pizzaImg} alt="Pizza Napolitana" />
                            </div>

                            <div>
                                <h2>Pizza {sabor}</h2>
                                <h3>Massa: </h3>
                                <p>{massa}</p>
                                <h3>Ingredientes:</h3>
                                <p>{ingredientes}</p>
                                <div>
                                    <p>R${valor}</p>
                                    <button type="button" onClick={() => increment(pontos)}>Quero</button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
                }
            </main>
            <footer>
                <div>
                    <button type="button" onClick={handleCreatePizza}>Monte sua Pizza</button>
                </div>
            </footer>
        </div >
    );
}

export default Home;
