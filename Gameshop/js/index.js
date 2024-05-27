const url = "http://localhost:8080/products";

//promise 객체를 연결할 때 then 사용
axios
  .get(url)
  .then((response) => {
    console.log("응답 Response: ", response);
    displayProducts(response.data);
  })
  .catch((error) => {
    console.log("에러발생: ", error);
  });

function displayProducts(gameData) {
  console.log(gameData.length);
  if (gameData.length > 0) {
    const content = document.querySelector(".content");
    gameData.forEach((data) => {
      const game = document.createElement("div");
      game.classList.add("game");
      const img = document.createElement("img");
      img.classList.add("image");
      img.src = data.image;
      game.appendChild(img);
      content.appendChild(game);
    });
  }
}
