<template>
<section class="form">
    <h1>INPUT BOX</h1>
    <table>
        <colgroup>
            <col style="width:100px">
        </colgroup>
        <thead>
            <tr>
                <th>이름</th>
                <th>default</th>
                <th>disabled</th>
                <th>successful</th>
                <th>error</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>input h40 (default)</th>
                <td>
                    <form action="">
                        <div class="input-box type1">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type1">
                            <input type="text" required placeholder="내용을 입력해주세요." value="disabled" disabled>
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type1">
                            <input type="text" required placeholder="내용을 입력해주세요." class="successful">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type1">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="!error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
            </tr>
            <tr>
                <th>input h60</th>
                <td>
                    <form action="">
                        <div class="input-box type2">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type2">
                            <input type="text" required placeholder="내용을 입력해주세요." value="disabled" disabled>
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type2">
                            <input type="text" required placeholder="내용을 입력해주세요." class="successful">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type2">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="!error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
            </tr>
            <tr>
                <th>input border</th>
                <td>
                    <form action="">
                        <div class="input-box type3">
                            <input type="text" required placeholder="내용을 입력해주세요." readonly value="테스트">
                            <button type="reset" class="input-txt-del readonly"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type3">
                            <input type="text" required placeholder="내용을 입력해주세요." value="disabled" disabled>
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type3">
                            <input type="text" required placeholder="내용을 입력해주세요." class="successful">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type3">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="!error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
            </tr>
            <tr>
                <th>input h40 line</th>
                <td>
                    <form action="">
                        <div class="input-box type4">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type4">
                            <input type="text" required placeholder="내용을 입력해주세요." value="disabled" disabled>
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type4">
                            <input type="text" required placeholder="내용을 입력해주세요." class="successful">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type4">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="!error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
            </tr>
            <tr>
                <th>input h60 line</th>
                <td>
                    <form action="">
                        <div class="input-box type5">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type5">
                            <input type="text" required placeholder="내용을 입력해주세요." value="disabled" disabled>
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type5">
                            <input type="text" required placeholder="내용을 입력해주세요." class="successful">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box type5">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <div class="error" v-if="!error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
            </tr>
            <tr>
                <th>search h40</th>
                <td>
                    <form action="">
                        <div class="input-box search-type1">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type1">
                            <input type="text" required placeholder="내용을 입력해주세요." value="disabled" disabled>
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type1">
                            <input type="text" required placeholder="내용을 입력해주세요." class="successful">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type1">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="!error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
            </tr>
             <tr>
                <th>search h60</th>
                <td>
                    <form action="">
                        <div class="input-box search-type2">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type2">
                            <input type="text" required placeholder="내용을 입력해주세요." value="disabled" disabled>
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type2">
                            <input type="text" required placeholder="내용을 입력해주세요." class="successful">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type2">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="!error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
            </tr>
            <tr>
                <th>search border</th>
                <td>
                    <form action="">
                        <div class="input-box search-type3">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type3">
                            <input type="text" required placeholder="내용을 입력해주세요." value="disabled" disabled>
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type3">
                            <input type="text" required placeholder="내용을 입력해주세요." class="successful">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type3">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="!error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
            </tr>
            <tr>
                <th>search line</th>
                <td>
                    <form action="">
                        <div class="input-box search-type4">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type4">
                            <input type="text" required placeholder="내용을 입력해주세요." value="disabled" disabled>
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type4">
                            <input type="text" required placeholder="내용을 입력해주세요." class="successful">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
                <td>
                    <form action="">
                        <div class="input-box search-type4">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="error" v-if="!error">에러 내용입력</div>
                        </div>
                    </form>
                </td>
            </tr>
            <tr>
                <th>search hint</th>
                <td>
                    <form action="">
                        <div class="input-box search-type5">
                            <input type="text" required placeholder="내용을 입력해주세요.">
                            <button type="reset" class="input-txt-del"><span class="blind">입력 삭제</span></button>
                            <button type="button" class="btn-ico-single search-type1"><span class="blind">검색</span></button>
                            <div class="list">
                                <ul>
                                    <li>내 과제/내가 속한 과제 리스트 전체 노출</li>
                                    <li>Digital C.P.C. 기반 구축 </li>
                                    <li>Digital Infra 구축</li>
                                    <li>Digital Infra 구축</li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </td>
            </tr>
        </tbody>
    </table>

    <h1>select fields</h1>
