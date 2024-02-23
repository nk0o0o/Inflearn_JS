<template>
  <div>
    <div class="header-content_wrap">
      <div class="left">
          <div class="head_location">
            <span>한화시스템</span>
            <em>ICT부문</em>
          </div>
          <div class="dropdown-collab-type1">
            <v-menu>
              <template v-slot:activator="{ props }">
                <button type="button"
                  color="primary"
                  v-bind="props"
                >
                  <span class="set">
                    <span class="sector-name">LIFE SOLUTION</span>
                  </span>
                </button>
              </template>
              <div class="dropdown-collab-list-type1">
                <div class="item"
                  v-for="(item, index) in dropItem"
                  :key="index"
                  :value="index"
                  :class="{ active: item.isActive }"
                >
                  <button type="button">
                    {{ item.title }}
                  </button>
                  <span v-if="item.me" class="me">ME</span>
                </div>
              </div>
            </v-menu>
          </div>
          <div class="personnel-info">조직담당자명 직위/직책</div>
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
          <strong class="content-num">Node <span>8</span></strong>
          <div class="nodata">
            <p>클러스터가 없어요!<br>클러스터를 등록해주세요!</p>
          </div>
        </div>
      </div>

      <div v-show="currentTab == 1">
        <div class="skeleton-content_list">
          <div class="skeleton-content_head">
            <strong class="content-num">Node <span>0</span></strong>
            <div class="dropdown-collab-type6">
              <filter-tagstage></filter-tagstage>
            </div>
          </div>

          <div class="skeleton-content_list_wrap">
            <div>
              <div class="node-list_tit p1">
                <h2 class="tit">Phase1</h2>
                <div class="tt">
                  <div class="dropdown-type2 tooltip phase">
                    <dropdown-menu2
                      :propName="'notice'"
                      :propItem="dropItem1"
                      :propClass="'dropdown-type2-list phase'"
                    >
                    </dropdown-menu2>
                  </div>
                </div>
              </div>
              <div class="node-list_wrap" v-for="(item, index) in phase1" :key="index">
                <a href="#">
                  <dl>
                    <dt class="tit">
                      <span class="ell-singleline">{{item.title}}</span> <span class="txt-open" v-if="item.private">비공개</span>
                    </dt>
                    <dd class="list">
											<div class="captain">캡틴</div>
                      <div>
                        <div class="dropdown-collab-type2 t2">
                          <personnel-dropdown/>
                        </div>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
            </div>
            <div>
              <div class="node-list_tit p2">
                <h2 class="tit">Phase2</h2>
                <div class="tt">
                  <div class="dropdown-type2 tooltip phase">
                    <dropdown-menu2
                      :propName="'notice'"
                      :propItem="dropItem2"
                      :propClass="'dropdown-type2-list phase'"
                    >
                    </dropdown-menu2>
                  </div>
                </div>
              </div>
              <div class="node-list_wrap" v-for="(item, index) in phase2" :key="index">
                <a href="#">
                  <dl>
                    <dt class="tit">
                      <span class="ell-singleline">{{item.title}}</span> <span class="txt-open" v-if="item.private">비공개</span>
                    </dt>
                    <dd class="list">
											<div class="captain">캡틴</div>
                      <div>
                        <div class="dropdown-collab-type2 t2">
                          <personnel-dropdown/>
                        </div>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
            </div>
            <div>
              <div class="node-list_tit p3">
                <h2 class="tit">Phase3</h2>
                <div class="tt">
                  <div class="dropdown-type2 tooltip phase">
                    <dropdown-menu2
                      :propName="'notice'"
                      :propItem="dropItem3"
                      :propClass="'dropdown-type2-list phase'"
                    >
                    </dropdown-menu2>
                  </div>
                </div>
              </div>
              <div class="node-list_wrap" v-for="(item, index) in phase3" :key="index">
                <a href="#">
                  <dl>
                    <dt class="tit">
                      <span class="ell-singleline">{{item.title}}</span> <span class="txt-open" v-if="item.private">비공개</span>
                    </dt>
                    <dd class="list">
											<div class="captain">캡틴</div>
                      <div>
                        <div class="dropdown-collab-type2 t2">
                          <personnel-dropdown/>
                        </div>
                      </div>
                    </dd>
                  </dl>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import personnelDropdown from '@/components/personnelDropdown.vue';
import dropdownMenu2 from "@/components/dropdownMenu2.vue"
import filterTagstage from "@/components/filterTagstage.vue"


export default defineComponent({
    components: {
      personnelDropdown,
      dropdownMenu2,
			filterTagstage,
    },
    data() {
        return {
          currentTab: 1,
          tabsType1: ['Cluster', 'Stage'],
          dropItem1: {
            title: `
              <dl class="tooltip-phase">
                <dt>Phase 1 기준</dt>
                <dd>
                  <ul>
                    <li>- 멤버 미구성 단계</li>
                    <li>- 과제 구상하고 고민하는 단계</li>
                    <li>- 구체화 되지 않은 아이디어 단계</li>
                  </ul>
                </dd>
              </dl>
            `,
          },
          dropItem2: {
            title: `
              <dl class="tooltip-phase">
                <dt>Phase 2 기준</dt>
                <dd>
                  <ul>
                    <li>- 과제 세팅 완료</li>
                    <li>- Action Plan 下 과제수행</li>
                    <li>- 실행을 위한 탐색단계</li>
                    <li>- 잠재적 후보군에 대한 협의 / 조정단계</li>
                  </ul>
                </dd>
              </dl>
            `,
          },
          dropItem3: {
            title: `
              <dl class="tooltip-phase">
                <dt>Phase 3 기준</dt>
                <dd>
                  <ul>
                    <li>- Confirm 후 실행단계</li>
                  </ul>
                </dd>
              </dl>
            `,
          },
          phase1: [
            {
              title: '구독 솔루션 (생필품)구독 솔루션 (생필품)구독 솔루션 (생필품)구독 솔루션 (생필품)구독 솔루션 (생필품)',
              private: true,
            },
            {
              title: '구독 솔루션 (생필품)',
              private: false,
            },
          ],
          phase2: [
            {
              title: '구독 솔루션 (생필품)구독',
              private: true,
            },
          ],
          phase3: [
            {
              title: '구독 솔루션 (생필품)구독 구독 솔루션 (생필품)구독 구독 솔루션 (생필품)구독',
              private: false,
            },
          ],
        };
    },
    methods: {

    },
});
</script>