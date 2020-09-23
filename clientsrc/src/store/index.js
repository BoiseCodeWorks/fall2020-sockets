import { STATES } from 'mongoose'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import { api } from "./AxiosService"
import { socketStore } from "./socketStore"
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    user: {},
    ships: [],
    activeShip: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setShips(state, ships) {
      state.ships = ships
    },
    setActive(state, ship) {
      state.activeShip = ship
    },
    addShip(state, ship) {
      state.ships.push(ship)
    },
    removeShip(state, ship) {
      router.push({ name: "home" })
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion
    async createShip({ commit, state }, shipData) {
      let res = await api.post("/ships", shipData)
      // commit("addShip", res.data)
    },
    async getShips({ commit }) {
      let res = await api.get("/ships")
      commit("setShips", res.data)
    },
    async getActiveShip({ commit }, shipId) {
      let res = await api.get("/ships/" + shipId)
      commit("setActive", res.data)
    },
    async bid({ commit }, shipData) {
      let res = await api.put("/ships/" + shipData.id, shipData)
      commit("setActive", res.data)
    },
    async removeShip({ commit }, id) {
      await api.delete("/ships/" + id)
      commit("removeShip")
    }
  },
  modules: {
    socketStore
  }
})
