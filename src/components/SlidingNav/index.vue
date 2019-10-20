<template>
    <div class="sliding-nav-container">
        <div class="title-nav">
            <div class="top-nav" v-for="(item,index) in navList" :key="item.type">
                <span :class="{active:nowIndex=== index}"
                      @touchstart ="liseGo(index)">{{item.type}}</span>
            </div>
        </div>
        <div class="swiper-warp">
            <div v-if="nowIndex < 2" class="xiangyou" >
                <a @touchstart ="toPer()">
                    <i class="iconfont iconzuo1" ></i>
                </a>
            </div>
            <div v-if="nowIndex  > 0" class="xiangzuo">
                <a @touchstart ="toNext()">
                    <i class="iconfont iconzuo" ></i>
                </a>
            </div>
            <div class="swiper-container" ref="mySwiper">
                <ul class="swiper-wrapper">
                    <li v-for="(slide,index) in navList" :key="index" class="swiper-slide">
                        <div class="swiper-img">
                            <img :src="slide.img" alt="">
                        </div>
                        <p class="size" v-if="slide.carSize">{{slide.carSize}}</p>
                        <p class="slide-title">{{slide.title}}</p>
                        <p class="slide-detail">{{slide.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SlidingNav",
        props:["navList","index"],
        data(){
            return{
                nowIndex:0
            }
        },
        created(){
            if(this.index){
                this.nowIndex = parseInt(this.index)
            }
        },
        methods:{
            liseGo(index){
                this.nowIndex = index
                this.mySwiper.slideTo(index,300,false)
            },
            toPer(){
                this.nowIndex = this.nowIndex +1
                this.mySwiper.slideTo(this.nowIndex,300,false)
            },
            toNext(){
                this.nowIndex = this.nowIndex -1
                this.mySwiper.slideTo(this.nowIndex,300,false)
            }
        },
        /* eslint-disable */
        mounted() {
            let that = this
            that.mySwiper = new Swiper('.swiper-container',{
                on: {
                    slideChangeTransitionStart() {
                        that.nowIndex = that.mySwiper.activeIndex
                    },
                },
            })
        }
    }
</script>

<style scoped>
    .sliding-nav-container{
        margin: .64rem 0;
        position: relative;
    }
    .sliding-nav-container .title-nav{
        display: flex;
    }
    .title-nav .top-nav{
        flex: 1;
        font-size: .28rem;
        letter-spacing: .02rem;
    }
    .title-nav .top-nav .active{
        padding: .14rem .32rem;
        background: #289D57;
        color:#fff;
        border-radius: .32rem;
    }
    .swiper-warp{
        position: relative;
    }
    .swiper-warp .xiangyou,
    .swiper-warp .xiangzuo{
        width: .14rem;
        position: absolute;
        top: 50%;
        z-index: 24;
    }
    .swiper-warp .xiangyou{
        right: .28rem;
    }
    .swiper-warp >div i{
        font-size: .5rem;
        color: #259651;
    }
    .swiper-warp .xiangzuo{
        left: .24rem;
    }
    .swiper-img{
        margin-top: .96rem;
    }
    .swiper-img img{
        width: 2.08rem;
        height: 1.24rem;
    }
    .swiper-warp .size{
        font-size: .24rem;
        color: #CDCDCD;
    }
    .swiper-warp .slide-title{
        font-size: .38rem;
        font-weight: bold;
        margin:.42rem 0 .21rem;
    }
    .swiper-warp .slide-detail{
        margin: 0 .26rem;
        font-size: .3rem;
        color: #B0B0B2;
    }
</style>
<style>

</style>