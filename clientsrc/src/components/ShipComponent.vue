<template>
  <div class="ship-component col-3" @click="setActive">
    <div class="card">
      <img class="card-img-top" :src="shipProp.img" alt="" />
      <div class="card-body">
        <h4 class="card-title">{{ shipProp.name }}</h4>
        <p>Click for more details</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ship-component",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActive() {
      this.$router.push({
        name: "active-ship",
        params: { id: this.shipProp._id },
      });
    },
  },
  components: {},
  props: ["shipProp"],
};
</script>


<style scoped>
</style>