import { Comment } from "../interfaces/comments.ts";
import { Post } from "../interfaces/posts";
const posts: Post[] = [
    {
      id: 1,
      title: "The Future 1",
      imageUrl: "/images/posts/post.png",
      body: "Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.Desenvolvedora front-end e estudante de graduação em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalmente na área.",
    },
    {
      id: 2,
      title: "The Future 2",
      imageUrl: "/images/posts/post.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
    {
      id: 3,
      title: "The Future 3",
      imageUrl: "/images/posts/post.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
    {
      id: 4,
      title: "Cloud vs On Premise? Cloud vs On Premise?",
      imageUrl: "https://blog.compass.uol/wp-content/uploads/2023/07/Cloud-vs-On-Premise-Qul-o-melhor-modelo-de-Infraestrutura-para-o-meu-negiocio-1920x570.jpg",
      body: "Muitos empresários se veem diante de escolhas cruciais quando se trata de implementar tecnologias para ajudar no crescimento e desenvolvimento de suas empresas. A infraestrutura é um dos pilares se tratando deste assunto e, portanto, seguem as principais diferenças entre duas formas de implementação em um ambiente: On Premise e On Cloud. A decisão sobre qual infraestrutura escolher pode ser baseada em alguns fatores como configuração e manutenção, segurança e viabilidade financeira. Para facilitar o entendimento é preciso compreender que uma estrutura montada on premise significa ter dentro de um espaço de propriedade da empresa todo o hardware necessário para o mínimo funcionamento da operação. Neste caso todo o custo de mão de obra especializada para gerenciamento e manutenção, upgrades de hardware necessários para acompanhar as tecnologias emergentes, suprimento de energia etc. ficam por conta da própria empresa. Optando por uma estrutura em cloud podemos ignorar todo o planejamento de um ambiente local, pois o mesmo não requer nenhuma aquisição física, já que a grande maioria das nuvens são alocadas em servidores remotos descentralizados. A mão de obra é menor podendo até mesmo ser totalmente terceirizada, deixando todo o processo a cargo da contratada. Uma das características mais marcantes de um ambiente em cloud é a facilidade de efetuar upgrades, permitindo que recursos sejam adicionados com mais facilidade e de uma forma transparente para usuários. Por se tratar de acessos remotos, as informações podem ser acessadas com muito mais facilidade, de qualquer lugar ou dispositivo, sempre com a devida segurança implementada, ao contrário de uma infraestrutura on premise, que normalmente só pode ser acessada localmente em uma rede protegida ou remotamente com o uso de uA segurança é algo pertinente quando falamos de infraestrutura e uma das grandes diferenças entre as duas implementações. Na infraestrutura local, além da segurança dos dados lógicos, também é necessário investir na proteção física do ambiente, aplicando medidas para garantir somente acessos autorizados ao hardware e prevenção de danos a estEm ambientes na nuvem a gestão de segurança e proteção física não ficam sob a responsabilidade do contratante e são garantidos pela empresa contratada. Ainda que suscetíveis a problemas físicos, o investimento na segurança de hardware de uma empresa especializada é superior e a proteção atinge altos níveis, além de terem garantias como backup redundante para não comprometer os dados de seus clientes em caso de um imprCom toda a facilidade de configuração, segurança e gerenciamento, uma estrutura em cloud vêm acompanhada de significativa economia financeira já que dispensa toda estrutura local, reduzindo os custos com equipamentos e futuros upgrades, manutenções, mão de obra especializada, local e consumos de um ambiente on premise. Na nuvem também é possível pagar por uma configuração que utiliza apenas o necessário, pois ela permite customizar o ambiente de forma dinâmica se comparado a uma solução on pCloud nada mais é do que uma evolução do modelo on premise. Este tipo de evolução tecnológica é constante e para conseguir entregar um serviço com nível de qualidade e segurança superiores é preciso evoluir em paralelo, provocando mudanças e criando tecnologias quando necessário e a melhor forma de incentivo é fazendo uso de tecnologias de ponta como Cloud Computing.  ",
    },
    {
      id: 5,
      title: "The Future 2",
      imageUrl: "/images/posts/post.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
    {
      id: 6,
      title: "The Future 3",
      imageUrl: "/images/posts/post.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
  ];
  
  const comments: Comment[] = [
    {
      id: 1,
      postId: 1,
      username: "Augusto Ferreira",
      email: "user1@example.com",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry .",
    },
    {
      id: 2,
      postId: 1,
      username: "Edson Costa",
      email: "user2@example.com",
      body: "Another comment for the first post.",
    },
    {
      id: 3,
      postId: 2,
      username: "Henrique Negri",
      email: "user3@example.com",
      body: "Comment for the second post.",
    },
    {
      id: 4,
      postId: 4,
      username: "Augusto Ferreira",
      email: "user1@example.com",
      body: "Comment for the second post.",
    },
  ];
  
  export { posts, comments };