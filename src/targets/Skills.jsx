import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HANDLER_SKILLS,
  HANDLER_HOME,
  HANDLER_PROYECTS,
  HANDLER_FRONT,
} from "../redux/reducer/handler";
import { Liquid } from "@ant-design/plots";
import react from "../assets/react.svg";
import js from "../assets/js.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";

const Skills = () => {
  const handlerHome = useSelector((state) => state.handlerHome),
    handlerSkills = useSelector((state) => state.handlerSkills),
    skillsActive = useSelector((state) => state.skillsActive),
    activeModal = useSelector((state) => state.activeModal),
    handlerProyects = useSelector((state) => state.handlerProyects),
    handlerPrincipalFront = useSelector((state) => state.handlerPrincipalFront),
    refSkills = useRef(),
    dispatch = useDispatch();

  const handlerBtn = () => {
    if (handlerHome == "center") {
      refSkills.current.classList.remove("left");
      dispatch(HANDLER_HOME("left"));
      setTimeout(() => {
        dispatch(HANDLER_SKILLS("center"));
        refSkills.current.classList.remove("rigth");
        refSkills.current.classList.add("show");
      }, 200);
    }

    if (handlerProyects == "center") {
      refSkills.current.classList.remove("rigth");
      dispatch(HANDLER_PROYECTS("rigth"));
      setTimeout(() => {
        dispatch(HANDLER_SKILLS("center"));
        refSkills.current.classList.remove("left");
        refSkills.current.classList.add("show");
      }, 200);
    }
  };

  useEffect(() => {
    if (handlerHome === "center") {
      refSkills.current.classList.add("rigth");
      refSkills.current.classList.remove("show");
    }
  }, [handlerHome]);

  useEffect(() => {
    if (handlerProyects === "center") {
      refSkills.current.classList.add("left");
      refSkills.current.classList.remove("show");
      refSkills.current.classList.remove("rigth");
    }
  }, [handlerProyects]);

  const configHtml = {
    percent: 0.6,
    shape: "rect",
    outline: {
      border: .9,
      distance: 3,
      stroke: '#0add08',
      radius: .5,
    },
    height: 50,
    style: {border: 20},
    colorField: 'type',
    color: '#ff6d00',
    wave: {
      length: 128,
      color: "#0add08",
    },
  };

  return (
    <div id="divSkills" ref={refSkills}>
      <div>
        {activeModal ? (
          <button> SKILLS </button>
        ) : (
          <button onClick={handlerBtn}> SKILLS </button>
        )}
      </div>
      <div>
        {skillsActive === 1 ? (
          handlerPrincipalFront === "html" ? (
            <div className="frontEnd">
              <div id="btnskills">
                <button className="is-active"> Front-End </button>
                <button> Back-End</button>
              </div>
              <div>
                <div>
                  <div className="selectFront">
                    <div>
                      <img src={html} alt="" />
                      <h1>| HTML</h1>
                    </div>
                    <div>
                    <Liquid {...configHtml}/>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("css"));
                    }}
                  >
                    CSS
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("javascript"));
                    }}
                  >
                    JAVASCRIPT
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("react"));
                    }}
                  >
                    REACT
                  </button>
                </div>
              </div>
            </div>
          ) : handlerPrincipalFront === "css" ? (
            <div className="frontEnd">
              <div id="btnskills">
                <button className="is-active"> Front-End </button>
                <button> Back-End</button>
              </div>
              <div>
                <div>
                <div className="selectFront">
                    <div>
                      <img src={css} alt="" />
                      <h1>| CSS</h1>
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("html"));
                    }}
                  >
                    HTML
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("javascript"));
                    }}
                  >
                    JAVASCRIPT
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("react"));
                    }}
                  >
                    REACT
                  </button>
                </div>
              </div>
            </div>
          ) : handlerPrincipalFront === "javascript" ? (
            <div className="frontEnd">
              <div id="btnskills">
                <button className="is-active"> Front-End </button>
                <button> Back-End</button>
              </div>
              <div>
                <div>
                <div className="selectFront">
                    <div>
                      <img src={js} alt="" />
                      <h1>| JAVASCRIPT</h1>
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("html"));
                    }}
                  >
                    HTML
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("css"));
                    }}
                  >
                    CSS
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("react"));
                    }}
                  >
                    REACT
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="frontEnd">
              <div id="btnskills">
                <button className="is-active"> Front-End </button>
                <button> Back-End</button>
              </div>
              <div>
                <div>
                <div className="selectFront">
                    <div>
                      <img src={react} alt="" />
                      <h1>| REACT</h1>
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("html"));
                    }}
                  >
                    HTML
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("css"));
                    }}
                  >
                    CSS
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(HANDLER_FRONT("javascript"));
                    }}
                  >
                    JAVASCRIPT
                  </button>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="backEnd">
            <Liquid {...config} />
          </div>
        )}
      </div>
      <div>
        {activeModal ? (
          <button style={{ cursor: "not-allowed" }}> SKILLS </button>
        ) : (
          <button onClick={handlerBtn}> SKILLS </button>
        )}
      </div>
    </div>
  );
};

export default Skills;
