import "./newsarea.css";
export function createNewsArea(): HTMLElement {
  const NewsAreaContent = `
    <article class="posts">
        <h1 class="title">User posts</h1>
    </article>
  `;

  const newsarea = document.createElement("main");
  newsarea.innerHTML = NewsAreaContent.trim();

  return newsarea;
}
