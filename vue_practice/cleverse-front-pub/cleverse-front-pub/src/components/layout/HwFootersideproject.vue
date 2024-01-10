<template>
  <section class="footer">
    <div class="footer-side">
      <div class="footer-side_header">
        <h2>Side Project</h2>
        <div class="bn-newnode">
            <button type="button" class="btn bk plus">New Side Project</button>
        </div>
      </div>
      <div class="nodata foot" v-if="show">
        <p>자유롭게 노드를 생성하고<br>하고싶은 업무를 진행할 수 있어요!</p>
      </div>
      <div v-else>
        <ul class="footer-side_list">
          <li>
            <div class="foot-box_wrap idea">
              <h2 class="tit"><a href="#" class="ell-singleline">구독 솔루션 Project 구독 솔루션 Project</a></h2>
              <div class="mix-list_area">
                <div class="info-l">
                  <div class="cont">
                    <span class="img"><img :src="require('@/assets/imgs/img_dummy1.png')" alt="김한화"></span>
                    <div class="dropdown-collab-type3">
                      <personnel-numdropdown></personnel-numdropdown>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" class="btn-view_more"><span>전체보기</span></a>
            </div>
          </li>
          <li>
              <div class="foot-box_wrap idea">
                <h2 class="tit"><a href="#" class="ell-singleline">구독 솔루션 Project</a></h2>
                <div class="mix-list_area">
                  <div class="info-l">
                    <div class="cont">
                      <span class="img"><img :src="require('@/assets/imgs/collaboration/svg/002-ic-08-profile-default-img-34.svg')" alt="김한화"></span>
                      <div class="dropdown-collab-type3">
                        <personnel-numdropdown></personnel-numdropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" class="btn-view_more"><span>전체보기</span></a>
              </div>
          </li>
          <li>
              <div class="foot-box_wrap idea">
                <h2 class="tit"><a href="#" class="ell-singleline">구독 솔루션 Project</a></h2>
                <div class="mix-list_area">
                  <div class="info-l">
                    <div class="cont">
                      <span class="img"><img :src="require('@/assets/imgs/collaboration/svg/002-ic-08-profile-default-img-34.svg')" alt="김한화"></span>
                      <div class="dropdown-collab-type3">
                        <personnel-numdropdown></personnel-numdropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" class="btn-view_more"><span>전체보기</span></a>
              </div>
          </li>
        </ul>
        <a href="#" class="footer-side_more">총 <em>15개</em>의 사이드 프로젝트 보러 가기</a>
      </div>
    </div>
    <footer>
        <div class="copy">©Hanwha. All rights reserved.</div>
        <ul class="info-list">
          <!-- <li><a href="#">이용약관</a></li> -->
          <li><a href="#">개인정보 처리방침</a></li>
          <li><a href="#">Help Desk</a></li>
        </ul>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import personnelNumdropdown from '@/components/personnelNumdropdown.vue';

export default defineComponent({
    components: {
      personnelNumdropdown,
    },
    data() {
        return {
          show: false,
        };
    },
    methods: {

    },
});
</script>