<pre style="font-size: 18px;">
    <strong>:propOptionList</strong> - 옵션 리스트
    <strong>:propPlaceholder</strong> - placeholder
    <strong>:propValue</strong> - 최초 선택된 값
    <strong>:propCloseOn</strong> - 옵션 선택시 목록 닫히게:true, 안닫히게: false
    <strong>:propDisabled</strong> - true 일 경우 적용
    <strong>:propClass</strong> - 클래스 추가
    <strong>:propDataClear</strong> - 선택된 값 초기화 x 버튼
    <strong>:canDeselect="false" </strong> - false일 경우 deselect 적용 안되게 : default는 true
    <strong>:propId="'test'" </strong> - id값 설정

</pre>
    <table>
        <colgroup>
            <col style="width:100px">
            <col>
            <col>
            <col style="width:100px">
            <col>
            <col>
        </colgroup>
        <thead>
            <tr>
                <th>이름</th>
                <th>default</th>
                <th>Disabled</th>
                <th>이름</th>
                <th>default</th>
                <th>Disabled</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>select type1</th>
                <td>
                    <select-view
                        :propOptionList="optionLsit3"
                        :propPlaceholder="'공개'"
                        :propValue="selectedValue"
                        :propCloseOn="true"
                        :propDataClear="true"
                        :propId="'test'"
                        >
                    </select-view>
                </td>
                <td>
                    <select-view
                        :propOptionList="optionLsit3"
                        :propPlaceholder="'공개'"
                        :propDisabled="true"
                        >
                    </select-view>
                </td>
                <th>select type2</th>
                <td>
                    <select-view
                        :propOptionList="optionLsit4"
                        :propPlaceholder="'공개'"
                        :propClass="'type1'"
                        >
                    </select-view>
                </td>
                <td>
                    <select-view
                        :propOptionList="optionLsit4"
                        :propPlaceholder="'공개'"
                        :propClass="'type1'"
                        :propDisabled="true"
                        >
                    </select-view>
                </td>
            </tr>
            <tr>
                <th>select type3</th>
                <td>
                    <select-view
                        :propOptionList="optionLsit3"
                        :propPlaceholder="'공개'"
                        :propClass="'type2'"
                    >
                    </select-view>
                </td>
                <td>
                    <select-view
                        :propOptionList="optionLsit3"
                        :propPlaceholder="'공개'"
                        :propClass="'type2'"
                        :propDisabled="true"
                    >
                    </select-view>
                </td>
                <th>select type4</th>
                <td>
                    <select-view
                        :propOptionList="optionLsit3"
                        :propPlaceholder="'공개'"
                        :propClass="'type3'"
                    >
                    </select-view>
                </td>
                <td>
                    <select-view
                        :propOptionList="optionLsit4"
                        :propPlaceholder="'공개'"
                        :propClass="'type3'"
                        :propDisabled="true"
                    >
                    </select-view>
                </td>
            </tr>
            <!-- <tr>
                <th>select type1</th>
                <td>
                    <select-view1
                        @selected="selectValue"
                        :propDefaultOptionValue="'공개'"
                        :propOptionList="optionLsit1">
                    </select-view1>
                </td>
                <td>
                    <select-view1
                            @selected="selectValue"
                            :propDefaultOptionValue="'공개'"
                            :propOptionList="optionLsit1"
                            :propSelectDisabled="selectDisabled">
                        </select-view1>
                </td>
                <th>select type2</th>
                <td>
                    <select-view1
                        @selected="selectValue"
                        :propDefaultOptionValue="'공개'"
                        :propOptionList="optionLsit1"
                        :propClass="'type1'">
                    </select-view1>
                </td>
                <td>
                    <select-view1
                        @selected="selectValue"
                        :propDefaultOptionValue="'공개'"
                        :propOptionList="optionLsit1"
                        :propClass="'type1'"
                        :propSelectDisabled="selectDisabled">
                    </select-view1>
                </td>
            </tr>
            <tr>
                <th>select type3</th>
                <td>
                    <select-view1
                        @selected="selectValue"
                        :propDefaultOptionValue="'공개'"
                        :propOptionList="optionLsit2"
                        :propClass="'type2'">
                    </select-view1>
                </td>
                <td>
                    <select-view1
                        @selected="selectValue"
                        :propDefaultOptionValue="'공개'"
                        :propOptionList="optionLsit2"
                        :propClass="'type2'"
                        :propSelectDisabled="selectDisabled">
                    </select-view1>
                </td>
                <th>select type4</th>
                <td>
                    <select-view1
                        @selected="selectValue"
                        :propDefaultOptionValue="'공개공개공개공개공개공개공개공개공개공개공개공개공개'"
                        :propOptionList="optionLsit2"
                        :propClass="'type3'">
                    </select-view1>
                </td>
                <td>
                    <select-view1
                        @selected="selectValue"
                        :propDefaultOptionValue="'공개'"
                        :propOptionList="optionLsit2"
                        :propClass="'type3'"
                        :propSelectDisabled="selectDisabled">
                    </select-view1>
                </td>
            </tr> -->
        </tbody>
    </table>

    <h1>default select</h1>
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
                <th>select type1</th>
                <td>
                    <label class="select-default">
                        <select>
                            <option>샘플샘플샘플샘플샘플샘플샘플 1</option>
                            <option>샘플 2</option>
                            <option>샘플 3</option>
                        </select>
                    </label>
                </td>
                <td>
                    <label class="select-default">
                        <select disabled="disabled">
                            <option>샘플 1</option>
                            <option>샘플 2</option>
                            <option>샘플 3</option>
                        </select>
                    </label>
                </td>
            </tr>
        </tbody>
    </table>

    <h1>checkbox / radio</h1>
    <table>
        <colgroup>
            <col style="width:100px">
            <col>
            <col>
            <col>
            <col style="width:100px">
            <col>
            <col>
            <col>
            <col style="width:100px">
            <col>
        </colgroup>
        <thead>
            <tr>
                <th>이름</th>
                <th>기본</th>
                <th>disabled</th>
                <th>checked</th>
                <th>checked disabled</th>
                <th>이름</th>
                <th>기본</th>
                <th>disabled</th>
                <th>checked</th>
                <th>checked disabled</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>checkbox<br> 24*24</th>
                <td><div class="input-chk"> <input type="checkbox" name="chk1" id="chk1"><label for="chk1">김영철</label> </div></td>
                <td><div class="input-chk"><input type="checkbox" name="chk2" id="chk2" disabled><label for="chk2">김영철</label></div></td>
                <td><div class="input-chk"><input type="checkbox" name="chk3" id="chk3" checked><label for="chk3">김영철</label></div></td>
                <td><div class="input-chk"><input type="checkbox" name="chk4" id="chk4" checked disabled><label for="chk4">김영철</label></div></td>
                <th>radio<br> 24*24</th>
                <td><div class="input-radio"><input type="radio" name="radio1" id="radio1"><label for="radio1">김영철</label></div></td>
                <td><div class="input-radio"><input type="radio" name="radio2" id="radio2" disabled><label for="radio2">김영철</label></div></td>
                <td><div class="input-radio"><input type="radio" name="radio1" id="radio3" checked><label for="radio3">김영철</label></div></td>
                <td><div class="input-radio"><input type="radio" name="radio2" id="radio4" checked disabled><label for="radio4">김영철</label></div></td>
            </tr>
            <tr>
                <th>checkbox<br> 16*16</th>
                <td><div class="input-chk square"> <input type="checkbox" name="chk5" id="chk5"><label for="chk5">김영철</label> </div></td>
                <td><div class="input-chk square"><input type="checkbox" name="chk6" id="chk6" disabled><label for="chk6">김영철</label></div></td>
                <td><div class="input-chk square"><input type="checkbox" name="chk7" id="chk7" checked><label for="chk7">김영철</label></div></td>
                <td><div class="input-chk square"><input type="checkbox" name="chk8" id="chk8" checked disabled><label for="chk8">김영철</label></div></td>
                <th>radio<br> 16*16</th>
                <td><div class="input-radio h16"><input type="radio" name="radio5" id="radio5"><label for="radio5">김영철</label></div></td>
                <td><div class="input-radio h16"><input type="radio" name="radio6" id="radio6" disabled><label for="radio6">김영철</label></div></td>
                <td><div class="input-radio h16"><input type="radio" name="radio5" id="radio7" checked><label for="radio7">김영철</label></div></td>
                <td><div class="input-radio h16"><input type="radio" name="radio6" id="radio8" checked disabled><label for="radio8">김영철</label></div></td>
            </tr>
            <tr>
                <th>checkbox<br> type2</th>
                <td><div class="input-chk type2"> <input type="checkbox" name="chk9" id="chk9"><label for="chk9">김영철</label> </div></td>
                <td></td>
                <td><div class="input-chk type2"><input type="checkbox" name="chk10" id="chk10" checked><label for="chk10">김영철</label></div></td>
            </tr>
            <tr>
                <th>스위치</th>
                <td>
									<label for="switch1" class="switch-button">
										<input type="checkbox" id="switch1">
										<span class="switch-onnoff"></span>
									</label>
                </td>
                <td>
									<label for="switch2" class="switch-button">
										<input type="checkbox" id="switch2" checked>
										<span class="switch-onnoff"></span>
									</label>
                </td>
                <td>
                    <label class="switch disabled">
                        <input type="checkbox" disabled>
                        <span class="slider"></span>
                        비활성
                    </label>
                </td>
            </tr>
        </tbody>
    </table>



