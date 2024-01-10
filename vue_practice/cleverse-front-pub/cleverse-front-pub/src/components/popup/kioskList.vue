<template>
  <div class="kiosk-pop-list_item_inner" :class="{ active: isActive }">
    <div class="header">
      <span class="kind">{{ this.propKind }}</span>
      <span class="title">{{ this.propTitle }}</span>
      <span class="writer">{{ this.propWriter }}</span>
      <span class="dates">{{ this.propDate }}</span>
      <span class="edit">
        <button type="button" @click="toggleClass"><span class="blind">편집</span></button>
        <span class="ing">편집중</span>
      </span>
      <span class="delete"><button type="button"><span class="blind">삭제</span></button></span>
    </div>
    <div class="content">
      <div class="header">
        <strong class="title">{{ this.propKioskTitle }}</strong>
        <div class="bn">
          <button type="button" class="ico-unit-del">게시글 원문 보기</button>
        </div>
      </div>
      <form action="">
        <div class="input-box type3">
          <input type="text" required placeholder="내용을 입력해주세요." :value="this.propContent">
          <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
          <div class="error" v-if="error">에러 내용입력</div>
        </div>
      </form>
      <!-- <p class="txt">{{ this.propContent }}</p> -->
      <div class="thumb">
        <strong class="title">썸네일</strong>
        <div class="thumb-list-wrap">
          <div class="thumb-list">
            <span v-for="(img, index) in imgSrc" :key="index">
              <img :src="require(`@/assets/imgs/${ img.src }`)" alt="김한화">
            </span>
          </div>
        </div>
        <div class="img-file-upload">
          <div>
            <form action="">
              <div class="img-file-upload_form">
                <input type="file" id="atchfile" @change="handleFileChange">
                <label for="atchfile" class="img-file-upload_form_label">
                  <span>등록하기</span>
                </label>
              </div>
            </form>
            <div class="select-img">
              <!--  -->
              <span class="img" v-if="defaultImg"><img :src="require('@/assets/imgs/icon-svg/upload_default.svg')" alt="김한화"></span>
              <template v-else>
                <span class="img reg"><img :src="require('@/assets/imgs/news-thumbnail-03.png')" alt="이미지"></span>
                <button type="button" @click="imgDel"><span class="blind">삭제</span></button>
              </template>
            </div>
          </div>
          <div class="info">
            <span>*</span> 사이즈 : 580px x 360px / 용량 : 000kbps 미만<br>
            (jpg 파일만 등록해주세요!)
          </div>
        </div>

      </div>
    </div>
    <div class="bn_list">
      <button type="button">취소</button>
      <button type="button">저장</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    propKind: {
      type: String,
      default: '',
    },
    propTitle: {
      type: String,
      default: '',
    },
    propWriter: {
      type: String,
      default: '',
    },
    propDate: {
      type: String,
      default: '',
    },
    propKioskTitle: {
      type: String,
      default: '',
    },
    propContent: {
      type: String,
      default: '',
    },
  },
  components: {
  },

  data(){
    return{
      defaultImg: false,
      fileName: '',
      isActive: false,
      imgSrc: [
        { src: 'img_thumb_01.png' },
        { src: 'img_thumb_02.png' },
        { src: 'img_thumb_03.png' },
        { src: 'img_thumb_04.png' },
        { src: 'news-thumbnail-01.png' },
        { src: 'news-thumbnail-02.png' },
        { src: 'news-thumbnail-03.png' },
        { src: 'news-thumbnail-04.png' },
        { src: 'news-thumbnail-05.png' },
      ]
    }
  },
  methods:{
    toggleClass() {
      this.isActive = !this.isActive;
    },
    handleFileChange(e:any) {
      this.fileName = e.target.files[0].name;
    },
    imgDel(){
      this.defaultImg = true
    }
  },
  computed: {
  }
})
</script>