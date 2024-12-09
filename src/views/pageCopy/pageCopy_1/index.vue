<template>
  <div class="index">
    <Breadcrumb :items="['页面仿写', '微信聊天框']" />

    <a-card class="general-card">
      <div class="main">

        <!-- 左侧导航栏 -->
        <Navigation class="remove-padding" v-model:haveSign="haveSign"></Navigation>

        <!-- 信息列表 -->
        <PeopleList v-if="haveSign === 1" class="remove-padding" v-model:peopleSign="peopleSign"></PeopleList>

        <!-- 通讯录 -->
        <Contacts v-if="haveSign === 2" class="remove-padding"></Contacts>

        <!-- 聊天框 -->
        <ChatBox class="remove-padding" :peopleSign="peopleSign"></ChatBox>
      </div>
    </a-card>

  </div>
</template>

<script setup>
import Navigation from './navigation.vue'
import PeopleList from './peopleList.vue'
import Contacts from './contacts.vue'
import ChatBox from './chatBox.vue'
import { ref, watch } from 'vue';


// 左侧导航栏标记
const haveSign = ref(1)

// 人员标记
const peopleSign = ref(1)

</script>

<style scoped lang="less">
.index {
  padding: 0 20px 20px 20px;

  .general-card {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .main {
      width: 912px;
      height: 642px;
      border: 1px solid #d9d9d9;
      display: flex;


    }
  }
}

// 消除padding
.remove-padding {
  padding: 0;
}
</style>