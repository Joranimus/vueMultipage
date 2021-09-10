<template>
    <div class="card">
        <div>Symbol: {{symbol}}</div>
        <div>Currency: {{currency}}</div>
        <div>Open: {{open}}</div>
        <div>Close: {{close}}</div>
        <div>Volume: {{volume}}</div>
    </div>
</template>

<script>
export default {
    name: 'stockCard',
    props: ['symbol','currency','open','close','volume'],
}
</script>

<style lang="scss">
.card{
    display: inline-block;
    margin: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 7px;
    div{
        line-height: 1.5;
    }
    
}
</style>