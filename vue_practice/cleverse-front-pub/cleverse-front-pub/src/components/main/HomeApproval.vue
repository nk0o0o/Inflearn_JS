<template>
  <div class="home-sector-01_approval">
    <h2 class="title">Approval</h2>
    <div class="tab-approval" id="tabs-approval">
      <ul class="tab-approval_menu">
        <li 
          :class="{'active':currentTab===index}" 
          v-for="(tab, index) in TabApprovals" 
          :key="index"
        >
          <button 
            type="button" 
            @click="currentTab = index"
          >
            {{tab}}
            <span class="num" 
              v-if="tabs[index] && tabs[index].lists"
            >
              {{tabs[index].lists.length}}
            </span>
          </button>
        </li>
      </ul>
      <div class="tab-approval_content" v-if="!nodata">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          v-show="currentTab == index"
        >
          <ul class="list over">
            <li
              v-for="(item, index) in item.lists"
              :key="index"
            >
              <span class="img">
                <img v-if="item.src" :src="require(`@/assets/imgs/${item.src}`)" :alt="item.name">
              </span>
              <dl>
                <dt>{{item.title}}</dt>
                <dd>{{item.name}}・{{item.date}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="nodata file" v-if="nodata">
        <span>결재문서가 없습니다.</span>
      </div>
    </div>
    <button type="button" class="btn-moreview"><i class="blind">더보기</i></button>
    <coming-soon
      propComingTypeClass="coming-soon-type1"
      propComingImgClass="coming-soon-approval"
      propComingText="전자결재 문서를 항목별로<br>확인해 볼 수 있어요"
    />
    <a href="main/comingSoonApproval" style="position:absolute;top:0;left:0;display:block;width:580px;height:320px;z-index:12;"></a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import comingSoon from "@/components/main/comingSoon.vue";

export default defineComponent({
  components: {
    comingSoon,
  },
  data() {
    return {
      nodata: false,
      currentTab: 0,
      TabApprovals: ['결재할문서', '승인문서', '진행문서', '반송문서'],
      tabs: [
        {
          lists: [
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[신청]데이터 외부 전송',
              date: '2022.03.14 11:23'
            },
            {
              name: '김한화',
              title: '[PI ERP][통신비][디지털워크그룹]통신비-무선통신비',
              date: '2022.03.14 11:23'
            },
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[교육][LMS 결재요청]사외위탁교육 수강신청',
              date: '2022.03.14 11:23'
            },
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[교육][LMS 결재요청]사외위탁교육 수강신청',
              date: '2022.03.14 11:23'
            },
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[교육][LMS 결재요청]사외위탁교육 수강신청',
              date: '2022.03.14 11:23'
            },
          ],
        },
        {
          lists: [
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[신청]데이터 외부 전송2',
              date: '2022.03.14 11:23'
            },
          ],
        },
        {
          lists: [
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[신청]데이터 외부 전송3',
              date: '2022.03.14 11:23'
            },
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[PI ERP][통신비][디지털워크그룹]통신비-무선통신비3',
              date: '2022.03.14 11:23'
            },
          ],
        },
        {
          lists: [
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[신청]데이터 외부 전송4',
              date: '2022.03.14 11:23'
            },
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[PI ERP][통신비][디지털워크그룹]통신비-무선통신비4',
              date: '2022.03.14 11:23'
            },
            {
              src: 'img_dummy1.png',
              name: '김한화',
              title: '[교육][LMS 결재요청]사외위탁교육 수강신청4',
              date: '2022.03.14 11:23'
            },
          ],
        },
      ],
    };
  },
});
</script>
