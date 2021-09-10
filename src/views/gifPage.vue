<template>
    <div class="gifs">
        <div  class="button" @click="getGifs()">get data</div>
        <div v-if="allGifs.data" class="_f _f-wrap _j-around">
            <gif
            
            v-for="item in allGifs.data" :key="item.bitly_gif_url"
            v-bind:url="item.images.downsized_medium.url"
            />
        </div>
    </div>
</template>

<script>
import gif from '@/components/gif.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
    components: {
        gif
    },
    name: 'gifPage',
    computed: mapGetters(['allGifs']),
    methods: mapActions(["getGifs", 'Actual']),
    mounted()  {
            if(!this.allGifs.data){this.getGifs()}
            this.Actual()
        }
    
}
</script>

<style lang="scss">
.gifs{
    padding: 20px;
}
</style>