<template>
  <div class="active-ship container-fluid">
    <div class="row">
      <div class="col-12 col-md-4 offset-md-1 offset-0 mt-3">
        <h3>
          {{ ship.name }}
        </h3>
        <p>Capacity: {{ ship.capacity }}</p>
        <p>Price: {{ ship.price }}</p>
        <button class="btn-info btn mr-3" @click="bid()">Bid</button>
        <button class="btn-danger btn" @click="removeShip()">Delete</button>
      </div>
      <div class="col-12 col-md-6 mt-3">
        <img :src="ship.img" class="w-100" alt="" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "active-ship",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getActiveShip", this.$route.params.id);
    this.$store.dispatch("joinRoom", "ships" + this.$route.params.id);
  },
  beforeDestroy() {
    this.$store.dispatch("leaveRoom", "ships" + this.$route.params.id);
  },
  computed: {
    ship() {
      return this.$store.state.activeShip;
    },
  },
  methods: {
    bid() {
      this.$store.dispatch("bid", {
        id: this.$route.params.id,
        price: this.ship.price + 100,
      });
    },
    removeShip() {
      this.$store.dispatch("removeShip", this.$route.params.id);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>