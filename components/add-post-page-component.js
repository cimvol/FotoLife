import { renderUploadImageComponent } from "./upload-image-component.js";
import { addPost } from "../api.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick,  }) {
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
      <div class="header-container"> </div>
      Cтраница добавления поста
      <textarea class="post-discript"></textarea>
      <button class="button" id="add-button">Добавить</button>
    </div>
  `;

    appEl.innerHTML = appHtml;

    const headerContainerElement = document.querySelector(".header-container");

    renderUploadImageComponent({
      element: headerContainerElement,
      onImageUrlChange: (URL) => {
        console.log(URL);
      },
    });

    // Блок добавления нового поста
    document.getElementById("add-button").addEventListener("click", () => {
      const postDiscriptionElement = document.querySelector(".post-discript");
      const postDiscription = postDiscriptionElement.value;
      // Где брать imageUrl???
      addPost(postDiscription, imageUrl, token);
      render();

      onAddPostClick({
        description: postDiscription,
        imageUrl: imageUrl,
      });
    });
  };

  render();
}
