import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Massa/index.scss';
import pizzaImg from '../../assets/images/pizza.jpg';
import api from '../../services/api';
import { BoxPizza } from './styles';

interface PropsMassas {
    id: string,
    massa: string,
    description: string,
}

function Massa() {
    const history = useHistory();
    const [massas, setMassas] = useState<PropsMassas[]>([]);
    const [selectedMassa, setSelectedMassa] = useState("");

    useEffect(() => {
        api.get('/massas').then((response) => {
            setMassas(response.data);
        })
    }, []);

    function handlePizzaType() {
        history.push('/recheio/new');
    }

    function handleSelectedMassa(id: string) {
        setSelectedMassa(id);
    }

    return (
        <div id="massa-page">
            <header>
                <div className="container">
                    <h1>Barra de Progresso</h1>
                    <div id="stepProgressBar">
                        <div className="step">
                            <p className="step-text">Passo 1</p>
                            <div className="bullet completed">1</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Passo 2</p>
                            <div className="bullet">2</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Passo 3</p>
                            <div className="bullet">3</div>
                        </div>

                    </div>

                </div>
            </header>
            <main>
                {massas.map(({ massa, description, id }) => (
                    <form>
                        <BoxPizza key={id} className="main-content" isActive={id !== selectedMassa && selectedMassa !== ""}>
                            <div className="radio-button">
                                <button type="button" className="select-button" onClick={() => handleSelectedMassa(id)}>Selecionar</button>
                            </div>
                            <h2>Massa: {massa}</h2>
                            <div>
                                <div>
                                    <img src={pizzaImg} alt="Pizza Napolitana" />
                                </div>
                                <div>
                                    <h3>Massa:</h3>
                                    <p>{massa}</p>
                                    <h3>Descri????o:</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </BoxPizza>
                    </form>
                ))
                }
            </main>
            <footer>
                <div>
                    <button type="button" onClick={handlePizzaType}>Pr??ximo Step</button>
                </div>
            </footer>
        </div>
    );
}

export default Massa;
