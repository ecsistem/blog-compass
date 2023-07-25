// main.ts
import '../../assets/css/reset.css';
import { createHeader } from '../../components/Header/header.ts';
import { createNewsArea } from '../../components/NewsArea/newsarea.ts';

const appElement = document.querySelector<HTMLDivElement>('#app');

if (appElement) {
  const headerComponent = createHeader();
  const newsareaComponent = createNewsArea();
  appElement.appendChild(headerComponent);
  appElement.appendChild(newsareaComponent);
}
