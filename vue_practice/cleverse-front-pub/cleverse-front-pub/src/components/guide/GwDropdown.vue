<template>
<section class="form">
<pre>
<b>dropdown type3</b> v-menu slot 모드 미 사용
- :propisSlotMode="false" <b>//[필수]</b> 슬롯 모드를 사용/미사용 옵션
- :propItem="dropItem3" <b>//[필수]</b> data값 전달
- :propClass="'사용자 정의 클래스'" <b>//[필수]</b> 드랍박스 영역 커스텀 클래스를 사용하기 위해
- :propDropSelectItem="dropSelectItem3.itemId"
- @selected="selectValue3" <b>//[필수]</b> 선택한 옵션 텍스트로 변경하기 함수
- :propLocation="'start bottom'" //드랍박스 위치 변경 top, bottom, start, end, center : 옵션이 없을 경우 default는 bottom값 입니다.

<b>[ 텍스트가 들어갈 경우 ] </b>
<b>dropdown type3</b> v-menu slot 모드 미 사용
- :propisSlotMode="false" <b>//[필수]</b> 슬롯 모드를 사용/미사용 옵션
- :propSelectText="selectAddFileText" <b>//[필수]</b> 선택된 옵션 텍스트로 변경하기 위한 변수
- :propItem="dropItem7" <b>//[필수]</b> data값 전달
- :propClass="'사용자 정의 클래스'" <b>//[필수]</b> 드랍박스 영역 커스텀 클래스를 사용하기 위해
- :propDropSelectItem="dropSelectItem7.itemId"
- @selected="selectValue4" <b>//[필수]</b> 선택한 옵션 텍스트로 변경하기 함수
- :propLocation="'end top'" //드랍박스 위치 변경 top, bottom, start, end, center : 옵션이 없을 경우 default는 bottom값 입니다.

=================================================================================

<b>dropdown type4</b> v-menu slot 모드 미 사용
- :propisSlotMode="false" <b>//[필수]</b> 슬롯 모드를 사용/미사용 옵션
- :propSelectText="selectText" <b>//[필수]</b> 선택된 옵션 텍스트로 변경하기 위한 변수
- :propItem="dropItem4" <b>//[필수]</b> data값 전달
- :propClass="'사용자 정의 클래스'" <b>//[필수]</b> 드랍박스 영역 커스텀 클래스를 사용하기 위해
- @selected="selectValue" <b>//[필수]</b> 선택한 옵션 텍스트로 변경하기 함수
- :propLocation="'bottom'" //드랍박스 위치 변경 top, bottom, start, end, center : 옵션이 없을 경우 default는 bottom값 입니다.

=================================================================================

<b>dropdown type5</b> v-menu slot 모드 사용
:propisSlotMode="true" <b>//[필수]</b> 슬롯 모드를 사용/미사용 옵션
:propSelectText="selectSlotText" <b>//[필수]</b> 선택된 옵션 텍스트로 변경하기 위한 변수
- id="select-box1" <b>//[필수]</b>
:propId="'select-box1'" <b>//[필수]</b> 어떤 element인지 구분하기 위해
@selected="selectSlotValue" <b>//[필수]</b> 선택한 옵션 텍스트로 변경하기 함수
- :propLocation="'bottom'" //드랍박스 위치 변경 top, bottom, start, end, center : 옵션이 없을 경우 default는 bottom값 입니다.

=================================================================================

