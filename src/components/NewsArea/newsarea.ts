import "./newsarea.css";
export function createNewsArea(): HTMLElement {
  const NewsAreaContent = `
    <article class="posts">
        <h1 class="title">User posts</h1>
        <div class="card-post">
        <img src="https://github.com/ecsistem.png" alt="title do post">
    <div class="container-card">
        <h3 class="card-title">The Future</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...</p>
        <a id="Expand">Expand...</a>
        </div>
    </article>
  `;

  const newsarea = document.createElement("main");
  newsarea.innerHTML = NewsAreaContent.trim();

  return newsarea;
}
