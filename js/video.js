$(document).ready(function() {
            $('.popup-video').magnificPopup({
                type: 'iframe', // 동영상 파일을 팝업으로 띄울 때 유용함
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });