import { data, AudioPlayer, setBgColor, setImage, setNameText } from "./index.js";
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
conos
*/

const body = getNode("body");
const visual = getNode(".visual img");
const nickName = getNode(".nickName");
const posterContainer = getNode("nav");
const posterItems = document.querySelectorAll("ul li");

let audio;

posterContainer.addEventListener("click", handleClick);

function handleClick(e) {
  const li = e.target.closest("li");
  const index = li.dataset.index;

  if (!li) {
    // e.target에 가까운 li요소 없으면 함수 종료
    return;
  }

  // 포스터 아이템들 클래스 싹 다 제거
  posterItems.forEach((item) => item.classList.remove("is-active"));

  const { color, name, alt } = data[index - 1];
  controlAudio(name);
  setBgColor(body, color[0], color[1]);
  setImage(visual, name, alt);
  setNameText(nickName, name);

  // 해당 포스터 아이템만 클래스 추가
  li.classList.add("is-active");
}

function getNode(node) {
  return document.querySelector(node);
}

function controlAudio(name) {
  const audioPath = `./assets/audio/${name}.m4a`;

  //전역변수 audio에 이전에 값이 할당? 오디오 정지
  if (audio) {
    audio.pause();
  }

  audio = new AudioPlayer(audioPath);
  audio.play();
}
