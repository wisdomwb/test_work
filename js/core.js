$(function() {
    //公共资源右侧tab切换
    $('.title-item').on('click', function() {
        $('.title-item').removeClass('active');
        $(this).addClass('active');
        $('.tab-item').hide();
        var activeTab = $(this).find('a').attr('def');
        $(activeTab).fadeIn();
    })

    //分类知识>科室选择
    $('.select').on('click', function() {
        $('.section-item').slideToggle('');
    })
    $('.section-item li').on('click', function() {
        $('.select').html($(this).html());
        $('.section-item').slideUp();
    })

    // 知识分类树
    $('.tree li:has(ul)').addClass('parent_li');
    $('.tree li.parent_li > span').on('click', function(event) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        event.stopPropagation();
    });
    // 分页
    $('.doc-pagination .num').on('click', function() { //点击页码
        $('.doc-pagination .num').removeClass('active');
        $(this).addClass('active');
    })
    $('.doc-pagination .prev').on('click', function() { //上一页
        var current = $('.doc-pagination').find('.active');
        if ($('.doc-pagination>.num:first').hasClass('active')) {
            return;
        } else {
            $('.doc-pagination .num').removeClass('active');
            current.prev().addClass('active');
        }
    })
    $('.doc-pagination .next').on('click', function() { //下一页
        var current = $('.doc-pagination').find('.active');
        if ($('.doc-pagination>.num:last').hasClass('active')) {
            return;
        } else {
            $('.doc-pagination .num').removeClass('active');
            current.next().addClass('active');
        }
    })
    $('.doc-pagination .last').on('click', function() { //尾页
        $('.doc-pagination .num').removeClass('active');
        $('.doc-pagination>.num:last').addClass('active');
    })
});
