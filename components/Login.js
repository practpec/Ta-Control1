import "../styles/login.css";
import logoL from "../img/logoLogin.png";

function Login(){
    return(
        <div className="login">
            <div className="logo">
                <img src={logoL.src} alt="Ta-control"/>
            </div>

            <div className="mitad">
                
                
                <form onSubmit={handleSubmit}>
                    <h1>Iniciar sesión</h1>
                    <label>Usuario</label>
                    <input
                        type="text"
                        placeholder="Nombre de usuario (correo electrónico)"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button type="submit">
                        Iniciar sesión
                    </button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;