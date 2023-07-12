<template>
    <div>
        <input type="text" v-model="searchText" placeholder="검색" @input="filterItems"/>
        <ul>
            <li v-for="item in filterdItems" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import { ref,onMounted } from "vue";
export default {
    setup () {
        //배열의 번지는 계속 동일하므로 const로 고정
        const items = ref(['apple','banana','orange','grape','BANANA','ORANGE'])
        const searchText = ref('');
        const filterdItems = ref([])
        //--------------------------------------------
        function filterItems(){
            filterdItems.value = items.value.filter(item=>
                item.toLowerCase().includes(searchText.value.toLocaleLowerCase())
            )
        }
        //--------------------------------------------
        onMounted(filterItems)
        //--------------------------------------------
        return {
            items,
            searchText,
            filterItems,
            filterdItems
        }
    }
}
</script>

<style lang="scss" scoped>

</style>