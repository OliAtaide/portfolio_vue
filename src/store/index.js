import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    skills: [],
    projects: [],
  },
  getters: {
    getSkills: (state) => state.skills,
    getProjects: (state) => state.projects,
  },
  mutations: {
    setSkills: (state, skills) => (state.skills = skills),
    setProjects: (state, projects) => (state.projects = projects),
  },
  actions: {
    async fetchSkills({ commit }) {
      const response = await axios.get("http://localhost:8000/api/skill/");
      commit("setSkills", response.data);
    },
    async fetchProjects({ commit }) {
      const response = await axios.get("http://localhost:8000/api/skill/");
      commit("setProjects", response.data);
    },
  },
  modules: {},
});
