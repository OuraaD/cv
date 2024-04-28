const burgerI = document.getElementById("burger");

burgerI.addEventListener("click", () => {
  const navigation = document.getElementById("nav");
  navigation.classList.toggle("active");
});