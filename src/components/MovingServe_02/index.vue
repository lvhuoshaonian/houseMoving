<template>
    <div class="moving-container">
        <header class="moving-title">
            <div class="moving-img">
                <img src="../../assets/title.jpg" alt="">
            </div>
        </header>
        <section class="moving-section">
            <h2 class="section-title">
                搬家服务
            </h2>
            <div class="nav-list">
                <ul>
                    <li v-for="(item,index) in navList" :key="index"
                        @touchstart="toMoving(index)">
                        <div class="nav-img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="nav-detail">
                            <p>
                                <strong>{{item.type}}</strong>
                                <span class="carSize">{{item.carSize}}</span>
                            </p>
                            <p class="cartitle">{{item.title}}</p>
                            <p class="cardetail">{{item.detail}}</p>
                        </div>
                        <div class="nav-icon">
                            <i class="iconfont iconzuo1"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Moving",
        data(){
            return{
                navList:[
                    {
                        type:'小面搬家',
                        img:require("../../assets/little-car1.png"),
                        carSize:"1.2m*1.2m*1.1m",
                        title:"适合行李较少的搬家",
                        detail:"一个师傅帮忙搬家"
                    },
                    {
                        type:'金杯搬家',
                        img:require("../../assets/middle-car2.png"),
                        carSize:"1.8m*1.3m*1.2m",
                        title:"适合行李较多的搬家",
                        detail:"一个师傅帮忙搬家"
                    },
                    {
                        type:'箱货搬家',
                        img:require("../../assets/large-car3.png"),
                        carSize:"4.2m*1.9m*1.9m",
                        title:"适合有家具家电的搬家",
                        detail:"两个师傅帮忙搬家"
                    }
                ]
            }
        },
        methods:{
            toMoving(index){
                this.$router.push('/moving_01/'+index)
            }
        }
    }
</script>

<style scoped>
    .moving-container{
        width: 100%;
        margin: 32px 0;
        overflow: auto;
    }
    .moving-title .moving-img img{
        width: 100%;
        border-radius: 4px;
    }
    @media screen and (max-width:375px){
        .moving-title .moving-img img{
            height: 124px;
        }
    }
    @media screen and (max-width:320px){
        .moving-title .moving-img img{
            height: 119px;
        }
    }
    .moving-section{
        width: 100%;
        margin-top: 38px;
    }
    .moving-section .section-title{
        width: 100%;
        text-align: left;
    }
    .moving-section .nav-list{
        display: flex;
        flex-direction: column;
    }
    .moving-section .nav-list ul{
        margin: 10px 3px;
    }
    .moving-section .nav-list li{
        display: flex;
        width: 100%;
        height: 100px;
        margin-bottom: 20px;
        box-shadow: 0 0.32rem 0.5rem 0 rgba(0,0,0,.08);
        justify-content: center;
        align-items: center;
    }
    .moving-section .nav-list .nav-img{
        width: 90px;
        height: 60px;
    }
    .nav-list .nav-img img{
        width: 100%;
        height: 100%;
    }
    .nav-list .nav-detail{
        width: 56%;
        padding-left:15px;
    }
    .nav-list .nav-detail p{
        text-align: left;
        font-size: 0.27rem;
        color: #101d37;
    }
    .nav-list .nav-detail p strong{
        font-size: 1rem;
    }
    .nav-list .nav-detail .carSize{
        padding-left: 3px;
        font-size: .05rem;
    }
    .nav-list .nav-detail .cardetail{
        font-size: .27rem;
        margin-top: .12rem;
        color: #9399a5;

    }
    @media screen and (max-width:375px){
        .moving-section .nav-list .nav-img{
            width: 80px;
            height: 60px;
        }
    }
    @media screen and (max-width:320px){
        .moving-section .nav-list .nav-img{
             width: 62px;
             height: 52px;
         }
        .nav-list .nav-detail p strong{
            font-size: 0.8rem;
        }
    }
    .nav-list .nav-icon i{
        color: #239F57;
        font-size: 1rem;
    }
</style>