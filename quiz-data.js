// ============================================================
// MÉTODO K-SLIM — QUIZ DATA (todas as telas)
// Tipos: question, photo-grid, multi, input, info, imc-loading,
//        imc, graph, exercise, social, modal-health
// section: texto que aparece no header dinâmico
// ============================================================
const QUIZ_DATA = [

// ==================== BLOCO 1 — PERFIL ====================
{
  id:'q1', type:'photo-grid', select:'single', progress:2,
  section:'Meu Perfil',
  title:'Quantos anos você tem?',
  options:[
    {emoji:'', text:'18 – 35 anos', value:'18-35',  img:'img/age_18_35.svg'},
    {emoji:'', text:'36 – 45 anos', value:'36-45',  img:'img/age_36_45.svg'},
    {emoji:'', text:'46 – 55 anos', value:'46-55',  img:'img/age_46_55.svg'},
    {emoji:'', text:'56 anos ou mais', value:'56+', img:'img/age_55_plus.svg'}
  ]
},
{
  id:'social_proof', type:'social', progress:4,
  section:'Meu Perfil',
  img:'img/info_social_proof.svg',
  badge:'⭐ 4.8 · +12.000 mulheres',
  title:'Você está no caminho certo!',
  text:'Mais de <strong>12.000 mulheres</strong> já transformaram o corpo com o Método DigiKit — sem academia, sem dieta radical.',
  btn:'Continuar →'
},
{
  id:'q2', type:'question', progress:6,
  section:'Meu Perfil',
  title:'Você já ouviu falar no Pilates Coreano ou já tentou praticar?',
  options:[
    {emoji:'✅', text:'Sim, já pratico com regularidade', value:'pratica'},
    {emoji:'🔄', text:'Já tentei algumas vezes, mas parei', value:'tentou'},
    {emoji:'👂', text:'Ouvi falar, mas nunca tentei', value:'ouviu'},
    {emoji:'🆕', text:'Nunca tinha ouvido falar até agora', value:'nunca'}
  ]
},

// ==================== BLOCO 2 — OBJETIVOS ====================
{
  id:'q3', type:'question', progress:8,
  section:'Meu Perfil',
  title:'Qual é o seu principal objetivo com o Método DigiKit?',
  options:[
    {emoji:'⚖️', text:'Perder peso e desinchar', value:'perder'},
    {emoji:'💪', text:'Tonificar e definir o corpo', value:'tonificar'},
    {emoji:'🧘', text:'Melhorar a postura e flexibilidade', value:'postura'},
    {emoji:'⚡', text:'Ter mais energia e reduzir o estresse', value:'energia'}
  ]
},
{
  id:'info1', type:'info', progress:9,
  section:'Meu Perfil',
  img:'img/ex_postura_kslim_1776028988179.webp',
  imgFallback:'img/info_praticando.svg',
  imgStyle:'width:100%; height:auto; max-height:none; object-fit:contain; object-position:center; border-radius:16px; margin-bottom:16px; display:block;',
  title:'Por que o Método DigiKit funciona diferente?',
  text:'A maioria dos programas foca apenas na queima de calorias.\n\nO Método DigiKit age pela <strong>Ativação Gi</strong> — o reequilíbrio da energia vital do corpo, conforme ensinado pela medicina coreana há séculos.\n\nQuando o Gi está em equilíbrio, o metabolismo se regula naturalmente, o corpo para de reter líquido e a gordura localizada começa a desaparecer — especialmente na barriga e nas coxas.',
  btn:'Entendi, continuar →'
},
{
  id:'q4', type:'photo-grid', select:'single', progress:12,
  section:'Meu Perfil',
  title:'Como você descreveria seu corpo hoje?',
  options:[
    {text:'Magra',      value:'magra',     img:'img/body_magra.svg'},
    {text:'Normal',     value:'normal',    img:'img/body_normal.svg'},
    {text:'Curvilínea', value:'curvilinea',img:'img/body_curvilinea.svg'},
    {text:'Obesa',      value:'corpuda',   img:'img/body_corpuda.svg'}
  ]
},
{
  id:'q5', type:'photo-grid', select:'single', progress:15,
  section:'Meu Perfil',
  title:'Qual resultado você mais quer alcançar?',
  options:[
    {text:'Tonificada',  value:'tonificada',  img:'img/ideal_tonificada.svg'},
    {text:'Curvilínea',  value:'curvilinea',  img:'img/ideal_curvilinea.svg'},
    {text:'Atlética',    value:'atletica',    img:'img/ideal_atletica.svg'},
    {text:'DigiKit',      value:'longilineio', img:'img/ideal_magra.svg'}
  ]
},
{
  id:'q6', type:'photo-grid', select:'multi', progress:18,
  section:'Meu Perfil',
  title:'Quais áreas do corpo você quer transformar?',
  subtitle:'Pode escolher mais de uma',
  options:[
    {text:'Barriga e flancos', value:'barriga', img:'img/zona_barriga.svg'},
    {text:'Glúteos',           value:'gluteos', img:'img/zona_gluteos.svg'},
    {text:'Coxas e quadris',   value:'coxas',   img:'img/zona_pernas.svg'},
    {text:'Braços e ombros',   value:'bracos',  img:'img/zona_bracos.svg'}
  ]
},

// ==================== BLOCO 3 — MÉTRICAS ====================
{
  id:'q7', type:'input', progress:22, inputType:'height',
  section:'Meu Perfil',
  title:'Para calcular seu perfil DigiKit, precisamos da sua altura:',
  placeholder:'165', unit:'cm', min:100, max:220
},
{
  id:'q8', type:'input', progress:25, inputType:'weight',
  section:'Meu Perfil',
  title:'E qual é o seu peso atual?',
  placeholder:'75', unit:'kg', min:35, max:200
},
{
  id:'imc_loading', type:'imc-loading', progress:26,
  section:'Meu Perfil'
},
{
  id:'imc', type:'imc', progress:27,
  section:'Meu Perfil',
  title:'Seu perfil corporal foi calculado',
  btn:'Ver meu plano →'
},
{
  id:'q9', type:'input', progress:29, inputType:'targetWeight',
  section:'Meu Perfil',
  title:'Qual peso você quer alcançar?',
  placeholder:'65', unit:'kg', min:35, max:200
},
{
  id:'graph', type:'graph', progress:31,
  section:'Meu Perfil',
  title:'Veja o que o Método DigiKit pode fazer por você',
  btn:'Quero esse resultado →'
},

// ==================== BLOCO 4 — CONDIÇÃO FÍSICA ====================
{
  id:'q10', type:'question', progress:33,
  section:'Atividade',
  title:'Quando foi a última vez que você se sentiu bem no próprio corpo?',
  options:[
    {emoji:'💔', text:'Nunca me senti assim, mas é o que quero', value:'nunca'},
    {emoji:'📅', text:'Há menos de 1 ano', value:'1ano'},
    {emoji:'⏳', text:'Entre 1 e 3 anos atrás', value:'1a3'},
    {emoji:'😔', text:'Faz mais de 3 anos', value:'3mais'}
  ]
},
{
  id:'q11', type:'question', progress:35,
  section:'Atividade',
  title:'Como você descreveria o seu dia a dia?',
  options:[
    {emoji:'🪑', text:'Fico sentada a maior parte do dia', value:'sedentaria'},
    {emoji:'🚶', text:'Me movimento pouco fora de casa', value:'pouco'},
    {emoji:'🏃', text:'Tenho uma rotina moderadamente ativa', value:'moderada'},
    {emoji:'💪', text:'Sou bem ativa — caminho, me mexo bastante', value:'ativa'}
  ]
},
{
  id:'q12', type:'question', progress:37,
  section:'Atividade',
  title:'Qual é o seu nível de condicionamento físico hoje?',
  options:[
    {emoji:'🟢', text:'Iniciante — não faço exercício há muito tempo', value:'iniciante'},
    {emoji:'🟡', text:'Intermediária — me exercito às vezes', value:'intermediaria'},
    {emoji:'🔴', text:'Avançada — treino com regularidade', value:'avancada'}
  ]
},
{
  id:'q13', type:'question', progress:39,
  section:'Atividade',
  title:'De olhos fechados, se você tentar tocar os pés com as mãos...',
  options:[
    {emoji:'✅', text:'Consigo com facilidade', value:'facil'},
    {emoji:'🤏', text:'Quase chego, mas não alcança', value:'quase'},
    {emoji:'❌', text:'Não consigo nem chegar perto', value:'nao'},
    {emoji:'🤔', text:'Não tenho certeza', value:'incerto'}
  ]
},
{
  id:'q14', type:'question', progress:41,
  section:'Atividade',
  title:'Com que frequência você faz algum tipo de exercício?',
  options:[
    {emoji:'😴', text:'Nunca', value:'nunca'},
    {emoji:'📅', text:'Várias vezes por mês', value:'vezes'},
    {emoji:'🏃', text:'Várias vezes por semana', value:'regular'},
    {emoji:'🔥', text:'Quase todos os dias', value:'diario'}
  ]
},
{
  id:'q15', type:'multi', progress:43,
  section:'Atividade',
  title:'Que tipo de movimento te deixa com mais energia?',
  subtitle:'Pode escolher mais de uma',
  options:[
    {emoji:'🚶', text:'Caminhada', value:'caminhada'},
    {emoji:'🏊', text:'Natação', value:'natacao'},
    {emoji:'🧘', text:'Yoga e meditação', value:'yoga'},
    {emoji:'💃', text:'Dança', value:'danca'},
    {emoji:'🤸', text:'Alongamento', value:'along'},
    {emoji:'🏋️', text:'Musculação', value:'musculacao'},
    {emoji:'😐', text:'Não tenho certeza', value:'incerto'}
  ]
},
{
  id:'info2', type:'info', progress:45,
  section:'Atividade',
  img:'img/info_energia_10min_v2.svg',
  imgFallback:'img/info_energia.svg',
  imgStyle:'width:100%; height:auto; max-height:none; object-fit:contain; object-position:center; border-radius:16px; margin-bottom:16px; display:block;',
  title:'Por que 10 minutos de DigiKit valem mais que 1 hora de academia',
  text:'Um estudo publicado pelo Instituto de Medicina Tradicional da Coreia mostrou que sequências lentas e de baixo impacto — como as do Pilates Coreano — ativam <strong>3x mais fibras musculares profundas</strong> do que exercícios de alta intensidade.\n\nIsso acontece porque a <strong>Ativação Gi</strong> força o músculo a trabalhar de dentro para fora, sem sobrecarregar as articulações.\n\nPara mulheres acima dos 35 anos, essa abordagem é ainda mais eficaz: o corpo responde melhor ao movimento suave e consistente do que ao esforço intenso e irregular.',
  btn:'Faz sentido, continuar →'
},

// ==================== BLOCO 5 — LIMITAÇÕES ====================
{
  id:'q16', type:'question', progress:47,
  section:'Atividade',
  title:'Você fica sem fôlego subindo uma escada? 🪜',
  options:[
    {emoji:'😮‍💨', text:'Sim, fico facilmente', value:'sim'},
    {emoji:'😐', text:'Às vezes, depende do esforço', value:'vezes'},
    {emoji:'💪', text:'Raramente ou nunca', value:'raro'}
  ]
},
{
  id:'q17', type:'question', progress:49,
  section:'Atividade',
  title:'Você já começou algum programa de exercícios e parou no meio?',
  options:[
    {emoji:'🔄', text:'Sim, já aconteceu várias vezes', value:'varias'},
    {emoji:'😕', text:'Já aconteceu uma ou duas vezes', value:'poucas'},
    {emoji:'💪', text:'Não, geralmente me mantenho comprometida', value:'nao'}
  ]
},
{
  id:'q18', type:'question', progress:51,
  section:'Atividade',
  title:'Você sabe como escolher exercícios para seus objetivos?',
  options:[
    {emoji:'🎓', text:'Sim, tenho bastante conhecimento', value:'sim'},
    {emoji:'📚', text:'Mais ou menos — sei o básico', value:'basico'},
    {emoji:'🙋', text:'Não, preciso de orientação completa', value:'nao'}
  ]
},
{
  id:'info_validacao', type:'info', progress:52,
  section:'Atividade',
  img:'img/banner_noticia.svg',
  imgStyle:'width:100%; height:auto; border-radius:16px; margin-bottom:16px; display:block; box-shadow: 0 4px 12px rgba(0,0,0,0.08);',
  title:'Ótima notícia!',
  text:'Com base nas suas respostas até aqui, você é exatamente o tipo de pessoa para quem o <strong>Método DigiKit</strong> foi criado.\n\nO programa foi desenvolvido para mulheres que:\n• Já tentaram outros métodos sem resultado duradouro\n• Não têm tempo para academia\n• Precisam de um plano que respeite os limites do corpo\n• Querem algo que realmente funcione desta vez\n\nContinue — seu plano personalizado está sendo montado.',
  btn:'Continuar →'
},
{
  id:'q19', type:'multi', progress:54,
  section:'Atividade',
  title:'Você tem algum desconforto físico frequente?',
  subtitle:'Pode escolher mais de uma',
  options:[
    {emoji:'🔸', text:'Dores ou tensão nas costas', value:'costas'},
    {emoji:'🦵', text:'Dores nos joelhos ou pernas', value:'joelhos'},
    {emoji:'🦴', text:'Desconforto no quadril', value:'quadril'},
    {emoji:'💆', text:'Tensão no pescoço e ombros', value:'pescoco'},
    {emoji:'✅', text:'Nenhuma das opções', value:'nenhum'}
  ]
},
{
  id:'info3', type:'info', progress:55,
  section:'Atividade',
  img:'img/info_praticando.svg',
  imgStyle:'width:100%; height:auto; max-height:220px; object-fit:cover; object-position:center; border-radius:16px; margin-bottom:16px; display:block;',
  title:'O Método DigiKit foi pensado para o seu corpo — não contra ele',
  text:'Na medicina coreana tradicional, as dores físicas são vistas como sinais de <strong>bloqueio de Gi</strong> — pontos onde a energia do corpo está travada.\n\nOs movimentos do Pilates Coreano foram selecionados para desbloqueá-los de forma suave, respeitando articulações e coluna.\n\n<strong>92% das praticantes do Método DigiKit relatam redução das dores nas costas nas primeiras 3 semanas.</strong>',
  btn:'Continuar →'
},

// ==================== BLOCO 6 — EXERCÍCIOS ====================
{
  id:'info_exercicios', type:'info', progress:56,
  section:'Meu Plano',
  icon:'🏋️',
  title:'Vamos descobrir que tipo de movimento combina com você',
  text:'Avalie cada exercício abaixo. Isso nos ajudará a montar um plano que você realmente goste de praticar — porque <strong>consistência é o segredo do resultado</strong>.',
  btn:'Vamos lá →'
},
{
  id:'q20', type:'exercise', progress:57, img:'img/ex_vacuum_kslim_1776028973822.webp',
  section:'Meu Plano',
  title:'Yoga e respiração',
  subtitle:'Movimentos lentos com foco na respiração profunda'
},
{
  id:'q21', type:'exercise', progress:58, img:'img/ex_postura_kslim_1776028988179.webp',
  section:'Meu Plano',
  title:'Alongamento suave',
  subtitle:'Sequências para soltar as tensões do corpo'
},
{
  id:'q22', type:'exercise', progress:59, img:'img/ex_linfatico_kslim_1776028942717.webp',
  section:'Meu Plano',
  title:'Agachamentos (lunges)',
  subtitle:'Exercícios para glúteos e pernas'
},
{
  id:'q23', type:'exercise', progress:60, img:'img/ex_fascia_kslim_1776028954402.webp',
  section:'Meu Plano',
  title:'Exercícios de core (prancha)',
  subtitle:'Fortalecimento de abdômen e lombar'
},
{
  id:'q24', type:'exercise', progress:61, img:'img/b_depois_1.webp',
  section:'Meu Plano',
  title:'Elevação de pernas (deitada)',
  subtitle:'Tonificação de pernas e glúteos'
},
{
  id:'q25', type:'exercise', progress:62, img:'img/b_antes_1.webp',
  section:'Meu Plano',
  title:'Movimentos de dança (K-body dance)',
  subtitle:'Dança suave ao ritmo da música coreana'
},

// ==================== BLOCO 7 — ESTADO MENTAL ====================
{
  id:'q26', type:'question', progress:59,
  section:'Estilo de Vida',
  title:'Como você descreveria seu estado mental nos últimos meses?',
  options:[
    {emoji:'😊', text:'Me sinto bem e equilibrada', value:'bem'},
    {emoji:'😐', text:'Tenho altos e baixos com frequência', value:'altos_baixos'},
    {emoji:'😔', text:'Me sinto cansada e sem motivação', value:'cansada'},
    {emoji:'😰', text:'Carrego bastante ansiedade e estresse', value:'ansiosa'}
  ]
},
{
  id:'info4', type:'info', progress:60,
  section:'Estilo de Vida',
  img:'img/info_estresse.svg',
  imgStyle:'width:100%; height:auto; max-height:none; object-fit:contain; object-position:center; border-radius:16px; margin-bottom:16px; display:block;',
  title:'O estresse engorda — e o DigiKit resolve isso',
  text:'O cortisol — hormônio do estresse — é um dos maiores inimigos da perda de peso, especialmente na barriga.\n\nNa cultura coreana de bem-estar (K-wellness), o movimento lento e a respiração consciente são usados há séculos como <strong>reguladores naturais do cortisol</strong>.\n\nUm estudo da Universidade Nacional de Seul mostrou que mulheres que praticaram o método 3x por semana reduziram o cortisol em <strong>até 46%</strong> nas primeiras 3 semanas.',
  btn:'Entendi →',
  chartType:'cortisol'
},
{
  id:'q27', type:'question', progress:61,
  section:'Estilo de Vida',
  img:'img/copo_agua_real.svg',
  imgFallback:'img/copo_agua.svg',
  title:'Quantos copos de água você bebe por dia?',
  options:[
    {emoji:'🌵', text:'Menos de 2 copos — bebo muito pouco', value:'pouco'},
    {emoji:'💧', text:'Entre 2 e 6 copos', value:'medio'},
    {emoji:'💧💧', text:'Entre 6 e 10 copos', value:'bom'},
    {emoji:'🌊', text:'Mais de 10 copos', value:'otimo'}
  ]
},
{
  id:'q28', type:'question', progress:63,
  section:'Estilo de Vida',
  title:'Como você classificaria seu nível de estresse no dia a dia?',
  options:[
    {emoji:'😊', text:'Baixo — vivo tranquila', value:'baixo'},
    {emoji:'😐', text:'Moderado — tem dias difíceis', value:'moderado'},
    {emoji:'😤', text:'Alto — estou sempre no limite', value:'alto'},
    {emoji:'🤯', text:'Muito alto — estou exausta', value:'muito_alto'}
  ]
},
{
  id:'q29', type:'question', progress:65,
  section:'Estilo de Vida',
  title:'Como está sua energia ao longo do dia?',
  options:[
    {emoji:'🔋', text:'Baixa — me canso com facilidade', value:'baixa'},
    {emoji:'⚡', text:'Tenho picos seguidos de fadiga', value:'irregular'},
    {emoji:'✅', text:'Estável, com quedas ocasionais', value:'estavel'},
    {emoji:'🚀', text:'Alta e constante', value:'alta'}
  ]
},
{
  id:'info5', type:'info', progress:66,
  section:'Estilo de Vida',
  img:'img/info_energia_40_v2.svg',
  imgFallback:'img/info_energia.svg',
  imgStyle:'width:100%; height:auto; max-height:none; object-fit:contain; object-position:center; border-radius:16px; margin-bottom:16px; display:block;',
  title:'Por que as coreanas têm mais energia após os 40?',
  text:'A diferença não está na genética — está no ritmo.\n\nO <strong>Método DigiKit</strong> sincroniza os movimentos com o ciclo circadiano natural do seu corpo (seu relógio biológico interno), respeitando os horários de maior e menor energia.\n\nO resultado: seu corpo começa a <em>gerar</em> energia em vez de consumi-la.\n\n<strong>83% das praticantes relatam melhora significativa na disposição nas primeiras 2 semanas.</strong>',
  btn:'Continuar →'
},
{
  id:'q30', type:'question', progress:67,
  section:'Estilo de Vida',
  title:'Quantas horas você dorme por noite, em média?',
  options:[
    {emoji:'😫', text:'Menos de 5 horas', value:'menos5'},
    {emoji:'💤', text:'Entre 5 e 6 horas', value:'5a6'},
    {emoji:'😴', text:'Entre 7 e 8 horas', value:'7a8'},
    {emoji:'🌙', text:'Mais de 8 horas', value:'mais8'}
  ]
},
{
  id:'info6', type:'info', progress:68,
  section:'Estilo de Vida',
  img:'img/info_dormindo.svg',
  icon:'🌙',
  title:'Dormir mal sabota todos os seus esforços para emagrecer',
  text:'Quando você dorme menos de 7 horas, o hormônio da fome (grelina) aumenta em até <strong>24%</strong> — fazendo você comer mais sem perceber.\n\nNa medicina coreana, o sono é chamado de <em>"recarga do Gi"</em> — é durante ele que o corpo se regenera e o metabolismo se regula.\n\nO Método DigiKit inclui uma <strong>sequência noturna de 5 minutos</strong> que ativa o sistema nervoso parassimpático, melhorando a qualidade do sono de forma natural.',
  btn:'Quero isso →'
},

// ==================== BLOCO 8 — ALIMENTAÇÃO ====================
{
  id:'q31', type:'multi', progress:70,
  section:'Estilo de Vida',
  title:'Você segue alguma restrição alimentar?',
  subtitle:'Pode escolher mais de uma',
  options:[
    {emoji:'🍽️', text:'Não, como de tudo', value:'nenhuma'},
    {emoji:'🥩', text:'Faço dieta low-carb', value:'lowcarb'},
    {emoji:'🍎', text:'Sou vegetariana', value:'vegetariana'},
    {emoji:'🥦', text:'Sou vegana', value:'vegana'},
    {emoji:'🚫', text:'Evito alimentos processados', value:'processados'},
    {emoji:'🥛', text:'Sou intolerante à lactose', value:'lactose'},
    {emoji:'🍞', text:'Evito glúten', value:'gluten'}
  ]
},
{
  id:'info7', type:'info', progress:71,
  section:'Estilo de Vida',
  img:'img/info_alimentos.svg',
  imgStyle:'width:100%; height:auto; max-height:none; object-fit:contain; object-position:center; border-radius:16px; margin-bottom:16px; display:block;',
  title:'O que as coreanas comem para ter o corpo que têm',
  text:'A culinária coreana tradicional é naturalmente anti-inflamatória e pró-metabolismo:\n\n• <strong>Kimchi</strong> (fermentado natural) — equilibra o microbioma intestinal\n• <strong>Chá verde e gengibre</strong> — ativam o metabolismo basal\n• <strong>Peixe e tofu</strong> — proteína leve que preserva massa muscular\n• <strong>Arroz integral e folhas</strong> — fibras que prolongam a saciedade\n\nO Método DigiKit inclui um <strong>Guia de Alimentação Coreana Simplificada</strong> — sem receitas complicadas, adaptado para o dia a dia brasileiro.',
  btn:'Quero esse guia →'
},
{
  id:'q32', type:'multi', progress:72,
  section:'Estilo de Vida',
  title:'Quais desses alimentos fazem parte da sua alimentação regular?',
  options:[
    {emoji:'🥬', text:'Verduras e folhas verdes', value:'verduras'},
    {emoji:'🐟', text:'Peixe e frutos do mar', value:'peixe'},
    {emoji:'🥑', text:'Gorduras saudáveis (azeite, abacate)', value:'gorduras'},
    {emoji:'🥣', text:'Probióticos (iogurte, kefir)', value:'probioticos'},
    {emoji:'🍵', text:'Chás naturais', value:'chas'},
    {emoji:'🌾', text:'Cereais integrais', value:'cereais'}
  ]
},
{
  id:'q33', type:'multi', progress:74,
  section:'Estilo de Vida',
  title:'Por honestidade — quais hábitos você quer melhorar?',
  options:[
    {emoji:'😰', text:'Comer por emoção (ansiedade, tédio)', value:'emocional'},
    {emoji:'🌙', text:'Beliscar à noite', value:'noite'},
    {emoji:'⏭️', text:'Pular refeições e compensar depois', value:'pular'},
    {emoji:'⏩', text:'Comer rápido demais, sem mastigar', value:'rapido'},
    {emoji:'🍰', text:'Consumir muito açúcar ou farinhas', value:'acucar'},
    {emoji:'✅', text:'Nenhum — me alimento bem', value:'nenhum'}
  ]
},

// ==================== BLOCO 9 — SAÚDE CLÍNICA ====================
{
  id:'q34', type:'multi', progress:77,
  section:'Estilo de Vida',
  title:'Você foi diagnosticada com alguma condição de saúde?',
  subtitle:'Esta informação é para sua segurança',
  showSafetyModal: true,
  options:[
    {emoji:'✅', text:'Não, não fui diagnosticada', value:'saudavel'},
    {emoji:'🩸', text:'Diabetes tipo 1', value:'diabetes1'},
    {emoji:'🩸', text:'Diabetes tipo 2', value:'diabetes2'},
    {emoji:'❤️', text:'Doença cardíaca', value:'cardiaco'},
    {emoji:'💉', text:'Pressão alta', value:'hipertensao'},
    {emoji:'🧪', text:'Colesterol alto', value:'colesterol'},
    {emoji:'🦋', text:'Hipotireoidismo ou tireoide', value:'tireoide'},
    {emoji:'➕', text:'Outra condição', value:'outra'}
  ]
},
{
  id:'q35', type:'question', progress:79,
  section:'Estilo de Vida',
  title:'Você tem ou já teve alguma dificuldade com transtornos alimentares?',
  options:[
    {emoji:'😔', text:'Sim, já tive', value:'sim'},
    {emoji:'✅', text:'Não, nunca tive', value:'nao'}
  ]
},
{
  id:'q36', type:'question', progress:81,
  section:'Estilo de Vida',
  title:'Você usa algum medicamento que pode afetar o peso ou o metabolismo?',
  options:[
    {emoji:'💊', text:'Sim, uso', value:'sim'},
    {emoji:'✅', text:'Não uso', value:'nao'}
  ]
},
{
  id:'q37', type:'question', progress:83,
  section:'Estilo de Vida',
  title:'Você está grávida ou amamentando atualmente?',
  options:[
    {emoji:'🤰', text:'Sim', value:'sim'},
    {emoji:'✅', text:'Não', value:'nao'}
  ]
},
{
  id:'q38', type:'question', progress:85,
  section:'Estilo de Vida',
  title:'Você tem alguma limitação de mobilidade que dificulta exercícios?',
  options:[
    {emoji:'🚫', text:'Sim, tenho limitações significativas', value:'significativas'},
    {emoji:'⚠️', text:'Tenho algumas limitações leves', value:'leves'},
    {emoji:'✅', text:'Não, me movo sem restrições', value:'nenhuma'}
  ]
},
{
  id:'info_aprovacao', type:'info', progress:87,
  section:'Estilo de Vida',
  img:'img/info_transformacao.svg',
  imgStyle:'width:100%; height:auto; max-height:none; object-fit:contain; object-position:center; border-radius:16px; margin-bottom:16px; display:block;',
  title:'Perfil validado! Você é candidata ao Método DigiKit',
  text:'Com base em todas as suas respostas, você se encaixa perfeitamente no perfil de mulheres que mais se beneficiam com o <strong>Método DigiKit</strong>.\n\nAgora vamos entender o que vai te motivar a chegar até o fim — e criar seu plano definitivo.',
  btn:'Continuar →'
},

// ==================== BLOCO 10 — MOTIVAÇÃO ====================
{
  id:'info_quase', type:'social', progress:90,
  section:'Quase Lá',
  img:'img/info_social_proof.svg',
  title:'Quase lá!',
  text:'Você está a poucos instantes de descobrir um caminho personalizado para <strong>parecer e se sentir da melhor forma</strong>.\n\nVamos terminar explorando o que te motiva!',
  btn:'Entendi →'
},
{
  id:'q39', type:'multi', progress:92,
  section:'Quase Lá',
  title:'O que te motiva a se exercitar?',
  subtitle:'Escolha tudo que se aplica',
  options:[
    {emoji:'❤️', text:'Melhorar a saúde', value:'saude'},
    {emoji:'💪', text:'Melhorar a aparência', value:'aparencia'},
    {emoji:'🧘', text:'Gerir o estresse / melhorar o humor', value:'estresse'},
    {emoji:'🏃', text:'Ter mais energia no dia a dia', value:'energia'},
    {emoji:'👗', text:'Usar as roupas que gosto sem desconforto', value:'roupas'},
    {emoji:'🌸', text:'Me sentir bem comigo mesma de novo', value:'bem'}
  ]
},
{
  id:'q40', type:'question', progress:94,
  section:'Quase Lá',
  title:'Neste momento, quão motivada você está para atingir seu peso ideal?',
  options:[
    {emoji:'🔥', text:'Estou 100% pronta — quero começar agora!', value:'pronta'},
    {emoji:'💪', text:'Estou bastante confiante', value:'confiante'},
    {emoji:'🤔', text:'Estou um pouco insegura', value:'insegura'},
    {emoji:'⏳', text:'Estou levando as coisas com calma', value:'calma'}
  ]
},
{
  id:'q41', type:'multi', progress:96,
  section:'Quase Lá',
  title:'O que atrapalhou seus resultados em tentativas anteriores?',
  options:[
    {emoji:'🔄', text:'Perdia peso e logo recuperava tudo', value:'efeito_sanfona'},
    {emoji:'❓', text:'Não tinha um plano claro para seguir', value:'sem_plano'},
    {emoji:'⏰', text:'Falta de tempo para se comprometer', value:'sem_tempo'},
    {emoji:'😔', text:'Perdia a motivação rapidamente', value:'sem_motivacao'},
    {emoji:'💪', text:'Os programas eram difíceis demais', value:'dificil'},
    {emoji:'🆕', text:'É a primeira vez que vou tentar', value:'primeira'}
  ]
},
{
  id:'q42', type:'multi', progress:97,
  section:'Quase Lá',
  title:'O que você quer explorar com o Método DigiKit?',
  options:[
    {emoji:'⚡', text:'Aumentar minha energia e disposição', value:'energia'},
    {emoji:'🧘', text:'Reduzir o estresse e dormir melhor', value:'estresse'},
    {emoji:'🤸', text:'Melhorar minha flexibilidade e postura', value:'flexibilidade'},
    {emoji:'🔥', text:'Fortalecer o core e a região pélvica', value:'core'},
    {emoji:'✨', text:'Cuidar do meu corpo como autocuidado', value:'autocuidado'}
  ]
},
{
  id:'q43', type:'question', progress:98,
  section:'Quase Lá',
  title:'Seu plano DigiKit está pronto! Com que rapidez quer ficar em forma?',
  options:[
    {emoji:'⚡', text:'O mais rápido possível', value:'rapido'},
    {emoji:'🌱', text:'Devagar e com consistência', value:'sustentavel'},
    {emoji:'⚖️', text:'Algo entre os dois', value:'ambos'}
  ]
},
{
  id:'info_final', type:'info', progress:100,
  section:'Quase Lá',
  icon:'🎊',
  title:'Perfeito! Entendemos exatamente o que você precisa.',
  text:'Estamos ajustando seu plano para entregar resultados visíveis nas <strong>primeiras 3 semanas</strong> — usando a <strong>Ativação Gi</strong> para destravar seu metabolismo — com hábitos sustentáveis que você vai manter pela vida inteira.\n\nSeu Plano DigiKit Personalizado está sendo processado...',
  btn:'Ver meu plano →'
}

];
