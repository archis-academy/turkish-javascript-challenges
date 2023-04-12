///////////////////////////-----------------///////////////////////////
/*

Bu challenge'da;
1- Bir tepsinin içine 1-10 arasında sushi emojisi ekleyeceğiz.
2- Sayfa yenilendiğinde tepsinin içindeki sushi miktarı değişecek.

*/
///////////////////////////-----------------///////////////////////////

function rastgeleSayidaSushiAl() {
  /*
    Burada 1 ile 10 arasında miktarda sushi üretin 🍣
    Aşağıdaki fonksiyonları kullanabilirsiniz:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */

  return ["Empty Tray"]; // replace this empty tray array
}

function sushileriTepsiyeKoy() {
  return rastgeleSayidaSushiAl()
    .map(function (sushi) {
      return `<div class="sushi">${sushi}</div>`;
    })
    .join("");
}

document.getElementById("tepsi").innerHTML = sushileriTepsiyeKoy();
