let order = document.querySelector("#tap");
order.addEventListener("click", () => {
    order.innerText = "Loading...";
  setTimeout(() => {
    window.location.href ="./payment.html";
  }, 3000);
});
