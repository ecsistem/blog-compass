import { Comment } from "../interfaces/comments";
import { Post } from "../interfaces/posts";
const posts: Post[] = [
    {
      id: 1,
      title: "Nina",
      imageUrl: "/images/posts/post.png",
      body: "Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.",
    },
    {
      id: 2,
      title: "Edson Costa",
      imageUrl: "/images/posts/post.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
    {
      id: 3,
      title: "The Future",
      imageUrl: "/images/posts/post.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
  ];
  
  const comments: Comment[] = [
    {
      id: 1,
      postId: 1,
      email: "user1@example.com",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry .",
    },
    {
      id: 2,
      postId: 1,
      email: "user2@example.com",
      body: "Another comment for the first post.",
    },
    {
      id: 3,
      postId: 2,
      email: "user3@example.com",
      body: "Comment for the second post.",
    },
  ];
  
  export { posts, comments };