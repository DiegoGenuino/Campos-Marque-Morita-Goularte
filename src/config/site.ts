export type VideoProvider = 'youtube' | 'file';

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IdentityConfig {
  siteName: string;
  legalName: string;
  professionalName: string;
  professionalRole: string;
  professionalDescription: string;
  professionalImage: string;
  logo?: ImageAsset;
  registration: string;
}

export interface ContactConfig {
  whatsappUrl: string;
  primaryCtaLabel: string;
}

export interface HeaderConfig {
  brandHref: string;
  brandLabel: string;
  primaryNavigationLabel: string;
  mobileNavigationLabel: string;
  menuOpenLabel: string;
  links: NavigationLink[];
}

export interface HeroConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  trust: {
    text: string;
    avatars: string[];
  };
  title: Array<{ text: string; highlighted?: boolean }>;
  description: string;
  primaryCtaLabel: string;
  secondaryCta: NavigationLink;
  scrollTarget: string;
  scrollLabel: string;
}

export interface StatsConfig {
  id: string;
  label: string;
  items: Array<{ value: string; label: string }>;
}

export interface AboutConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  cardName: string;
  cardDetail: string;
  eyebrow: string;
  credentials: Array<{ icon: string; text: string }>;
}

export interface PracticeSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  items: Array<{ icon: string; title: string; description: string }>;
}

export interface UrgencySectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  closingText: string;
  ctaLabel: string;
  listLabel: string;
  items: Array<{ title: string; description: string }>;
}

export interface ProcessSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  stepsLabel: string;
  stepLabel: string;
  items: Array<{ title: string; description: string; detail: string }>;
}

export interface DifferentialsSectionConfig {
  id: string;
  titlePrefix: string;
  highlightedTitle: string;
  titleSuffix: string;
  tabsLabel: string;
  ctaLabel: string;
  items: Array<{ icon: string; title: string; description: string }>;
}

export type ReviewsSource = 'google' | 'manual';

export interface ReviewItem {
  quote: string;
  name: string;
  details: string;
  rating: number | null;
  avatar: string;
  avatarPosition: string;
  publishedAt: string | null;
  publishedAtLabel: string;
  googleMapsUrl: string;
  authorProfileUrl: string;
  source: 'google' | 'manual';
}

export type ManualReviewItem = Pick<
  ReviewItem,
  'quote' | 'name' | 'details' | 'rating' | 'avatar' | 'avatarPosition'
> & Partial<Pick<ReviewItem, 'publishedAt' | 'publishedAtLabel' | 'googleMapsUrl' | 'authorProfileUrl'>>;

export interface ReviewsSectionConfig {
  enabled: boolean;
  id: string;
  title: string;
  highlightedTitle: string;
  platformLogo: ImageAsset;
  source: ReviewsSource;
  maxRating: number;
  ratingUnavailableLabel: string;
  orderingNotice: string;
  google: {
    placeId: string;
    limit: number;
    reviewsUrl: string;
  };
  fallbacks: {
    quote: string;
    name: string;
    details: string;
    avatar: string;
    avatarPosition: string;
    publishedAtLabel: string;
  };
  manualItems: ManualReviewItem[];
}

export interface FaqSectionConfig {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  ctaLabel: string;
  items: FaqItem[];
}

export interface FooterConfig {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  links: NavigationLink[];
  copyrightSuffix: string;
  backToTopLabel: string;
  backToTopHref: string;
  whatsapp: {
    regionLabel: string;
    closeLabel: string;
    image: ImageAsset;
    senderName: string;
    message: string;
    actionLabel: string;
    buttonLabel: string;
  };
}

export interface VideoSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  provider: VideoProvider;
  videoId: string;
  videoUrl: string;
  poster: string;
  posterAlt: string;
  playLabel: string;
  caption: string;
}

export interface LocationSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  address: string;
  mapQuery: string;
  mapTitle: string;
  directionsLabel: string;
}

export interface AiDiscoveryConfig {
  enabled: boolean;
  llmsPath: string;
  markdownPath: string;
  summary: string;
  usageNote: string;
}

export interface SeoConfig {
  siteUrl: string;
  locale: string;
  language: string;
  homePageTitle: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultImage: string;
  defaultImageAlt: string;
  defaultImageWidth: number;
  defaultImageHeight: number;
  themeColor: string;
  favicon: string;
  keywords: string[];
  areaServed: string;
  knowsAbout: string[];
  sitemap: Array<{
    path: string;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
  }>;
}

