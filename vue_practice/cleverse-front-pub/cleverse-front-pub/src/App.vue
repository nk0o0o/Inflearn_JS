<template>
  <v-app>
    <v-main v-if="$route.meta.layout == 'base'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
      <Footer :pageInfo="this.pageInfo" />
    </v-main>

    <v-main v-else-if="$route.meta.layout == 'coming'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
    </v-main>
    
    <v-main v-else-if="$route.meta.layout == 'guidestep'" :class="$route.meta.className">
      <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
    </v-main>

    <v-main class="collab-layout" v-else-if="$route.meta.layout == 'cluster'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <div class="main-container">
          <div class="contents">
              <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
          </div>
      </div>
      <hw-footer/>
    </v-main>

    <v-main class="collab-layout side" v-else-if="$route.meta.layout == 'sideproject'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <div class="main-container">
          <div class="contents">
            <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
          </div>
      </div>
      <hw-footersideproject/>
    </v-main>

    <v-main class="collab-layout task" v-else-if="$route.meta.layout == 'taskNode'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <hw-headertasknode/>
      <div class="main-container">
          <div class="contents">
            <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
          </div>
      </div>
      <hw-footer/>
    </v-main>

    <v-main class="collab-layout mytask" v-else-if="$route.meta.layout == 'myTask'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <hw-headermytask/>
      <div class="main-container">
          <div class="contents">
            <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
          </div>
      </div>
      <hw-footer/>
    </v-main>

    <v-main class="collab-layout my" v-else-if="$route.meta.layout == 'my'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <hw-headermy/>
      <div class="main-container">
          <div class="contents">
            <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
          </div>
      </div>
      <Footer :pageInfo="this.pageInfo" />
    </v-main>

    <v-main class="collab-layout cmain" v-else-if="$route.meta.layout == 'cmain'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
      <Footer :pageInfo="this.pageInfo" />
    </v-main>

    <v-main class="collab-layout search" v-else-if="$route.meta.layout == 'search'" :class="[$route.meta.className, {'tagSearch':isTagSearch}]">
      <Header :pageInfo="this.pageInfo" />
      <hw-headertagsearch @update="inputView"/>
      <div class="main-container">
          <div class="contents">
            <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
          </div>
      </div>
      <hw-footer/>
    </v-main>

    <v-main class="collab-layout task-log" v-else-if="$route.meta.layout == 'taskLog'" :class="$route.meta.className">
      <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
    </v-main>

    <v-main class="collab-layout alarm" v-else-if="$route.meta.layout == 'alarm'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <div class="main-container">
        <div class="contents">
          <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
        </div>
      </div>
      <hw-footer/>
    </v-main>

    <!-- <v-main class="collab-layout share-all" v-else-if="$route.meta.layout == 'share-all'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <hw-headerShare/>
      <div class="main-container">
        <div class="contents">
          <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
        </div>
      </div>
      <hw-footer/>
    </v-main> -->

    <v-main class="collab-layout share" v-else-if="$route.meta.layout == 'share'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <div class="main-container">
        <div class="contents">
          <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
        </div>
      </div>
      <hw-footer/>
    </v-main>

    <v-main class="collab-layout ttsearch" v-else-if="$route.meta.layout == 'ttsearch'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <hw-headertotalsearch/>
      <div class="main-container">
        <div class="contents">
          <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
        </div>
      </div>
      <hw-footer/>
    </v-main>

    <v-main class="collab-layout ttsearch2" v-else-if="$route.meta.layout == 'ttsearch2'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <hw-headertotalsearch/>
      <div class="main-container">
        <div class="contents">
          <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
        </div>
      </div>
      <hw-footer/>
    </v-main>

    <v-main class="collab-layout collab" v-else-if="$route.meta.layout == 'collab'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <div class="main-container">
        <div class="contents">
          <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
        </div>
      </div>
      <hw-footer/>
    </v-main>

    <v-main class="collab-layout support" v-else-if="$route.meta.layout == 'support'" :class="$route.meta.className">
      <Header :pageInfo="this.pageInfo" />
      <div class="main-container">
        <div class="contents">
          <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
        </div>
      </div>
      <hw-footer/>
    </v-main>

    <v-main class="collab-layout customer" v-else-if="$route.meta.layout == 'customer'" :class="$route.meta.className">
      <HwHeaderCustomer/>
      <div class="main-container">
        <div class="contents">
          <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
        </div>
      </div>
      <hw-footer/>
    </v-main>
    
    <v-main class="collab-layout customer" v-else-if="$route.meta.layout == 'guide'" :class="$route.meta.className">
      <HwHeaderCustomer/>
      <div class="main-container">
        <div class="contents">
          <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
        </div>
      </div>
      <hw-footer-guide/>
    </v-main>

    <v-main v-else-if="$route.meta.layout == 'admin'" :class="$route.meta.className">
      <div class="admin-wrap" :pageInfo="this.pageInfo">
        <div class="admin-container">
          <admin-left />
          <div class="contents">
            <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
          </div>
        </div>
      </div>
    </v-main>

    <v-main v-else :class="$route.meta.className">
      <router-view @pageSet="pageSet" :pageInfo="this.pageInfo"/>
    </v-main>



  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "@/components/layout/header-wrap.vue";
import Footer from "@/components/layout/footer-wrap.vue";
import HwFooter from "@/components/layout/HwFooter.vue";
import HwFooterGuide from "@/components/layout/HwFooterGuide.vue";
import HwFootersideproject from "@/components/layout/HwFootersideproject.vue";
import HwHeadertasknode from "@/components/layout/HwHeadertasknode.vue";
import adminLeft from "@/components/layout/adminLeft.vue";
import HwHeadermytask from "@/components/layout/HwHeadermytask.vue";
import HwHeadermy from "@/components/layout/HwHeadermy.vue";
import HwHeadertagsearch from "@/components/layout/HwHeadertagsearch.vue";
// import HwHeaderShare from "@/components/layout/HwHeaderShare.vue";
import HwHeaderCustomer from "@/components/layout/HwHeaderCustomer.vue";
import HwHeadertotalsearch from "@/components/layout/HwHeadertotalsearch.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    adminLeft,
    HwFooter,
    HwFooterGuide,
    HwFootersideproject,
    HwHeadertasknode,
    HwHeadermytask,
    HwHeadermy,
    HwHeadertagsearch,
    // HwHeaderShare,
    HwHeadertotalsearch,
    HwHeaderCustomer,
  },
  data () {
    return {
      pageInfo: {
        title: null,
        className: null,
        headerType: null,
        tooltip: null,
      },
      isTagSearch: Boolean,
    }
  },
  methods: {
    pageSet(obj: { title: null, className: null, headerType: null, tooltip: null }): void {
      this.pageInfo = obj;
    },
    inputView(childValue :any){
      this.isTagSearch = childValue;
    }
  },
  watch: {
    // $route(to, from)
    $route(to) {
      if(to.meta.pageInfo) this.pageSet(to.meta.pageInfo);
    }
  }
})
</script>
<style lang="scss">
@import "@/assets/scss/style.scss";
</style>