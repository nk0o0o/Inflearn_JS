<template>
  <div class='layout-left'>
    <div class='left-navi'>
      <h2 class='left-navi-tit'>협업공간</h2>

      <div class="left-navi-collabo-board_head">
        <div>
          <form action="">
            <div class="input-box search-type3" :class="{ 'active' : isActive }">
              <input type="text" required placeholder="협업공간명 검색">
              <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
              <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
              <div class="error" v-if="error">에러 내용입력</div>
            </div>
          </form>
          <button type="button" class="bn_active" :class="{ 'active' : isActive }" @click="isActive = !isActive"><i class="blind">검색 활성화</i></button>
        </div>
        <div class="favor-wrap">
          <span class="favor" @click="isFavor = !isFavor" :class="{ 'active' : isFavor }"><i class="blind">즐겨찾기</i></span>
        </div>
        <div>
          <div class="dropdown-type1">
            <dropdown-menu3
              :propisSlotMode="false"
              :propItem="dropItem"
              :propDropSelectItem="dropSelectItem.itemId"
              @selected="selectValue"
              :propLocation="'bottom end'"
            />
          </div>
        </div>
      </div>
      <div class="left-navi-collabo-board_add">
        <button type="button" class="btn">협업공간</button>
      </div>
      <div class="left-navi-collabo-board_list_head">
        <div class="num">
          <div class="dropdown-type1 num-list" id="select-box2">
            <dropdown-menu3
              :propisSlotMode="true"
              :propLocation="'bottom start'"
              :propId="'select-box2'"
              @selected="selectValue"
            >
              <template v-slot:head>
                <span>My <em>12</em></span>
              </template>
              <template v-slot:body={on}>
                <div class="collab-select__list" :style="`width:${on.width}px`">
                  <div
                    class="item"
                    v-for="(item, index) in dropItem3"
                    :key="index"
                    :value="index"
                    :class="dropSelectItem3.itemId === item.itemId ? 'active' : ''"
                  >
                    <button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item)">
                      {{ item.title }}
                      <em>{{ item.num }}</em>
                    </button>
                  </div>
                </div>
              </template>
            </dropdown-menu3>
          </div>
        </div>
        <div>
          사용중
          <label for="switch1" class="switch-button">
            <input type="checkbox" id="switch1" checked>
            <span class="switch-onnoff"></span>
          </label>
        </div>
      </div>
      <div class="left-navi-collabo-board_list">
        <ul :class="{ 'active' : isListView }" v-if="!nodata">
          <li v-for="(item, index) in menu" :key="index" :class="{ 'ov' : item.ov }">
            <span class="favor_wrap">
              <span class="favor" @click="item.isFavor = !item.isFavor" :class="{ 'active' : item.isFavor }"><i class="blind">즐겨찾기</i></span>
            </span>
            <span class="txt">{{item.list}}</span>
            <span>
              <div class="dropdown-type1">
                <dropdown-menu3
                  :propisSlotMode="false"
                  :propItem="dropItem2"
                  :propDropSelectItem="dropSelectItem2.itemId"
                  @selected="selectValue2"
                  :propLocation="'bottom end'"
                />
              </div>
            </span>
            <v-tooltip
              activator='parent'
              anchor='end'
              content-class='end tooltip-w mw-200'
            >
              {{item.list}}
            </v-tooltip>
          </li>
        </ul>
        <div class="bn_more_wrap" v-if="!nodata">
          <button type="button" class="more" @click="isListView = !isListView">더보기</button>
          <button type="button" class="close" @click="isListView = !isListView">접기</button>
        </div>
        <div class="nodata" v-if="nodata">
          + 협업공간 버튼을 클릭하고<br>
          협업공간을 만들어보세요.
        </div>
      </div>

      <div class='left-navi_foot'>
        <span class="my_space">나의공간 <!--em>12</em--></span>
        <button type='button' class='board_recent'>
          <span>최근 방문한 보드</span>
          <v-tooltip
            activator='parent'
            anchor='end'
            content-class='end tooltip-w mw-200'
          >
          최근 방문한 보드
          </v-tooltip>
        </button>
        <button type='button' class='board_unidentif'>
          <span>미확인 보드</span>
          <v-tooltip
            activator='parent'
            anchor='end'
            content-class='end tooltip-w mw-200'
          >
          미확인 보드
          </v-tooltip>
        </button>
        <button type='button' class='board_private'>
          <span>공유받은 비공개 보드</span>
          <v-tooltip
            activator='parent'
            anchor='end'
            content-class='end tooltip-w mw-200'
          >
          공유받은 비공개 보드
          </v-tooltip>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import dropdownMenu3 from "@/components/dropdownMenu3.vue"

export default defineComponent({
  components: {
    dropdownMenu3,
  },
  data() {
    return {
      nodata: false,
      isFavor: false,
      isActive: false,
      isListView: false,
      dropSelectItem:{
        itemId: 'selected1'
      },
      dropSelectItem2:{
        itemId: 'selected1'
      },
      dropSelectItem3:{
        itemId: 'selected1'
      },
      dropItem: [
        { title: '최신순', itemId: 'selected1'  },
        { title: '이름순', itemId: 'selected2'  },
      ],
      dropItem2: [
        { title: '협업공간 URL 복사', itemId: 'selected1'  },
        { title: '설정', itemId: 'selected2'  },
      ],
      dropItem3: [
        {
          title: 'My',
          num: 12,
          itemId: 'selected1',
        },
        {
          title: 'All',
          num: 30,
          itemId: 'selected2',
        },
      ],
      menu: [
        { ov: true, isFavor: true, list: '차세대 그룹웨어 구축sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss' },
        { isFavor: false, list: '협업공간명' },
        { isFavor: true, list: '협업공간명' },
        { isFavor: false, list: '협업공간명' },
        { isFavor: false, list: '협업공간명' },
        { isFavor: false, list: '협업공간명' },
        { isFavor: false, list: '협업공간명' },
        { isFavor: false, list: '협업공간명' },
        { isFavor: false, list: '협업공간명' },
        { isFavor: false, list: '협업공간명' },
        { isFavor: false, list: '협업공간명' },
        { isFavor: false, list: '협업공간명' },
      ]
    }
  },
  methods:{
    selectValue(val:any){
      this.dropSelectItem.itemId = val.selected
    },
    selectValue2(val:any){
      this.dropSelectItem2.itemId = val.selected
    },
    selectValue3(val:any){
      console.log('@@@',val)
      this.dropSelectItem3.itemId = val.selected
    },
    dropClickItem(item: any){
				this.dropSelectItem3.itemId = item.itemId
			},
  }
})
</script>
