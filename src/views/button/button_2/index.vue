<template>
  <div class="container">
    <Breadcrumb :items="['按钮', '渐变按钮']" />

    <a-card class="text">
      通过左侧表单控制中间按钮普通样式，右侧表单控制按钮渐变样式
    </a-card>

    <a-card class="general-card">

      <div class="main">
        <div class="form-box">
          <a-form auto-label-width>
            <a-form-item label="文字">
              <a-input v-model="buttonInfo.text"></a-input>
            </a-form-item>

            <a-form-item label="宽度">
              <a-slider v-model="buttonInfo.width" :min="100" :max="250"></a-slider>
            </a-form-item>

            <a-form-item label="高度">
              <a-slider v-model="buttonInfo.height" :min="50" :max="150"></a-slider>
            </a-form-item>

            <a-form-item label="圆角">
              <a-slider v-model="buttonInfo.borderRadius" :min="0"
                :max="buttonInfo.width > buttonInfo.height ? buttonInfo.height / 2 : buttonInfo.width / 2"></a-slider>
            </a-form-item>

            <a-form-item label="字体大小">
              <a-slider v-model="buttonInfo.fontSize" :min="14" :max="30"></a-slider>
            </a-form-item>

            <a-form-item label="加粗">
              <a-switch v-model="buttonInfo.fontWeight" checked-value="bold" unchecked-value="normal"></a-switch>
            </a-form-item>

            <a-form-item label="倾斜">
              <a-switch v-model="buttonInfo.fontStyle" checked-value="italic" unchecked-value="normal"></a-switch>
            </a-form-item>

            <a-form-item label="下划线">
              <a-switch v-model="buttonInfo.textDecoration" checked-value="underline" unchecked-value="none"></a-switch>
            </a-form-item>

            <a-form-item label="字体颜色">
              <a-color-picker v-model="buttonInfo.color" showText />
            </a-form-item>

          </a-form>
        </div>

        <div class="button-box">
          <div ref="buttonSign" class="button" @click="clickBtn">{{ buttonInfo.text }}</div>
        </div>

        <div class="from-box">
          <a-form auto-label-width>
            <a-form-item label="">
              <div>渐变设置</div>
            </a-form-item>

            <a-form-item label="渐变方向">
              <a-slider v-model="buttonInfo.gradientDirection" :min="0" :max="360"></a-slider>
            </a-form-item>

            <a-form-item label="渐变颜色">
              <div class="gradientColor">
                <a-button class="color-btn" type="primary" @click="addColor">添加颜色</a-button>

                <a-tag class="color-tag" size="large" v-for="(color, index) in buttonInfo.gradientColor" :key="index">
                  <div class="color-box">
                    <a-color-picker v-model="buttonInfo.gradientColor[index]"></a-color-picker>
                    <icon-close class="icon-close" @click="deleteColor(index)" />
                  </div>
                </a-tag>
              </div>
            </a-form-item>
          </a-form>
        </div>
      </div>

    </a-card>
  </div>
</template>

<script setup>
import { Message } from '@arco-design/web-vue';
import { onMounted, reactive, ref, watch } from 'vue'
import { IconClose } from '@arco-design/web-vue/es/icon';

// 元素标记
const buttonSign = ref()

// 按钮信息
const buttonInfo = reactive({
  text: "按钮",
  width: 150,
  height: 70,
  borderRadius: 20,
  fontSize: 18,

  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",

  color: "#000000",

  // 渐变设置
  gradientDirection: 0,
  gradientColor: ["#BEDAFF", "#DDBEF6"],
})

// 设置样式
const setStyle = () => {
  buttonSign.value.style.width = buttonInfo.width + "px"
  buttonSign.value.style.height = buttonInfo.height + "px"

  if (buttonInfo.borderRadius > buttonInfo.width / 2 || buttonInfo.borderRadius > buttonInfo.height / 2) {
    buttonInfo.borderRadius = buttonInfo.width > buttonInfo.height
      ? buttonInfo.height / 2
      : buttonInfo.width / 2
  }
  buttonSign.value.style.borderRadius = buttonInfo.borderRadius + "px"

  buttonSign.value.style.fontSize = buttonInfo.fontSize + "px"

  if (buttonInfo.fontWeight === "bold") {
    buttonSign.value.style.fontWeight = "bold"
  } else {
    buttonSign.value.style.fontWeight = "normal"
  }

  if (buttonInfo.fontStyle === "italic") {
    buttonSign.value.style.fontStyle = "italic"
  } else {
    buttonSign.value.style.fontStyle = "normal"
  }

  if (buttonInfo.textDecoration === "underline") {
    buttonSign.value.style.textDecoration = "underline"
  } else {
    buttonSign.value.style.textDecoration = "none"
  }

  buttonSign.value.style.color = buttonInfo.color

  buttonSign.value.style.lineHeight = buttonInfo.height + "px"
  buttonSign.value.style.textAlign = "center"

  // 渐变背景
  buttonSign.value.style.background = `linear-gradient(${buttonInfo.gradientDirection}deg, ${buttonInfo.gradientColor.join(",")})`
}

// 监听数据变化
watch(() => buttonInfo, () => {
  setStyle()
}, { deep: true })

// 页面加载完成
onMounted(() => {
  setStyle()
})

// 点击按钮
const clickBtn = () => {
  Message.success("按钮被点击了")
}

// 添加颜色
const addColor = () => {
  if (buttonInfo.gradientColor.length >= 5) {
    Message.warning("最多只能添加5个颜色")
    return
  } else {
    buttonInfo.gradientColor.push("#C3E7FE")
  }
}

// 删除颜色
const deleteColor = (index) => {
  console.log(index)
  if (buttonInfo.gradientColor.length <= 1) {
    Message.warning("至少需要一个颜色")
    return
  } else {
    buttonInfo.gradientColor.splice(index, 1)
  }
}
</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;

  .text {
    width: 100%;
    margin-bottom: 10px;
    border: none;
  }

  .general-card {
    width: 100%;

    .main {
      display: flex;

      .form-box {
        width: 300px;
        padding: 20px;
        border-radius: 10px;
        background-color: rgb(var(--blue-1));
        margin-right: 30px;
      }

      .button-box {
        width: 300px;
        height: 300px;
        border-radius: 10px;
        background-color: rgb(var(--blue-1));
        margin-right: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        .button {
          user-select: none;
          cursor: pointer;
        }
      }

      .from-box {
        width: 300px;
        padding: 20px;
        border-radius: 10px;
        background-color: rgb(var(--blue-1));

        .gradientColor {
          padding: 20px;
          background-color: rgb(var(--red-2));

          .color-btn {
            margin-bottom: 8px;
          }

          .color-tag {
            width: 88px;
            height: 32px;
            display: flex;
            margin-bottom: 8px;

            .color-box {
              display: flex;
              justify-content: center;
              align-items: center;

              .icon-close {
                font-size: 20px;
                color: rgb(var(--red-4));
                margin-left: 15px;
                cursor: pointer;
              }

              .icon-close:hover {
                color: rgb(var(--red-6));
              }
            }

          }
        }
      }
    }

  }
}
</style>