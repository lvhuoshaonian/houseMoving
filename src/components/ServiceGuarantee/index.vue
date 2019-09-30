<template>
    <div class="service-guarantee">
        <div class="title">
            <span class="icon-left">
                <i class="iconfont iconhengxian-"></i>
                <i class="iconfont iconhengxian"></i>
                <i class="iconfont iconhengxian-"></i>
            </span>
            <span class="title-info">
                品质服务保障
            </span>
            <span class="icon-right">
                <i class="iconfont iconhengxian-"></i>
                <i class="iconfont iconhengxian"></i>
                <i class="iconfont iconhengxian-"></i>
            </span>
        </div>
        <div class="title-icon">
            <div class="">
                <img src="../../assets/icon-time1.png" alt="" >
                <p>迟到赔偿</p>
            </div>
            <div class="">
                <img src="../../assets/icon-fee.png" alt="" >
                <p>明码标价</p>
            </div>
            <div class="">
                <img src="../../assets/icon-move.png" alt="" >
                <p>全程搬运</p>
            </div>
            <div class="">
                <img src="../../assets/icon-pro.png" alt="" >
                <p>专业服务</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "service-guarantee"
    }
</script>

<style scoped>
    .service-guarantee{
        width: 100%;
        margin-top: 27px;
    }
    .service-guarantee .title{
        width: auto;
        text-align: center;
    }
    .service-guarantee .title{
        display: flex;
        justify-content: center;
    }
    .icon-left,.icon-right{
        padding-top: 1px;
    }
    .service-guarantee .title i{
        display: block;
        font-size: 12px;
        height: 3px;
        color: #EEEEEE;
    }
    .service-guarantee .title-info{
        margin: 0 5px;
        font-size: 15px;
        font-weight: 400;
        color: #BEBEBE;
    }
    .service-guarantee .title-icon{
        display: flex;
        margin:21px 0 16px;
    }
    .service-guarantee .title-icon >div{
        flex: 1;
    }
    .service-guarantee .title-icon img{
        width: 32px;
        height: 32px;
    }
    .service-guarantee .title-icon p{
        font-size: 12px;
        color: #9399a5;
    }
</style>