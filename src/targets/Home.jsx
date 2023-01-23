import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HANDLER_HOME,
  HANDLER_SKILLS,
  HANDLER_PROYECTS,
} from "../redux/reducer/handler";
import yo from "../assets/yo.png";
import yoG1 from "../assets/yoG1.png";
import yoG2 from "../assets/yoG2.png";
import yoG3 from "../assets/yoG3.png";

const Home = () => {
  const handlerHome = useSelector((state) => state.handlerHome),
    handlerSkills = useSelector((state) => state.handlerSkills),
    handlerProyects = useSelector((state) => state.handlerProyects),
    activeModal = useSelector((state) => state.activeModal),
    refInf = useRef(),
    refImg1 = useRef(),
    refImg2 = useRef(),
    refImg3 = useRef(),
    refImg4 = useRef(),
    refHome = useRef(),
    dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      refImg1.current.classList.remove("is-active");
      refImg2.current.classList.add("is-active");
      refInf.current.classList.add("is-active");
      setTimeout(() => {
        refImg3.current.classList.add("is-active");
        refImg2.current.classList.remove("is-active");
        setTimeout(() => {
          refImg4.current.classList.add("is-active");
          refImg3.current.classList.remove("is-active");
          refInf.current.classList.add("is-active-1");
          setTimeout(() => {
            refImg2.current.classList.add("is-active");
            refImg4.current.classList.remove("is-active");
            setTimeout(() => {
              refImg3.current.classList.add("is-active");
              refImg2.current.classList.remove("is-active");
              setTimeout(() => {
                refImg4.current.classList.add("is-active");
                refImg3.current.classList.remove("is-active");
                refInf.current.classList.remove("is-active-1");
                setTimeout(() => {
                  refImg1.current.classList.add("is-active");
                  refImg4.current.classList.remove("is-active");
                  refInf.current.classList.remove("is-active");
                }, 150);
              }, 150);
            }, 150);
          }, 150);
        }, 150);
      }, 200);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlerBtn = () => {
    if (handlerProyects === "center") {
      dispatch(HANDLER_PROYECTS("rigth"));
      setTimeout(() => {
        dispatch(HANDLER_SKILLS("rigth"));
      }, 200);
      setTimeout(() => {
        dispatch(HANDLER_HOME("center"));
        refHome.current.classList.remove("left");
        refHome.current.classList.add("show");
      }, 400);
    }
    if (handlerSkills === "center") {
        console.log("esta");
      dispatch(HANDLER_SKILLS("rigth"));
      setTimeout(() => {
        dispatch(HANDLER_HOME("center"));
        refHome.current.classList.remove("left");
        refHome.current.classList.add("show");
      }, 200);
    }
  };

  useEffect(() => {
    if (handlerSkills === "center") {
      refHome.current.classList.add("left");
      refHome.current.classList.remove("show");
    }
  }, [handlerSkills]);

  useEffect(() => {
    if (handlerProyects === "center") {
      refHome.current.classList.add("left");
      refHome.current.classList.remove("show");
    }
  }, [handlerProyects]);

  return (
    <div id="divHome" ref={refHome} className="show">
      <div className="inf" id="inf" ref={refInf}>
        <div>
          <svg
            id="svgImg"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#008ef2"
              d="M51,-50.6C61.8,-40.1,63.5,-20,63.3,-0.3C63,19.5,60.8,39,49.9,54.6C39,70.1,19.5,81.7,0.9,80.8C-17.7,79.9,-35.4,66.5,-47.7,51C-60,35.4,-66.9,17.7,-66.1,0.8C-65.4,-16.2,-56.9,-32.3,-44.6,-42.8C-32.3,-53.3,-16.2,-58,1.9,-60C20,-61.9,40.1,-61,51,-50.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <img id="img1" ref={refImg1} className="is-active" src={yo} alt="" />
          <img id="img2" ref={refImg2} src={yoG1} alt="" />
          <img id="img3" ref={refImg3} src={yoG2} alt="" />
          <img id="img4" ref={refImg4} src={yoG3} alt="" />
        </div>
        <div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>
            <span style={{ color: "rgb(163, 96, 202)" }}></span>
            <br />
            &nbsp;&nbsp;&nbsp;name : “José Armando Altamira Martínez”, <br />
            &nbsp;&nbsp;&nbsp;role : “Fullstack Dev”,<br />
            &nbsp;&nbsp;&nbsp;mail : “jarmandoalt@gmail.com”,
            <br />
            &nbsp;&nbsp;&nbsp;links :
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "rgb(154, 96, 202)" }}>{"{"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Github": <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/jarmandoalt" target="_blank">
              "https://github.com/jarmandoalt"
            </a>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Linkedin": <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/jarmandoalt" target="_blank">
              "https://www.linkedin.com/in/jarmandoalt"
            </a>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Instagram": <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/jarmandoalt" target="_blank">
              "https://www.instagram.com/jarmandoalt"
            </a>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "rgb(154, 96, 202)" }}>{"}"}</span>
            <br />
          </p>
        </div>
      </div>
      <div>
        {
          activeModal ?
          <button style={{"cursor": "not-allowed"}} > HOME </button> :
          <button onClick={handlerBtn}> HOME </button>
        }
      </div>
    </div>
  );
};

export default Home;
