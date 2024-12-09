<template>
    <div class="navigation">

        <!-- 头像 -->
        <div class="avatar"></div>

        <div class="item-container">
            <div v-if="props.haveSign !== 1" @click="changeHaveSign(1)" class="item img-1"></div>
            <div v-if="props.haveSign === 1" class="item img-have-1"></div>

            <div v-if="props.haveSign !== 2" @click="changeHaveSign(2)" class="item img-2"></div>
            <div v-if="props.haveSign === 2" class="item img-have-2"></div>

            <div class="item img-3"></div>
            <div class="item img-4"></div>
            <div class="item img-5"></div>
            <div class="item img-6"></div>
            <div class="item img-7"></div>
            <div class="item img-8"></div>
        </div>

        <div class="url-container">
            <div class="url img-9"></div>
            <div class="url img-10"></div>
            <div class="url img-11"></div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    haveSign: Number,
})

const emits = defineEmits(['update:haveSign'])

const changeHaveSign = (index) => {
    emits('update:haveSign', index)
}
</script>

<style scoped lang="less">
.navigation {
    width: 54px;
    height: 100%;
    background-color: #2e2e2e;

    .avatar {
        width: 36px;
        height: 36px;
        margin: 36px 9px 16px 9px;
        background: url("./img/avatar.jpg") no-repeat center center / cover;
    }

    .item-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 92px;

        .item {
            width: 100%;
            height: 41px;
            cursor: pointer;
        }

        .img-1 {
            background: url("./img/navigation_1.png") no-repeat center center / contain;
        }

        .img-2 {
            background: url("./img/navigation_2.png") no-repeat center center / contain;
        }

        .img-3 {
            background: url("./img/navigation_3.png") no-repeat center center / contain;
        }

        .img-4 {
            background: url("./img/navigation_4.png") no-repeat center center / contain;
        }

        .img-5 {
            background: url("./img/navigation_5.png") no-repeat center center / contain;
        }

        .img-6 {
            background: url("./img/navigation_6.png") no-repeat center center / contain;
        }

        .img-7 {
            background: url("./img/navigation_7.png") no-repeat center center / contain;
        }

        .img-8 {
            background: url("./img/navigation_8.png") no-repeat center center / contain;
        }

        .img-have-1 {
            background: url("./img/navigation_have_1.png") no-repeat center center / contain;
        }

        .img-have-2 {
            background: url("./img/navigation_have_2.png") no-repeat center center / contain;
        }
    }

    .url-container {
        width: 100%;
        display: flex;
        flex-direction: column;

        .url {
            width: 100%;
            height: 41px;
            cursor: pointer;
        }

        .img-9 {
            background: url("./img/navigation_9.png") no-repeat center center / contain;
        }

        .img-10 {
            background: url("./img/navigation_10.png") no-repeat center center / contain;
        }

        .img-11 {
            background: url("./img/navigation_11.png") no-repeat center center / contain;
        }
    }
}
</style>