$(document).ready(function () {
    var currentDepth = 1;
    var check = $("#toggle_btn[type='checkbox']");
    check.click(function(){
        $(".toggle_change").toggleClass('active');
    });
    
    
    /* 채팅창 보기 */
    var go2depthBtn = $('.goDepth-02-btn');
    go2depthBtn.click(function(){                  
        $('.toggle_change').find('[data-depth]').removeClass('active');
        $('.toggle_change').find('.chat').addClass('active');
        currentDepth = 2;         
    });

    /* 프로필 보기 */
    var go3depthBtn = $('.goDepth-03-btn button');
    for(i=0; i<go3depthBtn.length; i++){
        go3depthBtn.eq(i).click(function(){                  
            var memeber = $(this).attr('data-member');
            $('.toggle_change').find('[data-depth]').removeClass('active');
            $('.toggle_change').find('.profile').attr('data-profileMember', member);
            $('.toggle_change').find('.profile img.profile_bg').attr('src', 'img-' + member);
            $('.toggle_change').find('.profile').addClass('active');
            currentDepth = 3;         
        });
    }
    
    /* 뒤로가기 */
    var backBtn = $('back_btn');
    for(i=0; i<backBtn.length; i++){
        backBtn.click(function(){
           $(this).parent().attr('data')
        })
    }

  })