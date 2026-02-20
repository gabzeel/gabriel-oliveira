import type { TimelineEntry } from "@/types";
import { PinIcon } from "lucide-react";

// TODO: add CCTV job
// TODO: add trainserstudio job
export const EXPERIENCE: TimelineEntry[] = [
  {
    title: "Unity Developer",
    company: "Galactonautas",
    summary:
      "Estou atuando como founder developer em um jogo de gerenciamento de academia no qual o jogador compra equipamentos, realiza manutenções e aumenta sua popularidade para atrair mais clientes",
    startDate: "2025-12",
    endDate: "Present",
    location: "Remote - Brazil",
    items: [
      {
        icon: PinIcon,
        text: "Criei a IA dos clientes utilizando Behavior Tree para gerenciar estados e comportamentos",
      },
      {
        icon: PinIcon,
        text: "Implementei o sistema de animação para conectar os clientes às máquinas utilizando o Animator, IK e Animation Rigging",
      },
      {
        icon: PinIcon,
        text: "Desenvolvi o sistema de gerenciamento de equipamentos, permitindo comprar, armazenar, vender e realizar upgrades",
      },
      {
        icon: PinIcon,
        text: "Implementei o sistema de calendário e horário para o jogo",
      },
      {
        icon: PinIcon,
        text: "Desenvolvi diversos sistemas de apoio para gerenciamento de UI, configurações, spawn de NPCs, academia, calendário e relógio do jogo",
      },
    ],
    images: [],
    techStack: [
      { label: "Unity", logo: "unity", color: "000000" },
      { label: "C#", logo: "csharp", color: "239120" },
    ],
  },
  {
    title: "Unity Developer",
    company: "Brooken Tooth Games",
    summary:
      "Atuei no desenvolvimento do jogo Gears of Glory como desenvolvedor voluntário, com foco em adquirir experiência em jogos comerciais",
    startDate: "2025-08",
    endDate: "2025-12",
    location: "Remote - Brazil",
    items: [
      {
        icon: PinIcon,
        text: "Implementei o sistema de save do jogo com integração à Steam e compatibilidade para salvamento offline",
      },
      {
        icon: PinIcon,
        text: "Implementei o sistema de conquistas com integração com a Steam",
      },
      {
        icon: PinIcon,
        text: "Defini o sistema de score e implementei com integração com a Steam",
      },
      {
        icon: PinIcon,
        text: "Atuei nos testes para identificação e correção de bugs de jogabilidade e UI",
      },
    ],
    images: [],
    techStack: [
      { label: "Unity", logo: "unity", color: "000000" },
      { label: "C#", logo: "csharp", color: "239120" },
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Blue Coding LLC",
    summary:
      "Atuei como único desenvolvedor, responsável desde o desenvolvimento e gerenciamento da infraestrutura, em uma plataforma de criação e edição de vídeos no browser com foco na produção de shorts para redes sociais",
    startDate: "2023-06",
    endDate: "2025-05",
    location: "Remoto - Estados Unidos",
    items: [
      {
        icon: PinIcon,
        text: "Desenvolvi completamente um novo editor de vídeo em browser utilizando React, Remotion (video as code), Konva.js (HTML Canvas API), NestJS e AWS Lambdas para substituir o editor anterior que possuía limitações",
      },
      {
        icon: PinIcon,
        text: "Adicionei a feature de preview dinâmico para visualização e edição em tempo real do resultado final, sem necessidade de renderização do vídeo",
      },
      {
        icon: PinIcon,
        text: "Desenvolvi a funcionalidade de edição de captions em tempo real utilizando OpenAI para transcrição e Konva.js para renderização de texto",
      },
      {
        icon: PinIcon,
        text: "Criei a funcionalidade para adição de imagens e elementos (.png, .svg, .jpeg) em tempo real, com opções de manipulação de shape, cor e aplicação de efeitos",
      },
      {
        icon: PinIcon,
        text: "Desenvolvi a feature de identificação automática de highlights (timestamps) para shorts utilizando OpenAI",
      },
      {
        icon: PinIcon,
        text: "Adicionei suporte a vídeo como source e possibilidade de ajuste de resolução para diferentes formatos de redes sociais",
      },
      {
        icon: PinIcon,
        text: "Implementei a opção de salvar projetos sem renderização, utilizando uma estrutura em JSON para armazenar os metadados do vídeo e permitir retomada posterior",
      },
      {
        icon: PinIcon,
        text: "Adicionei suporte a times para compartilhamento de subscriptions entre usuários que eram gerenciadas via Sripe",
      },
    ],
    images: [],
    techStack: [
      { label: "Vue", logo: "vuedotjs", color: "4FC08D" },
      { label: "React", logo: "react", color: "61DAFB", logoColor: "000000" },
      { label: "Express", logo: "express", color: "000000" },
      { label: "NestJS", logo: "nestjs", color: "E0234E" },
      { label: "Amazon S3", logo: "amazons3", color: "569A31" },
      { label: "Amazon SQS", logo: "amazonsqs", color: "232F3E" },
      { label: "Amazon ECS", logo: "amazonecs", color: "232F3E" },
      { label: "Serverless", logo: "serverless", color: "FD5750" },
      { label: "AWS Lambda", logo: "awslambda", color: "FF9900" },
      { label: "Remotion", logo: "remotion", color: "000000" },
      { label: "Konva.js", logo: "konva", color: "0E87C4" },
      { label: "Redis", logo: "redis", color: "DC382D" },
      { label: "MongoDB", logo: "mongodb", color: "47A248" },
      { label: "New Relic", logo: "newrelic", color: "1CE783" },
      { label: "OpenReplay", logo: "openreplay", color: "0F172A" },
      { label: "Metabase", logo: "metabase", color: "509EE3" },
      { label: "OpenAI", logo: "openai", color: "000000" },
      { label: "Stripe", logo: "stripe", color: "635BFF" },
      { label: "FFmpeg", logo: "ffmpeg", color: "007808" },
      { label: "TypeScript", logo: "typescript", color: "3178C6" },
      { label: "Node.js", logo: "nodedotjs", color: "339933" },
      { label: "Docker", logo: "docker", color: "2496ED" },
      { label: "CI/CD", logo: "githubactions", color: "2088FF" },
      { label: "Jest", logo: "jest", color: "C21325" },
      {
        label: "AWS Parameter Store",
        logo: "amazonsystemsmanager",
        color: "232F3E",
      },
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Ryze Capital",
    summary:
      "Atuei no desenvolvimento de um sistema que conectava investidores e comerciantes para antecipação de recebíveis de cartão de crédito, facilitando o giro de caixa",
    startDate: "2023-02",
    endDate: "2023-06",
    location: "Remote - Brazil",
    items: [
      {
        icon: PinIcon,
        text: "",
      },
      {
        icon: PinIcon,
        text: "Implementei o painel administrativo utilizando Angular para gerenciamento das transações via interface",
      },
      {
        icon: PinIcon,
        text: "Implementei filas e eventos em Lambdas usando Serveless para corrigir problemas de heap overflow em transações com muitas parcelas, possibilitando processamento granular",
      },
      {
        icon: PinIcon,
        text: "Implementei um chatbot que fornecia informações sobre transações aos clientes utilizando OpenAI e geração dinâmica de queries com base nas solicitações",
      },
      {
        icon: PinIcon,
        text: "Desenvolvi um canal de comunicação no painel para facilitar o contato com clientes via WhatsApp, considerando diferentes números utilizados",
      },
      {
        icon: PinIcon,
        text: "Configurei o Metabase em um ECS e usei a feature de embedding para renderizar gráficos dinâmicos no painel admin",
      },
    ],
    images: [],
    techStack: [
      { label: "Angular", logo: "angular", color: "DD0031" },
      { label: "NestJS", logo: "nestjs", color: "E0234E" },
      { label: "PostgreSQL", logo: "postgresql", color: "4169E1" },
      { label: "AWS Lambda", logo: "awslambda", color: "FF9900" },
      { label: "Amazon ECS", logo: "amazonecs", color: "232F3E" },
      { label: "Redis", logo: "redis", color: "DC382D" },
    ],
  },
  {
    title: "Senior Backend Engineer",
    company: "Grupo GCB",
    summary:
      "Atuei no desenvolvedor em um sistema de venda de ativos alternativos",
    startDate: "2022-11",
    endDate: "2023-02",
    location: "Remote - Brazil",
    items: [
      {
        icon: PinIcon,
        text: "Implementei um serviço em NestJS para gerenciamento de armazenamento e leitura de arquivos PDF",
      },
      {
        icon: PinIcon,
        text: "Substituí o runner do Jest por SWC, reduzindo o tempo de execução dos testes unitários no NestJS em aproximadamente 80%",
      },
      {
        icon: PinIcon,
        text: "Integrei o New Relic para monitoramento da API em NestJS com métricas relacionadas ao desempenho da aplicação e uso dos clientes",
      },
      {
        icon: PinIcon,
        text: "Corrigi fluxos para utilização adequada da API async/await do Node.js",
      },
    ],
    images: [],
    techStack: [
      { label: "NestJS", logo: "nestjs", color: "E0234E" },
      { label: "AWS Lambda", logo: "awslambda", color: "FF9900" },
      { label: "Amazon S3", logo: "amazons3", color: "569A31" },
      { label: "Apache Kafka", logo: "apachekafka", color: "231F20" },
      { label: "Jest", logo: "jest", color: "C21325" },
      {
        label: "AWS Parameter Store",
        logo: "amazonsystemsmanager",
        color: "232F3E",
      },
    ],
  },
  {
    title: "Senior Backend Engineer",
    company: "Bit Capital",
    summary:
      "Atuei como liderança técnica na evolução da plataforma PIX fornecendo BaaS para os clientes parceiros",
    startDate: "2022-05",
    endDate: "2022-11",
    location: "Remoto - Brasil",
    items: [
      {
        icon: PinIcon,
        text: "Atuei como referência técnica nos serviços que integravam o PIX do Banco Central utilizando NestJS e RabbitMQ em ambiente Google Cloud",
      },
      {
        icon: PinIcon,
        text: "Apoiei a integração de novos desenvolvedores, auxiliando na adaptação à stack e ao produto, além de colaborar com coordenadores em entrevistas técnicas",
      },
      {
        icon: PinIcon,
        text: "Projetei a nova integração com o PIX do Banco Central, reduzindo o tempo de execução das transações em aproximadamente 70%",
      },
      {
        icon: PinIcon,
        text: "Desenvolvi bibliotecas internas em NestJS para padronização dos serviços integrados ao PIX",
      },
      {
        icon: PinIcon,
        text: "Arquitetei e executei a substituição de sistemas legados, escalando a plataforma para suportar novos clientes do segmento de Bets",
      },
      {
        icon: PinIcon,
        text: "Planejei e executei a operação das Black Fridays de 2021 e 2022, realizando capacity planning, testes de carga e ajustes para suportar a escala de transações",
      },
      {
        icon: PinIcon,
        text: "Implementei normativas do PIX definidas pelo Banco Central e realizei entregas que contribuíram para suportar um crescimento superior a 265% no volume de transações",
      },
    ],
    images: [],
    techStack: [
      { label: "NestJS", logo: "nestjs", color: "E0234E" },
      { label: "Express", logo: "express", color: "000000" },
      { label: "Datadog", logo: "datadog", color: "632CA6" },
      { label: "PIX", logo: "pix", color: "0BA1A5" },
      { label: "RabbitMQ", logo: "rabbitmq", color: "FF6600" },
      { label: "Redis", logo: "redis", color: "DC382D" },
      { label: "PostgreSQL", logo: "postgresql", color: "4169E1" },
      { label: "Google Cloud", logo: "googlecloud", color: "4285F4" },
      { label: "CI/CD", logo: "githubactions", color: "2088FF" },
      { label: "Docker", logo: "docker", color: "2496ED" },
      { label: "Grafana", logo: "grafana", color: "F46800" },
      { label: "TypeScript", logo: "typescript", color: "3178C6" },
      { label: "Node.js", logo: "nodedotjs", color: "339933" },
      { label: "Kubernetes", logo: "kubernetes", color: "326CE5" },
    ],
  },
  {
    title: "Middle Backend Engineer",
    company: "Bit Capital",
    summary:
      "Atuei como desenvolvedor do time PIX na manutenção de um BaaS integrado ao Banco Central",
    startDate: "2021-05",
    endDate: "2022-05",
    location: "Remoto - Brasil",
    items: [
      {
        icon: PinIcon,
        text: "Atuei na integração aos sistemas do PIX (SPI, DICT, BRCodes) em uma arquitetura microservices com serviços escritos em Express e NestJS",
      },
      {
        icon: PinIcon,
        text: "Refatorei o CI/CD, reduzindo o tempo de deploy e o tempo de downtime durante atualizações",
      },
      {
        icon: PinIcon,
        text: "Refatorei os serviços para garantir finalização controlada dos processos, evitando transações travadas durante reinicializações e deploys",
      },
      {
        icon: PinIcon,
        text: "Identifiquei e corrigi problemas de memory leak utilizando técnicas de análise de heap e stack tracing",
      },
      {
        icon: PinIcon,
        text: "Refatorei os logs dos serviços para melhorar a observabilidade e integrei ao Datadog com alertas em tempo real",
      },
      {
        icon: PinIcon,
        text: "Otimizei queries do banco ajustando ordem de joins, adicionando índices e reescrevendo consultas críticas para reduzir tempo de execução",
      },
      {
        icon: PinIcon,
        text: "Ajustei a modelagem das tabelas, reduzindo custo de cloud e crescimento desnecessário de disco",
      },
      {
        icon: PinIcon,
        text: "Reduzi falhas e incidentes em mais de 90% com uso de fallbacks, retries e melhorias no processamento das filas do PIX",
      },
    ],
    images: [],
    techStack: [
      { label: "NestJS", logo: "nestjs", color: "E0234E" },
      { label: "Express", logo: "express", color: "000000" },
      { label: "Datadog", logo: "datadog", color: "632CA6" },
      { label: "PIX", logo: "pix", color: "0BA1A5" },
      { label: "RabbitMQ", logo: "rabbitmq", color: "FF6600" },
      { label: "Redis", logo: "redis", color: "DC382D" },
      { label: "PostgreSQL", logo: "postgresql", color: "4169E1" },
      { label: "Google Cloud", logo: "googlecloud", color: "4285F4" },
      { label: "CI/CD", logo: "githubactions", color: "2088FF" },
      { label: "Docker", logo: "docker", color: "2496ED" },
      { label: "Grafana", logo: "grafana", color: "F46800" },
      { label: "TypeScript", logo: "typescript", color: "3178C6" },
      { label: "Node.js", logo: "nodedotjs", color: "339933" },
      { label: "Kubernetes", logo: "kubernetes", color: "326CE5" },
    ],
  },
  {
    title: "Middle Fullstack Engineer",
    company: "HACK A BOSS",
    summary:
      "Atuei como desenvolvedor e suporte técnico em uma escola de programação com foco em bootcamps",
    startDate: "2020-11",
    endDate: "2021-04",
    location: "Remoto - Espanha",
    items: [
      {
        icon: PinIcon,
        text: "Implementei o MVP de um sistema de recrutamento utilizando Next.js, NestJS, GraphQL e PostgreSQL",
      },
      {
        icon: PinIcon,
        text: "Implementei GTM nas páginas em WordPress e integrei ao CRM da empresa",
      },
    ],
    images: [],
    techStack: [
      { label: "Next.js", logo: "nextdotjs", color: "000000" },
      { label: "React", logo: "react", color: "61DAFB", logoColor: "000000" },
      { label: "NestJS", logo: "nestjs", color: "E0234E" },
      { label: "GraphQL", logo: "graphql", color: "E10098" },
      { label: "PostgreSQL", logo: "postgresql", color: "4169E1" },
      { label: "Make", logo: "make", color: "6D00CC" },
      { label: "WordPress", logo: "wordpress", color: "21759B" },
      { label: "HubSpot", logo: "hubspot", color: "2478CC" },
    ],
  },
  {
    title: "Delphi Developer Jr.",
    company: "BSoft",
    summary:
      "Atuei como desenvolvedor em um ERP desktop focado em transportadoras",
    startDate: "2020-02",
    endDate: "2020-11",
    location: "Ponta Grossa - PR, Brasil",
    items: [
      {
        icon: PinIcon,
        text: "Otimizei a renderização de arquivos PDF, reduzindo o tempo de emissão de notas fiscais em aproximadamente 97%",
      },
      {
        icon: PinIcon,
        text: "Implementei o cálculo automático de impostos a partir da leitura do XML de arquivos fiscais",
      },
      {
        icon: PinIcon,
        text: "Refatorei o módulo de gerenciamento de pneus da frota de caminhões, tornando-o funcional novamente",
      },
    ],
    images: [],
    techStack: [
      { label: "Delphi", logo: "delphi", color: "EE1F35" },
      { label: "DevExpress", logo: "devexpress", color: "FF7200" },
      { label: "Firebird", logo: "firebird", color: "E0292C" },
    ],
  },
  {
    title: "Estagiário Delphi",
    company: "BSoft",
    summary:
      "Trabalhei como estagiário focado no desenvolvimento de relatórios para um ERP",
    startDate: "2019-10",
    endDate: "2020-01",
    location: "Ponta Grossa - PR, Brasil",
    items: [
      {
        icon: PinIcon,
        text: "Fui efetivado após apenas 3 meses devido ao bom desempenho, com destaque ao desempenho das queries que escrevi",
      },
      {
        icon: PinIcon,
        text: "Desenvolvi relatórios dinâmicos e escrevi queries parametrizadas para consultas no banco de dados",
      },
    ],
    images: [],
    techStack: [
      { label: "Delphi", logo: "delphi", color: "EE1F35" },
      { label: "DevExpress", logo: "devexpress", color: "FF7200" },
      { label: "Firebird", logo: "firebird", color: "E0292C" },
    ],
  },
  {
    title: "Estagiário Full Stack",
    company: "Vecomp",
    location: "Ponta Grossa - PR, Brasil",
    summary:
      "Atuei como estagiário para um desenvolvedor que atuava como freelance para diferentes clientes",
    startDate: "2018-11",
    endDate: "2019-04",
    items: [
      {
        icon: PinIcon,
        text: "Implementei o MVP de um ERP para restaurantes com integração à SEFAZ para emissão de notas fiscais utilizando Angular, Laravel e PostgreSQL",
      },
      {
        icon: PinIcon,
        text: "Desenvolvi o MVP de um sistema escolar com configuração dinâmica de aulas, exercícios e provas pelos professores utilizando Angular, Laravel e PostgreSQL",
      },
    ],
    images: [],
    techStack: [
      { label: "Angular", logo: "angular", color: "DD0031" },
      { label: "Laravel", logo: "laravel", color: "FF2D20" },
      { label: "PHP", logo: "php", color: "777BB4" },
      { label: "PostgreSQL", logo: "postgresql", color: "4169E1" },
      { label: "TypeScript", logo: "typescript", color: "3178C6" },
    ],
  },
];
