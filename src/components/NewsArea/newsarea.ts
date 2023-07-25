import "./newsarea.css";

interface NewsData {
  id: number;
  title: string;
  image: string;
  content: string;
}

const newsData: NewsData[] = [
  {
    id: 1,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 2,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 3,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 4,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 5,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text...",
  },
  {
    id: 6,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text...",
  },
  // Adicione mais notícias aqui
];

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
  return newsData
    .map(
      (news) => `
        <div class="card-post">
          <img class="article-image" src=${news.image} alt=${news.title}>
          <div class="container-card">
            <h3 class="card-title">${news.title}</h3>
            <p>${news.content}</p>
            <a class="expand" href="noticia.html?id=${news.id}&title=${news.title}">Expand...</a>
          </div>
        </div>
      `
    )
    .join("");
}
