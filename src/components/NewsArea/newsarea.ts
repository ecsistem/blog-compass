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
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tooks",
  },
  {
    id: 2,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
  },
  {
    id: 3,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
  },
  {
    id: 4,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
  },
  {
    id: 5,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
  },
  {
    id: 6,
    title: "The Future",
    image: "https://github.com/ecsistem.png",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
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
