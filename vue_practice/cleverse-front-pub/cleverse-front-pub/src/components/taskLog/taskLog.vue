<template>
  <div class="task-log-wrap">
    <header class="task-log-header" :class="{'is-fixed': isFixed }">
      <div class="left">
        <button type="button" class="btn_back" @click="$router.go(-1)">뒤로가기</button>
        <ul class="task-log-menu">
          <li v-for="item in tabs" :class="[{'active':currentTab===item.num}, item.class]" :key="item.num">
            <button type="button" @click="currentTab = item.num">{{item.title}}</button>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="task-log-content flex">
          <div>
            <button type="button" class="ico-favorite" @click="clickSelect" :class="{'active':selectActive}">즐겨찾기</button>
          </div>
          <div class="dropdown-collab-type1" id="select-box2">
            <dropdown-menu
              :propisSlotMode="true"
              :propSelectText="selectSlotText2"
              :propId="'select-box2'"
              @selected="selectSlotValue2"
              :propType="true"
              :propLocation="'bottom'"
            >
              <template v-slot:img>
                <i :class="imgSectorClass2"></i>
              </template>
              <template v-slot:body={on}>
                <div class="dropdown-collab-list-type1 pub-prav" :style="`width:${on.width}px`">
                  <div
                    class="item"
                    v-for="(item, index) in dropItem2"
                    :key="index"
                    :value="index"
                    :class="dropSelectItem2.itemId === item.itemId ? 'active' : ''"
                  >
                    <button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem2(item)">
                      {{ item.title }}
                    </button>
                  </div>
                </div>
              </template>
            </dropdown-menu>
          </div>

          <div class="dropdown-collab-type1" id="select-box3">
            <dropdown-menu
              :propisSlotMode="true"
              :propSelectText="selectSlotText3"
              :propId="'select-box3'"
              @selected="selectSlotValue3"
              :propType="true"
              :propLocation="'bottom'"
            >
              <template v-slot:img>
                <i :class="imgSectorClass3"></i>
              </template>
              <template v-slot:body={on}>
                <div class="dropdown-collab-list-type1 my-mem" :style="`width:${on.width}px`">
                  <div
                    class="item"
                    v-for="(item, index) in dropItem3"
                    :key="index"
                    :value="index"
                    :class="dropSelectItem3.itemId === item.itemId ? 'active' : ''"
                  >
                    <button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem3(item)">
                      {{ item.title }}
                    </button>
                  </div>
                </div>
              </template>
            </dropdown-menu>
          </div>

          <div class="dropdown-collab-type1" id="select-box4">
            <dropdown-menu
              :propisSlotMode="true"
              :propSelectText="selectSlotText4"
              :propId="'select-box4'"
              @selected="selectSlotValue4"
              :propType="true"
              :propLocation="'bottom'"
            >
              <template v-slot:img>
                <i :class="imgSectorClass4"></i>
              </template>
              <template v-slot:body={on}>
                <div class="dropdown-collab-list-type1 pub-prav" :style="`width:${on.width}px`">
                  <div
                    class="item"
                    v-for="(item, index) in dropItem4"
                    :key="index"
                    :value="index"
                    :class="dropSelectItem4.itemId === item.itemId ? 'active' : ''"
                  >
                    <button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem4(item)">
                      {{ item.title }}
                    </button>
                  </div>
                </div>
              </template>
            </dropdown-menu>
          </div>

          <div class="member-dropdown">
            <span class="img">
              <img :src="require(`@/assets/imgs/collaboration/svg/profile-default-img-34.svg`)" alt="default image">
            </span>
            <dropdownMember-edit/>
          </div>
        </div>
        <span class="check-important"><input type="checkbox" name="" id="important"><label for="important">중요</label></span>
        <span class="check-task"><input type="checkbox" name="" id="task" v-model="taskComplete" true-value="완료" false-value="미완료"><label for="task">{{taskComplete}}</label></span>
        <div class="task-log-util">
          <div class="dropdown-type1">
            <dropdown-menu
              :propisSlotMode="false"
              :propItem="dropItem"
              :propClass="'task-log'"
              :propDropSelectItem="dropSelectItem.itemId"
              @selected="selectValue"
              :propLocation="'start top'"
            />
          </div>
        </div>
      </div>
    </header><!-- //task-log-header -->

    <div class="task-log-content">
      <task-log-tab1 v-show="currentTab == 0"/>
      <task-log-tab2 v-show="currentTab == 1"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import taskLogTab1 from "@/components/taskLog/taskLogTab1.vue";