<b>dropdown type6</b> v-menu slot 모드 사용
- :propisSlotMode="true" <b>//[필수]</b> 슬롯 모드를 사용/미사용 옵션
- :propSelectText="selectSlotText6" <b>//[필수]</b> 선택된 옵션 텍스트로 변경하기 위한 변수
- id="select-box2" <b>//[필수]</b>
- :propId="'select-box2'" <b>//[필수]</b>
- @selected="selectSlotValue6" <b>//[필수]</b> 선택한 옵션 텍스트로 변경하기 함수
- :propType="true" <b>//[필수]</b> dropdown-collab-list-* 클래스를 사용 할 때 추가
- v-slot:img // 타이틀 왼쪽 영역에 이미지가 필요할 경우 추가
- :propLocation="'bottom'" //드랍박스 위치 변경 top, bottom, start, end, center : 옵션이 없을 경우 default는 bottom값 입니다.
- :clickToHide="false" //컨텐츠 내 클릭시 드랍박스 안 닫히게 하는 옵션 default값은 true
</pre>

  <h1>DROPDOWN</h1>
  <table>
    <colgroup>
      <col style="width:100px">
      <col>
      <col style="width:100px">
      <col>
    </colgroup>
    <thead>
      <tr>
        <th>이름</th>
        <th>default</th>
        <th>이름</th>
        <th>default</th>
        <th>이름</th>
        <th>default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>dropdown type1</th>
        <td>
          <div class="dropdown-type1">
            <dropdown-menu
              :propItem="dropItem"
            ></dropdown-menu>
          </div>
        </td>
        <th>dropdown type2</th>
        <td>
          <div class="dropdown-type2 tooltip text">
            <dropdown-menu2
              :propName="'김한화'"
              :propItem="dropItem2"
              :propClass="'dropdown-type2-list type2'"
            >
            </dropdown-menu2>
            <br><br>
            <dropdown-menu2
              :propisSlotMode="true"
              :propItem="dropItem2"
              :propClass="'dropdown-type2-list type2'"
            >
            <template v-slot:head>
              <img :src="require('@/assets/imgs/collaboration/img/img_pp_36x36.png')">
              <span>김한화</span>
            </template>
            </dropdown-menu2>
          </div>
        </td>
        <th>dropdown type3</th>
        <td>
          <div class="dropdown-type1">
            <dropdown-menu3
              :propisSlotMode="false"
              :propItem="dropItem3"
              :propClass="'task-log'"
              :propDropSelectItem="dropSelectItem3.itemId"
              @selected="selectValue3"
              :propLocation="'start bottom'"
            />
          </div>

          <div class="dropdown-type1 add-file">
            <dropdown-menu3
              :propisSlotMode="false"
              :propSelectText="selectAddFileText"
              :propItem="dropItem7"
              :propClass="'task-log'"
              :propDropSelectItem="dropSelectItem7.itemId"
              @selected="selectValue4"
              :propLocation="'end top'"
            />
          </div>
        </td>
      </tr>
      <tr>
        <th>dropdown type4</th>
        <td>
          <div class="dropdown-type1 select-box">
            <dropdown-menu3
              :propisSlotMode="false"
              :propSelectText="selectText"
              :propItem="dropItem4"
              :propClass="'select-box-inner'"
              :propDropSelectItem="dropSelectItem4.itemId"
              @selected="selectValue"
              :propLocation="'bottom'"
            />
          </div>
        </td>
        <th>dropdown type5</th>
        <td>
          <div class="dropdown-type1 select-box" id="select-box1">
            <dropdown-menu3
              :propisSlotMode="true"
              :propSelectText="selectSlotText"
              :propId="'select-box1'"
              @selected="selectSlotValue"
              :propLocation="'bottom'"
            >
              <template v-slot:body={on}>
                <ul class="dropdown-type1-list select-box-inner" :style="`width:${on.width}px`">
                  <li
                    v-for="(item, index) in dropItem5"
                    :key="index"
                  >
                    <div class="select-group-1">
                      <button type="button" v-on="on" :class="[`${item.class}`, dropSelectItem5.itemId === item.itemId ? 'active' : '']" @click="dropClickItem1(item)">
                        {{item.title}}
                      </button>
                      <span v-if="item.me" class="me">ME</span>
                    </div>
                  </li>
                </ul>
              </template>
            </dropdown-menu3>
          </div>
        </td>
        <th>dropdown type6</th>
        <td>
          <div class="dropdown-collab-type1" id="select-box2">
            <dropdown-menu3
              :propisSlotMode="true"
              :propSelectText="selectSlotText6"
              :propId="'select-box2'"
              @selected="selectSlotValue6"
              :propType="true"
              :propLocation="'bottom'"
              :clickToHide="true"
            >
              <template v-slot:img>
                <img class="img-sector" :src="require(`@/assets/imgs/collaboration/svg/${imgSector}`)" alt="아이콘">
              </template>
              <template v-slot:body={on}>
                <div class="dropdown-collab-list-type1" :style="`width:${on.width}px`">
                  <div
                    class="item"
                    v-for="(item, index) in dropItem6"
                    :key="index"
                    :value="index"
                    :class="dropSelectItem6.itemId === item.itemId ? 'active' : ''"
                  >
                    <button type="button" v-on="on" :class="`${item.class}`" @click="dropClickItem2(item)">
                      {{ item.title }}
                    </button>
                  </div>
                </div>
              </template>
            </dropdown-menu3>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import dropdownMenu from "@/components/dropdownMenu.vue"
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import dropdownMenu3 from "@/components/dropdownMenu3.vue"

