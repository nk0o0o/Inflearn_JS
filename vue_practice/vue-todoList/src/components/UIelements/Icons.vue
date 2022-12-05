<template>
   <div class="app_icons">
       <!-- framework_sec -->
       <div class="framework_sec">
        <h3>Icons</h3>
        <p class="framework_desc">
          디자인 요소의 역할이 아닌 사용자의 행동을 명확하게 함으로써 내용에 도움이 되는 아이콘을 사용합니다.<br/>
          의도적인 목적과 의미가 없는 장식용 아이콘은 지양합니다.
        </p>
      </div>
      <!--// framework_sec -->
      <!-- framework_sec -->
      <div class="framework_sec">
        <h4>Layout</h4>
        <div class="box_wrap">
          <ul class="component_list">
            <!-- .component_list li -->
            <li>  
              <p class="component_desc">
                실제 아이콘이 들어가는 라이브 영역과 아이콘 주위의 여유 공간을 두기 위한 패딩으로 구성합니다.
              </p>            
              <div class="component_guideline">
               <!--  <img src="../resources/images/img_icons_layout.png" alt> -->
              </div>
            </li>
            <!--// .component_list li -->
          </ul>
        </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Icons',
   props:{
      pageN:'Icons'
   },
   data() {
      return {
      }
   },
}
</script>

<style>

</style>