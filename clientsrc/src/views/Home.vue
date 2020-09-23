<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h3>Post a new Ship</h3>
        <div class="form-group mt-3">
          <input
            type="text"
            class="form"
            v-model="shipData.name"
            aria-describedby="helpId"
            placeholder="Ship Name "
          />
          <input
            type="text"
            class="form"
            v-model="shipData.img"
            aria-describedby="helpId"
            placeholder="Ship ImgUrl"
          />
          <input
            type="number"
            class="form"
            v-model="shipData.capacity"
            aria-describedby="helpId"
            placeholder="Ship Capacity"
          />
          <input
            type="number"
            class="form"
            v-model="shipData.price"
            aria-describedby="helpId"
            placeholder="Ship Price"
          />
          <button class="btn btn-info" @click="createShip">Create Ship</button>
        </div>
      </div>
    </div>
    <div class="row">
      <ship-comp v-for="ship in ships" :key="ship.id" :shipProp="ship" />
    </div>
  </div>
</template>


<script>
import shipComp from "../components/ShipComponent";
export default {
  name: "home",
  data() {
    return {
      shipData: {},
    };
  },
  mounted() {
    this.$store.dispatch("getShips");
    this.$store.dispatch("joinRoom", "ships");
  },
  beforeDestroy() {
    this.$store.dispatch("leaveRoom", "ships");
  },
  computed: {
    ships() {
      return this.$store.state.ships;
    },
  },
  methods: {
    createShip() {
      let newShip = { ...this.shipData };
      this.$store.dispatch("createShip", newShip);
      this.shipData = {};
    },
  },
  components: { shipComp },
};
</script>


<style scoped>
</style>