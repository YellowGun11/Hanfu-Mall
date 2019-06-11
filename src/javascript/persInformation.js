//日历插件
$("#att_calender").flatpickr();

//上传头像
function userChoosePhoto(mypic,upfile) {
    $(".closePhotoShowing").css({
        visibility:"visible"
    });
    $(".photoShowingDiv").css({
        display:"block"
    });
    if(upfile.files && upfile.files[0]) {
        mypic.style.display="block";
        mypic.src = window.URL.createObjectURL(upfile.files[0]);
    } else {
        if (upfile.value){
            mypic.style.display="block";
            mypic.src=upfile.value;
            mypic.border=1;
        }
    }
}
//取消图片预览
function closePhotoShowing() {
    $(".closePhotoShowing").css({
        visibility:"hidden"
    });
    $(".photoShowingDiv").css({
        display:"none"
    });
    $("#photoShowing").css({
        display:"none"
    })
}

