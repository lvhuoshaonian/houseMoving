<template>
    <div id="app">
        <div class="content">
            <router-view>
            </router-view>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app'
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    body,html{
        width: 100%;
        height: 100%;
        -moz-user-select: none;/*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
    }
    body{
        font-size: 12px;
    }
    ul,li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    #app {
        position: relative;
        display: flex;
        width: 100%;
        min-height: 100%;
        flex-direction: column;
        overflow: auto;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #content{
        width: 89%;
        margin: .3rem auto;
    }
    .clearFix:after{
        content: "";
        display: block;
        clear: both;
    }
    .border1::after{
        position: absolute;
        content: "";
        display: block;
        box-sizing: border-box;
        transform-origin: 0 0;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        border-bottom: 1px solid #e4e6f0;
        transform: scaleY(.5);
    }
    .footer-btn{
        width: 90%;
        margin: .68rem auto .3rem;
        height: .98rem;
        line-height: .98rem;
        font-size: .32rem;
    }
    .footer-btn a{
        display: block;
        width: 100%;
        height: 100%;
        background-color: #239F57;
        border-radius: .24rem;
        color: #fff;
        letter-spacing: 1px;
    }
</style>
