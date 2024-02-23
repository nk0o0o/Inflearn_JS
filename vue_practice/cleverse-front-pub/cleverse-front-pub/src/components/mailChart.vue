<template>
  <svg width="170" height="146" viewBox="0 0 170 146" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="mqfxw8vp4a">
        <stop stop-color="#FFBA8C" offset="0%"/>
        <stop stop-color="#F6474C" offset="100%"/>
      </linearGradient>
    </defs>
    <path d="M23.253 139.208C8.863 124.435 0 104.252 0 82 0 36.713 36.713 0 82 0s82 36.713 82 82c0 22.644-9.178 43.144-24.017 57.983" transform="translate(3 3.77)" stroke="url(#mqfxw8vp4a)" stroke-width="6" fill="none" fill-rule="evenodd"/>
    <defs>
      <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="ugnl2nt2ja" width="200">
        <stop stop-color="#FFBA8C" offset="0%"/>
        <stop stop-color="#F6474C" offset="100%"/>
      </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <path d="M20.325 122.137C7.745 109.173 0 91.491 0 72 0 32.235 32.235 0 72 0s72 32.235 72 72c0 19.882-8.059 37.882-21.088 50.912"
      stroke="url(#ugnl2nt2ja)" stroke-width="20" opacity=".2" transform="translate(14 13)" width="500" class="email-count"
      />
      <g fill="#000">
        <text font-family="NotoSansCJKkr-Bold, Noto Sans CJK KR" text-anchor="middle" alignment-baseline="middle" transform="translate(88, 74)">
          <tspan font-size="36" font-weight="bold">{{ emailCount }}</tspan>
          <tspan font-size="16" font-weight="400" dx="5">%</tspan>
        </text>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
    },
    props: {
        propEmailGuage: {
          type: Number,
          default: 0,
        },
        propSpeed: {
          type: Number,
          default: 0,
        },
    },
    data() {
        return {
          ctr: 0,
          ivl: 0,
          speed: this.propSpeed > 80 ? 15 : 90 - this.propSpeed,
        }
    },
    computed:{
      emailCount() {
        if(this.ctr >= this.propEmailGuage){
          clearInterval(this.ivl)
        }
        return this.ctr
      }
    },
    mounted(){
      this.emailChart(this.propEmailGuage)
      this.updateCounter()
    },
    methods: {
      emailChart(emailGuage:any){
        emailGuage = 338 - (emailGuage*338)/100;
        let root = document.documentElement;
        setTimeout(function(){
          root.style.setProperty('--change', emailGuage);
        }, 500);
      },
      updateCounter() {
        // console.log(this.speed);
        this.ivl = setInterval(()=>{
          this.ctr += 1
        }, this.speed)
      }
    }
});
</script>
<style scope>
  :root{
    --change: 338;
  }
  .email-count {stroke-dasharray:338; stroke-dashoffset:338; animation:dash 1s linear 1 0.5s forwards;}
  @keyframes dash {
    100%	{stroke-dashoffset:var(--change);}
  }
</style>
