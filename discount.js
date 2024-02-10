// up to 100----->100taka
// 101 -200 ----->90taka price
//2001-up ------->70taka price

function discounted(ticket) {
  if (typeof ticket !== "number" || ticket < 0) {
    return "plz a Valid Number";
  } else if (ticket >= 301) {
    return "You Max Ticket Push 300 ";
  }
  if (ticket <= 100) {
    const total = ticket * 100;
    return total;
  } else if (ticket <= 200) {
    const total = ticket * 90;
    return total;
  } else {
    const total = ticket * 70;
    return total;
  }
}
const total = discounted(300);
console.log(total);
