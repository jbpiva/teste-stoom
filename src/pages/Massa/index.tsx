import '../Massa/index.scss';
import pizzaImg from '../../assets/images/pizza.jpg';

function Massa() {
    return (
        <div id="massa-page">
            <header>
                <div className="container">
                    <h1>Barra de Progresso</h1>
                    <div id="stepProgressBar">
                        <div className="step">
                            <p className="step-text">Passo 1</p>
                            <div className="bullet">1</div>
                        </div>

                    </div>

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

export default Massa;
