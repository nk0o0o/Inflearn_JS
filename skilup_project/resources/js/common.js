$(document).ready(function () {

    /****** Tab Menu ******/
    $('.tab_menu .tab_list').click(function () {
        var activeTab = $(this).attr('data-tab');
        $(this).parents('.tab_menu').find('.tab_list').removeClass('current');
        $(this).addClass('current');
        $(this).parents('.tab_menu').next('.tab_cont').find('.tab_cont_item').stop().hide();
        $(this).parents('.tab_menu').next('.tab_cont').find('#' + activeTab).stop().show();
    });

    function tabOn2() {
        $('.tab_list li').removeClass('current');
        $(this).addClass('current');
        tabBar2();
    };
    $(document).on("click", ".tab_menu .tab_list", tabOn2);
    //Line Tab
    function tabBar2() {
        if ($(".line_tab").length > 0) {

            $(".line_tab").each(function () {
                if ($(".tab_bar").length < 1) {
                    $(this).append("<div class='tab_bar'></div>");
                };
                var bar = $(this).find(".tab_bar");
                var liWidth = $(this).find(".current").outerWidth();
                var marginLeft = parseInt($(this).find(".current").css("margin-left"));
                var left = $(this).find(".current").position().left + marginLeft;
                bar.css({
                    "width": liWidth,
                    "left": left
                });
            });

            $(".vertical_tab").each(function () {
                if ($(".tab_bar").length < 1) {
                    $(this).append("<div class='tab_bar'></div>");
                };
                var bar = $(this).find(".tab_bar");
                var liH = $(this).find(".current").outerHeight();
                var marginTop = parseInt($(this).find(".current").css("margin-top"));
                var top = $(this).find(".current").position().top + marginTop;
                bar.css({
                    "height": liH,
                    "top": top
                });
            });
        };
    };
    tabBar2();


    /****** Toggle Button ******/
    //Toggle Button Change Text
    $('.btn_toggle').click(function () {
        var toggleON = $(this).find('input[type=checkbox]').is(":checked");
        var toggleText = $(this).next('.btn_toggle_txt');
        var toggleTextValue = $(this).next('.btn_toggle_txt').text();
        if (toggleON) {
            if(toggleTextValue == 'OFF'){
                toggleText.text('ON');
            }else if(toggleTextValue == 'Unchecked toggle'){
                toggleText.text('Checked toggle');
            }
        } else {
            if(toggleTextValue == 'ON'){
                toggleText.text('OFF');
            }else if(toggleTextValue == 'Checked toggle'){
                toggleText.text('Unchecked toggle');
            }            
        }
    });
    //Toggle Button Disabled
    $('.btn_toggle').each(function (index, item) {
        var toggleDis = $(item).find('input[type=checkbox]').is(":disabled");
        if (toggleDis) {
            $(item).addClass('disabled');
        } else {
            $(item).removeClass('disabled');
        }
    });


    /****** File Uploader ******/
    $('.file_uploader').each(function (index, item) {
        $(item).find('.file_name .input_delete').on('click', function () {
            $(this).parents('.file_name').remove();
        });
        $(item).find('.input_file').on('change', function () {
            var fileCheck = $(this).val();
            if (fileCheck == '') {
                alert("파일을 첨부해 주세요");
            } else {
                var $div = $('<div class="file_name"><input type="text" readonly><i class="input_delete" onclick="removeFilename(this)"></i></div>');
                $(item).append($div);
                var fileName = $(this).val();
                //경로가 있는경우
                //$div.find('input').val(fileName);
                //경로가 없어야 하는 경우
                fileName = fileName.split("\\");
                $div.find('input').val(fileName[fileName.length - 1]);
            }
        });
    });


    /****** Select Box ******/
    $(document).on('click', '.select_box_value', function (e) {
        const t = $(this);
        if ($(this).parents('.select_box').hasClass('on')) {
            dropDownClose(t);
        } else {
            if($(this).parents('.select_box').hasClass('disabled')){
               return false;
            }
            $('.select_box').removeClass('on');
            selectBoxDown(t);
        }
    });
    $(document).on('click', '.select_box_list li', function (e) {
        selectBoxDownAction(this);
        SelectBoxChange(this);
    });

    function selectBoxDown(t) {
        const $selectBox = t.parents('.select_box');
        if (!t.hasClass('disabled')) {
            if ($selectBox.hasClass('on')) {
                $selectBox.removeClass('on')
            } else {
                $selectBox.addClass('on');
                $selectBox.siblings('.select_box').removeClass('on');
            }
            $('body').on('click', function (e) {
                if ($(e.target).closest('.select_box').length === 0 && $('.select_box').hasClass('on')) {
                    dropDownClose()
                }
            });
        };
    };

    function selectBoxDownAction(el) {
        $(el).parents('.select_box_list').find('li').not('.disabled').children('a').not('.text-primary')
            .removeClass('selected');

        if (!$(el).parent('li').hasClass('disabled')) {
            $(el).addClass('selected');
        }
        $(el).parents('.select_box').removeClass('on')
    };

    function dropDownClose() {
        $('.select_box').removeClass('on');
    };
    //Change Select Box Value
    function SelectBoxChange(selectItem) {
        if ($(selectItem).find('ul').length <= 0) {
            var $cloneEle = $(selectItem).parents('.select_box').find('.select_box_value').children('span').children();
            var selectText = $(selectItem).text();
            clearInput(selectItem);
            $(selectItem).parents('.select_box').find('.select_box_value').children('span').text(selectText);
            $(selectItem).parents('.select_box').find('.select_box_value').children('span').append($cloneEle);
        }
    };

    function clearInput(obj) {
        $(obj).parents('.select_box').find('.select_box_value').children('span').text("");
    };


    /****** Accordion ******/
    $(".accordion_heading").click(function () {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).find(".accordion_cont").stop().slideUp();
        } else {
            $(this).parent('.accordion_list').find('.accordion_heading').removeClass("on");
            $(this).parent('.accordion_list').find(".accordion_cont").stop().slideUp();
            $(this).addClass("on");
            $(this).find(".accordion_cont").stop().slideDown();
        }
    });


    /****** Data Tables ******/
    $('.dataTables_wrapper .dataTables_length').click(function () {
        $(this).toggleClass('on');
    });
    $('body').on('click', function (e) {
        if ($(e.target).closest('.dataTables_length').length === 0 && $('.dataTables_length').hasClass('on')) {
            $('.dataTables_length').toggleClass('on');
        }
    });

    /****** TextArea String Length Count ******/
    $('.input_writing_group').each(function (index, item) {
        $(item).find('textarea').on('keyup', function () {
            var regex = /[^0-9]/g; //숫자추출 정규식
            var total = $(this).next('.txt_count').find('.total').html().replace(regex, "");
            $(this).next('.txt_count').find('.current').html($(this).val().length);
            if ($(this).val().length > total) {
                alert(total + '자 이내로 작성해주세요')
                $(this).val($(this).val().substring(0, total));
                $(this).next('.txt_count').find('.current').html(total);
            };
        });
    });

    /****** Progress bar ******/
   if ($('.progress_bar').length > 0) {
      $(".progress_bar").each(function (i, block) {
         var regex = /[^0-9]/g; //숫자추출 정규식
         var progressR = $(block).html().replace(regex, "");//끝 값   
         var width = 0; //시작값
         var id = setInterval(frame, 15);//너비, 숫자표시 증가속도
         function frame() {
            if(progressR >= 100){
                  progressR = 100;
                  $(block).css('width', 100 + '%'); //너비       
            }
            if (width >= progressR) {
                  clearInterval(id);
                  cnt = 0;
            } else {
                  width++;
                  $(block).css('width', width + '%'); //너비
                  $(block).find('.progress_ratio').html(width + '%');  //숫자 표시
            }
         }
      });
   }

    /****** Pagination ******/
   if ($('.pagination').length > 0) {
      $('.pagination').each(function (index, item) {
          $(item).find('.page_link').on('click', function () {
            $(this).parents('li').siblings().not('.arr').removeClass('active');
            $(this).parent('li').addClass('active');      
         });
      });
   }

}) //ready


//File Uploader - Remove Choosed File
function removeFilename(t) {
    $(t).parents('.file_name').remove();
};

//DataTable Select All row
function dataTableSelect(dtable) {
    var dtable = dtable;
    $(".dataTable  .checkall").prop("checked", false);
    $(".checkall").click(function () {
        if ($(this).prop("checked")) {
            dtable.rows().select();
        } else {
            dtable.rows().deselect();
        }
    });
};