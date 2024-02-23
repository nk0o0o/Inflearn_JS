<template>
	<v-menu
		v-model="modelValue"
		:anchor="propLocation"
		:location="propLocation"
		:close-on-content-click="clickToHide"
	>
		<template v-slot:activator="{ props }">
			<button
				type="button"
				color="primary"
				v-bind="props"
				@click="slotWidthFN(propId)"
				v-if="propType"
			>
				<span class="set">
					<slot name="img"></slot>
					<span v-if="propSelectText" class="select-name">{{propSelectText}}</span>
				</span>
			</button>
			<v-btn
				color="primary"
				v-bind="props"
				@click="slotWidthFN(propId)"
				v-else
			>
				<span v-if="propSelectText" class="select-text">{{propSelectText}}</span>
				<span class="blind">정렬 선택</span>
				<slot name="head"></slot>
			</v-btn>
		</template>
		<ul class="dropdown-type1-list" :class="propClass" v-if="!propisSlotMode">
			<li
				v-for="item in propItem"
				:key="item.index"
				@click="selected(item)"
				:class="{ toggle: item.isToggle }"
			>
				<button type="button" :class="[item.class, propDropSelectItem === item.itemId ? 'active' : '']">
					{{ item.title }}
				</button>
			</li>
		</ul>

		<slot name="body" v-else :on="{click : selectedSlot, width: slotWidth}"></slot>

	</v-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useDropdownGroup from '@/plugins/use/useDropdownGroup';

export default defineComponent({
		modelValue: false,
		props: {
			propModalValue:{
				type: Boolean,
				default:false
			},
			propisSlotMode: {
				type: Boolean,
				default: false,
			},
			propItem: {
				type: Array as PropType<Array<{title:string, index: number, class: string, itemId: string, isToggle?:boolean, isActive?:boolean}>>,
				required: true,

			},
			propClass: {
				type: String,
				default: ''
			},
			propId: {
				type: String,
				default: ''
			},
			propSelectText: {
				type: String,
				default:''
			},
			propType: {
				type: Boolean,
				default: false,
			},
			propDropSelectItem:{
				type: String,
				default:''
			},
			clickEvent: {
				type: Function,
				default: () => 1,
			},
			propLocation:{
				type: String,
				default:'bottom end'
			},
			clickToHide:{
				type: Boolean,
				default: true,
			}
		},
    components: {
    },
    data() {
			return {
				menu: false,
				slotWidth: 0,
				modelValue: this.propModalValue,
				dropdownGroup: {} as any
			}
    },
		created() {
			this.dropdownGroup = useDropdownGroup('global.dropdown', (payload: any) => {
				if (this.modelValue) {
					this.modelValue = false;
				}
			});
		},
		methods:{
			selected(item:any){
				this.menu = false
				// let dropdownArr = {title:item.title, selected:item.selected, isToggle:item.isToggle}
				this.$emit('selected', item)
			},
			selectedSlot($event:any){
				this.menu = false
				this.$emit('selected', $event.srcElement.innerHTML)
			},
			slotWidthFN(val:string){
				if (!this.modelValue) {
					this.modelValue = false;
					return;
				}
				if(val) this.slotWidth = document.querySelectorAll(`#${val}`)[0].clientWidth
				this.dropdownGroup?.emit('close');
				this.$nextTick(() => {
					this.modelValue = true;
				})
			},
		}
})
</script>
