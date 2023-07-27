import "./newsarea.css";
import { posts } from "../../data/data";

export function createNewsArea(): HTMLElement {
  const NewsAreaContent = `
    <article class="posts">
      <h1 class="article-title">User posts</h1>
      <div class="cards-posts">
        ${generateNewsCards()}
      </div>
    </article>
  `;

  const newsarea = document.createElement("main");
  newsarea.innerHTML = NewsAreaContent.trim();

  return newsarea;
}

function generateNewsCards(): string {
  return posts
    .map(
      (post) => `
        <div class="card-post">
        <a href="noticia.html?id=${post.id}&title=${post.title}">
          <img class="article-image" src=${post.imageUrl} alt=${post.title}>
          <div class="container-card">
            <h3 class="card-title">${post.title}</h3>
            <p>${post.body}</p>
            <a class="expand" href="noticia.html?id=${post.id}&title=${post.title}">Expand...</a>
          </div>
          </a>
        </div>
      `
    )
    .join("");
    
}