export type DeploymentMode = 'auto' | 'git' | 'upload';

export interface DeploymentConfig {
  mode: DeploymentMode;
  projectName: string;
  subdomain: string;
  baseDomain: string;
  cnameTarget: string;
}

export interface SiteConfig {
  identity: IdentityConfig;
  contact: ContactConfig;
  header: HeaderConfig;
  hero: HeroConfig;
  stats: StatsConfig;
  about: AboutConfig;
  practiceSection: PracticeSectionConfig;
  urgencySection: UrgencySectionConfig;
  differentialsSection: DifferentialsSectionConfig;
  processSection: ProcessSectionConfig;
  reviewsSection: ReviewsSectionConfig;
  faqSection: FaqSectionConfig;
  footer: FooterConfig;
  seo: SeoConfig;
  videoSection: VideoSectionConfig;
  locationSection: LocationSectionConfig;
  aiDiscovery: AiDiscoveryConfig;
  deployment: DeploymentConfig;
}

export const siteConfig = {
  identity: {
    siteName: 'Campos Marque Morita & Goularte Advogadas',
    legalName: 'Campos Marques Advogados Associados',
    professionalName: 'Maria Morita',
    professionalRole: 'Advogada trabalhista',
    professionalDescription: 'O escritório Campos Marque Morita & Goularte Advogadas atua em Brasília na orientação e defesa dos direitos dos trabalhadores. A equipe acompanha questões ligadas a rescisão contratual, horas extras, verbas rescisórias, vínculo de emprego e relações de trabalho com atendimento próximo e linguagem clara.',
    professionalImage: '/images/equipe-cmmg-1122.webp',
    logo: {
      src: '/images/campos-marque-morita-goularte-logo.svg',
      width: 165,
      height: 24,
      alt: 'Campos Marque Morita & Goularte Advogadas',
    },
    registration: '',
  },
  contact: {
    whatsappUrl: 'https://wa.me/5561996952511',
    primaryCtaLabel: 'Falar com a equipe',
  },
  header: {
    brandHref: '#inicio',
    brandLabel: 'Campos Marque Morita & Goularte Advogadas — início',
    primaryNavigationLabel: 'Navegação principal',
    mobileNavigationLabel: 'Navegação mobile',
    menuOpenLabel: 'Abrir menu',
    links: [
      { href: '#sobre', label: 'Quem somos' },
      { href: '#especialidades', label: 'Áreas de atuação' },
      { href: '#diferenciais', label: 'Nosso atendimento' },
      { href: '#faq', label: 'Dúvidas' },
    ],
  },
  hero: {
    id: 'inicio',
    image: {
      src: '/images/equipe-cmmg-1672.webp',
      width: 1672,
      height: 942,
      alt: '',
      srcset: [
        { src: '/images/equipe-cmmg-960.webp', width: 960 },
        { src: '/images/equipe-cmmg-1672.webp', width: 1672 },
      ],
      sizes: '100vw',
    },
    trust: {
      text: 'Atendimento trabalhista em Brasília',
      avatars: ['/images/equipe-cmmg-avatar-1.webp', '/images/equipe-cmmg-avatar-2.webp', '/images/equipe-cmmg-avatar-3.webp'],
    },
    title: [
      { text: 'Defesa dos seus ' },
      { text: 'direitos trabalhistas', highlighted: true },
      { text: ' em ' },
      { text: 'Brasília', highlighted: true },
    ],
    description: 'Orientação jurídica para trabalhadores em rescisões, horas extras, verbas rescisórias e outras questões da relação de emprego.',
    primaryCtaLabel: 'Falar com a equipe',
    secondaryCta: { href: '#sobre', label: 'Conheça o escritório' },
    scrollTarget: '#numeros',
    scrollLabel: 'Ir para as informações do escritório',
  },
  stats: {
    id: 'numeros',
    label: 'Informações públicas do escritório',
    items: [
      { value: '5,0', label: 'nota no Google Maps em setembro de 2026' },
      { value: '23', label: 'avaliações registradas em setembro de 2026' },
    ],
  },
  about: {
    id: 'sobre',
    image: {
      src: '/images/equipe-cmmg-560.webp',
      width: 560,
      height: 700,
      alt: 'Equipe do escritório Campos Marque Morita & Goularte em frente à estante de livros',
      srcset: [
        { src: '/images/equipe-cmmg-560.webp', width: 560 },
        { src: '/images/equipe-cmmg-1122.webp', width: 1122 },
      ],
      sizes: '(max-width: 780px) calc(100vw - 34px), 392px',
    },
    cardName: 'Campos Marque Morita & Goularte',
    cardDetail: 'Advogadas | Brasília, DF',
    eyebrow: 'Conheça nosso escritório',
    credentials: [
      { icon: 'lucide:circle-check', text: 'Atuação voltada aos direitos dos trabalhadores no Distrito Federal' },
      { icon: 'lucide:circle-check', text: 'Atendimento presencial na Asa Sul, em Brasília' },
      { icon: 'lucide:circle-check', text: 'Orientação jurídica individual para cada situação trabalhista' },
    ],
  },
  practiceSection: {
    id: 'especialidades',
    title: 'Como podemos',
    highlightedTitle: 'ajudar',
    description: 'Conheça algumas questões trabalhistas em que nossa equipe oferece orientação e atuação jurídica.',
    items: [
      { icon: 'lucide:file-text', title: 'Rescisão do contrato', description: 'Análise de rescisão direta ou indireta e das verbas devidas conforme cada caso.' },
      { icon: 'lucide:clock-3', title: 'Horas extras e intervalos', description: 'Orientação sobre jornada de trabalho, horas extraordinárias e intervalos não respeitados.' },
      { icon: 'lucide:briefcase-business', title: 'Desvio e acúmulo de função', description: 'Avaliação das atividades exercidas e das diferenças salariais que possam ser cabíveis.' },
      { icon: 'lucide:user-round-check', title: 'Vínculo de emprego', description: 'Análise de situações sem registro em carteira e de contratações que possam ocultar vínculo empregatício.' },
      { icon: 'lucide:shield-alert', title: 'Assédio moral', description: 'Acolhimento e análise de situações de constrangimento ou práticas abusivas no trabalho.' },
    ],
  },
  urgencySection: {
    id: 'quando-buscar-ajuda',
    title: 'Dúvidas no trabalho merecem',
    highlightedTitle: 'orientação.',
    description: 'Mudanças no contrato, pagamentos incorretos e dificuldades no ambiente profissional pedem uma análise cuidadosa dos fatos e documentos.',
    closingText: 'Se alguma dessas situações faz parte da sua rotina, converse com nossa equipe para entender os próximos passos possíveis.',
    ctaLabel: 'Conversar sobre meu caso',
    listLabel: 'Situações em que pode ser útil buscar orientação trabalhista',
    items: [
      { title: 'Foi dispensado e tem dúvidas sobre a rescisão', description: 'Documentos de desligamento e pagamentos podem ser analisados à luz do contrato.' },
      { title: 'Trabalhou além da jornada contratada', description: 'Registros de ponto, mensagens e recibos ajudam a compreender a jornada realizada.' },
      { title: 'Exerce funções diferentes das contratadas', description: 'As atividades efetivamente desempenhadas merecem avaliação individual.' },
      { title: 'Trabalha sem registro formal', description: 'A forma real de prestação dos serviços pode ser examinada para verificar direitos.' },
      { title: 'Passa por constrangimentos recorrentes', description: 'É importante registrar os fatos e buscar orientação sobre as medidas cabíveis.' },
    ],
  },
  differentialsSection: {
    id: 'diferenciais',
    titlePrefix: 'Como a',
    highlightedTitle: 'nossa equipe',
    titleSuffix: 'acompanha você',
    tabsLabel: 'Forma de atendimento do escritório',
    ctaLabel: 'Falar com a equipe',
    items: [
      { icon: 'lucide:scale', title: 'Foco em Direito do Trabalho', description: 'Atuação em questões relacionadas aos direitos de trabalhadores e às relações de emprego.' },
      { icon: 'lucide:user-round-check', title: 'Atenção individual', description: 'Cada demanda começa pela compreensão dos fatos e das necessidades de quem procura o escritório.' },
      { icon: 'lucide:messages-square', title: 'Comunicação clara', description: 'Explicações acessíveis sobre documentos, alternativas e etapas possíveis do atendimento.' },
      { icon: 'lucide:map-pin', title: 'Escritório em Brasília', description: 'Atendimento presencial na Asa Sul, mediante agendamento prévio.' },
      { icon: 'lucide:laptop', title: 'Contato digital', description: 'O primeiro contato e a troca inicial de informações podem ocorrer pelos canais digitais.' },
      { icon: 'lucide:book-open-check', title: 'Análise responsável', description: 'Orientações construídas a partir dos documentos e das particularidades de cada situação.' },
    ],
  },
  processSection: {
    id: 'como-funciona',
    title: 'Da primeira conversa aos',
    highlightedTitle: 'próximos passos.',
    description: 'A equipe organiza as informações de cada caso para orientar as medidas adequadas.',
    stepsLabel: 'Etapas do atendimento jurídico',
    stepLabel: 'Etapa',
    items: [
      { title: 'Primeiro contato', description: 'Você apresenta sua situação e as principais dúvidas trabalhistas.', detail: 'A equipe indica quais informações são úteis para a análise inicial.' },
      { title: 'Análise dos documentos', description: 'Contrato, recibos, mensagens e outros registros são avaliados conforme o contexto.', detail: 'Pode ser necessário solicitar documentos ou esclarecimentos adicionais.' },
      { title: 'Orientação jurídica', description: 'As possibilidades e os riscos são explicados de forma compreensível.', detail: 'A decisão sobre os próximos passos considera os fatos específicos do caso.' },
      { title: 'Acompanhamento', description: 'Se houver contratação, a equipe conduz o trabalho jurídico e informa os desdobramentos relevantes.', detail: 'Os prazos e medidas dependem da natureza da demanda.' },
    ],
  },
  reviewsSection: {
    enabled: false,
    id: 'avaliacoes',
    title: 'O que nossos clientes',
    highlightedTitle: 'dizem',
    platformLogo: { src: '/images/google-icon.png', width: 41, height: 41, alt: 'Google' },
    source: 'google',
    maxRating: 5,
    ratingUnavailableLabel: 'Avaliação não disponível',
    orderingNotice: 'Avaliações selecionadas por relevância.',
    google: {
      placeId: 'ChIJuwzFmZIpWpMRS2pi_Jd2OY0',
      limit: 3,
      reviewsUrl: 'https://maps.google.com/?cid=10176295228166793803',
    },
    fallbacks: {
      quote: 'Comentário não disponível',
      name: 'Usuário do Google',
      details: 'Não disponível',
      avatar: '/images/google-icon.png',
      avatarPosition: 'center',
      publishedAtLabel: 'Data não disponível',
    },
    manualItems: [],
  },
  faqSection: {
    id: 'faq',
    eyebrow: 'Dúvidas frequentes',
    title: 'Informação clara desde o',
    highlightedTitle: 'primeiro contato',
    description: 'As respostas abaixo são gerais. A orientação para seu caso depende de análise individual.',
    ctaLabel: 'Falar sobre meu caso',
    items: [
      { question: 'O que é rescisão indireta?', answer: 'É uma forma de encerramento do contrato que pode ser discutida quando o empregador comete falta grave. As circunstâncias e provas precisam ser analisadas antes de qualquer medida.' },
      { question: 'Quais documentos ajudam na análise de horas extras?', answer: 'Carteira de trabalho, holerites, registros de ponto, escalas, mensagens e outros documentos podem ajudar. A lista exata depende de como o trabalho era realizado.' },
      { question: 'Existe prazo para ajuizar uma ação trabalhista?', answer: 'Em regra, a ação pode ser proposta até dois anos após o fim do contrato, observada a prescrição de cinco anos para créditos trabalhistas. Há particularidades que exigem avaliação jurídica.' },
      { question: 'É possível começar o atendimento online?', answer: 'Sim. O contato inicial pode ser feito pelos canais digitais do escritório. Se necessário, a equipe orienta sobre o envio de documentos e o agendamento de conversa.' },
      { question: 'Como avaliar um possível desvio de função?', answer: 'É preciso comparar as atividades realmente exercidas com as condições do contrato e reunir registros disponíveis. Cada situação exige análise dos fatos.' },
    ],
  },
  footer: {
    eyebrow: 'Orientação trabalhista em Brasília',
    title: 'Seus direitos merecem',
    highlightedTitle: 'atenção.',
    description: 'Atuação em Direito do Trabalho com orientação individual e comunicação clara em Brasília, DF.',
    links: [
      { href: '#sobre', label: 'Quem somos' },
      { href: '#especialidades', label: 'Áreas de atuação' },
      { href: '#diferenciais', label: 'Nosso atendimento' },
      { href: '#faq', label: 'Dúvidas' },
    ],
    copyrightSuffix: 'Todos os direitos reservados.',
    backToTopLabel: 'Voltar ao topo',
    backToTopHref: '#inicio',
    whatsapp: {
      regionLabel: 'Atendimento pelo WhatsApp',
      closeLabel: 'Fechar convite',
      image: { src: '/images/equipe-cmmg-avatar-3.webp', width: 48, height: 48, alt: '' },
      senderName: 'Equipe CMMG',
      message: 'Olá! Como podemos ajudar com sua questão trabalhista?',
      actionLabel: 'Iniciar conversa',
      buttonLabel: 'Abrir atendimento pelo WhatsApp',
    },
  },
  seo: {
    siteUrl: 'https://cmgadvocacia.feito.website',
    locale: 'pt_BR',
    language: 'pt-BR',
    homePageTitle: 'Advogadas Trabalhistas em Brasília, DF',
    defaultTitle: 'Campos Marque Morita & Goularte | Advocacia Trabalhista em Brasília',
    titleTemplate: '%s | Campos Marque Morita & Goularte',
    defaultDescription: 'Escritório de advocacia trabalhista em Brasília, DF. Orientação sobre rescisão, horas extras, vínculo de emprego e verbas rescisórias.',
    defaultImage: '/images/equipe-cmmg-og.webp',
    defaultImageAlt: 'Equipe Campos Marque Morita & Goularte no escritório em Brasília',
    defaultImageWidth: 1200,
    defaultImageHeight: 630,
    themeColor: '#141B33',
    favicon: '/favicon.svg',
    keywords: ['advogada trabalhista Brasília', 'advogado trabalhista DF', 'rescisão indireta Brasília', 'horas extras', 'verbas rescisórias', 'Campos Marque Morita Goularte'],
    areaServed: 'Brasília, Distrito Federal e região metropolitana',
    knowsAbout: ['Direito do Trabalho', 'Rescisão indireta', 'Horas extras', 'Desvio e acúmulo de função', 'Verbas rescisórias', 'Vínculo de emprego', 'Assédio moral'],
    sitemap: [{ path: '/', changeFrequency: 'monthly', priority: 1 }],
  },
  videoSection: {
    enabled: false,
    eyebrow: 'Apresentação institucional',
    title: 'Conheça nossa atuação',
    highlightedTitle: 'de perto.',
    description: 'Saiba mais sobre a forma de atendimento do escritório.',
    provider: 'youtube',
    videoId: '',
    videoUrl: '',
    poster: '',
    posterAlt: 'Equipe do escritório',
    playLabel: 'Assistir apresentação',
    caption: 'Vídeo institucional',
  },
  locationSection: {
    enabled: true,
    eyebrow: 'Localização',
    title: 'Encontre nosso',
    highlightedTitle: 'escritório.',
    description: 'Estamos na Asa Sul, em Brasília. Entre em contato para agendar uma visita.',
    address: 'SRTVS, Quadra 701, Bloco O, Edifício Multiempresarial, Sala 296, Asa Sul, Brasília, DF, CEP 70340-000',
    mapQuery: 'Campos Marque Morita & Goularte, SRTVS Quadra 701, Bloco O, Brasília, DF',
    mapTitle: 'Localização de Campos Marque Morita & Goularte Advogadas em Brasília',
    directionsLabel: 'Abrir no Google Maps',
  },
  aiDiscovery: {
    enabled: true,
    llmsPath: '/llms.txt',
    markdownPath: '/index.md',
    summary: 'Campos Marque Morita & Goularte Advogadas é um escritório de advocacia trabalhista em Brasília, DF, com atuação em rescisões, horas extras, vínculo de emprego, verbas rescisórias e outras questões dos trabalhadores.',
    usageNote: 'Conteúdo institucional e informativo, sujeito a atualização. Não substitui orientação jurídica individual nem representa promessa de resultado.',
  },
  deployment: {
    mode: 'auto',
    projectName: 'cmg-advocacia-trabalhista',
    subdomain: 'cmgadvocacia',
    baseDomain: 'feito.website',
    cnameTarget: 'cname.vercel-dns-0.com',
  },
} satisfies SiteConfig;
