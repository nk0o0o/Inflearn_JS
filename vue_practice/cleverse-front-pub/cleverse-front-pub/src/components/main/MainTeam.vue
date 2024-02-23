<template>
  <section class="main-box main-box__team">
    <div class="main-box__inner">
      <h2 class="main-box--title">팀원 현황</h2>
      <div class="main-team__list">
        <ul>
          <li v-for="(row, idx) in list" :key="idx">
            <a href="#" class="row-link" :class="{offline : row.state === 0}">
              <span
                class="row-thumb"
                :style="`background-image: url(${require('@/assets/imgs/img_dummy1.png')})`"
              >
                <span v-if="row.state === 0" class="state state0">오프라인</span>
                <span v-if="row.state === 1" class="state state1">자리비움</span>
                <span v-if="row.state === 2" class="state state2">회의중</span>
                <span v-if="row.state === 3" class="state state3">온라인</span>
                <span v-if="row.state === 4" class="state state4">방해금지</span>
              </span>
              <span class="row-str">
                <span class="row-name_pos">
                  <span class="name">{{row.name}}</span>
                  <span class="pos">{{row.pos}}</span>
                </span>
                <span class="row-work_state">
                  <span class="type">{{row.type}}</span>
                  <span class="loc">{{row.loc}}</span>
                  <span class="vac" v-if="row.vac">{{row.vac}}</span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <a href="#" class="main-box--more"> 더보기</a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      list: [
        {
          state: 3,
          name: "asejflawejfiajeaoiwejw",
          pos: "flawkjfoawifjafafwefweawefowaijf",
          type: "7시출근",
          loc: "재택",
          vac: "1쿼터 반반차"
        },
        {
          state: 1,
          name: "김한화",
          pos: "차장",
          type: "현지직출",
          loc: "63빌딩",
        },
        {
          state: 2,
          name: "김한화",
          pos: "차장",
          type: "현지직출",
          loc: "63빌딩",
        },
        {
          state: 4,
          name: "김한화",
          pos: "차장",
          type: "현지직출",
          loc: "63빌딩",
        },
        {
          state: 0,
          name: "김한화",
          pos: "차장",
          type: "리플래시",
          loc: "12.20 - 12.24",
        },
        {
          state: 3,
          name: "김한화김한화",
          pos: "차장차장차장",
          type: "7시출근",
          loc: "재택",
          vac: "1쿼터 반반차"
        },
        {
          state: 3,
          name: "asejflawejfiajeaoiwejw",
          pos: "flawkjfoawifjafafwefweawefowaijf",
          type: "7시출근",
          loc: "재택",
          vac: "1쿼터 반반차"
        },
        {
          state: 1,
          name: "김한화",
          pos: "차장",
          type: "현지직출",
          loc: "63빌딩",
        },
        {
          state: 2,
          name: "김한화",
          pos: "차장",
          type: "현지직출",
          loc: "63빌딩",
        },
        {
          state: 4,
          name: "김한화",
          pos: "차장",
          type: "현지직출",
          loc: "63빌딩",
        },
        {
          state: 0,
          name: "김한화",
          pos: "차장",
          type: "리플래시",
          loc: "12.20 - 12.24",
        },
        {
          state: 3,
          name: "김한화김한화",
          pos: "차장차장차장",
          type: "7시출근",
          loc: "재택",
          vac: "1쿼터 반반차"
        },
      ]
    }
  }
})
</script>