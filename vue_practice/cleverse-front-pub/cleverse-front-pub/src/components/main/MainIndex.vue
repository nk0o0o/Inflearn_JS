<template>
  <div class="main-wrap">
    <MainHead/>
    <div class="main-box_wrap">
      <main-my-task/>
      <main-notice/>
      <main-mail/>
      <main-channel/>
      <main-share/>
      <main-schedule/>
      <main-task/>
      <main-card/>
      <main-team/>
      <main-map/>
      <main-office/>
      <main-meeting-room/>
      <main-work-time/>
      <main-payment/>
      <main-board-company/>
      <main-board-group/>
      <main-banner-slider/>
    </div>
  </div>
</template>
<script>
import MainCard from './MainCard.vue'
import MainChannel from './MainChannel.vue'
import MainHead from "./MainHead.vue"
import MainMail from './MainMail.vue'
import MainMyTask from './MainMyTask.vue'
import MainNotice from './MainNotice.vue'
import MainOffice from './MainOffice.vue'
import MainSchedule from './MainSchedule.vue'
import MainShare from './MainShare.vue'
import MainTask from './MainTask.vue'
import MainMap from './MainMap.vue'
import MainTeam from './MainTeam.vue'
import MainMeetingRoom from './MainMeetingRoom.vue'
import MainWorkTime from './MainWorkTime.vue'
import MainPayment from './MainPayment.vue'
import MainBoardCompany from './MainBoardCompany.vue'
import MainBoardGroup from './MainBoardGroup.vue'
import MainBannerSlider from './MainBannerSlider.vue'
export default {
  components: {
    MainHead,
    MainTask,
    MainNotice,
    MainMail,
    MainChannel,
    MainShare,
    MainSchedule,
    MainMyTask,
    MainCard,
    MainOffice,
    MainTeam,
    MainMap,
    MainMeetingRoom,
    MainWorkTime,
    MainPayment,
    MainBoardCompany,
    MainBoardGroup,
    MainBannerSlider
  }
}
</script>
