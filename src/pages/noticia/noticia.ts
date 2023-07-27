import { createHeader } from "../../components/Header/header";
import { posts, comments } from "../../data/data";
import { Post } from "../../interfaces/posts";
import { Comment } from "../../interfaces/comments";
import "../../assets/css/reset.css";
import "./noticia.css";

const appElement = document.querySelector<HTMLDivElement>("#app");

function getNewsById(id: number): Post | undefined {
  return posts.find((post) => post.id === id);
}

function getCommentsForPost(postId: number): Comment[] {
  return comments.filter((comment) => comment.postId === postId);
}

function generateCommentList(commentsForPost: Comment[]): string {
  if (commentsForPost.length === 0) {
    return `<div class="card-post">
      <div class="container-card">
        <p><span class="comment-user">No comments in moment :/</span></p>
      </div>
    </div>`;
  }

  const commentList = commentsForPost
    .map(
      (comment) =>
        `<li class="list-comment border-comment"><p><span class="comment-user">${comment.email}:</span>${comment.body}</p></li>`
    )
    .join("");

  return `<div class="card-post">
    <div class="container-card">
      <ul>${commentList}</ul>
    </div>
  </div>`;
}

function showNewsDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const newsId = parseInt(urlParams.get("id") || "");

  const post = getNewsById(newsId);
  if (post) {
    document.title = `Post - ${post.title}`;
    const commentsForPost = getCommentsForPost(post.id);
    const cardComment = generateCommentList(commentsForPost);

    const newsDetailContent = `
      <section class="container">
        <div class="card-post">
          <img class="article-image" src=${post.imageUrl} alt=${post.title}>
          <div class="container-card">
            <h3 class="card-title">${post.title}</h3>
            <p>${post.body}</p>
          </div>
        </div>
        ${cardComment}
      </section>`;

    const newsDetail = document.getElementById("news-detail");
    if (newsDetail) {
      newsDetail.innerHTML = newsDetailContent;
    }
  } else {
    const notFoundContent = `
      <section class="container">
        <div class="card-post">
          <div class="container-card">
            <h3 class="card-title">The news you are looking for was not found:/</h3>
          </div>
        </div>
      </section>`;

    const newsDetail = document.getElementById("news-detail");
    if (newsDetail) {
      newsDetail.innerHTML = notFoundContent;
    }
  }
}

if (appElement) {
  const headerComponent = createHeader();
  const firstChild = appElement.firstChild;
  appElement.insertBefore(headerComponent, firstChild);
}

showNewsDetail();
