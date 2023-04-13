<template>
    <tr>
        <td>{{ id }}</td>
        <td>{{ subject }}</td>
        <td>{{ command }}</td>
        <td>{{ grammer }}</td>
        <td>
            <button @click="deleteCommand">삭제</button>
        </td>
    </tr>
</template>
<script>
export default {
    props:['id','subject','command','grammer'], //뿌릴거 넘겨받아옴
    setup (props, {emit}) {//부모한테 이벤트 전달할거야

        const deleteCommand=()=>{
            emit('delete-command', props.id)//부모한테 전달할 이름
        }

        return {
            deleteCommand
        }


    }//setup
}
</script>

<style scoped>

</style>