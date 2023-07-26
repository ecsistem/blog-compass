import { createHeader } from '../components/Header/header.ts';
import '../assets/css/reset.css'

const appElement = document.querySelector<HTMLDivElement>('#app');

if (appElement) {
  const headerComponent = createHeader();
  const firstChild = appElement.firstChild;
  appElement.insertBefore(headerComponent, firstChild);
}

interface NewsData {
    id: number;
    title: string;
    image: string;
    content: string;
    comments: string[];
  }
  
  const newsData: NewsData[] = [
    {
      id: 1,
      title: "The Future",
      image: "https://github.com/ecsistem.png",
      content: "Lorem Ipsum is simply dummy text",
      comments: ["Lorem Ipsum is simply dummy text...", "Lorem Ipsum is simply dummy text..."],
    },
    // Adicione mais notícias aqui
    {
      id: 2,
      title: "The Future",
      image: "https://github.com/ecsistem.png",
      content: "Lorem Ipsum is simply dummy text...",
      comments: ["Lorem Ipsum is simply dummy text...", "Lorem Ipsum is simply dummy text..."],
    },
    // Adicione mais notícias aqui
    {
      id: 3,
      title: "The Future",
      image: "https://github.com/ecsistem.png",
      content: "Lorem Ipsum is simply dummy text...",
      comments: ["Lorem Ipsum is simply dummy text...", "Lorem Ipsum is simply dummy text..."],
    },
    // Adicione mais notícias aqui
    {
      id: 4,
      title: "The Future",
      image: "https://github.com/ecsistem.png",
      content: "Lorem Ipsum is simply dummy text...",
      comments: ["Lorem Ipsum is simply dummy text...", "Lorem Ipsum is simply dummy text..."],
    },
    // Adicione mais notícias aqui
    {
      id: 5,
      title: "The Future",
      image: "https://github.com/ecsistem.png",
      content: "Lorem Ipsum is simply dummy text...",
      comments: ["Lorem Ipsum is simply dummy text...", "Lorem Ipsum is simply dummy text..."],
    },
    // Adicione mais notícias aqui
    {
      id: 6,
      title: "The Future",
      image: "https://github.com/ecsistem.png",
      content: "Lorem Ipsum is simply dummy text...",
      comments: ["comentario de teste", "Lorem Ipsum is simply dummy text..."],
    },
    // Adicione mais notícias aqui
    {
      id: 7,
      title: "The Future",
      image: "https://github.com/ecsistem.png",
      content: "Lorem Ipsum is simply dummy text...",
      comments: ["Lorem Ipsum is simply dummy text...", "Lorem Ipsum is simply dummy text..."],
    },

  ];
  
   function getNewsById(id: number): NewsData | undefined {
    return newsData.find((news) => news.id === id);
  }
  
  function showNewsDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = parseInt(urlParams.get("id") || "");
  
    const news = getNewsById(newsId);
    if (news) {
      const newsDetail = document.getElementById("news-detail");
      if (newsDetail) {
        newsDetail.innerHTML = `
        <img src="${news.image}" alt="${news.title}" />
          <h2>${news.title}</h2>
          <p>${news.content}</p>
          <h3>Comentários</h3>
          <ul>
            ${news.comments.map((comment) => `<li>${comment}</li>`).join("")}
          </ul>
        `;
      }
    } else {
      const newsDetail = document.getElementById("news-detail");
      if (newsDetail) {
        newsDetail.innerHTML = "<p>Notícia não encontrada.</p>";
      }
    }
  }
  
  showNewsDetail();
  