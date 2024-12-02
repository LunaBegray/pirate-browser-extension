const treasureChest = document.createElement("div");
treasureChest.innerText = "🏴‍☠️ Treasure Chest!";
treasureChest.style.position = "fixed";
treasureChest.style.bottom = "10px";
treasureChest.style.right = "10px";
treasureChest.style.padding = "10px";
treasureChest.style.backgroundColor = "#f4a460";
treasureChest.style.borderRadius = "5px";
treasureChest.style.cursor = "pointer";
document.body.appendChild(treasureChest);

treasureChest.addEventListener("click", () => {
  alert("Ye found the treasure! 🪙");
});
