<template>
	<ul class="membersearchlist">
		<li v-for="(item, index) in memberList" :key="index">
			<div class="img"><img :src="require(`@/assets/imgs/collaboration/img/${item.src}`)" :alt="item.img"></div>
			<b class="name ell-singleline">{{item.name}}<span> ({{item.spot}})</span></b>
			<span class="mail ell-singleline">{{item.email}}</span>
			<button type="button" class="add">멤버 추가</button>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {

  },
  data() {
    return {
      memberList: [
        {
          src: 'img_dummy1.png',
					img: '김한화',
          name: '김한화',
					spot: '회사명',
					email: 'test001@hanwha.comtest001@hanwha.com',
        },
        {
          src: 'img_dummy1.png',
					img: '김한화',
          name: '김한화',
					spot: '부서명',
					email: 'test001@hanwha.com',
        },
				{
          src: 'img_pp_default.png',
					img: '김한화',
          name: '김한화',
					spot: '부서명',
					email: 'test001@hanwha.com',
        },
				{
          src: 'img_dummy1.png',
					img: '김한화',
          name: '김한화',
					spot: '부서명',
					email: 'test001@hanwha.com',
        },
				{
          src: 'img_dummy1.png',
					img: '김한화',
          name: '김한화',
					spot: '부서명',
					email: 'test001@hanwha.com',
        },
      ],
    };
  },
});
</script>