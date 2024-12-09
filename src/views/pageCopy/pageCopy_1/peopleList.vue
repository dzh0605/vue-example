<template>
    <div class="peopleList">

        <!-- 搜索框 -->
        <Search></Search>

        <!-- 消息列表 -->
        <MessageList v-model:peopleSign="peopleSign"></MessageList>


    </div>
</template>

<script setup>
import Search from './search.vue';
import MessageList from './messageList.vue';
import { ref, watch } from 'vue';

const props = defineProps({
    peopleSign: Number
})

const peopleSign = ref()
peopleSign.value = props.peopleSign

watch(() => props.peopleSign, () => {
    peopleSign.value = props.peopleSign
})

const emits = defineEmits(['update:peopleSign'])

watch(() => peopleSign.value, () => {
    emits('update:peopleSign', peopleSign.value)
})

</script>

<style scoped lang="less">
.peopleList {
    width: 250px;
    height: 100%;
    border-right: 1px solid #ebe9e7;

}
</style>