function menuButton(){
    $('.fa-bars').click(function(){
        $('.phone-navigation-list').toggle(300);
    });
}
function smDevicesButton(){
    $(document).ready(function(){
        $(".phone-li").click(function(){
            $(".phone-navigation-list").hide(300);
        })
    })
}
menuButton();
smDevicesButton();