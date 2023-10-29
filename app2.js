var son = prompt("Iltimos, bir son kiriting:");
son = parseInt(son); // Kiritilgan qiymatni son ko'rinishiga o'tkazamiz

if (!isNaN(son)) {
  if (son % 2 === 0) {
    alert(son + " -> " + son % 2 + " juft");
  } else {
    alert(son + " -> " + son % 2 + " toq");
  }
} else {
  alert("Noto'g'ri son kiritdingiz!");
}
