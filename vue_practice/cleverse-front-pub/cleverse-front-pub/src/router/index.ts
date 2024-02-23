import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  //   meta: {
  //     layout: "base",
  //     className: "사용자 정의 class"
  //     pageInfo: {
  //       title: "차세대 그룹웨어 테스트",
  //       className: "클래스 명",
  //       headerType: "헤더 타입"
  //       tooltip: "툴팁 여부"
  //     },
  //   },
  // },
  /*
    1. /views 폴더가 root 경로임
    2. path: '링크 주소로 사용할 명칭',
    3. 컴포넌트 호출 방법
      - component: HomeView // 상단에 import를 선언하여 호출
      - component: () => import('../components/layout/FileListView.vue') // 파일 경로로 호출
    5. meta
      - layout: app.vue에서 레이아웃 구조를 구분하기 위한 값
      - className: 비슷한 레이아웃의 페이지 구분을 위한 클래스명
    4. pageInfo
      - 공통으로 사용될 텍스트, 클래스 등등 변수로 사용하기 위한 객체
      - 이 외 속성을 추가하기 위해서는 app.vue pageInfo 속성에 추가
      pageInfo: {
        title: "차세대 그룹웨어 테스트",
        className: "클래스 명",
        headerType: "헤더 타입"
        tooltip: "툴팁 여부"
      },
  */
  {
    path: '/',
    name: 'filelist',
    component: () => import('../components/layout/FileListView.vue'),
    meta: {
      layout: "",
      pageInfo: {
        title: "차세대 그룹웨어 퍼블 파일 리스트",
      },
    }
  },
  {
    path: '/guide',//링크 주소로 사용할 명칭
    name: 'guide',
    component: () => import('../components/guide/guideView.vue'),//실제 파일 위치
    meta: {
      layout: "",
      pageInfo: {
        title: "차세대 그룹웨어 html 가이드",
      },
    }
  },
  {
    path: '/guide/GWForm',
    name: 'GWForm',
    component: () => import('../components/guide/GwForm.vue'),
  },
  {
    path: '/guide/GwButton',
    name: 'GwButton',
    component: () => import('../components/guide/GwButton.vue'),
  },
  {
    path: '/guide/GwTab',
    name: 'GwTab',
    component: () => import('../components/guide/GwTab.vue'),
  },
  {
    path: '/guide/GwTable',
    name: 'GwTable',
    component: () => import('../components/guide/GwTable.vue'),
  },
  {
    path: '/guide/GwPopup',
    name: 'GwPopup',
    component: () => import('../components/guide/GwPopup.vue'),
  },
  {
    path: '/guide/GwCalendar',
    name: 'GwCalendar',
    component: () => import('../components/guide/GwCalendar.vue'),
  },
  {
    path: '/guide/GwDragDrop',
    name: 'GwDragDrop',
    component: () => import('../components/guide/GwDragDrop.vue'),
  },
  {
    path: '/guide/GwTree',
    name: 'GwTree',
    component: () => import('../components/guide/GwTree.vue'),
  },
  {
    path: '/guide/GwPagination',
    name: 'GwPagination',
    component: () => import('../components/guide/GwPagination.vue'),
  },
  {
    path: '/login/login1',
    name: 'login1',
    component: () => import('../components/login/loginView1.vue'),
    meta: {
      layout: "",
      className: "login-main",
    }
  },
  {
    path: '/login/login2',
    name: 'login2',
    component: () => import('../components/login/loginView2.vue'),
    meta: {
      layout: "",
      className: "login-main",
    }
  },
  {
    path: '/login/login3',
    name: 'login3',
    component: () => import('../components/login/loginView3.vue'),
    meta: {
      layout: "",
      className: "login-out",
    }
  },
  {
    path: '/layout/popupList',
    name: 'pop1',
    component: () => import('../components/layout/popupList.vue'),
    meta: {
      layout: "",
    }
  },
  {
    path: '/popup/:popupId',
    name: 'popupCommon',
    component: () => import('../components/layout/popupView.vue'),
    meta: {
      layout: "",
      //className: "collab-layout" //팝업 v-main에 추가 클래스 확인 할 경우 적용
    }
  },
  {
    path: '/winPopup/:popupId',
    name: 'winPopupCommon',
    component: () => import('../components/layout/winPopupView.vue'),
    meta: {
      layout: "",
      pageInfo: {
        class: "winpop",
      },
    }
  },
  {
    path: '/admin/adm_01',
    name: 'adm_01',
    component: () => import('../components/admin/adm_01.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_02',
    name: 'adm_02',
    component: () => import('../components/admin/adm_02.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_03',
    name: 'adm_03',
    component: () => import('../components/admin/adm_03.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_04',
    name: 'adm_04',
    component: () => import('../components/admin/adm_04.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_05',
    name: 'adm_05',
    component: () => import('../components/admin/adm_05.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_07',
    name: 'adm_07',
    component: () => import('../components/admin/adm_07.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_07_2',
    name: 'adm_07_2',
    component: () => import('../components/admin/adm_07_2.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_07_3',
    name: 'adm_07_3',
    component: () => import('../components/admin/adm_07_3.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_07_4',
    name: 'adm_07_4',
    component: () => import('../components/admin/adm_07_4.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_07_5',
    name: 'adm_07_5',
    component: () => import('../components/admin/adm_07_5.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_08',
    name: 'adm_08',
    component: () => import('../components/admin/adm_08.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_10',
    name: 'adm_10',
    component: () => import('../components/admin/adm_10.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_11',
    name: 'adm_11',
    component: () => import('../components/admin/adm_11.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_12',
    name: 'adm_12',
    component: () => import('../components/admin/adm_12.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_13',
    name: 'adm_13',
    component: () => import('../components/admin/adm_13.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_14',
    name: 'adm_14',
    component: () => import('../components/admin/adm_14.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_15',
    name: 'adm_15',
    component: () => import('../components/admin/adm_15.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_16',
    name: 'adm_16',
    component: () => import('../components/admin/adm_16.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_17',
    name: 'adm_17',
    component: () => import('../components/admin/adm_17.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_18',
    name: 'adm_18',
    component: () => import('../components/admin/adm_18.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_19',
    name: 'adm_19',
    component: () => import('../components/admin/adm_19.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_20',
    name: 'adm_20',
    component: () => import('../components/admin/adm_20.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_21',
    name: 'adm_21',
    component: () => import('../components/admin/adm_21.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_22',
    name: 'adm_22',
    component: () => import('../components/admin/adm_22.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_23',
    name: 'adm_23',
    component: () => import('../components/admin/adm_23.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_24',
    name: 'adm_24',
    component: () => import('../components/admin/adm_24.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_25',
    name: 'adm_25',
    component: () => import('../components/admin/adm_25.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_26',
    name: 'adm_26',
    component: () => import('../components/admin/adm_26.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_27',
    name: 'adm_27',
    component: () => import('../components/admin/adm_27.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/admin/adm_28',
    name: 'adm_28',
    component: () => import('../components/admin/adm_28.vue'),
    meta: {
      layout: "",
    }
  },
  {
    path: '/admin/adm_29',
    name: 'adm_29',
    component: () => import('../components/admin/adm_29.vue'),
    meta: {
      layout: "admin",
    }
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../components/main/MainIndex.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/main/MainSetting',
    name: 'MainSetting',
    component: () => import('../components/main/MainSetting.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/mainType2',
    name: 'mainType2',
    component: () => import('../components/main/Main.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/main2',
    name: 'main2',
    component: () => import('../components/main/Main2.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/main/comingSoonBoard',
    name: 'comingSoonBoard',
    component: () => import('../components/main/comingSoonBoard.vue'),
    meta: {
      layout: "coming",
    }
  },
  {
    path: '/main/comingSoonApproval',
    name: 'comingSoonApproval',
    component: () => import('../components/main/comingSoonApproval.vue'),
    meta: {
      layout: "coming",
    }
  },
  {
    path: '/main/comingSoonShare',
    name: 'comingSoonShare',
    component: () => import('../components/main/comingSoonShare.vue'),
    meta: {
      layout: "coming",
    }
  },
  {
    path: '/main/comingSoonSupply',
    name: 'comingSoonSupply',
    component: () => import('../components/main/comingSoonSupply.vue'),
    meta: {
      layout: "coming",
    }
  },
  {
    path: '/main/comingSoonMail',
    name: 'comingSoonMail',
    component: () => import('../components/main/comingSoonMail.vue'),
    meta: {
      layout: "coming",
    }
  },
  {
    path: '/main/mailUse',
    name: 'mailUse',
    component: () => import('../components/main/mailUse.vue'),
    meta: {
      layout: "base",
    }
  },

  {
    path: '/board/boardMain',
    name: 'boardMain',
    component: () => import('../components/board/boardMain.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/board/boardNotice',
    name: 'boardNotice',
    component: () => import('../components/board/boardNotice.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/board/boardNoticeList',
    name: 'boardNoticeList',
    component: () => import('../components/board/boardNoticeList.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/board/boardNoticeView',
    name: 'boardNoticeView',
    component: () => import('../components/board/boardNoticeView.vue'),
    meta: {
      layout: "base",
      className: "board-notice-view"
    }
  },
  {
    path: '/board/boardNoticeWrite',
    name: 'boardNoticeWrite',
    component: () => import('../components/board/boardNoticeWrite.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/board/boardFavor',
    name: 'boardFavor',
    component: () => import('../components/board/boardFavor.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/board/boardSearch',
    name: 'boardSearch',
    component: () => import('../components/board/boardSearch.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/approval/approvalList',
    name: 'approvalList',
    component: () => import('../components/approval/approvalList.vue'),
    meta: {
      layout: "base",
      className: "approval",
    }
  },
  {
    path: '/approval/approvalView',
    name: 'approvalView',
    component: () => import('../components/approval/approvalView.vue'),
    meta: {
      layout: "base",
      className: "approval",
    }
  },
  {
    path: '/approval/approvalWrite',
    name: 'approvalWrite',
    component: () => import('../components/approval/approvalWrite.vue'),
    meta: {
      layout: "base",
      className: "approval",
    }
  },
  {
    path: '/approval/approvalFormSelected',
    name: 'approvalFormSelected',
    component: () => import('../components/approval/approvalFormSelected.vue'),
    meta: {
      layout: "base",
      className: "approval",
    }
  },
  {
    path: '/approval/externalList',
    name: 'externalList',
    component: () => import('../components/approval/externalList.vue'),
    meta: {
      layout: "",
      className: "approval",
    }
  },
  {
    path: '/approval/approvalError',
    name: 'approvalError',
    component: () => import('../components/approval/approvalError.vue'),
    meta: {
      layout: "base",
      className: "approval",
    }
  },
  {
    path: '/test/testView',
    name: 'testView',
    component: () => import('../components/test/testView.vue'),
    meta: {
      layout: "",
      pageInfo: {
        title: "차세대 그룹웨어 퍼블 파일 리스트",
      },
    },
  },
  //cluster
  {
    path: '/cluster/Cluster001',
    name: 'Cluster001',
    component: () => import('../components/cluster/Cluster001.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/cluster/Cluster001_02',
    name: 'Cluster001_02',
    component: () => import('../components/cluster/Cluster001_02.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/cluster/Cluster002',
    name: 'Cluster002',
    component: () => import('../components/cluster/Cluster002.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/cluster/Cluster003',
    name: 'Cluster003',
    component: () => import('../components/cluster/Cluster003.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/cluster/Cluster004',
    name: 'Cluster004',
    component: () => import('../components/cluster/Cluster004.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/cluster/HIS_01',
    name: 'HIS_01',
    component: () => import('../components/cluster/HIS_01.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/cluster/HIS_01_02',
    name: 'HIS_01_02',
    component: () => import('../components/cluster/HIS_01_02.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/cluster/HIS_01_03',
    name: 'HIS_01_03',
    component: () => import('../components/cluster/HIS_01_03.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/cluster/HIS_02',
    name: 'HIS_02',
    component: () => import('../components/cluster/HIS_02.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/node/Node001',
    name: 'Node001',
    component: () => import('../components/node/Node001.vue'),
    meta: {
      layout: "sideproject",
    }
  },
  {
    path: '/node/Node001B',
    name: 'Node001B',
    component: () => import('../components/node/Node001B.vue'),
    meta: {
      layout: "sideproject",
    }
  },
  {
    path: '/node/Node_nodata',
    name: 'Node_nodata',
    component: () => import('../components/node/Node_nodata.vue'),
    meta: {
      layout: "sideproject",
    }
  },
  {
    path: '/task/NTS_01',
    name: 'NTS_01',
    component: () => import('../components/task/NTS_01.vue'),
    meta: {
      layout: "taskNode",
    }
  },
  {
    path: '/task/NTS_01B',
    name: 'NTS_01B',
    component: () => import('../components/task/NTS_01B.vue'),
    meta: {
      layout: "taskNode",
    }
  },
  {
    path: '/task/NTS_01B_02',
    name: 'NTS_01B_02',
    component: () => import('../components/task/NTS_01B_02.vue'),
    meta: {
      layout: "taskNode",
    }
  },
  {
    path: '/task/NTS_01C',
    name: 'NTS_01C',
    component: () => import('../components/task/NTS_01C.vue'),
    meta: {
      layout: "taskNode",
    }
  },
  {
    path: '/task/NTS_01C_02',
    name: 'NTS_01C_02',
    component: () => import('../components/task/NTS_01C_02.vue'),
    meta: {
      layout: "taskNode",
    }
  },
  {
    path: '/task/NTS_01D',
    name: 'NTS_01D',
    component: () => import('../components/task/NTS_01D.vue'),
    meta: {
      layout: "taskNode",
    }
  },
  {
    path: '/task/NTS_01_nodata',
    name: 'NTS_01_nodata',
    component: () => import('../components/task/NTS_01_nodata.vue'),
    meta: {
      layout: "taskNode",
    }
  },
  {
    path: '/my/MYS_002',
    name: 'MYS_002',
    component: () => import('../components/my/MYS_002.vue'),
    meta: {
      layout: "myTask",
    }
  },
  {
    path: '/my/MYS_002_nodata',
    name: 'MYS_002_nodata',
    component: () => import('../components/my/MYS_002_nodata.vue'),
    meta: {
      layout: "myTask",
    }
  },
  {
    path: '/my/MYS_001',
    name: 'MYS_001',
    component: () => import('../components/my/MYS_001.vue'),
    meta: {
      layout: "my",
    }
  },
  {
    path: '/my/MYS_001B',
    name: 'MYS_001B',
    component: () => import('../components/my/MYS_001B.vue'),
    meta: {
      layout: "my",
    }
  },
  {
    path: '/my/MYS_001_nodata',
    name: 'MYS_001_nodata',
    component: () => import('../components/my/MYS_001_nodata.vue'),
    meta: {
      layout: "my",
    }
  },
  {
    path: '/my/MYS_001B_nodata',
    name: 'MYS_001B_nodata',
    component: () => import('../components/my/MYS_001B_nodata.vue'),
    meta: {
      layout: "my",
    }
  },
  {
    path: '/taskLog/taskLog',
    name: 'taskLog',
    component: () => import('../components/taskLog/taskLog.vue'),
    meta: {
      layout: "taskLog",
    },
  },
  {
    path: '/main/cMain',
    name: 'cMain',
    component: () => import('../components/main/cMain.vue'),
    meta: {
      layout: "cmain",
    }
  },
  {
    path: '/search/SHS_01',
    name: 'SHS_01',
    component: () => import('../components/search/SHS_01.vue'),
    meta: {
      layout: "search",
    }
  },
  {
    path: '/search/SHS_01_nodata',
    name: 'SHS_01_nodata',
    component: () => import('../components/search/SHS_01_nodata.vue'),
    meta: {
      layout: "search",
    }
  },
  {
    path: '/search/SHS_01B_nodata',
    name: 'SHS_01B_nodata',
    component: () => import('../components/search/SHS_01B_nodata.vue'),
    meta: {
      layout: "search",
    }
  },
  {
    path: '/alarm/ALS_01',
    name: 'ALS_01',
    component: () => import('../components/alarm/ALS_01.vue'),
    meta: {
      layout: "alarm",
    }
  },
  {
    path: '/alarm/ALS_DM_1',
    name: 'ALS_DM_1',
    component: () => import('../components/alarm/ALS_DM_1.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_2',
    name: 'ALS_DM_2',
    component: () => import('../components/alarm/ALS_DM_2.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_3',
    name: 'ALS_DM_3',
    component: () => import('../components/alarm/ALS_DM_3.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_4',
    name: 'ALS_DM_4',
    component: () => import('../components/alarm/ALS_DM_4.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_5',
    name: 'ALS_DM_5',
    component: () => import('../components/alarm/ALS_DM_5.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_6',
    name: 'ALS_DM_6',
    component: () => import('../components/alarm/ALS_DM_6.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_7',
    name: 'ALS_DM_7',
    component: () => import('../components/alarm/ALS_DM_7.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_8',
    name: 'ALS_DM_8',
    component: () => import('../components/alarm/ALS_DM_8.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_9',
    name: 'ALS_DM_9',
    component: () => import('../components/alarm/ALS_DM_9.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_10',
    name: 'ALS_DM_10',
    component: () => import('../components/alarm/ALS_DM_10.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_11',
    name: 'ALS_DM_11',
    component: () => import('../components/alarm/ALS_DM_11.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_12',
    name: 'ALS_DM_12',
    component: () => import('../components/alarm/ALS_DM_12.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_13',
    name: 'ALS_DM_13',
    component: () => import('../components/alarm/ALS_DM_13.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/alarm/ALS_DM_14',
    name: 'ALS_DM_14',
    component: () => import('../components/alarm/ALS_DM_14.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/share/SHR_01',
    name: 'SHR_01',
    component: () => import('../components/share/SHR_01.vue'),
    meta: {
      layout: "share",
    }
  },
  {
    path: '/share/SHR_02',
    name: 'SHR_02',
    component: () => import('../components/share/SHR_02.vue'),
    meta: {
      layout: "share",
    }
  },
  {
    path: '/people/people',
    name: 'people',
    component: () => import('../components/people/people.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/people/people_nodata',
    name: 'people_nodata',
    component: () => import('../components/people/people_nodata.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/stage/CLS_02',
    name: 'CLS_02',
    component: () => import('../components/stage/CLS_02.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/stage/CLS_03',
    name: 'CLS_03',
    component: () => import('../components/stage/CLS_03.vue'),
    meta: {
      layout: "cluster",
    }
  },
  {
    path: '/ttsearch/TS_01',
    name: 'TS_01',
    component: () => import('../components/ttsearch/TS_01.vue'),
    meta: {
      layout: "ttsearch",
    }
  },
  {
    path: '/collab/collabBoard',
    name: 'collabBoard',
    component: () => import('../components/collab/collabBoard.vue'),
    meta: {
      layout: "collab",
    }
  },
  {
    path: '/collab/collabBoard2',
    name: 'collabBoard2',
    component: () => import('../components/collab/collabBoard2.vue'),
    meta: {
      layout: "collab",
    }
  },
  {
    path: '/collab/BDS034',
    name: 'BDS034',
    component: () => import('../components/collab/BDS034.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/collab/BDS035',
    name: 'BDS035',
    component: () => import('../components/collab/BDS035.vue'),
    meta: {
      layout: "window",
    }
  },
  {
    path: '/ttsearch/TS_02',
    name: 'TS_02',
    component: () => import('../components/ttsearch/TS_02.vue'),
    meta: {
      layout: "ttsearch2",
    }
  },
  {
    path: '/support/staffList',
    name: 'staffList',
    component: () => import('../components/support/staffList.vue'),
    meta: {
      layout: "support",
    }
  },
  {
    path: '/support/workList',
    name: 'workList',
    component: () => import('../components/support/workList.vue'),
    meta: {
      layout: "support",
    }
  },
  {
    path: '/support/workView',
    name: 'workView',
    component: () => import('../components/support/workView.vue'),
    meta: {
      layout: "support",
    }
  },
  {
    path: '/support/tsearch',
    name: 'tsearch',
    component: () => import('../components/support/tsearch.vue'),
    meta: {
      layout: "support",
    }
  },
  {
    path: '/support/manual',
    name: 'manual',
    component: () => import('../components/support/manual.vue'),
    meta: {
      layout: "guide",
    }
  },
  {
    path: '/support/askWrite',
    name: 'askWrite',
    component: () => import('../components/support/askWrite.vue'),
    meta: {
      layout: "customer",
    }
  },
  {
    path: '/support/askList',
    name: 'askList',
    component: () => import('../components/support/askList.vue'),
    meta: {
      layout: "customer",
    }
  },
  {
    path: '/support/myAskList',
    name: 'myAskList',
    component: () => import('../components/support/myAskList.vue'),
    meta: {
      layout: "customer",
    }
  },
  {
    path: '/support/myAskView',
    name: 'myAskView',
    component: () => import('../components/support/myAskView.vue'),
    meta: {
      layout: "customer",
    }
  },
  {
    path: '/collaboBoard/collaboBoardList',
    name: 'collaboBoardList',
    component: () => import('../components/collaboBoard/collaboBoardList.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/collaboBoard/collaboBoardRecent',
    name: 'collaboBoardRecent',
    component: () => import('../components/collaboBoard/collaboBoardRecent.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/setting/settingInfo',
    name: 'settingInfo',
    component: () => import('../components/setting/settingInfo.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/setting/settingNotice',
    name: 'settingNotice',
    component: () => import('../components/setting/settingNotice.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/setting/mobileReset',
    name: 'mobileReset',
    component: () => import('../components/setting/mobileReset.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/club/clubMain',
    name: 'clubMain',
    component: () => import('../components/club/clubMain.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/club/clubMain2',
    name: 'clubMain2',
    component: () => import('../components/club/clubMain2.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/club/clubSearch',
    name: 'clubSearch',
    component: () => import('../components/club/clubSearch.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/club/clubList',
    name: 'clubList',
    component: () => import('../components/club/clubList.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/club/clubTempList',
    name: 'clubTempList',
    component: () => import('../components/club/clubTempList.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/club/clubNoticeList',
    name: 'clubNoticeList',
    component: () => import('../components/club/clubNoticeList.vue'),
  },
  {
    path: '/setting/settingHome',
    name: 'settingHome',
    component: () => import('../components/setting/settingHome.vue'),
    meta: {
      layout: "base",
    }
  },
  {
    path: '/guide/guideStep_01',
    name: 'guideStep_01',
    component: () => import('../components/guide/guideStep_01.vue'),
    meta: {
      layout: "guidestep",
    }
  },
  {
    path: '/guide/guideStep_02',
    name: 'guideStep_02',
    component: () => import('../components/guide/guideStep_02.vue'),
    meta: {
      layout: "guidestep",
    }
  },
  {
    path: '/guide/guideStep_03',
    name: 'guideStep_03',
    component: () => import('../components/guide/guideStep_03.vue'),
    meta: {
      layout: "guidestep",
    }
  },
  {
    path: '/guide/guideStep_04',
    name: 'guideStep_04',
    component: () => import('../components/guide/guideStep_04.vue'),
    meta: {
      layout: "guidestep",
    }
  },
  {
    path: '/guide/guideStep_05',
    name: 'guideStep_05',
    component: () => import('../components/guide/guideStep_05.vue'),
    meta: {
      layout: "guidestep",
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
