<template>
    <div class="gif">
        <img :src="url" alt="">
    </div>
</template>

<script>
export default {
    name: 'gif',
    props: ['url'],
}
</script>

<style lang="scss">
.gif{
    margin: 20px;
    width: 250px;
    height: 200px;
    img{
        height: 100%;
        width: 100%;
    }
}
</style>