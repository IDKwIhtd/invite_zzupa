// 배경 음악을 재생, 일시정지하는 함수 - 버튼을 클릭하면 버튼 이름 변경
let isPlaying = false;

function controlBgm() {
    const bgmElement = document.querySelector('.btn-bgm');
    const bgm = document.getElementById('audio-bgm');

    if (isPlaying) {
        bgm.pause();
        bgmElement.innerText = '재생';
    } else {
        bgm.play();
        bgmElement.innerText = '일시정지'
    }

    isPlaying = !isPlaying;
}