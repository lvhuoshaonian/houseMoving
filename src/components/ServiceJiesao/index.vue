<template>
    <div class="business-services">
        <p class="title">{{title}}</p>
        <div class="content">
            <section v-for="(item,index) in jiesaoList" :key="index">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
                <span>{{item.detail}}</span>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceJiesao",
        props:['jiesaoList','title']
    }
</script>

<style scoped>
    .business-services{
        width: 100%;
        overflow: hidden;
    }
    .business-services .title{
        margin-bottom: .28rem;
        font-size: .32rem;
        text-align: left;
        font-weight: bold;
    }
    .business-services .content{
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .business-services .content >section{
        display: flex;
        flex-direction: column;
        margin-right: .32rem;
    }
    .business-services .content >section>img{
        width: 3.16rem;
        height: 2.4rem;
    }
    .business-services .content >section{
        text-align: left;
    }
    .business-services .content >section>p{
        color: #101d37;
        font-size: .28rem;
        font-weight: bold;
        padding: .1rem 0;
    }
    .business-services .content >section>span{
        color: #9399a5;
        font-size: .26rem;
        line-height: .38rem;
    }
</style>