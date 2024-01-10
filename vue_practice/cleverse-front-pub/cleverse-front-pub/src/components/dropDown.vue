<template>
    <div 
        class="dropdown type1" 
        :class="[classCase, {'active':show, 'disabled':hide}]" 
        @click="clickView">
            <button type="button" class="label">{{optionValue}}</button>
            <div class="option-list-wrap">
                <ul class="option-list">
                    <li 
                        v-for="(optionItem, idx) in optionList" 
                        :key="idx" 
                    >{{optionItem.text}}</li>
                </ul>
            </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
    },
    props: {
        propHide: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            error: false,
            show: false,
            optionValue: '+5',
            optionList: [
                {
                    text: '리스트1',
                },
                {
                    text: '리스트2',
                },
                {
                    text: '리스트3',
                },
            ],
            hide: this.propHide,
        }
    },
    methods: {
        clickView(){
            this.show = !this.show;
        },
    }
});
</script>

