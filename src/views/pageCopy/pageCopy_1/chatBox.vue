<template>
    <div class="chatBox">

        <!-- 顶部 -->
        <div class="chatBox-top">
            <!-- 顶部名字 -->
            <div class="chatBox-topName">{{ showData?.name }}</div>

            <!-- 右上角按钮 -->
            <div class="chatBox-topBtn">
                <img v-for="(item, index) in imgList" :src="getImageUrl(index)" class="chatBox-topBtn-item"
                    @mouseover="mouseover(index)" @mouseleave="mouseleave"></img>
            </div>
        </div>

        <!-- 聊天区 -->
        <div class="chatBox-content">
            <div class="chatBox-messages-item" v-for="(item, index) in showData?.message">

                <!-- 收到的消息 -->
                <div v-if="item.direction === 'left'" class="chatBox-messages-item-left">
                    <img :src="getImageUrlChat(showData.leftUrl)" alt="头像" class="chatBox-messages-item-left-1">
                    <img :src="getImageUrlChat('./img/chatBox_5.png')" alt="箭头" class="chatBox-messages-item-left-2">
                    <div class="chatBox-messages-item-left-content">{{ item.content }}</div>
                </div>

                <!-- 发送的消息 -->
                <div v-if="item.direction === 'right'" class="chatBox-messages-item-right">
                    <div class="chatBox-messages-item-right-content">{{ item.content }}</div>
                    <img :src="getImageUrlChat('./img/chatBox_6.png')" alt="箭头" class="chatBox-messages-item-right-2">
                    <img :src="getImageUrlChat(showData.rightUrl)" alt="头像" class="chatBox-messages-item-right-1">
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import messageListData from './messageListData.json'

const props = defineProps({
    peopleSign: Number
})

const showData = ref()
showData.value = messageListData[props.peopleSign - 1]

watch(() => props.peopleSign, () => {
    showData.value = messageListData[props.peopleSign - 1]
})

const imgList = ref([
    './img/chatBox_1.png',
    './img/chatBox_2.png',
    './img/chatBox_3.png',
    './img/chatBox_4.png',
])

const getImageUrl = (index) => {
    return new URL(imgList.value[index], import.meta.url).href
}

const getImageUrlChat = (name) => {
    console.log(name)
    return new URL(name, import.meta.url).href
}

const mouseover = (index) => {
    imgList.value.forEach((item, i) => {
        if (i === index) {
            imgList.value[i] = `./img/chatBox_have_${i + 1}.png`
        } else {
            imgList.value[i] = `./img/chatBox_${i + 1}.png`
        }
    })
}

const mouseleave = () => {
    imgList.value.forEach((item, i) => {
        imgList.value[i] = `./img/chatBox_${i + 1}.png`
    })
}
</script>

<style scoped lang="less">
.chatBox {
    width: 610px;
    height: 100%;
    background-color: #f5f5f5;

    .chatBox-top {
        width: 100%;
        height: 62px;
        display: flex;
        position: relative;

        .chatBox-topName {
            width: 100%;
            height: 62px;
            border-right: 0;
            border-bottom: 1px solid #e9e9e9;
            padding-left: 25px;

            font-size: 17px;
            color: #000000;
            line-height: 62px;
            user-select: none;
        }

        .chatBox-topBtn {
            position: absolute;
            top: 0;
            right: 0;
            width: 132px;
            height: 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .chatBox-topBtn-item {
                width: 33px;
                height: 26px;
            }

        }
    }

    .chatBox-content {
        width: 100%;
        height: 405px;
        border-bottom: 1px solid #e9e9e9;
        padding: 0 30px;
        overflow-y: auto;

        .chatBox-messages-item {
            width: 100%;
            margin: 14px 0;

            .chatBox-messages-item-left {
                display: flex;
                justify-content: flex-start;

                .chatBox-messages-item-left-1 {
                    width: 34px;
                    height: 34px;
                }

                .chatBox-messages-item-left-2 {
                    width: 10px;
                    height: 34px;
                }

                .chatBox-messages-item-left-content {
                    max-width: 450px;
                    background-color: #ffffff;
                    border-radius: 3px;
                    padding: 10px;
                    color: #000000;
                }
            }

            .chatBox-messages-item-right {
                display: flex;
                justify-content: flex-end;

                .chatBox-messages-item-right-1 {
                    width: 34px;
                    height: 34px;
                }

                .chatBox-messages-item-right-2 {
                    width: 10px;
                    height: 34px;
                }

                .chatBox-messages-item-right-content {
                    max-width: 450px;
                    background-color: #95ec69;
                    border-radius: 3px;
                    padding: 10px;
                    color: #000000;
                }

            }
        }
    }

}
</style>