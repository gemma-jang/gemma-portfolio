  $(document).ready(function() {
                $('.open-figma-popup').magnificPopup({
                    type: 'inline',
                    midClick: true, // 마우스 가운데 버튼으로 클릭 시 작동 허용
                    removalDelay: 300,
                    mainClass: 'mfp-fade', // 부드러운 전환 효과(옵션)
                    closeBtnInside: false // 닫기 버튼(X)을 콘텐츠 바깥쪽(우측 상단)에 강제로 표시
                });
            });