import taskLogTab2 from "@/components/taskLog/taskLogTab2.vue";
import dropdownMemberEdit from "@/components/taskLog/dropdownMemberEdit.vue";
import dropdownMenu from "@/components/dropdownMenu3.vue"
export default defineComponent({
  components: {
    taskLogTab1,
    taskLogTab2,
    dropdownMenu,
    dropdownMemberEdit,
  },
  data() {
    return {
      selectActive: false,
      currentTab: 0,
      tabs: [
        {num:0, title:'Task', class:'tab-task-log'},
        {num:1, title:'파일', class:'tab-file'}
      ],
      taskComplete: '미완료',
      isFixed: false,
      selectSlotText2:'공개',
      dropSelectItem2:{
        itemId: 'selected1'
      },
      dropItem2: [
        {
          title: '공개',
          itemId: 'selected1',
          class: '',
          imgClass: 'ico-board-public'
        },
        {
          title: '비공개',
          itemId: 'selected2',
          class: '',
          imgClass: 'ico-board-private'
        },
      ],
      imgSectorClass2: 'ico-board-public',

      selectSlotText3:'나만편집',
      dropSelectItem3:{
        itemId: 'selected1'
      },
      dropItem3: [
        {
          title: '나만편집',
          itemId: 'selected1',
          class: '',
          imgClass: 'ico-board-my'
        },
        {
          title: '멤버편집',
          itemId: 'selected2',
          class: '',
          imgClass: 'ico-board-mem'
        },
      ],
      imgSectorClass3: 'ico-board-my',

      dropSelectItem:{
        itemId: 'selected1'
      },
      dropItem: [
        { title: '전체', itemId: 'selected1'  },
        { title: '타이틀 1', itemId: 'selected2'  },
        { title: '타이틀 2', itemId: 'selected3'  },
        { title: '타이틀 3', itemId: 'selected4'  },
      ],
      selectSlotText4:'멤버 공개',
      dropSelectItem4:{
        itemId: 'selected1'
      },
      dropItem4: [
        {
          title: '멤버 공개',
          itemId: 'selected1',
          class: '',
          imgClass: 'ico-board-public'
        },
        {
          title: '멤버 비공개',
          itemId: 'selected2',
          class: '',
          imgClass: 'ico-board-private'
        },
      ],
      imgSectorClass4: 'ico-board-public',
    };
  },
  methods: {
    handleScroll (event: any) {
      let _scrollY = window.scrollY || window.pageYOffset;
      if(_scrollY > 190){
          this.isFixed = true;
      } else {
          this.isFixed = false;
      }
    },
    clickSelect(){
			this.selectActive = !this.selectActive
		},
    selectValue(val:any){
      this.dropSelectItem.itemId = val.selected
    },
    dropClickItem2(item: any){
        if(item.imgClass) this.imgSectorClass2 = item.imgClass
        this.dropSelectItem2.itemId = item.itemId
    },
    selectSlotValue2(val:any){
      this.selectSlotText2 = val
    },
    dropClickItem3(item: any){
      if(item.imgClass) this.imgSectorClass3 = item.imgClass
      this.dropSelectItem3.itemId = item.itemId
    },
    selectSlotValue3(val:any){
      this.selectSlotText3 = val
    },
    dropClickItem4(item: any){
      if(item.imgClass) this.imgSectorClass4 = item.imgClass
      this.dropSelectItem4.itemId = item.itemId
    },
    selectSlotValue4(val:any){
      this.selectSlotText4 = val
    },
  },
  created () {
      window.addEventListener('scroll', this.handleScroll);
  },
  onUnmounted () {
      window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {

  }
});
</script>