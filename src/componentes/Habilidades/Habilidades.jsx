import logoHtml from "../img/Logos/html.png";
import logoCss from "../img/Logos/css.png";
import logoJs from "../img/Logos/js.png";
import logoReact from "../img/Logos/react.png";


const Habilidades = () =>{
    return(
        <div>
        <section>
        <img className="logo-habilidades" src={logoHtml} alt="" />
        <img className="logo-habilidades" src={logoCss} alt="" />
        <img className="logo-habilidades" src={logoJs} alt="" />
        <img className="logo-habilidades" src={logoReact} alt="" />
        </section>
        </div>
    )
}

export default Habilidades