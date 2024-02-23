<template>
    <div
        class="select-box"
        :class="[classCase, {'active':selectActive, 'disabled':selectDisabled}]"
        @click="clickSelect">
            <button type="button" class="label">{{optionValue? optionValue: defaultOptionValue}}</button>
            <div class="option-list-wrap">
                <ul class="option-list">
                    <li
                        v-for="(optionItem, idx) in optionList"
                        :key="idx"
                        :class="optionValue===optionItem.text?'active':''"
                        @click="optionActive(idx)"
                    >{{optionItem.text}}</li>
                </ul>
            </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
export default defineComponent({
    components: {
    },
    props: {
        propOptionList: {
            type: Array as PropType<any[]>,
            default: () => {
              return [];
            }
        },
        propSelectDisabled: {
            type: Boolean,
            default: false,
        },
        propClass: {
            type: String,
            default: '',
        },
        propDefaultOptionValue: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            error: false,
            selectActive: false,
            optionList: this.propOptionList,
            optionValue: '',
            selectDisabled: this.propSelectDisabled,
            classCase: this.propClass,
            defaultOptionValue: this.propDefaultOptionValue,
        }
    },
    methods: {
        clickSelect(){
            this.selectActive = !this.selectActive
        },
        optionActive(idx:number){
            this.optionValue =  this.optionList[idx].text
            this.$emit('selected', this.optionValue)
        }
    }
})
</script>
