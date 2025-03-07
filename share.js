// 웹 페이지를 공유하는 함수
// Web Share API를 사용, 사용자의 브라우저가 Web Share API를 지원하지 않는 경우에는 경고창을 통해 사용자에게 알림
function shareMessage() {
    if (navigator.share) {
        try {
            const shareDate = {
                title: 'Web Share Example',
                text: 'Check out this web share example',
                url: window.location.href,
            };

            navigator.share(shareDate)
            .then(()=> console.log('공유 성공'))
            .catch(error => console.error('공유 실패:', error.message));
        } catch (error) {
            console.error('공유 실패:', error.message);
        }
    } else {
        alert('해당 브라우저에서 Web Share API가 동작하지 않아요.');
    }
}