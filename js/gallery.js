$(document).ready(function() {
    // 3D Works 이미지 갤러리 슬라이드용 설정
    $('.works-gallery').magnificPopup({
        delegate: 'a', // 자식 a 태그를 클릭했을 때 실행
        type: 'image',
        gallery: {
            enabled: true, // 갤러리(슬라이드) 모드 활성화
            navigateByImgClick: true, // 이미지 클릭시 다음으로 넘어가기
            preload: [0,1] // 앞뒤 이미지 미리 로딩
        }
    });
});