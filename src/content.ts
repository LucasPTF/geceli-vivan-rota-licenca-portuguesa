export type HeroVariant = {
  path: "/a1" | "/a2" | "/a3";
  kicker: string;
  title: string;
  subtitle: string;
  offer?: string;
  opening?: string;
  bridge?: string;
  proof?: string;
  cta: string;
};

export const appRoutes = ["/a1", "/a2", "/a3", "/obrigado"] as const;

export const routeManifest: HeroVariant[] = [
  {
    path: "/a1",
    kicker: "WORKSHOP AO VIVO PARA MÉDICOS",
    title: "Abra uma segunda rota profissional",
    subtitle:
      "Em 2 horas, entenda o caminho de reconhecimento do diploma, inscrição profissional e estruturação dos próximos passos para avaliar possibilidades de atuação ligadas a Portugal — inclusive modelos de telemedicina, quando o enquadramento do seu caso permitir.",
    offer:
      "Rota da Licença Portuguesa · 2 horas ao vivo · terça-feira às 20h · replay por 72 horas · R$ 97",
    cta: "QUERO MAPEAR MINHA ROTA — R$ 97",
  },
  {
    path: "/a2",
    kicker: "INTERNACIONALIZAÇÃO NÃO É IMIGRAÇÃO",
    title: "Reconhecer não é fazer as malas",
    subtitle:
      "Conheça a sequência que transforma um diploma brasileiro em uma rota profissional ligada a Portugal — reconhecimento, inscrição e estrutura de atuação — antes de decidir onde você quer morar.",
    opening:
      "O processo português costuma ser apresentado como mudança de país. Mas mudança é uma decisão de vida; habilitação é uma decisão de carreira. No workshop, você entende essa diferença e organiza o caminho com critérios reais.",
    bridge:
      "Primeiro habilitação, depois formato de atuação. Sem inverter a ordem.",
    proof:
      "Mais de 10 anos de atuação e mais de 400 processos conduzidos pela Em Portugal Consultoria.",
    cta: "QUERO ENTENDER A ROTA — R$ 97",
  },
  {
    path: "/a3",
    kicker: "UMA ALTERNATIVA A MAIS PLANTÃO",
    title: "Amplie a carreira, não a escala",
    subtitle:
      "Em 2 horas, entenda como avaliar Portugal como uma segunda rota profissional — sem promessa de renda fácil e sem partir da ideia de abandonar sua carreira no Brasil.",
    opening:
      "Quando a solução para ganhar mais é sempre vender mais horas, a carreira fica dependente da agenda. O workshop apresenta outra pergunta: existe uma habilitação internacional que faça sentido para o seu caso?",
    bridge:
      "A resposta começa por reconhecimento e inscrição profissional, não por plataforma de telemedicina.",
    proof:
      "Dados recentes mostram crescimento contínuo da oferta de formação médica no Brasil; a Em Portugal Consultoria atua há mais de uma década organizando rotas de reconhecimento.",
    cta: "QUERO MAPEAR MINHA ROTA — R$ 97",
  },
];

