$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

function handleData() {
  let data = $("#data").value.trim();
  let arr = data.split(",");
  let tb = $("#tb");

  //remove value rỗng
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === "") {
      arr.splice(i, i + 1);
    }
  }
  // console.log(arr);

  if (10 <= arr.length && arr.length < 21) {
    let valueUpdate = (document.querySelector("#valueUpdate").innerHTML = arr);

    // console.log(valueUpdate);
  } else {
    alert("Nhập từ 10 đến 20 giá trị");
  }

  //săp xếp tăng
  $("#goup").addEventListener("click", () => {
    let goup = arr.sort((a, b) => {
      return a - b;
    });

    // console.log("tăng: ", goup);
    tb.innerHTML = "Giá trị mảng sau khi tăng dần";
    let valueUpdate = (document.querySelector("#valueUpdate").innerHTML = goup);
  });
  //sắp xếp giảm
  $("#godown").addEventListener("click", () => {
    let godown = arr.reverse();

    // console.log('giảm: ', godown)
    tb.innerHTML = "Giá trị mảng sau khi giảm dần";
    let valueUpdate = (document.querySelector("#valueUpdate").innerHTML = godown);
  });
}


function addValue() {
  var add = $("#add").value;
  var value = $("#value").value;
  
  let arrValue = $("#valueUpdate").innerText.split(',');
  
  // console.log(typeof add,value);

  arrValue.splice(add, 0, value)
  let valueUpdate = (document.querySelector("#valueUpdate").innerHTML = arrValue);

  console.log(arrValue)
}
