<template>
    <div class="house-moving">
        <header class="header">
            <div class="header-title">
                <img src="../../assets/title.jpg" alt="">
            </div>
            <div class="header-nav">
                <ul class="nav-list clearFix">
                    <router-link to="/moving_01/0" tag="li">
                        <div class="banjia-icon">
                            <img src="../../assets/baojia-icon.png" alt="">
                        </div>
                        <p>搬家</p>
                    </router-link>
                    <router-link to="/CleaningService" tag="li">
                        <div class="baojie-icon">

                            <img src="../../assets/baojie-icon.png" alt="">
                        </div>
                        <p>保洁</p>
                    </router-link>
                    <router-link to="/" tag="li">
                        <div class="kuandai-icon">
                            <img src="../../assets/kuaidai-icon.png" alt="">
                        </div>
                        <p>宽带</p>
                    </router-link>
                </ul>
            </div>
        </header>
        <section class="section-content">
            <div class="selected-services">
                <h2 class="nav-title">
                    精选服务<span>Selected services</span>
                </h2>
                <div class="section-nav-img">
                    <router-link to="/moving_02" class="banjia-img" tag="div">
                        <a>
                            <img src="../../assets/banjia_01.jpg"  alt="">
                        </a>
                    </router-link>
                    <div class="baojie-img">
                        <router-link class="richangbaojie" to="/CleaningService">
                            <img src="../../assets/baojie_01.jpg"  alt="">
                        </router-link>
                        <router-link to="/CleaningService">
                            <img src="../../assets/baojie_02.jpg"  alt="">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="life-service">
                <h2 class="nav-title">
                    生活服务<span>Life services</span>
                </h2>
                <div class="life-nav-img">
                    <a class="weixiu">
                        <img src="../../assets/weixiu_01.jpg" alt="">
                    </a>
                    <a class="jiaofei">
                        <img src="../../assets/jiaofei_01.jpg" alt="">
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .house-moving{
        width: 100%;
        margin: .64rem 0;
        overflow: auto;
    }
    .house-moving img{
        width: 100%;
    }
    .header .header-title{
        margin: 0 auto;
    }
    .header .header-title img{
        border-radius:0.08rem;
        height: 2.58rem;
    }
    .nav-list{
        display: flex;
        margin: 0 auto;
    }
    .nav-list li{
        flex: 1;
        font-size: .32rem;
    }
    .nav-list li>div{
        width: 1.32rem;
        height: 1.32rem;
        margin: .48rem auto .36rem;
        border-radius: 0.68rem;
    }
    .nav-list li>p{
        text-align: center;
        font-weight: bold;
    }
    .nav-list  .banjia-icon img{
        width: 1.02rem;
        height: .48rem;
        margin-top: .46rem;
    }
    .nav-list .baojie-icon img,
    .nav-list .kuandai-icon img {
        width: .82rem;
        height: .72rem;
        margin-top: .36rem;
    }
    .nav-list li .banjia-icon{
        background:  linear-gradient(#E5F6FE,#F3F6FD);
    }
    .nav-list li .baojie-icon{
        background:  linear-gradient(#FEFAE0,#FFFBF1);
    }
    .nav-list li .kuandai-icon{
        background:  linear-gradient(#F0FDF6,#F8FCFB);
    }
    .section-content{
        width: 100%;
        margin-top: .4rem;
    }
    .section-content h2{
        text-align: left;
        font-size: .4rem;
        color: #10121E;
    }
    .section-content h2>span{
        padding-left:.036rem;
        font-weight: normal;
        font-size: .24rem;
        color: #717075;
    }
    .section-nav-img{
        display: flex;
        margin: .14rem 0;
    }
    .section-nav-img>div{
        height: 4.04rem;
        flex: 1;
        overflow: hidden;
    }
    .section-nav-img .banjia-img{
        width: 3.66rem;
        height: 4.04rem;
        margin-right: .2rem;
        border-radius: 4px;
    }
    .section-nav-img .banjia-img img{
        height: 4.04rem;
    }
    .section-nav-img .baojie-img>a{
        display: block;
        height: 1.9rem;
        border-radius: .08rem;
        overflow: hidden;
    }
    .section-nav-img .baojie-img img{
        height: 1.9rem;
    }
    .baojie-img .richangbaojie{
        margin-bottom: .24rem;
    }
    .life-service .life-nav-img{
        display: flex;
        margin-top: .16rem;
    }
    .life-service .life-nav-img>a{
        flex: 1;
        height: 1.96rem;
        border-radius: .08rem;
        overflow: hidden;
    }
    .life-service .life-nav-img .weixiu{
        margin-right: .3rem;
    }
    .life-service .life-nav-img img{
        height: 1.96rem;
    }

</style>