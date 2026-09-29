const showAlert = () => {
  alert("ES LA HORA DE LA HAMBURGUESA");
};

const showPrint = () => {
  console.log("¡Alguien hizo clic en BURGER TOWN!");
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = () => {
  const subTitle = document.getElementById("sub-title");
  subTitle.style.color = getRandomColor();
};
