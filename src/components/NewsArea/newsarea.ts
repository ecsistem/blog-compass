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


   const cardPosts = newsarea.querySelectorAll(".card-post");
   cardPosts.forEach((cardPost) => {
     cardPost.addEventListener("click", () => {
      console.log("click");
       // Obter os atributos data-id e data-title do card-post clicado
       const id = cardPost.getAttribute("data-id");
       const title = cardPost.getAttribute("data-title");
        // Redirecionar para a página news.htmlk com os parâmetros id e title
       window.location.href = `news.html?id=${id}&title=${title}`;
     });
   });
 

  return newsarea;
}

function generateNewsCards(): string {
  
  return posts
    .map(
      (post) => `
        <div class="card-post" data-id="${post.id}" data-title="${encodeURIComponent(post.title)}">
          <img class="article-image" src=${post.imageUrl} alt=${post.title}>
          <div class="container-card">
            <h3 class="card-title">${post.title}</h3>
            <p>${post.body}</p>
            <a class="expand" href="news.html?id=${post.id}&title=${encodeURIComponent(post.title)}">Expand...</a>
          </div>
        </div>
      `
    )
    .join("");
    
}