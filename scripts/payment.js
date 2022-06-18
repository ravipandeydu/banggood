
document.querySelector("#order").addEventListener("click",goToHome);

function goToHome() {
    alert("Ordered SuccessFull");
}
let order = document.querySelector("#order");
order.addEventListener("click", () => {
    order.innerText = "Loading...";
  setTimeout(() => {
    window.location.href = "#";
  }, 3000);
});