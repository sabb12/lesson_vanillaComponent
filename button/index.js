// Primary Button HTML string을 return 한다
function getPrimaryButtonHTML(text, description) {
  let result;

  result = `
    <div class="primary buttonContainer">
        <button class="button">${text}</button>
        <div class="description">${description}</div>
    </div>
  `;

  return result;
}

function getSecondaryButtonHTML(text, description) {
  let result;

  result = `
    <div class="secondary buttonContainer">
        <button class="button">${text}</button>
        <div class="description">${description}</div>
    </div>
  `;

  return result;
}

function getTertiaryButtonHTML(text, description) {
  let result;

  result = `
      <div class="tertiary buttonContainer">
          <button class="button">${text}</button>
          <div class="description">${description}</div>
      </div>
    `;

  return result;
}

function getButtonHTML(buttonStyle, text, description) {
  let result;

  if (description) {
    result = `
    <div class="${buttonStyle} buttonContainer">
        <button class="button">${text}</button>
        <div class="description">${description}</div>
    </div>
  `;
  } else {
    result = `
    <div class="${buttonStyle} buttonContainer">
        <button class="button">${text}</button>
    </div>
  `;
  }

  return result;
}

function getButtonHTML2(buttonStyle, text, description) {
  let result;

  result = `
    <div class="${buttonStyle} buttonContainer">
        <button class="button">${text}</button>
        ${description ? `<div class="description">${description}</div>` : ""}
    </div>
  `;

  return result;
}

document.querySelector(".primaryContainer").innerHTML = getButtonHTML2(
  "primary",
  "저장"
);

document.querySelector(".secondaryContainer").innerHTML = getButtonHTML2(
  "secondary",
  "취소",
  "쉬소 버튼 입니다"
);

document.querySelector(".tertiaryContainer").innerHTML = getButtonHTML2(
  "tertiary",
  "닫기",
  "닫기 버튼 입니다"
);

// 함수의 return type이 문자열나 숫자여서 + 가능 하다
// 함수는 + 함수는 안된다
document.querySelector(".inputContainer .buttonList").innerHTML =
  getButtonHTML2("secondary", "취소") + getButtonHTML2("primary", "저장");
