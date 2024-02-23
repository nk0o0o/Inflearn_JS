<template>
  <base-popup 
    :propShowModal="showModal"
    @popClose="onHideModal" 
    @confirm="onConfirm"
    class="ly-pop-type1 sm scroll"
  >
    <template v-slot:body>
      <h1 class="ly-title">회원 목록 <em class="fc org">100</em>명</h1>
      <div>
        <ul class="club-member-list">
          <li v-for="(item, index) in member" :key="index">
            <div>
              <span class="img" :class="{round: item.leader}">
                <img :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name">
              </span>
              <dl>
                <dt>
                  {{item.name}}
                  <span class="pos">{{item.pos}}</span>
                </dt>
                <dd>{{item.sector}}</dd>
              </dl>
            </div>
            <span class="label-tag bk" v-if="item.sysop">운영자</span>
          </li>
        </ul>
        <Paging
          v-model="page"
          :records="100"
          :per-page="25"
          :options="{hideCount: true}"
          @paginate="myCallback"
        />
      </div>  
    </template>
  </base-popup>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basePopup from "@/components/layout/basePopup.vue"
//@ts-ignore
import Paging from 'v-pagination-3';

export default defineComponent({
  components: {
    basePopup,
    Paging,
  },
  props: {
    pageInfo: null,
    propShowModal: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      error: false,
      showModal: this.propShowModal,
      page: 1,
      member: [
				{
					src: 'icon-svg/profile-default.svg',
					name: '김이름',
					pos: '직책',
					sector: '소속조직명(최하위레벨)',
					sysop: true,
				},
        {
					src: 'img_dummy1.png',
					name: '김한화',
					pos: 'Assistant Manager',
					sector: '디지털워크그룹',
					sysop: true,
				},
        {
					src: 'img_dummy3.png',
					name: '이생명',
					pos: '직책',
					sector: '디지털워크그룹',
				},
        {
					src: 'img_profile_02.png',
					name: '김이름',
					pos: '직책',
					sector: '소속조직명(최하위레벨)',
				},
        {
					src: 'img_profile_02.png',
					name: '김이름',
					pos: '직책',
					sector: '소속조직명(최하위레벨)',
				},
			],
    }
  },
  watch: {
    'propShowModal': function(){
      this.showModal = this.propShowModal
    }
  },
  methods:{
    onHideModal(){
      this.$emit('popClose');
    },
  },
  computed: {
  }
})
</script>