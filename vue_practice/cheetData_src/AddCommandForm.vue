<template>
   <form @submit.prevent="addCommand">
    <div class="grid-container">
      <div><label>과목</label></div>
      <div>
        <input type="text" v-model="newSubject" required />
      </div>
      <div><label>명령어</label></div>
      <div>
        <input type="text" v-model="newCommand" required />
      </div>
      <div><label>문법</label>
        </div>
      <div>
        <input type="text" v-model="newGrammer" required />
      </div>
      <div class="submit-btn">
        <button type="submit">명령어추가</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";

export default {    
    setup (props, {emit}) { //부모값을 전달할거야
      const newSubject = ref('')
        const newCommand = ref('')
        const newGrammer = ref('')
        //------------------------------------------
        const addCommand = () => {
            emit('add-command',{
                subject: newSubject.value,
                command: newCommand.value,
                grammer: newGrammer.value
            })
            newSubject.value = '';
            newCommand.value = '';
            newGrammer.value = ''
        }
        //------------------------------------------
        
        return {
            newSubject,
            newCommand,
            newGrammer,
            addCommand,
        }


    }//setup
}
</script>

<style lang="scss" scoped>

</style>