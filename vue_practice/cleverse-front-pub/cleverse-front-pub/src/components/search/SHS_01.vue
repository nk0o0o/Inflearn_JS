<template>
  <div>
    <div class="task-content">
      <div class="skeleton-content_list">
        <div class="skeleton-content_head">
          <strong class="content-num">검색결과 <span>5</span> <em>MY TAG로 설정된 태그 검색 결과가 표시됩니다.</em></strong>
        </div>
        <div class="nodata pp" v-if="show">
          <p>해당 멤버가 없어요.</p>
        </div>
        <div class="skeleton-content_list_wrap pp" v-else>
          <div class="people-list_wrap" v-for="(item, index) in personnels" :key="index">
            <div class="people-list">
              <span class="img" :class="{round: item.leader}"><img :src="require(`@/assets/imgs/collaboration/svg/${item.src}`)" :alt="item.name"></span>
              <em class="name">
                <span class="nm">{{item.name}}</span>
                <span class="pos">{{item.spot}} / {{item.position}}</span>
              </em>
            </div>
            <ul class="people-tag" v-if="item.tags">
              <li v-for="(item, index) in item.tags" :key="index">
                <span v-if="item.tag1">{{item.tag1}}</span>
                <span v-if="item.tag2">{{item.tag2}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
      show: false,
      personnels: [
        {
          leader: true,
          src: 'profile-default-img-60.svg',
          name: '고아라',
          spot: 'Asistant Manager',
          position: 'Asistant Manager',
          tags: [
            {
              tag1: '#신사업부문신사업부문신사업부문',
              tag2: '#Side ProjectSide ProjectSide Project',
            },
            {
              tag1: '#구독 솔루션 (홈트)',
              tag2: '#PM',
            },
          ],
        },
        {
          src: 'profile-default-img-60.svg',
          name: '김한화',
          spot: 'Asistant Manager',
          position: 'Asistant Manager',
          tags: [
            {
              tag1: '#구독 솔루션 (홈트)',
              tag2: '#PM',
            },
          ],
        },
        {
          src: 'profile-default-img-60.svg',
          name: '고아라',
          spot: 'Asistant Manager',
          position: 'Asistant Manager',
          tags: [
            {
              tag1: '#신사업부문신사업부문신사업부문',
              tag2: '#Side ProjectSide ProjectSide Project',
            },
            {
              tag1: '#구독 솔루션 (홈트)',
            },
          ],
        },
        {
          src: 'profile-default-img-60.svg',
          name: '최환화',
          spot: 'Asistant Manager',
          position: 'Asistant Manager',
          tags: [
            {
              tag1: '#구독 솔루션 (홈트)',
              tag2: '#PM',
            },
          ],
        },
        {
          src: 'profile-default-img-60.svg',
          name: '최환화',
          spot: 'Asistant Manager',
          position: 'Asistant Manager',
          tags: [
            {
              tag1: '#구독 솔루션 (홈트)',
              tag2: '#PM',
            },
          ],
        },
        {
          src: 'profile-default-img-60.svg',
          name: '최환화',
          spot: 'Asistant Manager',
          position: 'Asistant Manager',
          tags: [
            {
              tag1: '#구독 솔루션 (홈트)',
              tag2: '#PM',
            },
          ],
        },
        {
          src: 'profile-default-img-60.svg',
          name: '최환화',
          spot: 'Asistant Manager',
          position: 'Asistant Manager',
          tags: [
            {
              tag1: '#구독 솔루션 (홈트)',
            },
          ],
        },
      ]
    };
  },
  methods: {
  },
  computed: {
  },
});
</script>