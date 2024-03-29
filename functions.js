function addinput() { //input 요소를 리스트 안에 넣어놓는 함수.
    if (document.getElementById('UserInput') == null) {// input이 없을 때만 추가 가능
        var input = document.createElement("input"); //문서에 태그 추가 함수
        input.setAttribute('type', 'text'); //속성 추가 함수
        input.setAttribute('id', 'UserInput');
        input.setAttribute('onkeyup', 'onkeypress2()');
        document.getElementById('ul2').append(input);
    }
}
function onkeypress2() { //엔터키가 입력될 경우, 그대로 확정하는 함수
    // console.log('작동됨');
    var input = document.getElementById('UserInput'); //맞는 ID를 가진 첫 번째 요소를 찾는 함수
    if (window.event.keyCode == 13) {
        addList(input.value);
        input.remove(); // 다 쓴 UserInput를 삭제한다.
    }

}
function addList(InputValue) { //ul2 태그의 리스트 요소를 추가시키는 것.
    // console.log('작동됨');


    var li = document.createElement("li");
    li.setAttribute("onclick", "ClickList()");
    li.append(document.createTextNode(InputValue)); //append = 해당하는 태그의 바로 다음에 추가되는 태그 
    document.getElementById('ul2').appendChild(li);
}

function Hide_Apperance() { //리스트를 숨기거나 나타내는 함수
    //console.log('작동됨');
    var VButton = document.getElementById('VButton');
    var List = document.getElementById('ul2');
    //console.log(List.style.display);
    if (List.style.display === "block" || List.style.display === "") { // ===같은 연산자 !== 다름 연산자
        List.style.display = "none";
        VButton.style.transform = "rotate(90deg)";
        VButton.style.marginLeft = "0px";
    }
    else {

        List.style.display = "block";
        VButton.style.transform = "rotate(0deg)";
        VButton.style.marginLeft = "5px";
    }
}
function ClickList() {
    var VG = document.getElementById('Verticalgrid');

    var container = document.getElementById('ul');
    var VG2 = document.getElementById('VgridOpenText');
    console.log(VG === null);
    console.log(VG2 === null);
    console.log(document.getElementById('Menutext') === null)
    togglemainTextButton();
if (document.getElementById('Menutext') === null) {
        var newBlock = document.createElement('div');
        VG.removeAttribute('id', 'Verticalgrid');
        VG.setAttribute('id', 'VgridOpenText');
        container.after(newBlock);
        container.style.marginRight = "0px";
        //newBlock.setAttribute('class', container);
        newBlock.setAttribute('id', 'Menutext');
    }
else {
        //console.log('작동됨');
        var newBlock = document.getElementById('Menutext');
        newBlock.remove();
        VG2.removeAttribute('id', 'VgridOpenText');
        VG2.setAttribute('id', 'Verticalgrid');
        container.style.marginRight = "20px";
    }
}
function togglemainTextButton() {
    if(document.getElementById('mainText').style.display === "inline") {
      document.getElementById('mainText').style.display = "none";
      document.getElementById('mainTextButton').style.display = "none";
      document.getElementById("grid").style.gridTemplateColumns = "300px 0.1px 1fr";
    }
    else{
      document.getElementById('mainText').style.display = "inline";
      document.getElementById('mainTextButton').style.display = "inline";
      document.getElementById("grid").style.gridTemplateColumns = "300px 1fr 1fr";
    }
}