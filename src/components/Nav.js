import whiteLogo from '../images/sp-white-logo.png';



const Nav = ({ authToken }) => {
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={whiteLogo} />
            </div>
            <button className='nav-button'>{authToken ? 'SAIR' : 'ENTRAR'}</button>
        </nav>
    )

}

export default Nav