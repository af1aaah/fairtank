$('#safari').click(function () { toggleFunction('#safari'); return false; });
$('#wildCam').click(function () { toggleFunction('#wildCam'); return false; });
$('#toggleBtn').click(function () { toggleFunction('#sideBar'); return false; });
// scrollFunction('#full-section');

function toggleFunction(id) {
    $(id).toggleClass('active');
}
function scrollFunction(id) {
    $.scrollTo(id, 800, { easing: 'elasout' });
}
function scrolled() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').style.boxShadow = 'rgba(0, 0, 0, 0.16) -2px 1px 3px';
        document.getElementById('navbar').style.backgroundColor = '#fff';
    }else{
        document.getElementById('navbar').style.boxShadow = 'none';
        document.getElementById('navbar').style.backgroundColor = '#e0f4fd';

    }
}
