const messages = [
    "쭈꾸미파티에 와.",
    "2025년 3월 8일 토요일",
    "부산광역시 장림 동원로얄듀크 116동 102호로"
];

let isAnimating = false; // 애니메이션 진행 상태 변수

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return; // 애니메이션 중이면 함수 종료
    isAnimating = true; //애니메이션이 시작됨을 표시

    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';

    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false; // 애니메이션이 끝났음을 표시
            if (callback) {
                callback();
            }
        }
    }
    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return; // 애니메이션 중이면 함수 종료

    const postcardElement = document.getElementById('postcard');
    const nameElement = document.querySelector('.p-name');

    toggleVisibility(postcardElement, false);
    toggleVisibility(nameElement, false);

    setTimeout(()=> {
        typeMessage(()=>{
            toggleVisibility(nameElement, true);
        })
            toggleVisibility(postcardElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage();
}