<template>
    <section class="dragdrop">
        <div class="col-2">
            <button class="btn btn-secondary button" @click="sort">
                To original order
            </button>
        </div>

        <draggable
            class="list-group"
            item-key="order"
            tag="transition"
            :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
            v-model="list"
            v-bind="dragOptions"
            @start="isDragging = true"
            @end="isDragging = false"
        >
            <template #item="{ element }">
                <li class="list-group-item" :class="element.class">
                    {{ element.name }}
                </li>
            </template>
        </draggable>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import draggable from "vuedraggable";
const message = [
    "vue.draggable",
    "draggable",
    "component",
    "for",
    "vue.js 2.0",
    "based",
    "on",
    "Sortablejs"
];
let order = message.length;

export default defineComponent({
    name: "transition-example",
    display: "Transition",
    order: 6,
    components: {
        draggable
    },
    data() {
        return {
            list: message.map((name, index) => {
                return { name, order: index + 1, class: 'pub'+index };
            })
        };
    },
    methods: {
        sort() {
            this.list = this.list.sort((a, b) => a.order - b.order);
        }
    },
    computed: {
        dragOptions() {
            return {
                animation: 0,
                group: "description",
                disabled: false,
                ghostClass: "ghost"
            };
        }
    }
})
</script>

<style>
.button {
    margin-top: 35px;
}

.flip-list-move {
    transition: transform 0.5s;
}

.no-move {
    transition: transform 0s;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.list-group {
    min-height: 20px;
}

.list-group-item{
    float: left;
    width: calc(50% - 20px);
    height: 50px;
    border: 1px solid #000;
    cursor: move;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    margin: 10px;
}
.list-group-item.pub0{
    width: calc(100% - 20px);
}
</style>