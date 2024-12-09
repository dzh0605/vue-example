<template>
    <div class="messageList">
        <div v-for="(item, index) in messageListData" :class="messageItemclass(index)" @click="onClick(index)">
            <div class="messageItem-1"><img :src="getImageUrl(item.leftUrl)" alt="头像" class="messageItem-img"></div>
            <div class="messageItem-2">
                <div class="messageItem-2-1">
                    <div class="messageItem-2-1-1">{{ item.name }}</div>
                    <div class="messageItem-2-1-2">{{ item.message[item.message.length - 1].time }}</div>
                </div>
                <div class="messageItem-2-2">{{ item.message[item.message.length - 1].content }}</div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import messageListData from './messageListData.json'

const props = defineProps({
    peopleSign: Number
})

const emits = defineEmits(['update:peopleSign'])

const onClick = (index) => {
    emits('update:peopleSign', index + 1)
}

const getImageUrl = (name) => {
    return new URL(name, import.meta.url).href
}

const messageItemclass = (index) => {
    let className = 'messageItem'
    if (index === props.peopleSign - 1) {
        className = 'messageItemHave'
    }
    return className
}
</script>

<style scoped lang="less">
.messageList {
    width: 100%;
    height: calc(100% - 62px);
    background-color: #e4e4e4;
    display: flex;
    flex-direction: column;

    .messageItem {
        width: 100%;
        height: 64px;
        padding: 12px;
        display: flex;
        user-select: none;

        .messageItem-1 {
            width: 40px;
            height: 40px;
            border-radius: 1px;
            margin-right: 12px;

            .messageItem-img {
                width: 100%;
                height: 100%;
            }
        }

        .messageItem-2 {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .messageItem-2-1 {
                display: flex;
                justify-content: space-between;

                .messageItem-2-1-1 {
                    font-size: 14px;
                    font-family: 'Arial', 'Helvetica', 'sans-serif';
                    font-weight: 500;
                    color: #000000;
                }

                .messageItem-2-1-2 {
                    font-size: 12px;
                    font-family: 'Arial', 'Helvetica', 'sans-serif';
                    font-weight: 500;
                    color: #999999;
                }
            }

            .messageItem-2-2 {
                white-space: nowrap;
                /* 防止文本换行 */
                overflow: hidden;
                /* 超出容器部分隐藏 */
                text-overflow: ellipsis;
                /* 超出部分用省略号表示 */
                width: 170px;
                /* 设置容器宽度 */

                font-size: 12px;
                font-family: 'Arial', 'Helvetica', 'sans-serif';
                color: #999999;
            }
        }
    }

    .messageItemHave {
        width: 100%;
        height: 64px;
        padding: 12px;
        display: flex;
        background-color: #c8c8c8;
        user-select: none;

        .messageItem-1 {
            width: 40px;
            height: 40px;
            border-radius: 1px;
            margin-right: 12px;

            .messageItem-img {
                width: 100%;
                height: 100%;
            }
        }

        .messageItem-2 {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .messageItem-2-1 {
                display: flex;
                justify-content: space-between;

                .messageItem-2-1-1 {
                    font-size: 14px;
                    font-family: 'Arial', 'Helvetica', 'sans-serif';
                    font-weight: 500;
                    color: #000000;
                }

                .messageItem-2-1-2 {
                    font-size: 12px;
                    font-family: 'Arial', 'Helvetica', 'sans-serif';
                    font-weight: 500;
                    color: #999999;
                }
            }

            .messageItem-2-2 {
                white-space: nowrap;
                /* 防止文本换行 */
                overflow: hidden;
                /* 超出容器部分隐藏 */
                text-overflow: ellipsis;
                /* 超出部分用省略号表示 */
                width: 170px;
                /* 设置容器宽度 */

                font-size: 12px;
                font-family: 'Arial', 'Helvetica', 'sans-serif';
                color: #999999;
            }
        }
    }

    .messageItem:hover {
        background-color: #d2d1d0;
        cursor: default;
    }

    .messageItemHave:hover {
        background-color: #c8c8c8;
        cursor: default;
    }
}
</style>