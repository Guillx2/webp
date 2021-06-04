import "../assets/css/Informacion.css";
import fotoperfil from "../assets/images/fotoperfil.jpg";

const Informacion = () => {
  return (
    <section className="informacion-container">
      <h1 className="informacion-titulo">Información</h1>
      <div className="informacion-content">
        <div className="informacion-left">
          <img src={fotoperfil} className="informacion-fotoperfil" alt=""></img>
        </div>

        <div className="informacion-right">
          <h2 className="informacion-nombre">Salvador Gil Varela</h2>
          <p className="fecha-nacimiento">Laxe, 2 de diciembre de 1946</p>
          <p className="informacion-texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            interdum quis metus eu imperdiet. Curabitur sit amet lobortis nunc.
            Phasellus sed orci vitae arcu tristique imperdiet. Aliquam laoreet,
            risus sed porttitor tincidunt, velit magna mattis ligula, at mattis
            purus massa at diam. Sed condimentum velit in sem tempor, eget
            ultrices lectus mattis. Phasellus non mauris lectus. Ut luctus, nibh
            convallis dignissim iaculis, dolor enim sodales nulla, at dignissim
            massa felis non nulla. Etiam nec tellus ac libero faucibus
            consectetur. Donec tortor nibh, hendrerit id tincidunt eleifend,
            pulvinar eu dolor. Pellentesque at iaculis libero, nec pellentesque
            lorem. Nunc non porttitor arcu, ut euismod metus. Curabitur vehicula
            pellentesque lorem a efficitur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Informacion;
