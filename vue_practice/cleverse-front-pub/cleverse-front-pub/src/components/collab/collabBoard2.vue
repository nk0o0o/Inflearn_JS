<template>
	<div>
		<div class="header-content_wrap">
			<div class="left">
        <div class="dropdown-collab-type1 icon lg" id="select-box2">
          <dropdown-menu3
            :propisSlotMode="true"
            :propSelectText="selectSlotText"
            :propId="'select-box2'"
            @selected="selectSlotValue"
            :propType="true"
          >
            <template v-slot:img>
              <img class="img-sector" :src="require(`@/assets/imgs/collaboration/img/${imgSector}`)" alt="아이콘">
            </template>
            <template v-slot:body={on}>
              <div class="dropdown-collab-list-type1" :style="`width:${on.width}px`">
                <div
                  class="item"
                  v-for="(item, index) in dropItem"
                  :key="index"
                  :value="index"
                  :class="dropSelectItem.itemId === item.itemId ? 'active' : ''"
                >
                  <button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem(item)">
                    {{ item.title }}
                  </button>
                </div>
              </div>
            </template>
          </dropdown-menu3>
        </div>
			</div>
			<div class="right">
				<div class="tab-collab-type1">
					<ul class="tab-menu">
						<li v-for="(tab, index) in tabsType1" :class="{ active: currentTab===index }" :key="index">
							<button type="button" @click="currentTab = index">{{tab}}</button>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="tab-content">
			<div v-show="currentTab == 0">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">협업보드 <span>254</span></strong>
            <div>
              <form action="">
                <div class="input-box search-type-1 full">
                  <input type="text" required placeholder="협업보드 검색">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                  <div class="list">
                    <ul>
                      <li>내 과제/내가 속한 과제 리스트 전체 노출</li>
                      <li>Digital C.P.C. 기반 구축 </li>
                      <li>Digital Infra 구축</li>
                      <li>Digital Infra 구축</li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="skeleton-content_list_wrap">
            <div class="list-box_wrap collab" v-for="(item, index) in boardList" :key="index">
              <h2 class="tit">{{item.title}}</h2>
              <div class="mix-list_area">
                <div class="info-l">
                  <div class="cont">
                    <span class="img"><img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.name"></span>
                    <div class="dropdown-collab-type3">
                      <personnel-numdropdown></personnel-numdropdown>
                    </div>
                    <span class="txt-open" v-if="item.private">비공개</span>
                  </div>
                </div>
                <div class="info-r">
                  <span class="date">{{item.date}}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <Paging
              v-model="page" 
              :records="500" 
              :per-page="25" 
              :options="{hideCount: true}" 
              @paginate="myCallback"
            />
          </div>
        </div>
			</div>

			<div v-show="currentTab == 1">
				<div class="skeleton-content_list">
					<div class="skeleton-content_head">
            <strong class="content-num">
              협업보드 <span>8</span>
              <em>전체 협업보드 중 조회 권한이 있는 비공개 협업보드를 확인하실 수 있습니다.</em>
            </strong>
            <div>
              <form action="">
                <div class="input-box search-type-1 full">
                  <input type="text" required placeholder="협업보드 검색">
                  <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                  <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                  <div class="list">
                    <ul>
                      <li>내 과제/내가 속한 과제 리스트 전체 노출</li>
                      <li>Digital C.P.C. 기반 구축 </li>
                      <li>Digital Infra 구축</li>
                      <li>Digital Infra 구축</li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
				</div>

        <div class="nodata collab-type">
          <p>협업보드가 없어요!</p>
        </div>
			</div>
		</div>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import dropdownMenu3 from "@/components/dropdownMenu3.vue"
import personnelNumdropdown from '@/components/personnelNumdropdown.vue';
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    dropdownMenu3,
    personnelNumdropdown,
    Paging,
  },
  data() {
    return {
      currentTab: 0,
      tabsType1: ['공개', '비공개'],
      selectSlotText:'전체 협업보드',
      dropSelectItem:{
        itemId: 'selected2'
      },
      dropItem: [
        {
          title: '나의 협업보드',
          class: 'menu1',
          itemId: 'selected1',
          img: 'ico_collab.png'
        },
        {
          title: '전체 협업보드',
          class: 'menu2',
          itemId: 'selected2',
          img: 'ico_collab2.png'
        },
      ],
      imgSector: 'ico_collab2.png',
      boardList: [
        {
          title: 'MZ-Project',
          src: 'img_dummy1.png',
          name: '김한화',
          date: '2021.05.01 - 2021.05.28',
          private: true,
        },
        {
          title: '신규 서비스 콜라보 - 편의점 노드 & 밀키트노드 밀키트노드 밀키트노드',
          src: 'img_dummy1.png',
          name: '김한화',
          date: '2021.05.01 - 2021.05.28',
          private: true,
        },
        {
          title: '신규 서비스 콜라보 - 편의점 노드 & 밀키트노드',
          src: 'img_pp_default.png',
          name: '김한화',
          date: '기간정보없음',
          private: false,
        },
        {
          title: '신규 서비스 콜라보 - 편의점 노드 & 밀키트노드',
          src: 'img_pp_default.png',
          name: '김한화',
          date: '기간정보없음',
          private: false,
        },
        {
          title: '신규 서비스 콜라보 - 편의점 노드 & 밀키트노드',
          src: 'img_pp_default.png',
          name: '김한화',
          date: '기간정보없음',
          private: false,
        },
      ],
      page: 1,
    };
  },
  methods: {
    selectSlotValue(val:any){
      this.selectSlotText = val
    },
    dropClickItem(item: any){
      if(item.img) this.imgSector = item.img
      this.dropSelectItem.itemId = item.itemId
    }
  },
});
</script>