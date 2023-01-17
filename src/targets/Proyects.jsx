import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HANDLER_SKILLS,
  HANDLER_HOME,
  HANDLER_PROYECTS,
  PROYECTS_ACTIVE,
  ACTIVE_MODAL,
} from "../redux/reducer/handler";
import { getNumberUser } from "../services/routes";
import add from "../assets/add.png";
import user from "../assets/user.png";
import editPdf from "../assets/editPdf.png";
import quest100 from "../assets/100-Mexicanos1.png";
import res100 from "../assets/100-Mexicanos2.png";
import home100 from "../assets/home100.png";
import work from "../assets/principal.png";
import work1 from "../assets/resultWork.png";
import work2 from "../assets/work.png";
import multi from "../assets/multi.png";
import multi1 from "../assets/multi1.png";
import multi2 from "../assets/multi3.png";
import discord from "../assets/discord.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Proyects = () => {
  const handlerHome = useSelector((state) => state.handlerHome),
    handlerSkills = useSelector((state) => state.handlerSkills),
    activeModal = useSelector((state) => state.handlerSkills),
    handlerProyects = useSelector((state) => state.activeModal),
    proyectActive = useSelector((state) => state.proyectActive),
    [numberUser, setNumberUser] = useState(0),
    [showPdf1, setShowPdf1] = useState(false),
    [showPdf2, setShowPdf2] = useState(false),
    [showPdf3, setShowPdf3] = useState(false),
    [showWork1, setShowWork1] = useState(false),
    [showWork2, setShowWork2] = useState(false),
    [showWork3, setShowWork3] = useState(false),
    [showPokemon1, setShowPokemon1] = useState(false),
    [showPokemon2, setShowPokemon2] = useState(false),
    [showPokemon3, setShowPokemon3] = useState(false),
    [show1001, setShow1001] = useState(false),
    [show1002, setShow1002] = useState(false),
    [show1003, setShow1003] = useState(false),
    refProyects = useRef(),
    dispatch = useDispatch();

  const handlerBtn = () => {
    if (handlerHome === "center") {
      dispatch(HANDLER_HOME("left"));
      setTimeout(() => {
        dispatch(HANDLER_SKILLS("left"));
      }, 200);
      setTimeout(() => {
        dispatch(HANDLER_PROYECTS("center"));
        refProyects.current.classList.remove("rigth");
        refProyects.current.classList.add("show");
      }, 400);
    }

    if (handlerSkills === "center") {
      dispatch(HANDLER_SKILLS("left"));
      setTimeout(() => {
        dispatch(HANDLER_PROYECTS("center"));
        refProyects.current.classList.remove("rigth");
        refProyects.current.classList.add("show");
      }, 200);
    }
  };

  useEffect(() => {
    if (handlerHome === "center") {
      refProyects.current.classList.add("rigth");
      refProyects.current.classList.remove("show");
    }
  }, [handlerHome]);

  useEffect(() => {
    if (handlerSkills === "center") {
      refProyects.current.classList.add("rigth");
      refProyects.current.classList.remove("show");
    }
  }, [handlerSkills]);

  const openModalPdf1 = () => {
    handleShowPdf1();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModalPdf2 = () => {
    handleShowPdf2();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModalPdf3 = () => {
    handleShowPdf3();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModalPokemon1 = () => {
    handleShowPokemon1();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModalPokemon2 = () => {
    handleShowPokemon2();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModalPokemon3 = () => {
    handleShowPokemon3();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModalWork1 = () => {
    handleShowWork1();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModalWork2 = () => {
    handleShowWork2();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModalWork3 = () => {
    handleShowWork3();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModal1001 = () => {
    handleShow1001();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModal1002 = () => {
    handleShow1002();
    dispatch(ACTIVE_MODAL(true));
  };

  const openModal1003 = () => {
    handleShow1003();
    dispatch(ACTIVE_MODAL(true));
  };

  const handleShowPdf1 = () => setShowPdf1(true);
  const handleClosePdf1 = () => {
    setShowPdf1(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShowPdf2 = () => setShowPdf2(true);
  const handleClosePdf2 = () => {
    setShowPdf2(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShowPdf3 = () => setShowPdf3(true);
  const handleClosePdf3 = () => {
    setShowPdf3(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShowPokemon1 = () => setShowPokemon1(true);
  const handleClosePokemon1 = () => {
    setShowPokemon1(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShowPokemon2 = () => setShowPokemon2(true);
  const handleClosePokemon2 = () => {
    setShowPokemon2(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShowPokemon3 = () => setShowPokemon3(true);
  const handleClosePokemon3 = () => {
    setShowPokemon3(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShowWork1 = () => setShowWork1(true);
  const handleCloseWork1 = () => {
    setShowWork1(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShowWork2 = () => setShowWork2(true);
  const handleCloseWork2 = () => {
    setShowWork2(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShowWork3 = () => setShowWork3(true);
  const handleCloseWork3 = () => {
    setShowWork3(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShow1001 = () => setShow1001(true);
  const handleClose1001 = () => {
    setShow1001(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShow1002 = () => setShow1002(true);
  const handleClose1002 = () => {
    setShow1002(false);
    dispatch(ACTIVE_MODAL(false));
  };
  const handleShow1003 = () => setShow1003(true);
  const handleClose1003 = () => {
    setShow1003(false);
    dispatch(ACTIVE_MODAL(false));
  };

  const getNumber = async () => {
    const auxNumber = await getNumberUser();
    /* if (auxNumber.data.findNewUser[0].numberUser > numberUser) {
      const interval = setInterval(() => {
        setNumberUser(numberUser + 1)
        if (numberUser === auxNumber.data.findNewUser[0].numberUser) {
          clearInterval(interval)
        }
      }, 200);
    }else {
    } */
    console.log(auxNumber.data.findNewUser[0].numberUser);
    setNumberUser(auxNumber.data.findNewUser[0].numberUser)
  };


  return (
    <div id="divProyects" ref={refProyects}>
      <div>
        <button onClick={handlerBtn}> PROYECTS</button>
      </div>
      {proyectActive === 1 ? (
        <div>
          <div>
            <button
              onClick={() => {
                dispatch(PROYECTS_ACTIVE(2));
                getNumber();
              }}
            >
              {" "}
              Who is this pokemon?{" "}
            </button>
            <button onClick={() => dispatch(PROYECTS_ACTIVE(3))}>
              {" "}
              ¿Qué dias trabajas?{" "}
            </button>
            <button onClick={() => dispatch(PROYECTS_ACTIVE(4))}>
              {" "}
              100 Mexicanos Dijeron{" "}
            </button>
          </div>
          <div>
            <div>
              {" "}
              <h1>
                Pdf Edit es una herramienta pensada para que el llenado de
                documentos sea mas rapido y eficiente.
              </h1>{" "}
            </div>
            <div>
              <img src="https://img.shields.io/badge/MongoDB-626b71?style=for-the-badge&logo=mongodb&logoColor=success&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Node.js-626b71?style=for-the-badge&logo=nodedotjs&logoColor=4EA94B&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Express.js-626b71?style=for-the-badge&logo=express&logoColor=white&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/React-626b71?style=for-the-badge&logo=react&logoColor=61DAFB&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Redux-626b71?style=for-the-badge&logo=redux&logoColor=blueviolet&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Socket.io-626b71?style=for-the-badge&logo=socket.io&logoColor=white&color=rgba(103, 103, 158, 0.329)" />
            </div>
            <div className="targets">
              {showPdf1 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={showPdf1}
                    onHide={handleClosePdf1}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleClosePdf1}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={add} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Crea tus plantillas usando las herramientas mas
                            usadas para edicion de documentos.{" "}
                          </h2>
                          <h2>
                            Usa la base datos nominal para agregar datos de
                            empleados que en el momento no recuerdes.
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModalPdf1} src={add} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Crea tus plantillas usando las herramientas mas usadas
                      para edicion de documentos.{" "}
                    </h2>
                    <h2>
                      Usa la base datos nominal para agregar datos de empleados
                      que en el momento no recuerdes.
                    </h2>
                  </div>
                </div>
              )}
              {showPdf2 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={showPdf2}
                    onHide={handleClosePdf2}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleClosePdf2}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={user} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            En tu cuenta podras acceder a tus plantillas
                            privadas, a las publicas donde tendran acceso toda
                            persona que tenga cuenta y en las de equipo para
                            todos los trabajadores de tu area laboral.{" "}
                          </h2>
                          <h2>
                            {" "}
                            Podras elegir la privacidad de tus plantillas para
                            designar que usuarios podran usarlas.{" "}
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModalPdf2} src={user} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      En tu cuenta podras acceder a tus plantillas privadas, a
                      las publicas donde tendran acceso toda persona que tenga
                      cuenta y en las de equipo para todos los trabajadores de
                      tu area laboral.{" "}
                    </h2>
                    <h2>
                      {" "}
                      Podras elegir la privacidad de tus plantillas para
                      designar que usuarios podran usarlas.{" "}
                    </h2>
                  </div>
                </div>
              )}
              {showPdf3 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={showPdf3}
                    onHide={handleClosePdf3}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleClosePdf3}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={editPdf} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Rellena la plantilla usando la base de datos
                            nominales así como las herramientas que se te
                            preporcionan.{" "}
                          </h2>
                          <h2>
                            {" "}
                            Elige entre decargar el documento, solo guardarlo o
                            mandarlo por correo.{" "}
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModalPdf3} src={editPdf} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Rellena la plantilla usando la base de datos nominales así
                      como las herramientas que se te preporcionan.{" "}
                    </h2>
                    <h2>
                      {" "}
                      Elige entre decargar el documento, solo guardarlo o
                      mandarlo por correo.{" "}
                    </h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : proyectActive === 2 ? (
        <div>
          <div>
            <button onClick={() => dispatch(PROYECTS_ACTIVE(1))}>
              {" "}
              PDF Edit{" "}
            </button>
            <button onClick={() => dispatch(PROYECTS_ACTIVE(3))}>
              {" "}
              ¿Qué dias trabajas?{" "}
            </button>
            <button onClick={() => dispatch(PROYECTS_ACTIVE(4))}>
              {" "}
              100 Mexicanos Dijeron{" "}
            </button>
          </div>
          <div>
            <div>
              {" "}
              <h1>
                Demuestrale a tus amigos quien es el mejor maestro pokemon
                jugando este juego.
              </h1>{" "}
            </div>
            <div>
              <img src="https://img.shields.io/badge/MongoDB-626b71?style=for-the-badge&logo=mongodb&logoColor=success&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Node.js-626b71?style=for-the-badge&logo=nodedotjs&logoColor=4EA94B&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Express.js-626b71?style=for-the-badge&logo=express&logoColor=white&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/React-626b71?style=for-the-badge&logo=react&logoColor=61DAFB&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Redux-626b71?style=for-the-badge&logo=redux&logoColor=blueviolet&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Socket.io-626b71?style=for-the-badge&logo=socket.io&logoColor=white&color=rgba(103, 103, 158, 0.329)" />
            </div>
            <div className="targets">
              {showPokemon1 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={showPokemon1}
                    onHide={handleClosePokemon1}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleClosePokemon1}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={multi} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Adivina al pokemon atrapado en la pokeball usando
                            los datos que se te proporcionaran.{" "}
                          </h2>
                          <h2>
                            Crea habitaciones de juego para competir con tus
                            amigos.
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModalPokemon1} src={multi} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Adivina al pokemon atrapado en la pokeball usando los
                      datos que se te proporcionaran.{" "}
                    </h2>
                    <h2>
                      Crea habitaciones de juego para competir con tus amigos.
                    </h2>
                  </div>
                </div>
              )}
              {showPokemon2 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={showPokemon2}
                    onHide={handleClosePokemon2}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleClosePokemon2}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={discord} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Por el momento el servidor y la pagina estan
                            alojados en pruebas gratuitas asi que se hicieron un
                            numero limitados de habitaciones para jugar
                            multijugador.{" "}
                          </h2>
                          <h2>
                            {" "}
                            Se uso la libreria Discord.js para crear un bot para
                            la aplicaion de Discord que de los codigos de acceso
                            a los usuarios que estan detro de un grupo de un
                            stremer. Puedes probar el juego multijugador con la
                            siguiente acceso:
                            <br /> "Arkeanos-nhjit".{" "}
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModalPokemon2} src={discord} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Por el momento el servidor y la pagina estan alojados en
                      pruebas gratuitas asi que se hicieron un numero limitados
                      de habitaciones para jugar multijugador.{" "}
                    </h2>
                    <h2>
                      {" "}
                      Se uso la libreria Discord.js para crear un bot para la
                      aplicaion de Discord que de los codigos de acceso a los
                      usuarios que estan detro de un grupo de un stremer. Puedes
                      probar el juego multijugador con la siguiente acceso:
                      <br /> "Arkeanos-nhjit".{" "}
                    </h2>
                  </div>
                </div>
              )}
              {showPokemon3 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={showPokemon3}
                    onHide={handleClosePokemon3}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleClosePokemon3}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={multi2} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Dentro de la habitacion el creador de esta podra
                            iniciar las partidas con las opciones que se les
                            presenta .{" "}
                          </h2>
                          <h2>
                            Al final de cada partida obtendras los datos de esta
                            tanto tuyos como de tus amigos.
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModalPokemon3} src={multi2} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Dentro de la habitacion el creador de esta podra iniciar
                      las partidas con las opciones que se les presenta .{" "}
                    </h2>
                    <h2>
                      Al final de cada partida obtendras los datos de esta tanto
                      tuyos como de tus amigos.
                    </h2>
                  </div>
                </div>
              )}
            </div>
            <div id="numberUser">
              <div>
                <h1>Numero de usuarios:</h1>
                <h1>{numberUser}</h1>
              </div>
            </div>
            <div id="enlace">
              <a
                target="_blank"
                href="https://who-is-this-pokemon.onrender.com/home"
              >
                visitar
              </a>
            </div>
          </div>
        </div>
      ) : proyectActive === 3 ? (
        <div>
          <div>
            <button onClick={() => dispatch(PROYECTS_ACTIVE(1))}>
              {" "}
              PDF Edit{" "}
            </button>
            <button
              onClick={() => {
                dispatch(PROYECTS_ACTIVE(2));
                getNumber();
              }}
            >
              {" "}
              Who is this pokemon?{" "}
            </button>
            <button onClick={() => dispatch(PROYECTS_ACTIVE(4))}>
              {" "}
              100 Mexicanos Dijeron{" "}
            </button>
          </div>
          <div>
            <div>
              {" "}
              <h1>
                Predice tus dias de descanso con anticipacion si trabajas turnos
                de 4*3.
              </h1>{" "}
            </div>
            <div>
              <img src="https://img.shields.io/badge/HTML-626b71?style=for-the-badge&logo=html5&logoColor=dd4b25&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/css-626b71?style=for-the-badge&logo=css3&logoColor=2091eb&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/JS-626b71?style=for-the-badge&logo=javascript&logoColor=efd81d&color=rgba(103, 103, 158, 0.329)" />
            </div>
            <div className="targets work">
              {showWork1 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={showWork1}
                    onHide={handleCloseWork1}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleCloseWork1}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={work} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Llena los inputs con los datos de tu ultimo cambio
                            de turno y preciona el boton para obtner tu
                            prediccion.{" "}
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModalWork1} src={work} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Llena los inputs con los datos de tu ultimo cambio de
                      turno y preciona el boton para obtner tu prediccion.{" "}
                    </h2>
                  </div>
                </div>
              )}
              {showWork2 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={showWork2}
                    onHide={handleCloseWork2}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleCloseWork2}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={work1} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Obtendra tanto el mensaje que te diar si el dia
                            solicitado trabaras o no, asi como otro donde veras
                            en que turno estaras en esa semana.{" "}
                          </h2>
                          <h2>
                            {" "}
                            El Calendario mostrara con codigo de colores los
                            turno que tendras cada semana.{" "}
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModalWork2} src={work1} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Obtendra tanto el mensaje que te diar si el dia solicitado
                      trabaras o no, asi como otro donde veras en que turno
                      estaras en esa semana.{" "}
                    </h2>
                    <h2>
                      {" "}
                      El Calendario mostrara con codigo de colores los turno que
                      tendras cada semana.{" "}
                    </h2>
                  </div>
                </div>
              )}
              {showWork3 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={showWork3}
                    onHide={handleCloseWork3}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleCloseWork3}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target" className="work">
                        <div>
                          <img src={work2} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Ejemplo de cartel que se uso en la empresa Doiter
                            para presentar la pagina a los operadores.{" "}
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModalWork3} src={work2} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Ejemplo de cartel que se uso en la empresa Doiter para
                      presentar la pagina a los operadores.{" "}
                    </h2>
                  </div>
                </div>
              )}
            </div>
            <div id="enlace">
              <a target="_blank" href="https://jarmandoalt.github.io/workDays/">
                visitar
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <button onClick={() => dispatch(PROYECTS_ACTIVE(1))}>
              {" "}
              PDF Edit{" "}
            </button>
            <button
              onClick={() => {
                dispatch(PROYECTS_ACTIVE(2));
                getNumber();
              }}
            >
              {" "}
              Who is this pokemon?{" "}
            </button>
            <button onClick={() => dispatch(PROYECTS_ACTIVE(3))}>
              {" "}
              ¿Qué dias trabajas?{" "}
            </button>
          </div>
          <div>
            <div>
              {" "}
              <h1>Juega con tus amigos al popular juego de preguntas.</h1>{" "}
            </div>
            <div>
              <img src="https://img.shields.io/badge/MongoDB-626b71?style=for-the-badge&logo=mongodb&logoColor=4EA94B&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Node.js-626b71?style=for-the-badge&logo=nodedotjs&logoColor=4EA94B&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Express.js-626b71?style=for-the-badge&logo=express&logoColor=white&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/React-626b71?style=for-the-badge&logo=react&logoColor=61DAFB&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/Socket.io-626b71?style=for-the-badge&logo=socket.io&logoColor=white&color=rgba(103, 103, 158, 0.329)" />
              <img src="https://img.shields.io/badge/docker-626b71?style=for-the-badge&logo=docker&logoColor=61DAFB&color=rgba(103, 103, 158, 0.329)" />
            </div>
            <div className="targets">
              {show1001 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={show1001}
                    onHide={handleClose1001}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleClose1001}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={home100} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            En el menu principal podras elegir entre el modo un
                            pareja y el modo equipo.{" "}
                          </h2>
                          <h2>
                            Gracias a los sockets sera mas facil la
                            administracion en de la consola y el panel ya que
                            estos se separan en diferentes ventanas.
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModal1001} src={home100} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      En el menu principal podras elegir entre el modo un pareja
                      y el modo equipo.{" "}
                    </h2>
                    <h2>
                      Gracias a los sockets sera mas facil la administracion en
                      de la consola y el panel ya que estos se separan en
                      diferentes ventanas.
                    </h2>
                  </div>
                </div>
              )}
              {show1002 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={show1002}
                    onHide={handleClose1002}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleClose1002}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={quest100} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Con las base de datos previamenete rellenada el
                            manipulador de la consola solo tendra que pasar
                            entre preguntas y seleccionar los botones de las
                            respuestas de los concursantes.{" "}
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModal1002} src={quest100} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Con las base de datos previamenete rellenada el
                      manipulador de la consola solo tendra que pasar entre
                      preguntas y seleccionar los botones de las respuestas de
                      los concursantes.{" "}
                    </h2>
                  </div>
                </div>
              )}
              {show1003 ? (
                <div id="shadow">
                  <Modal
                    className="modalCss"
                    show={show1003}
                    onHide={handleClose1003}
                    animation={false}
                  >
                    <Modal.Header>
                      <button onClick={handleClose1003}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                      <div id="target">
                        <div>
                          <img src={res100} alt="" />
                        </div>
                        <div>
                          <h2>
                            {" "}
                            Las respuestas apareceran en el panel junto a los
                            puntos de cada una.{" "}
                          </h2>
                          <h2>
                            La suma de puntos sera automatica y se mostrara al
                            espectador todo el tiempo.
                          </h2>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div>
                    <img onClick={openModal1003} src={res100} alt="" />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      Las respuestas apareceran en el panel junto a los puntos
                      de cada una.{" "}
                    </h2>
                    <h2>
                      La suma de puntos sera automatica y se mostrara al
                      espectador todo el tiempo.
                    </h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyects;
