import viteBlog from "/images/logo/logo.png";

import "./header.css"

export function createHeader(): HTMLElement {
  const headerContent = `
    <nav class="nav">
      <a href="/" target="_blank">
        <img src="${viteBlog}" class="logo" alt="Vite logo" />
        </a>
        <span class="title">BLOG</span>
    </nav>
  `;

  const header = document.createElement("header");
  header.innerHTML = headerContent.trim();

  return header;
}
