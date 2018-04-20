<template>
    <div id="app" class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8"><List/></div>
        <div class="col-md-2"></div>
    </div>
</template>

<script>
    import List from './components/List'

    export default {
        name: 'App',
        components: {
            List
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
