const buttons = document.querySelectorAll(".tabs li a");
const contents = document.querySelectorAll(".contents li");

console.log(buttons);
console.log(contents);

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    for (let j = 0; j < buttons.length; j++) {
      contents[j].classList.remove("active");
    }

    buttons[index].classList.add("active");
    contents[index].classList.add("active");
  });
}

//1~　.querySelectorAll("")　=>　JSにHTMLのclassのを取得する　(ポストtab/セレブレートtab)
//1~2 nodeList =>　nodeの集合　querySelectorメソッドの返値
//8~ .addEventListener("click", function () {　処理　}　=> 定数buttonsに　clickのイベントが起きた時　関数内の処理を行う
//9~ e.preventDefault();　=>　イベントのデフォルト動作を発動させない　(=aタグのデフォルト機能はhref属性でURLページを読み込むこと　つまりタグを押すたびにページがリロードされてしまう)
//19~ .classList.add(""); => 　クラス名を更新、追加する
//13~　tabs[j].classList.remove(""); =>　既存のクラスの　クラス名を削除する

//activeの状態のボタンの中身に　activeのコンテンツ表示されるように設定されている

//1~ ".tabs li a" =>アイテムタグ/コーディネートタグ
//2~ ".contents li" =>アイテムコンテンツ/コーディネートコンテンツ
//7~ buttons.length =>定数buttonsのnodelistの数

//12~17 タブがクリックされる毎に全てのクラスのactive状態をremoveしている。
//19~20 その直後にクリックされたtabとcontentsにacyiveにして表示している
