<template>
  <div class="stocks">
    <div class="button" @click="getData">get data</div>
    <stockCard v-for="item in stock" :key="item.meta.symbol"
    v-bind:symbol="item.meta.symbol"
    v-bind:currency="item.meta.currency"
    v-bind:open="item.values[0].open"
    v-bind:close="item.values[0].close"
    v-bind:volume="item.values[0].volume"
    />

    
  </div>
</template>

<script>
// @ is an alias to /src
import stockCard from '@/components/stockCard.vue'
const axios = require('axios');

export default {
  name: 'Home',
  components: {
    stockCard
  },
  data(){
    return{
      test:'333',
      stock:{}
    }
  },
  mounted() {
    if (localStorage.getItem('stock')) {
      this.stock = JSON.parse(localStorage.getItem('stock'));
      // try {
      //   this.stock = JSON.parse(localStorage.getItem('stock'));
      // } catch(e) {
      //   localStorage.removeItem('stock');
      // }
    }
  },
  watch: {
    stock(data) {
      const parsed = JSON.stringify(data);
      localStorage.setItem('stock', parsed);
    }
  },
  methods:{
    getData(){
      axios.get('https://api.twelvedata.com/time_series?symbol=AAPL,MSFT,SBUX&interval=1h&apikey=94319ea3f0d54c3ea662fb37be4aaaa4')
        .then(response => {
          this.stock = response.data
          console.log(this.stock);
        }) 
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  }




}
</script>