export const copy = {
  productName: "Rota da Licença Portuguesa",
  descriptor:
    "Workshop ao vivo para médicos com carreira ativa no Brasil que querem entender uma segunda rota profissional ligada a Portugal, sem partir do pressuposto de mudar de país.",
  questionTitle: "Talvez a pergunta não seja “como ganhar em euro”",
  questionParagraphs: [
    "Talvez a pergunta seja outra: como criar uma alternativa de carreira sem transformar a solução em mais horas de plantão — e sem desmontar a vida que você já construiu no Brasil?",
    "Essa é a proposta deste workshop. Não é uma promessa de renda. É um mapa técnico e estratégico para você entender o que precisa acontecer entre o diploma brasileiro e uma atuação profissional vinculada a Portugal.",
    "Hoje, muitos médicos procuram renda complementar fora dos plantões, enquanto a própria telemedicina brasileira sofre pressão de oferta, concorrência e remuneração. Ao mesmo tempo, o processo português é burocrático o bastante para punir decisões tomadas fora de ordem. A oportunidade existe, mas o caminho precisa ser tratado como carreira — não como atalho.",
  ],
  logicTitle: "O erro é confundir internacionalização com mudança de país",
  logicIntro:
    "A rota começa muito antes de passagem, mudança ou contratação. Começa com habilitação, documentação, escolha correta das etapas e entendimento do modelo de atuação que faz sentido para o seu caso.",
  logicKicker: "NOVA LÓGICA",
  logicStatement:
    "QUALIFICAÇÃO ANTES DE LOCALIZAÇÃO. Você primeiro entende como se tornar elegível e profissionalmente habilitado em Portugal. Depois avalia, com base nas regras vigentes, se a sua estratégia será presencial, remota ou combinada.",
  logicCaveat:
    "Telemedicina não elimina reconhecimento, inscrição profissional nem requisitos regulatórios. E uma habilitação portuguesa também não equivale, por si só, a autorização automática para exercer medicina em todos os países da União Europeia ou do Espaço Schengen.",
  routeTitle: "A Rota da Licença Portuguesa em 4 marcos",
  routeSteps: [
    "Reconhecimento acadêmico — entender o processo de reconhecimento específico do diploma, a documentação e as decisões que mudam prazo, esforço e custo.",
    "Inscrição profissional — compreender o que vem depois do reconhecimento e quais requisitos antecedem o exercício da medicina em Portugal.",
    "Estrutura de atuação — visualizar o papel do enquadramento fiscal e operacional, do NIF e das regras aplicáveis a modelos presenciais, remotos ou mistos.",
    "Próxima ação — sair com uma rota organizada para o seu cenário, sabendo o que pesquisar, preparar e decidir primeiro.",
  ],
  twoHoursTitle: "O que acontece nas 2 horas",
  twoHoursItems: [
    "O mapa completo do reconhecimento do diploma médico brasileiro em Portugal — sem reduzir o processo a uma lista genérica de documentos.",
    "Como a inscrição na Ordem dos Médicos entra na sequência e por que reconhecimento acadêmico e habilitação profissional não são a mesma coisa.",
    "Onde a telemedicina pode entrar na estratégia e por que atendimento remoto continua sujeito a regras profissionais e regulatórias.",
    "Quais categorias de custos, documentos, traduções, deslocamentos e etapas precisam entrar no planejamento antes de começar.",
    "Como separar reconhecimento do diploma de reconhecimento da especialidade, quando esse segundo processo for relevante.",
    "Como transformar tudo isso em um próximo passo objetivo para o seu caso, em vez de continuar acumulando informações soltas.",
  ],
  resultTitle: "O resultado imediato do workshop",
  resultText:
    "Ao final, você não recebe a promessa de que “vai dar certo”. Você recebe algo mais útil para decidir: clareza sobre a sequência, os pontos de atenção, as perguntas que precisam ser respondidas no seu caso e a primeira ação necessária para avançar com critério.",
  nowTitle: "Por que essa conversa importa agora",
  nowText:
    "O mercado médico brasileiro continua crescendo. Levantamento da Faculdade de Medicina da USP publicado em outubro de 2025 registrou 50.974 vagas anuais de graduação em Medicina e projetou que o país pode superar 1,2 milhão de médicos até 2030. Isso não significa que “não haverá trabalho”. Significa que depender de uma única rota profissional merece ser uma escolha consciente — não um padrão automático.",
  nowSource:
    "Fonte pública para o dado de mercado: Faculdade de Medicina da USP, 06/10/2025 — levantamento “Brasil ultrapassa 50 mil vagas anuais em Medicina…”.",
  forTitle: "Para quem é",
  forItems: [
    "Médicos com carreira ativa no Brasil que querem avaliar uma segunda frente profissional com critérios reais.",
    "Quem considera Portugal, mas não quer partir da premissa de emigrar.",
    "Quem prefere entender processo, custo, ordem e risco antes de começar a protocolar documentos.",
    "Generalistas ou especialistas que precisam distinguir o reconhecimento do diploma das exigências adicionais de cada cenário profissional.",
  ],
  notForTitle: "Para quem não é",
  notForItems: [
    "Quem procura promessa de renda rápida, vaga garantida ou aprovação garantida.",
    "Quem espera que telemedicina dispense reconhecimento, inscrição profissional ou requisitos do país em que a atividade estiver enquadrada.",
    "Quem quer uma autorização automática para exercer medicina em toda a Europa a partir de uma única licença.",
    "Quem não pretende dedicar tempo à documentação, às avaliações e às decisões técnicas do processo.",
  ],
  authorityTitle: "Quem conduz",
  authorityText:
    "Geceli Vivan é especialista em internacionalização da carreira médica e lidera a Em Portugal Consultoria. A empresa informa mais de 10 anos de atuação e mais de 400 processos conduzidos em reconhecimento e internacionalização de carreiras, com acompanhamento desde a análise inicial até etapas de reconhecimento e inscrição profissional.",
  authoritySource:
    "Fonte de autoridade: site oficial Em Portugal Consultoria, consultado em 24/09/2026.",
  receiveTitle: "O que você recebe",
  receiveItems: [
    "2 horas de workshop ao vivo com foco na rota de Portugal.",
    "Mapa das etapas: reconhecimento acadêmico, inscrição profissional, estrutura de atuação e próximos passos.",
    "Visão prática das categorias de custo, documentação e decisões que costumam travar o processo.",
    "Orientação sobre onde a telemedicina entra — e quais condições precisam existir antes de tratá-la como opção real.",
    "Replay disponível por 72 horas.",
  ],
  investmentLabel: "INVESTIMENTO",
  investmentValue: "R$ 97",
  midCta: "QUERO PARTICIPAR DO WORKSHOP",
  objectionsTitle: "Objeções que você provavelmente está tentando resolver",
  objections: [
    {
      question: "“NÃO SEI SE O MEU CASO SERVE.”",
      answer:
        "O workshop foi desenhado para você entender quais informações do seu histórico acadêmico e profissional realmente mudam a rota. A resposta final depende do seu caso, mas você sai sabendo quais critérios verificar antes de investir energia no processo.",
    },
    {
      question: "“NÃO QUERO MORAR EM PORTUGAL AGORA.”",
      answer:
        "Internacionalizar a carreira não precisa começar por mudança de país. O workshop separa habilitação profissional de decisão de residência e mostra onde modelos remotos ou híbridos podem entrar, sempre condicionados às regras vigentes.",
    },
    {
      question: "“POSSO RESOLVER TUDO SOZINHO.”",
      answer:
        "É possível pesquisar e executar etapas por conta própria. O valor do workshop está em organizar ordem, dependências e riscos para reduzir tentativa e erro — especialmente em um processo que envolve universidade, Ordem dos Médicos e regras profissionais.",
    },
    {
      question: "“TELEMEDICINA PARECE UM ATALHO.”",
      answer:
        "Não é. Atendimento remoto continua sendo exercício profissional e exige enquadramento adequado. A proposta é justamente mostrar o que precisa existir antes de tratar telemedicina como uma opção.",
    },
  ],
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "PRECISO MORAR EM PORTUGAL PARA FAZER O WORKSHOP?",
      answer:
        "Não. O workshop é voltado justamente a médicos que estão no Brasil e querem entender a rota antes de decidir onde irão viver ou trabalhar.",
    },
    {
      question: "O WORKSHOP GARANTE RECONHECIMENTO DO DIPLOMA OU INSCRIÇÃO NA ORDEM?",
      answer:
        "Não. Essas decisões dependem de instituições competentes, documentação, avaliações e requisitos aplicáveis ao caso. O workshop organiza o caminho e os pontos de decisão; não substitui a análise oficial nem garante aprovação.",
    },
    {
      question: "POSSO ATENDER PORTUGAL POR TELEMEDICINA MORANDO NO BRASIL?",
      answer:
        "Pode existir uma estrutura de atuação remota, mas ela não é automática. É necessário analisar habilitação profissional, estabelecimento do prestador, regras portuguesas e demais requisitos aplicáveis ao modelo. O workshop apresenta essa possibilidade dentro desses limites.",
    },
    {
      question: "A LICENÇA PORTUGUESA VALE AUTOMATICAMENTE PARA 31 PAÍSES?",
      answer:
        "Não. União Europeia e Espaço Schengen não funcionam como uma licença médica única e automática. O reconhecimento em Portugal pode ampliar possibilidades de mobilidade, mas cada forma de atuação e cada jurisdição pode exigir regras adicionais.",
    },
    {
      question: "RECONHECER O DIPLOMA TAMBÉM RECONHECE MINHA ESPECIALIDADE?",
      answer:
        "Não necessariamente. Reconhecimento do diploma e reconhecimento da especialidade são processos distintos. O workshop mostra onde essa diferença impacta o planejamento.",
    },
    {
      question: "QUAL É O INVESTIMENTO?",
      answer:
        "R$ 97 para o workshop ao vivo Rota da Licença Portuguesa, com replay por 72 horas.",
    },
    {
      question: "HÁ GARANTIA DE RENDA, VAGA, PACIENTES OU RESULTADO FINANCEIRO?",
      answer:
        "Não. O workshop não promete contratação, volume de pacientes, remuneração ou resultado financeiro. Ele ensina a rota e os critérios para avaliar a estratégia.",
    },
  ],
  importantLabel: "IMPORTANTE",
  importantText:
    "Regras acadêmicas, profissionais, fiscais e de telemedicina podem mudar. A atuação depende do caso concreto e das normas vigentes. O workshop é educacional e não constitui garantia de reconhecimento, inscrição, contratação, pacientes ou renda.",
  finalText:
    "Você não precisa decidir hoje se vai mudar de país. Precisa decidir se quer continuar tratando Portugal como uma ideia distante ou transformar essa possibilidade em uma rota que você consegue avaliar com clareza.",
  finalOffer:
    "Rota da Licença Portuguesa · 2 horas ao vivo · terça-feira às 20h · replay por 72 horas · R$ 97",
  finalCta: "QUERO MAPEAR MINHA ROTA",
  lots: [
    { name: "Lote 1", value: "R$ 29,90", state: "Lote anterior" },
    { name: "Lote 2", value: "R$ 97", state: "Lote vigente" },
    { name: "Lote 3", value: "R$ 149,90", state: "Próximo lote" },
  ],
} as const;
