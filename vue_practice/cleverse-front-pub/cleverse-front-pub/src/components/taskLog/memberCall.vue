<template>
    <div class="member-call-box">
			<div class="scroll">
				<div class="nodata" v-if="show">
					<div class="txt">해당 검색어와 일치하는<br>사용자가 없습니다.</div>
				</div>
				<dl>
					<dt>
						<p class="mem-tit">검색결과</p>
						<sub class="mem-sub">권한이 있는 구성원만 호출가능합니다.</sub>
					</dt>
					<dd>
						<ul class="peopleSearchList">
							<li class="all-member">
								<div class="all">All Member</div>
								<div class="input-chk bn-pp_sel"><input type="checkbox" name="chk1" id="chk1"><label for="chk1">all</label></div>
							</li>
						</ul>
					</dd>
					<dd>
						<div class="nodata" v-if="show">해당 검색어와 일치하는<br>사용자가 없습니다.</div>
						<ul class="member-list">
							<li v-for="(item, index) in userList" :key="index">
								<div class="img"><img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.img"></div>
								<b class="name ell-singleline">{{item.name}} <span>{{item.pos}}</span></b>
								<span class="team ell-singleline">{{item.spot}} / {{item.part}}</span>
							</li>
						</ul>
					</dd>
				</dl>
			</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {

  },
  data() {
    return {
      userList: [
        {
          src: 'img_dummy1.png',
					img: '김한화',
          name: '김한화',
          pos: '대리',
					spot: '한화생명',
					part: '이커머스플랫폼이커머스이커머스플랫폼이커머스',
        },
        {
          src: 'img_pp_default.png',
					img: '김한화',
          name: '김한화',
          pos: '대리',
					spot: '한화생명',
					part: '회계팀',
        },
				{
          src: 'img_pp_default.png',
					img: '김한화',
          name: '김한화',
          pos: '대리',
					spot: '한화생명',
					part: '회계팀',
        },
				{
          src: 'img_pp_default.png',
					img: '김한화',
          name: '김한화',
          pos: '대리',
					spot: '한화생명',
					part: '회계팀',
        },
      ],
    };
  },
});
</script>