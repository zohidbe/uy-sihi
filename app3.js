var son = prompt("Iltimos, bir son kiriting:");
son = parseInt(son);

if (!isNaN(son) && son > 1) {
  var tub = true;

  for (var i = 2; i < son; i++) {
    if (son % i === 0) {
      tub = false;
      break;
    }
  }

  if (tub) {
    alert(son + " -> tub");
  } else {
    alert(son + " -> murakkab");
  }
} else {
  alert("Noto'g'ri son kiritdingiz!");
}
