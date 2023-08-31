function toggleMode() {
  const html = document.documentElement
  //#region
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // }
  // else{
  //   html.classList.add("light")
  // }
  /*Simplificando a condicao acima, temos:*/
  //#endregion

  // Mudanca de modo
  html.classList.toggle("light")

  // Pegar a tag ima
  const img = document.querySelector("#profile img")
  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adiciona a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Didi sorrindo, no carro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Didi sorrindo, com camisa azul e fundo laranja"
    )
  }
}
