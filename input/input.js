function Input(maxLength, onClick, required, initialValue) {
  let result;

  result = ` <div class="primary inputWrapper">
    <div class="container1">
        <div class="icon">V</div>
    </div>
    <div class="container2">
        <div class="titleContainer">
            <div class="title">Title<div class="starSymbol">*</div></div>
            <input class="text" type="text" placeholder="placeholder" value="${initialValue}" oninput="onInput(this)" maxlength="${maxLength}"/> 
        </div>
    </div>
    <div class="container3">
        <div class="maxInput"><div class="counter">0</div>/${maxLength}</div>
        <div class="delete" onclick="clearInput(this)">x</div>
        <button class="labelButton" onclick="${onClick}()">Label</button>
    </div>
</div>`;

  return result;
}
// let inputValue = document.querySelector('.text').value
// console.log('inputValue', inputValue.value)
// console.log('inputValue.value', inputValue.value)

document.querySelector(".inputInnerHTML").innerHTML = Input(10, "alertLabel");

function clearInput($info) {
  // querySelector or getElementById 는 아래 찾는다
  $info.previousElementSibling.querySelector(".counter").innerHTML = 0;
}

function alertLabel() {
  alert("testing");
}

function onInput(val) {
  console.log("val :", val);
  // $ = HTMLElement이다
  // innerHTML type 은 string
  const $inputContainer = getParentElementByClass(val, "inputWrapper");
  $inputContainer.querySelector(".counter").innerHTML = `${val.value.length}`;

  console.log("val.maxLength", val.maxLength);
  console.log("val.value.length", val.value.length - 1);
  console.log("val.value", val.value);
}

function getParentElementByClass(element, className) {
  if (element === null) {
    return null;
  }
  if (element?.classList?.contains(className)) {
    return element;
  }
  return getParentElementByClass(element.parentElement, className);
}
