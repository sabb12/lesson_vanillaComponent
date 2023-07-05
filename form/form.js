// ProductForm({ className, initialValues, formType }) 이게 더 많이 쓴다
// 이거 아니면 그냥 undefined 또는 Null로 넣어 주면 된다
function ProductForm(props) {
  // 이렇게 하면 parameter가 순서 상관 없이 사용 가능 더 짧게는 위에 ProductForm({ className, initialValues, formType }})
  const { className, initialValues, formType } = props;
  return `
    <div class="wrapper ${className}">
        <div class="innerWrapper">
            <div class="productID-container inputWrapper">
                <label for="productID">상품아이디</label><br>
                <input type="text" id="productID" value="${initialValues.id}" ${
    formType === "DETAIL" ? "readonly" : ""
  }><br>
            </div>
            <div class="productName-container inputWrapper marginTop">
                <label for="productName">상품명</label><br>
                ${Input("30", null, null, initialValues.name)}
            </div>
            <div class="productPrice-container inputWrapper marginTop">
                <label for="productPrice">판매가격</label><br>
                <input type="text" class="productPrice" oninput="getPriceComma(this)" value="${
                  initialValues.price
                }"><br>
            </div>
            <div class="productCategory-container radioWrapper">
                <div class="categoryTitleContainer">
                <div class="categoryTitle">카테고리</div>
                </div>
                <div class="grid-row">
                    <label>
                        <input type="radio" name="category" value="food" id="food" ${
                          initialValues.category === "food" ? "checked" : ""
                        } /> 
                        <span for="food">음식</span>
                    </label>
                    <label>
                        <input type="radio" name="category" value="beauty/cosmetics" ${
                          initialValues.category === "beauty/cosmetics"
                            ? "checked"
                            : ""
                        } id="beauty/cosmetics"/> 
                        <span for="beauty/cosmetics">뷰티/화장품</span>
                    </label>
                    <label>
                        <input type="radio" name="category" value="interior/furniture" ${
                          initialValues.category === "interior/furniture"
                            ? "checked"
                            : ""
                        } id="interior/furniture"/> 
                        <span for="interior/furniture">인테리어/가구</span>
                    </label>
                </div>
            </div>
            <div class="productDescription-container inputWrapper marginTop">
                <label for="productDescription">상세설명</label>
                <textarea id="productDescription" rows="10" cols="23" placeholder="상세페이지 설명을 입력합니다...">${
                  initialValues.description
                }</textarea>
            </div>
        </div>
    </div>
    <div class="buttons-container">
        ${getPrimaryButtonHTML(formType === "NEW" ? "등록" : "수정", "")}
        ${getSecondaryButtonHTML("취소", "")}
    </div>
    `;
}
// document.querySelector(".parentContainer").innerHTML = ProductForm(
//   "originalWrapper",
//   {
//     id: 123,
//     name: "coffee",
//     price: 123123,
//     category: "beauty/cosmetics",
//     description: "kwlejfrlwkjeflkwejflwkefjklwjefwlke",
//   },
//   "NEW"
// );

function getPriceComma(comma) {
  console.log("comma :", comma);
  comma.value = Number(comma.value.replace(/[^0-9]/g, "")).toLocaleString();
}
// document.querySelector('.parentContainer').innerHTML += Input("originalWrapper2")

// document.querySelector(".insert").addEventListener("click", (e) => {
//   document.body.insertAdjacentHTML(
//     "afterend",
//     ProductForm("originalWrapper", undefined)
//   );
// });

function getParentElementByClass(element, className) {
  if (element === null) {
    return null;
  }
  if (element?.classList?.contains(className)) {
    return element;
  }
  return getParentElementByClass(element.parentElement, className);
}

// render이 안되서 찾을 수 없다.
// ProductForm()
// const productForm = ProductForm();

window.onload = function ready() {
  document.querySelector(".parentContainer").innerHTML = ProductForm({
    formType: "DETAIL",
    className: "originalWrapper",
    initialValues: {
      id: 123,
      name: "coffee",
      price: 123123,
      category: "beauty/cosmetics",
      description: "kwlejfrlwkjeflkwejflwkefjklwjefwlke",
    },
  });
  const input = Input("20", null, null, "123");
  console.log(input);
};
