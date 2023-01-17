import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  handlerHome: "center",
  handlerSkills: "rigth",
  handlerProyects: "rigth",
  proyectActive: 1,
  skillsActive: 1,
  activeModal: false,
  handlerPrincipalFront: "html"
};

const handlerReducer = createSlice({
  name: "handlerReducer",
  initialState,
  reducers: {
    HANDLER_HOME: (state, action) => {
      state.handlerHome = action.payload
    },
    HANDLER_SKILLS: (state, action) => {
      state.handlerSkills = action.payload
    },
    HANDLER_PROYECTS: (state, action) => {
      state.handlerProyects = action.payload
    },
    PROYECTS_ACTIVE: (state, action) => {
      state.proyectActive = action.payload
    },
    SKILLS_ACTIVE: (state, action) => {
      state.skillsActive = action.payload
    },
    ACTIVE_MODAL: (state, action) => {
      state.activeModal = action.payload
    },
    HANDLER_FRONT: (state, action) => {
      state.handlerPrincipalFront = action.payload
    }
  }
});

export const {
  HANDLER_HOME,
  HANDLER_SKILLS,
  HANDLER_PROYECTS,
  PROYECTS_ACTIVE,
  SKILLS_ACTIVE,
  ACTIVE_MODAL,
  HANDLER_FRONT
} = handlerReducer.actions;

export default handlerReducer.reducer;