<template>
<div>
  <div class="sect-header">
      <div class="left">
          <h3>권한별 메뉴관리</h3>
      </div>
  </div>

  <div class="top-util-wrap">
    <div class="left">
      <form action="">
        <div class="srch_opt_wrap">
          <label class="select-default">
            <select>
              <option>공통권한</option>
              <option>옵션명</option>
              <option>옵션명</option>
            </select>
          </label>
          <label class="select-default">
            <select>
              <option>비밀번호변경시 AD비밀번호먼저변경</option>
              <option>옵션명</option>
              <option>옵션명</option>
            </select>
          </label>
          <label class="select-default">
            <select>
              <option>디폴트</option>
              <option>옵션명</option>
              <option>옵션명</option>
            </select>
          </label>
        </div>
      </form>
    </div>
    <div class="right">
      <button type="button" class="btn md">저장</button>
      <button type="button" class="btn md line-type1">디폴트로부터 저장</button>
      <button type="button" class="btn md line-type1">권한캐시 초기화</button>
    </div>
  </div>

  <div class="adm-menu-manage">
    <div class="adm-tit">Top Quick 메뉴</div>
    <div class="list-box">
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-1"><label for="chk1-1">사원찾기</label></div>
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-2"><label for="chk1-2">시설물 예약</label></div>
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-3"><label for="chk1-3">설문</label></div>
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-4"><label for="chk1-4">고객센터</label></div>
      <div class="input-chk square"><input type="checkbox" name="chk1" id="chk1-5"><label for="chk1-5">사이버 신문고</label></div>
    </div>
  </div>

  <div class="adm-menu-manage">
    <div class="adm-tit">GNB 메뉴</div>
    <div class="list-box type1">
      <ul>
        <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-01"><label for="chk2-01">워크플레이스</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-02"><label for="chk2-02">메일</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-03"><label for="chk2-03">전자결재</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-04"><label for="chk2-04">게시판</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-05"><label for="chk2-05">지원업무</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-06"><label for="chk2-06">안건관리</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-07"><label for="chk2-07">관리자</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-08"><label for="chk2-08">Comm On</label></div></li>
        <li><div class="input-chk square"><input type="checkbox" name="chk2" id="chk2-09"><label for="chk2-09">채널 Hplus</label></div></li>
        <li class="row">
          <div class="input-chk square" v-for="(item, idx) in checkBoxList" :key="idx" >
            <input type="checkbox" name="chk2" :id="`chk2-${idx}`"><label :for="`chk2-${idx}`">{{item.text}}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>

   <div class="adm-menu-manage">
    <div class="adm-tit">System Link 메뉴</div>
    <div class="list-box type2">
      <div class="input-chk square" v-for="(item, idx) in checkBoxList2" :key="idx" >
        <input type="checkbox" name="chk3" :id="`chk3-${idx}`"><label :for="`chk3-${idx}`">{{item.text}}</label>
      </div>
    </div>
  </div>

  <div class="adm-menu-manage">
    <div class="adm-tit">
      <div class="input-chk square">
        <input type="checkbox" name="chk4" id="chk4-00"><label for="chk4-00">시스템관리 메뉴1</label>
      </div>
    </div>
    <div class="list-box type1 row">
      <ul>
        <li v-for="(items, idxs) in checkBoxList3" :key="idxs">
          <div class="input-chk square" v-for="(item, idx) in items" :key="idx">
            <input type="checkbox" :name="`chk-${idxs}-${idx}`" :id="`chk-${idxs}-${idx}`"><label :for="`chk-${idxs}-${idx}`">{{item.text}}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="adm-menu-manage">
    <div class="adm-tit">
      <div class="input-chk square">
        <input type="checkbox" name="chk5" id="chk5-00"><label for="chk5-00">그룹웨어관리 메뉴</label>
      </div>
    </div>
    <div class="list-box type1 row">
      <ul>
        <li v-for="(items, idxs) in checkBoxList4" :key="idxs">
          <div class="input-chk square" v-for="(item, idx) in items" :key="idx">
            <input type="checkbox" :name="`chk2-${idxs}-${idx}`" :id="`chk2-${idxs}-${idx}`"><label :for="`chk2-${idxs}-${idx}`">{{item.text}}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isLoading: false,
      sortable: {
        order: "id",
        sort: "asc",
      },
      items: ['foo', 'bar', 'fizz', 'buzz'],
      values: ['foo', 'bar'],
      value: null,
      checkBoxList: [
        { text: '새메뉴1'},
        { text: '새메뉴2' },
        { text: '새메뉴3' },
      ],
      checkBoxList2: [
        { text: '시스템링크'},
        { text: 'SRM' },
        { text: '방문관리시스템' },
        { text: '업무서비스요청' },
        { text: '내부통제' },
        { text: '시스템링크' },
        { text: '업무서비스요청' },
        { text: '메뉴명' },
        { text: '메뉴명' },
        { text: '메뉴명' },
        { text: '메뉴명' },
        { text: '메뉴명' },
      ],
      checkBoxList3:[
        [
          { text: '권한관리'},
          { text: '메뉴명1-1' },
          { text: '메뉴명1-2' },
          { text: '메뉴명1-3' },
        ],
        [
          { text: '메뉴관리'},
          { text: '메뉴명2-1' },
          { text: '메뉴명2-2' },
          { text: '메뉴명2-3' },
        ],
        [
          { text: '작업관리'},
          { text: '메뉴명3-1' },
        ],
        [
          { text: '설정관리'},
          { text: '메뉴명4-1' },
          { text: '메뉴명4-2' },
        ],
        [
          { text: '통계관리'},
          { text: '메뉴명5-1' },
          { text: '메뉴명5-2' },
        ],
        [
          { text: '로그인'},
        ],
      ],
      checkBoxList4:[
        [
          { text: '조직도'},
          { text: '메뉴명1-1' },
        ],
        [
          { text: '포탈'},
          { text: '메뉴명2-1' },
        ],
        [
          { text: '지원업무'},
          { text: '메뉴명3-1' },
        ],
        [
          { text: '게시판'},
          { text: '메뉴명4-1' },
        ],
        [
          { text: '워크플레이스'},
          { text: '메뉴명5-1' },
        ],
        [
          { text: '임직원서비스'},
          { text: '메뉴명6-1' },
        ],
      ],
    }
  },
});
</script>