// main.ts
import '../../assets/css/reset.css';
// import './style.css';
import { createHeader } from '../../components/Header/header.ts';

const appElement = document.querySelector<HTMLDivElement>('#app');

if (appElement) {
  const headerComponent = createHeader();
  appElement.appendChild(headerComponent);
}
