<template>
  <div>
    hello {{ name }} 2
    <div>{{ getLocalAddress() }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "leon",
      address: {
        city: "guangzhou",
      },
    };
  },
  created(){
      console.log('test');
      console.log(process.env.NODE_ENV);
      console.log(process.env.BASE_URL);
  },
  methods: {
    getLocalAddress() {
      let result = this.address.city;
      return result;
    },
  },
};
</script>
<style lang="less" scoped>
div {
  color: red;
}
</style>