export default defineComponent({
  components: {
    dropdownMenu,
    dropdownMenu2,
    dropdownMenu3,
  },
  data() {
    return {
      selectAddFileText: '파일 첨부',
      selectText:'타이틀',
      selectText3:'타이틀',
      selectSlotText:'슬롯타이틀',
      selectSlotText6:'전체 정보 공유',
      dropItem: [
          { title: '전체', isToggle: false },
          { title: '읽지않음', isToggle: false },
          { title: '제목', isToggle: true, isActive: false },
          { title: '첨부', isToggle: true, isActive: false },
          { title: '작성자', isToggle: true, isActive: false },
          { title: '등록일', isToggle: true, isActive: false },
          { title: '종료일', isToggle: true, isActive: false },
          { title: '조회', isToggle: true, isActive: false },
        ],
      dropItem2: {
        title: `
          <div class="tooltip-member">
            <div>
              <span class="thumb"><img src="${require('@/assets/imgs/img_dummy1.png')}" alt="프로필 이미지"></span>
              <p><b>김한화</b> <span class="pos">직위/직책</span></p>
            </div>
            <p class="cp">회사명 <span></span> 소속조직명</p>
            <p class="phone">010-1234-2336</p>
            <p class="email">mail@hanwha.com</p>
          </div>
        `,
      },
      dropSelectItem3:{
        itemId: 'selected1'
      },
      dropItem3: [
        { title: '전체', itemId: 'selected1'  },
        { title: '타이틀 1', itemId: 'selected2'  },
        { title: '타이틀 2', itemId: 'selected3'  },
        { title: '타이틀 3', itemId: 'selected4'  },
      ],
      dropSelectItem4:{
        itemId: 'selected1'
      },
      dropItem4: [
        { title: '전체', class: 'menu1', itemId: 'selected1' },
        { title: '타이틀 1', class: 'menu2', itemId: 'selected2' },
        { title: '타이틀 2', class: 'menu3', itemId: 'selected3' },
        { title: '타이틀 3', class: 'menu4', itemId: 'selected4' },
      ],
      dropSelectItem5:{
        itemId: 'selected1'
      },
      dropItem5: [
        {
          title: '테스크의 그룹명테스크의 그룹명테스크의 그룹명테스크의 그룹명테스크의 그룹명테스크의 그룹명테스크의 그룹명테스크의 그룹명',
          me:true,
          class: 'menu1',
          itemId: 'selected1'
        },
        {
          title: 'FINANCIAL SOLUTION1',
          me:false,
          class: 'menu2',
          itemId: 'selected2'
        },
        {
          title: '클러스터명',
          me:false,
          class: 'menu3',
          itemId: 'selected3'
        },
        {
          title: 'FINANCIAL SOLUTION4',
          me:false,
          class: 'menu4',
          itemId: 'selected4'
        },
        {
          title: 'BIG DATA / LENDING5',
          me:false,
          class: 'menu5',
          itemId: 'selected5'
        },
        {
          title: '클러스터명6',
          me:false,
          class: 'menu6',
          itemId: 'selected6'
        },
      ],
      dropSelectItem6:{
        itemId: 'selected1'
      },
      dropItem6: [
				{
          title: '전체 정보 공유',
          class: 'menu1',
          itemId: 'selected1',
          img: 'cluster-sector-building.svg'
        },
				{
          title: '나의 정보 공유',
          class: 'menu2',
          itemId: 'selected2',
          img: 'cluster-sector-small.svg'
        },
			],
      imgSector: 'cluster-sector-building.svg',
      dropSelectItem7:{
        itemId: 'selected1'
      },
      dropItem7: [
        { title: '내 PC에서 선택', itemId: 'selected1'  },
        { title: '그룹 파일함에서 선택', itemId: 'selected2'  },
      ],
    }
  },
  methods:{
    testSample(){
      alert('test')
    },
    selectValue(val:any){
      this.selectText = val.title
      this.dropSelectItem4.itemId = val.selected
    },
    selectValue3(val:any){
      this.dropSelectItem3.itemId = val.selected
    },
    selectValue4(val:any){
      this.dropSelectItem7.itemId = val.selected
    },
    selectSlotValue(val:any){
      this.selectSlotText = val
    },
    selectSlotValue6(val:any){
      this.selectSlotText6 = val
    },
    dropClickItem1(item: any){
      this.dropSelectItem5.itemId = item.itemId
    },
    dropClickItem2(item: any){
      if(item.img) this.imgSector = item.img
      this.dropSelectItem6.itemId = item.itemId
    }
  },
})
</script>
<style lang="css" scoped>
h1 {
  margin-bottom: 20px;
  font-family: 'Lifeplus'; font-weight:600; font-size: 36px; color: #000;
}
table + h1 {margin-top:30px;}
table {margin-top: 10px;}
thead th {border-bottom: 2px solid #adadad;}
th, td {padding: 15px 10px; border:1px solid #ccc;font-size: 15px;}
th {
  line-height: 1.6em;
  color: #000;
  background-color: #f1f1f1;
}
</style>