import "./Login.css"

export default function Login(){
    return(
        <main className="acesso-tela">

            <header className="acesso-topo">
                <span className="acesso-logo">Controle TI</span>
            </header>

            <section className="acesso-card">

                <aside className="acesso-painel">
                    <h2>Quem tem o que, num lugar só.</h2>
                    <div className="acesso-animacao" aria-hidden="true"></div>
                </aside>

                <form className="acesso-form">
                    <h1>Login</h1>
                    <label htmlFor="email">Digite seu email: </label>
                    <input id="email" type="email" autoComplete="email" required/>

                    <label htmlFor="password">Digite sua senha: </label>
                    <input id="password" type="password" autoComplete="current-password" required/>


                    <button type="submit">Acessar</button>
                    <p className="acesso-erro"></p>
                </form>

            </section>
        </main>
    )
}