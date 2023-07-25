interface NewsData {
    id: number;
    title: string;
    content: string;
    comments: string[];
  }
  
   const newsData: NewsData[] = [
    {
      id: 1,
      title: "The Future",
      content: "Lorem Ipsum is simply dummy text...",
      comments: ["Comment 1", "Comment 2"],
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
  