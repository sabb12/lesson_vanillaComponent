// 없다가 생기면 비용이 더 생긴다
// componet에 성격에 따라서 document에서 찾을지 아니면 event target에서 찾을지

// 모달 HTML 렌더링을 위한 함수
function Modal(className, title, children) {
  // if(description){
  return `
  <div class="body-container ${className}">
      <div class="overlay"></div>
      <div class="wrapper">
        <button class="closeButton">&times;</button>
        <div class="content-wrapper">${children}</div>
      </div>
    </div>
    `;
}

function getModalManager(modalName) {
  return {
    open: () => {
      document.querySelector(`.body-container.${modalName}`).style.display =
        "block";
      document.body.classList.add("disable-scroll");
    },
  };
}

// ModalManage2.prototype.close(e.target)

function getYesButton() {
  return `<button>Yes</button>`;
}

function getNoButton() {
  return `<button>No</button>`;
}

document.body.insertAdjacentHTML(
  "beforeend",
  Modal(
    "modal",
    "수정 페이지",
    `<div>
    ${getYesButton()}
    ${getNoButton()}
  </div>`
  )
);

document.body.insertAdjacentHTML(
  "beforeend",
  Modal(
    "modal2",
    "modal2",
    `<div>
    this is modal2
  </div>`
  )
);

const modalManage2 = getModalManager("modal2");
const modalManager1 = getModalManager("modal");

document.querySelector(".button2").addEventListener("click", (e) => {
  // modal2가 열린다
  modalManage2.open();
});

// document.querySelector('.body-container').innerHTML = Modal("hidden", '수정 페이지',"none")
document.querySelector(".button").addEventListener("click", (e) => {
  modalManager1.open();
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("closeButton")) return;
  e.target.parentElement.parentElement.style.display = "none";
  document.body.classList.remove("disable-scroll");
  // ModalManage2.prototype.close(e.target)
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("overlay")) return;
  document.querySelector(".container").innerHTML = Modal(
    "hidden",
    "수정 페이지",
    "none"
  );
  document.body.classList.remove("disable-scroll");
});

//  document.querySelector('.body-container').innerHTML = Modal()
// 모달 열고 닫기 등의 이벤트를 처리하는 함수
//   function getModalManager(onClick, overlayCLassName, modalClassName, display, visiual, scrollAble) {
//         document.querySelector(onClick).addEventListener('click', (e) => {
//         document.querySelector(overlayCLassName).style.display = display;
//         document.querySelector(modalClassName).style.visibility = visiual;
//         scrollAble ? document.body.classList.add(scrollAble);

//     });
//   }

//   getModalManager('.button', '.overlay', '.wrapper', "block", "visible", 'disable-scroll')
//   getModalManager('.closeButton', '.overlay', '.wrapper', "none", "hidden", 'disable-scroll')

// document.querySelector('.button').addEventListener('click', (e) => {
// //    debugger
//     // document.querySelector('.overlay').style.display = "block";
//     document.querySelector('.body-container').innerHTML = overLayDisplay("block")
//     document.querySelector('.body-container').innerHTML = Modal("visible")
//     document.querySelector('.overlay').style.display = "block";
//     // document.querySelector('.wrapper').style.visibility = "visible";
//     document.body.classList.add('disable-scroll');
// });

// document.querySelector('.closeButton').addEventListener('click', (e) => {
//     document.querySelector('.overlay').style.display = "none";
//     document.querySelector('.wrapper').style.visibility = "hidden";
//     document.body.classList.remove('disable-scroll');
// });

// document.querySelector('.overlay').addEventListener('click', (e) => {
//     document.querySelector('.overlay').style.display = "none";
//     document.querySelector('.wrapper').style.visibility = "hidden";
//     document.body.classList.remove('disable-scroll');
// });

// function toggleModal(){
//     console.log('clicking')
//     document.querySelector('.body-container').classList.toggle("active");
//     document.body.classList.add('disable-scroll');
// }

// document.body.classList.remove('disable-scroll');
