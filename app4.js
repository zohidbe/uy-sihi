var matn = prompt("Iltimos, matn kiriting:");
var harf = prompt("Iltimos, hisoblash uchun harf kiriting:").toLowerCase(); // Harfni kichik harfda hisoblash

var harfSanati = 0;

for (var i = 0; i < matn.length; i++) {
  if (matn[i].toLowerCase() === harf) {
    harfSanati++;
  }
}

alert(harf + " => " + harfSanati);