</section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
/*
* https://www.npmjs.com/package/@vueform/multiselect
*/
import selectView from "@/components/selectView.vue"
// import selectView1 from "@/components/selectView1.vue"
export default defineComponent({
    components: {
        selectView,
        // selectView1,
    },
    data() {
        return {
            error: false,
            value: this.value,
            selectedValue: 'hover',
            selectDisabled: true,
            optionLsit3: [
                { value: 'menu1', label: 'menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1menu1' },
                { value: 'hover', label: 'hover' },
                { value: 'Selected', label: 'Selected' },
                { value: 'menu4', label: 'menu4' },
                { value: 'menu5', label: 'menu5' },
                { value: 'hover1', label: 'hover1' },
                { value: 'Selected2', label: 'Selected2' },
                { value: 'menu41', label: 'menu41' },
                { value: 'menu51', label: 'menu51' },
            ],
            optionLsit4: [
                { value: 'test menu1', label: 'test menu1' },
                { value: 'test hover', label: 'test hover' },
                { value: 'test Selected', label: 'test Selected', disabled: true },
                { value: 'test menu4', label: 'test menu4' },
                { value: 'test menu5', label: 'test menu5' },
            ],
            optionLsit1: [
                {
                    text: 'menu1',
                    class: false,
                },
                {
                    text: 'hover',
                    class: true,
                },
                {
                    text: 'Selected',
                    class: false,
                },
                {
                    text: 'menu4',
                    class: false,
                },
                {
                    text: 'menu5',
                    class: false,
                },
            ],
            optionLsit2: [
                {
                    text: 'menu test',
                    class: false,
                },
                {
                    text: 'hover test',
                    class: false,
                },
                {
                    text: 'Selected test',
                    class: false,
                },
                {
                    text: 'menu4 test',
                    class: false,
                },
                {
                    text: 'menu5 test',
                    class: false,
                },
            ]
        }
    },
    methods: {
        selectValue(val:any){
            console.log(val)
        },
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