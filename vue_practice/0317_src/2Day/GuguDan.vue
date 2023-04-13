<template>
    {{ inputValue }} 단<br/>
    <input type="number" 
        v-model="inputValue" 
        placeholder="단입력"
        @input="generateTable">
    <table>
        <tr v-for="row in guguDan" :key="row[0]">
            <td v-for="cell in row" :key="cell">
                {{ cell }}
            </td>
        </tr>
    </table>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const inputValue = ref('');
        const guguDan = ref([])
        function generateTable() {
            const num = Number(inputValue.value)
            if (isNaN(num)) {
                guguDan.value=[]
                return
            }
            const rows = []
            for(let i=1; i<=9; i++){
                rows.push([`${num} * ${i} = `, num * i])
            }
            guguDan.value=rows;
        }
        
        return {
            inputValue,
            guguDan,
            generateTable
        }
    }
}
</script>
<style scoped>
    table{
        border: 1px solid #333;
        border-collapse: collapse;
    }
</style>

<!-- <template>
    {{ num1 }} 단<br/>
    <input type="number" v-model="num1">
   <ul>
       <li :key="idx" v-for="(idx) in 9">
            {{num1}} * {{ idx }} = {{ num1 * idx }}
        </li>
   </ul>
</template>
<script>
import { ref} from 'vue';
export default {
    setup() {
        const num1 = ref(2)
        return {
            num1,
        }
    }
}
</script>
<style scoped>
</style> -->