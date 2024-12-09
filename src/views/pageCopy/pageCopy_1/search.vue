<template>
    <div class="search">
        <div class="input-box">
            <!-- 左 -->
            <div v-if="!isFocus" class="input-box-left">
                <div class="input-box-left-icon"></div>
            </div>
            <div v-if="isFocus" class="input-box-left-have">
                <div class="input-box-left-have-icon"></div>
            </div>

            <!-- 中 -->
            <div :class="centerInputBoxClass">
                <input :class="centerInputClass" type="text" :placeholder="placeholder" @focus="focus" />
            </div>

            <!-- 右 -->
            <div v-if="!isFocus" class="input-box-right"></div>
            <div v-if="isFocus" class="input-box-right-have">
                <div class="input-box-right-have-icon" @click="blur"></div>
            </div>
        </div>

        <div class="search-add"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const placeholder = ref('搜索')
const isFocus = ref(false)

const focus = () => {
    placeholder.value = ""
    isFocus.value = true

    centerInputBoxClass.value = "input-box-center-have"
    centerInputClass.value = "input-box-center-have-input"
}

const blur = () => {
    placeholder.value = "搜索"
    isFocus.value = false

    centerInputBoxClass.value = "input-box-center"
    centerInputClass.value = "input-box-center-input"
}

const centerInputBoxClass = ref("input-box-center")
const centerInputClass = ref("input-box-center-input")

</script>

<style scoped lang="less">
.search {
    width: 100%;
    height: 62px;
    border-right: 0;
    border-bottom: 1px solid #e9e9e9;
    padding-top: 25px;
    padding-left: 12px;
    display: flex;
    background-color: #f7f7f7;

    .input-box {
        display: flex;
        height: 26px;
        width: 190px;
        border: 1px solid #e2e2e2;
        border-radius: 3px;

        // 左
        .input-box-left {
            width: 23px;
            height: 25px;
            border-radius: 3px 0 0 3px;
            background-color: #e2e2e2;

            .input-box-left-icon {
                width: 15px;
                height: 15px;
                margin-top: 4px;
                margin-left: 4px;
                background: url("./img/search_1.png") no-repeat center center / cover;
            }
        }

        .input-box-left-have {
            width: 23px;
            height: 25px;
            border-radius: 3px 0 0 3px;
            background-color: #f9f9f9;

            .input-box-left-have-icon {
                width: 15px;
                height: 15px;
                margin-top: 4px;
                margin-left: 4px;
                background: url("./img/search_have_1.png") no-repeat center center / cover;
            }
        }


        // 中
        .input-box-center {
            width: 144px;
            height: 25px;
            background-color: #e2e2e2;
            display: flex;
            align-items: center;

            .input-box-center-input {
                width: 144px;
                height: 18px;
                border: none;
                outline: none;
                background-color: #e2e2e2;
                position: relative;
                top: -1px;
            }

            .input-box-center-input::placeholder {
                font-size: 12px;
                line-height: 18px;
            }
        }

        .input-box-center-have {
            width: 144px;
            height: 25px;
            background-color: #f9f9f9;
            display: flex;
            align-items: center;

            .input-box-center-have-input {
                width: 144px;
                border: none;
                outline: none;
                background-color: #f9f9f9;
            }
        }


        // 右
        .input-box-right {
            width: 23px;
            height: 25px;
            border-radius: 0 3px 3px 0;
            background-color: #e2e2e2;
        }

        .input-box-right-have {
            width: 23px;
            height: 25px;
            border-radius: 0 3px 3px 0;
            background-color: #f9f9f9;

            .input-box-right-have-icon {
                width: 15px;
                height: 15px;
                margin-top: 5px;
                margin-left: 4px;
                background: url("./img/search_have_2.png") no-repeat center center / cover;
                cursor: pointer;
            }
        }

    }

    .search-add {
        width: 26px;
        height: 26px;
        background: url("./img/search_3.png") no-repeat center center / cover;
        margin-left: 10px;
    }
}
</style>