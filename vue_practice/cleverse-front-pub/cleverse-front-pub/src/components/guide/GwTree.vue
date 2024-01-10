<template>
    <section class="tree">

        <div class="treeselect">
            <treeselect
                v-model="treeSelected"
                :max-height="500"
                :options="treeData"
                :default-expand-level="0"
                :always-open="true"
                :load-options="handleLoadOptions"
                @select="onSelect"
                @deselect="onDeselect"
                :multiple="isMultiple"
                :autoSelectDescendants="false"
                :flat="true"
            ></treeselect>
        </div>

    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import the component
// @ts-ignore
import Treeselect from 'vue3-treeselect'

export default defineComponent({
    // register the component
    components: {
        Treeselect
    },
    data() {
        return {
          // define the default value
          treeSelected: null,
          // define options
          treeData:[
            {
              id: 'depth1',
              label: 'depth1',
              children: [
                {
                  id: 'depth2',
                  label: 'depth2',
                  children: [
                    {
                      id: 'depth3',
                      label: 'depth3',
                      children: [
                        {
                          id: 'depth4',
                          label: 'depth4',
                          children: [
                            {
                              id: 'depth5',
                              label: 'depth5',
                              children: [
                                {
                                  id: 'depth6',
                                  label: 'depth6',
                                  children: [
                                    {
                                      id: 'depth7',
                                      label: 'depth7',
                                      children: [
                                        {
                                          id: 'depth8',
                                          label: 'depth8',
                                          children: [
                                            {
                                              id: 'depth9',
                                              label: 'depth9',
                                              children: [
                                                {
                                                  id: 'depth10',
                                                  label: 'depth10',
                                                  children: [
                                                    {
                                                      id: 'depth11',
                                                      label: 'depth11',
                                                      children: [
                                                        {
                                                          id: 'depth12',
                                                          label: 'depth12',
                                                          children: [
                                                            {
                                                              id: 'depth13',
                                                              label: 'depth13',
                                                              children: [
                                                                {
                                                                  id: 'depth14',
                                                                  label: 'depth14',
                                                                },
                                                                {
                                                                  id: 'depth14-1',
                                                                  label: 'depth14-1',
                                                                }
                                                              ],
                                                            },
                                                            {
                                                              id: 'depth13-1',
                                                              label: 'depth13-1',
                                                            }
                                                          ],
                                                        },
                                                        {
                                                          id: 'depth12-1',
                                                          label: 'depth12-1',
                                                        }
                                                      ],
                                                    },
                                                    {
                                                      id: 'depth11-1',
                                                      label: 'depth11-1',
                                                    }
                                                  ],
                                                },
                                                {
                                                  id: 'depth10-1',
                                                  label: 'depth10-1',
                                                }
                                              ],
                                            },
                                            {
                                              id: 'depth9-1',
                                              label: 'depth9-1',
                                            }
                                          ],
                                        },
                                        {
                                          id: 'depth8-1',
                                          label: 'depth8-1',
                                        }
                                      ],
                                    },
                                    {
                                      id: 'depth7-1',
                                      label: 'depth7-1',
                                    }
                                  ],
                                },
                                {
                                  id: 'depth6-1',
                                  label: 'depth6-1',
                                }
                              ],
                            },
                            {
                              id: 'depth5-1',
                              label: 'depth5-1',
                            }
                          ],
                        },
                        {
                          id: 'depth4-1',
                          label: 'depth4-1',
                        }
                      ],
                    },
                    {
                      id: 'depth3-1',
                      label: 'depth3-1',
                    }
                  ],
                },
                {
                  id: 'depth2-1',
                  label: 'depth2-1',
                }
              ],
            },
            {
              id: 'depth1-1',
              label: 'depth1-1',
            },
            {
              id: 'depth1-2',
              label: 'depth1-2',
              children: [
                {
                  id: 'depth1-2-1',
                  label: 'depth1-2-1',
                },
                {
                  id: 'depth1-2-2',
                  label: 'depth1-2-2',
                }
              ],
            },
            {
              id: 'depth1-3',
              label: 'depth1-3',
              children: [
                {
                  id: 'depth1-3-1',
                  label: 'depth1-3-1',
                },
                {
                  id: 'depth1-3-1-2',
                  label: 'depth1-3-1-2',
                }
              ],
            },
            {
              id: 'depth1-4',
              label: 'depth1-4',
            },
            {
              id: 'depth1-5',
              label: 'depth1-5',
            }
          ],
          // treeData: [
          //   {
          //     id: 'a',
          //     label: 'a',
          //     children: [
          //       {
          //         id: 'aa',
          //         label: 'aa',
          //         children: [
          //           {
          //             id: 'depth2',
          //             label: 'depth2',
          //             children: [
          //               {
          //                 id: 'depth3',
          //                 label: 'depth3',
          //                 children: [
          //                   {
          //                     id: 'depth4',
          //                     label: 'depth4',
          //                     children: [
          //                       {
          //                         id: 'depth5',
          //                         label: 'depth5',
          //                         children: [
          //                           {
          //                             id: 'depth6',
          //                             label: 'depth6',
          //                             children: [
          //                               {
          //                                 id: 'depth7',
          //                                 label: 'depth7',
          //                                 children: [
          //                                   {
          //                                     id: 'depth8',
          //                                     label: 'depth8',
          //                                     children: [
          //                                       {
          //                                         id: 'depth9',
          //                                         label: 'depth9',
          //                                         children: [
          //                                           {
          //                                             id: 'depth10',
          //                                             label: 'depth10',
          //                                             children: [
          //                                               {
          //                                                 id: 'depth11',
          //                                                 label: 'depth11'
          //                                               }
          //                                             ]
          //                                           }
          //                                         ]
          //                                       }
          //                                     ]
          //                                   }
          //                                 ]
          //                               }
          //                             ]
          //                           }
          //                         ]
          //                       }
          //                     ]
          //                   }
          //                 ]
          //               }
          //             ]
          //           }
          //         ]
          //       },
          //       {
          //         id: 'ab',
          //         label: 'ab',
          //       }
          //     ],
          //   },
          //   {
          //     id: 'b',
          //     label: 'b',
          //   },
          //   {
          //     id: 'c',
          //     label: 'c',
          //   }
          // ],
          isMultiple: false
        }
    },
})
</script>
<style scope>
.treeselect{
    height: 500px;
}
</style>
