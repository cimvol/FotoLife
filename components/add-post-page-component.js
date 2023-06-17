import { renderUploadImageComponent } from "./upload-image-component.js";
import { addPost } from "../api.js";
// import { renderApp } from "../index.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
      <div class="header-container"> </div>
      Cтраница добавления поста
      <textarea class="post-descript"></textarea>
      <button class="button" id="add-button">Добавить</button>
    </div>
  `;

    appEl.innerHTML = appHtml;

    const headerContainerElement = document.querySelector(".header-container");
    renderUploadImageComponent({
      element: headerContainerElement,
      onImageUrlChange: (newImageUrl) => {
        imageUrl = newImageUrl;
        console.log(imageUrl);
      },
    });

    // Блок добавления нового поста
    document.getElementById("add-button").addEventListener("click", () => {
      const postDescriptionElement = document.querySelector(".post-descript");
      const postDescription = postDescriptionElement.value;
      render();

      onAddPostClick({
        description: postDescription,
        imageUrl: imageUrl,
      });
    });
  };

  render();
}
