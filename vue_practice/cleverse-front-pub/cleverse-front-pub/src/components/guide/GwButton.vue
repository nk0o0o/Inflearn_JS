<template>
    <section class="button">
        <h1>button</h1>
        <table>
            <colgroup>
                <col style="width:100px">
                <col>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>default</th>
                    <th>Disabled</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>로그인 h60</th>
                    <td>
                    <button type="button" class="btn login">로그인</button>
                    </td>
                    <td>
                    <button type="button" class="btn login" :disabled="disabled">로그인</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <h1>button</h1>
        <table>
            <colgroup>
                <col style="width:100px">
                <col span="5">
            </colgroup>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>Default H46</th>
                    <th>Large H50</th>
                    <th>Medium H40</th>
                    <th>Small H30</th>
                    <th>XS H28</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Type1 primary</th>
                    <td>
                    <button type="button" class="btn">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn lg">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn md">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn sm">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn xs">버튼명</button>
                    </td>
                </tr>
                <tr>
                    <th>Type2 Line submit</th>
                    <td>
                    <button type="button" class="btn line-type1">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn lg line-type1">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn md line-type1">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn sm line-type1">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn xs line-type1">버튼명</button>
                    </td>
                </tr>
                <tr>
                    <th>Type3 Line cancel</th>
                    <td>
                    <button type="button" class="btn line-type2">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn lg line-type2">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn md line-type2">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn sm line-type2">버튼명</button>
                    </td>
                    <td>
                    <button type="button" class="btn xs line-type2">버튼명</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <h1>with icon</h1>
        <table>
            <colgroup>
                <col style="width:100px">
                <col span="5">
            </colgroup>
            <tbody>
                <tr>
                    <th>추가</th>
                    <td>
                        <button type="button" class="btn-ico add"><span>버튼명</span></button>
                    </td>
                    <th>다운로드</th>
                    <td>
                        <button type="button" class="btn-ico dw"><span>버튼명</span></button>
                    </td>
                    <th>비밀번호 재발급</th>
                    <td>
                        <button type="button" class="btn-ico-txt arrow-r"><span>비밀번호 재발급</span></button>
                    </td>
                </tr>
            </tbody>
        </table>

        <h1>file icon</h1>
        <table>
            <colgroup>
                <col style="width:100px">
                <col span="10">
            </colgroup>
            <tbody>
                <tr>
                  <th>file</th>
                  <td>
                      <div class="ico-file file"><!-- 첨부파일명 --></div>
                  </td>
                  <th>etc</th>
                  <td>
                      <span class="ico-file etc"></span>
                  </td>
                  <th>word</th>
                  <td>
                      <button type="button" class="ico-file word"></button>
                  </td>
                  <th>hwp</th>
                  <td>
                      <div class="ico-file hwp"></div>
                  </td>
                  <th>pdf</th>
                  <td>
                      <div class="ico-file pdf"></div>
                  </td>
                  <th>ppt</th>
                  <td>
                      <div class="ico-file ppt"></div>
                  </td>
                  <th>excel</th>
                  <td>
                      <div class="ico-file excel"></div>
                  </td>
                </tr>
                <tr>
                  <th>zip</th>
                    <td>
                        <div class="ico-file zip"></div>
                    </td>
                    <th>gul</th>
                    <td>
                        <div class="ico-file gul"></div>
                    </td>
                    <th>ap</th>
                    <td>
                        <div class="ico-file ap"></div>
                    </td>
                    <th>user</th>
                    <td>
                        <div class="ico-file user"></div>
                    </td>
                    <th>question</th>
                    <td>
                        <div class="ico-file question"></div>
                    </td>
                    <th>txt Log</th>
                    <td>
                        <div class="ico-file txtLog"></div>
                    </td>
                </tr>
                <tr>
                  <th>img</th>
                    <td>
                        <div class="ico-file img"></div>
                    </td>
                    <th>jpg</th>
                    <td>
                        <div class="ico-file jpg"></div>
                    </td>
                    <th>png</th>
                    <td>
                        <div class="ico-file png"></div>
                    </td>
                    <th>tif</th>
                    <td>
                        <div class="ico-file tif"></div>
                    </td>
                    <th>tiff</th>
                    <td>
                        <div class="ico-file tiff"></div>
                    </td>
                    <th>bmp</th>
                    <td>
                        <div class="ico-file bmp"></div>
                    </td>
                    <th>gif</th>
                    <td>
                        <div class="ico-file gif"></div>
                    </td>
                </tr>
                <tr>
                  <th>wav</th>
                    <td>
                        <div class="ico-file wav"></div>
                    </td>
                    <th>mp3</th>
                    <td>
                        <div class="ico-file mp3"></div>
                    </td>
                    <th>avi</th>
                    <td>
                        <div class="ico-file avi"></div>
                    </td>
                    <th>exe</th>
                    <td>
                        <div class="ico-file exe"></div>
                    </td>
                    <th>xml</th>
                    <td>
                        <div class="ico-file xml"></div>
                    </td>
                    <th>htm</th>
                    <td>
                        <div class="ico-file htm"></div>
                    </td>
                    <th>gui</th>
                    <td>
                        <div class="ico-file gui"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            disabled: true,
        }
    },
    methods: {

    }
})
</script>
<style lang="css" scoped>
h1 {
    margin-bottom: 20px;
    font-family: 'Lifeplus'; font-weight:600; font-size: 36px; color: #000;
}
table + h1 {margin-top:30px;}
table {margin-top: 10px;}
thead th {border-bottom: 2px solid #adadad;}
th, td {padding: 15px 10px; border:1px solid #ccc;font-size: 15px;}
th {
    line-height: 1.6em;
    color: #000;
    background-color: #f1f1f1;
}
</style>