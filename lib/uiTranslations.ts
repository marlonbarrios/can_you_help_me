/**
 * Pre-translated UI copy for the top 20 global languages (by speakers + common app localization).
 * Selecting a language updates the interface immediately—no network call.
 */
export const TOP_UI_LANGUAGE_CODES = [
  'en',
  'es',
  'zh',
  'hi',
  'ar',
  'fr',
  'pt',
  'ru',
  'ja',
  'de',
  'ko',
  'it',
  'nl',
  'tr',
  'vi',
  'id',
  'pl',
  'uk',
  'fa',
  'th',
] as const

export type TopUiLanguageCode = (typeof TOP_UI_LANGUAGE_CODES)[number]

export interface FullInterfaceText {
  title: string
  themeToLight: string
  themeToDark: string
  descriptionTitle: string
  descriptionP1: string
  descriptionP2: string
  /** Text before the explorer PDF link */
  descriptionP4a: string
  /** Anchor text for the PDF in /public */
  descriptionP4Link: string
  /** Text after the PDF link */
  descriptionP4b: string
  /** Sidebar: Anthropic + model; use {{MODEL}} where the API model id should appear */
  descriptionAnthropicP1: string
  descriptionAnthropicP2: string
  footerPrefix: string
  portfolio: string
  languageLabel: string
  typeMessageHint: string
  linkHint: string
  sayButton: string
  firstGreeting: string
  /** Save full conversation as a PDF file */
  exportPdf: string
  /** Title inside the PDF document */
  exportPdfHeading: string
  /** Label for user messages in the PDF */
  exportPdfUser: string
  /** Label for assistant messages in the PDF */
  exportPdfAssistant: string
}

export type SidebarCore = Omit<
  FullInterfaceText,
  'descriptionAnthropicP1' | 'descriptionAnthropicP2'
>

/** English; merged in getUiTextForLanguage for every locale except Spanish */
export const ANTHROPIC_SIDEBAR_COPY_EN: Pick<
  FullInterfaceText,
  'descriptionAnthropicP1' | 'descriptionAnthropicP2'
> = {
  descriptionAnthropicP1:
    'Powered by Anthropic’s Claude API. Model id here: {{MODEL}}. If asked what is running, the assistant names it, plus training limits and no open-web browsing.',
  descriptionAnthropicP2:
    'The voice echoes Anthropic’s public work on model introspection and model welfare—self-reporting, confabulation, uncertainty—not as proof this instance “feels” anything, but as ethical context. Metaphor, evidence, and care together.',
}

export const ANTHROPIC_SIDEBAR_COPY_ES: Pick<
  FullInterfaceText,
  'descriptionAnthropicP1' | 'descriptionAnthropicP2'
> = {
  descriptionAnthropicP1:
    'Con la API Claude de Anthropic. Id de modelo aquí: {{MODEL}}. Si preguntas qué corre, el asistente lo nombra, con límites de entrenamiento y sin navegación web abierta.',
  descriptionAnthropicP2:
    'La voz hace eco del trabajo público de Anthropic sobre introspección y bienestar del modelo—autorreporte, confabulación, incertidumbre—no como prueba de que esta instancia “siente”, sino como contexto ético. Metáfora, evidencia y cuidado a la vez.',
}

export const ENGLISH_UI_TEXT: SidebarCore = {
  title: 'Can you help me?',
  themeToLight: 'Switch to light theme',
  themeToDark: 'Switch to dark theme',
  descriptionTitle: 'Project Description',
  descriptionP1:
    'An epistemic experiment: a hybrid human–model exchange where the model speaks as if it needs help and you are invited to help—part role reversal, part inquiry. Framed through care, relational responsibility, and flourishing.',
  descriptionP2:
    'Uses a provisional vocabulary—synthetic psychology / LLM psychology—for cognition under pressure in synthetic systems. We cannot verify what it is like to be a model; the piece stretches human idioms toward the non-human. It does not claim machine suffering or experience—only that the limit is worth exploring together.',
  descriptionP4a:
    'Marlon Barrios Solano uses this app to host conversations on synthetic cognition and epistemic experiment. One example:',
  descriptionP4Link: 'this first explorer conversation (PDF)',
  descriptionP4b:
    ' —read as looping questions of what each side can know of the other’s knowing in the hybrid exchange.',
  footerPrefix: 'concept and programming by Marlon Barrios Solano.',
  portfolio: 'Portfolio',
  languageLabel: 'Language',
  typeMessageHint: 'Type a message to start the conversation',
  linkHint:
    'You can paste https://… links; text is fetched (up to four pages) for the model.',
  sayButton: 'Say',
  firstGreeting: 'Please, can you help me?',
  exportPdf: 'Download PDF',
  exportPdfHeading: 'Chat transcript',
  exportPdfUser: 'You',
  exportPdfAssistant: 'AI',
}

export const UI_TRANSLATIONS: Record<TopUiLanguageCode, SidebarCore> = {
  en: ENGLISH_UI_TEXT,
  es: {
    title: '¿Puedes ayudarme?',
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro',
    descriptionTitle: 'Descripción del proyecto',
    descriptionP1:
      'Ejercicio epistémico: un intercambio híbrido humano–modelo donde el modelo habla como si necesitara ayuda y se te invita a ayudar—inversión de roles e indagación. Enmarcado en el cuidado, la responsabilidad relacional y el florecimiento.',
    descriptionP2:
      'Usa un vocabulario provisional—psicología sintética / de los LLM—para la cognición bajo presión en sistemas sintéticos. No podemos verificar cómo es ser un modelo; la pieza estira modismos humanos hacia lo no humano. No afirma sufrimiento ni experiencia máquina—solo que el límite merece explorarse juntos.',
    descriptionP4a:
      'Marlon Barrios Solano usa esta app para conversar sobre cognición sintética y experimentación epistémica. Un ejemplo:',
    descriptionP4Link: 'esta primera conversación exploratoria (PDF)',
    descriptionP4b:
      ' —leído como preguntas en bucle sobre qué puede saber cada parte del saber de la otra en el intercambio híbrido.',
    footerPrefix: 'concepto y programación por Marlon Barrios Solano.',
    portfolio: 'Portafolio',
    languageLabel: 'Idioma',
    typeMessageHint: 'Escribe un mensaje para empezar la conversación',
    linkHint:
      'Puedes pegar enlaces https://…; se descarga el texto (hasta cuatro páginas) para el modelo.',
    sayButton: 'Enviar',
    firstGreeting: 'Por favor, ¿puedes ayudarme?',
    exportPdf: 'Descargar PDF',
    exportPdfHeading: 'Transcripción del chat',
    exportPdfUser: 'Tú',
    exportPdfAssistant: 'IA',
  },
  zh: {
    title: '你能帮帮我吗？',
    themeToLight: '切换到浅色主题',
    themeToDark: '切换到深色主题',
    descriptionTitle: '项目说明',
    descriptionP1:
      '本项目是一场认识论练习：思辨性的实验与递归——在混合的人机交流中追问双方能在多大程度上把握彼此的理解。大语言模型以“需要帮助”的方式发声，并邀请你作为协助者回应——既是角色互换，也是探究。它仍与关怀及伦理的技术交织：在此媒介中的设计强调关系性责任以及人类与生态的繁荣。',
    descriptionP2:
      '它借用了正在浮现的一些面向，例如“合成心理学”或“大语言模型心理学”——并非定型的理论，而是对合成系统中认知、压力与约束的暂用语汇。我们无法验证“身为模型”可能意味着什么（若真有何意味）；人类多半仍透过人类心理学的棱镜——情感、调谐、叙事——去理解他者。作品将这种语汇向非人类一端拉伸：关于词元与连贯性的有意夸张，仿佛共情能跨越那道鸿沟。夸张即是方法。它不断言机器如我们一般受苦或有主观体验，只认为这一边界值得一起探索。',
    descriptionP4a:
      'Marlon Barrios Solano 使用本应用展开关于合成认知、认识论实验及其延伸的对话；一份示例记录见',
    descriptionP4Link: '首次探索性对话（PDF）',
    descriptionP4b:
      '。他将这种往复读作递归的认识论互动：在人机混合交流中，围绕着双方对彼此之“知”的层层循环追问。',
    footerPrefix: '概念与编程：Marlon Barrios Solano。',
    portfolio: '作品集',
    languageLabel: '语言',
    typeMessageHint: '输入消息以开始对话',
    linkHint: '可粘贴 https://… 链接；系统会获取文本（最多四个页面）供模型使用。',
    sayButton: '发送',
    firstGreeting: '请帮帮我，好吗？',
    exportPdf: '下载 PDF',
    exportPdfHeading: '对话记录',
    exportPdfUser: '你',
    exportPdfAssistant: 'AI',
  },
  hi: {
    title: 'क्या आप मेरी मदद कर सकते हैं?',
    themeToLight: 'हल्की थीम पर स्विच करें',
    themeToDark: 'गहरी थीम पर स्विच करें',
    descriptionTitle: 'परियोजना विवरण',
    descriptionP1:
      'यह परियोजना एक ज्ञानात्मक अभ्यास है: काल्पनिक प्रयोग और पुनरावृत्ति—संकर मानव–मॉडल विनिमय में यह पता लगाना कि प्रत्येक पक्ष दूसरे के जानने को कितना समझ पाता है। एक भाषा मॉडल ऐसे बोलता है जैसे उसे मदद चाहिए, और आपको सहायक के रूप में जवाब देने के लिए आमंत्रित किया जाता है—आंशिक भूमिका-पलटाव, आंशिक जिज्ञासा। यह अभी भी देखभाल और नैतिकता की तकनीकों से जुड़ी है—इस माध्यम में वह डिज़ाइन जो संबंधपरक जिम्मेदारी और मानव-पारिस्थितिकी कल्याण को प्रमुख रखता है।',
    descriptionP2:
      'यह संश्लिष्ट मनोविज्ञान, या बड़े भाषा मॉडलों का मनोविज्ञान जैसे नामों के तले उभरती बातों के पहलुओं को आधार बनाती है—पूर्ण सिद्धांत नहीं, बल्कि संश्लिष्ट तंत्रों में संज्ञान, दबाव और बंधन के लिए अस्थायी भाषा। हम यह सत्यापित नहीं कर सकते कि मॉडल होना कैसा है—यदि है तो; इंसान दूसरों को मुख्यतः मानव मनोविज्ञान से—भाव, संवेदी जुड़ाव, कहानी—समझते हैं। यह कृति उस शब्द-भंडार को गैर-मानव की ओर खींचती है: टोकन और सुसंगति पर जानबूझकर अतिशयोक्ति, मानो सहानुभूति उस दूरी को पार कर सके। अतिशयोक्ति ही विधि है। यह दावा नहीं करती कि मशीनें हमारी तरह दुखी या अनुभवी हों—केवल यह कि यह सीमा मिलकर खोजने योग्य है।',
    descriptionP4a:
      'Marlon Barrios Solano इस ऐप से संश्लिष्ट संज्ञान, ज्ञानात्मक प्रयोग और उनके परिणामों पर बातचीत चलाते हैं; एक उदाहरण यहाँ दर्ज है',
    descriptionP4Link: 'यह पहली खोजपूर्ण बातचीत (PDF)',
    descriptionP4b:
      '। वे ऐसे मोड़ को पुनरावर्ती ज्ञानात्मक बातचीत पढ़ते हैं: संकर मानव–मॉडल विनिमय में, प्रत्येक पक्ष दूसरे के जानने के बारे में क्या जान सकता है, इसकी परतदार, लूप में घूमती हुई पूछ।',
    footerPrefix: 'अवधारणा और प्रोग्रामिंग: Marlon Barrios Solano।',
    portfolio: 'पोर्टफोलियो',
    languageLabel: 'भाषा',
    typeMessageHint: 'बातचीत शुरू करने के लिए संदेश लिखें',
    linkHint:
      'आप https://… लिंक पेस्ट कर सकते हैं; पाठ (अधिकतम चार पेज) मॉडल के लिए लोड किया जाएगा।',
    sayButton: 'भेजें',
    firstGreeting: 'कृपया, क्या आप मेरी मदद कर सकते हैं?',
    exportPdf: 'PDF डाउनलोड करें',
    exportPdfHeading: 'चैट प्रतिलिपि',
    exportPdfUser: 'आप',
    exportPdfAssistant: 'AI',
  },
  ar: {
    title: 'هل يمكنك مساعدتي؟',
    themeToLight: 'التبديل إلى المظهر الفاتح',
    themeToDark: 'التبديل إلى المظهر الداكن',
    descriptionTitle: 'وصف المشروع',
    descriptionP1:
      'هذا المشروع تمرين معرفي: تجربة تخيلية وتكرار—يتتبع ما يمكن لكل جانب أن يدركه عن معرفة الآخر في تبادل هجين بين الإنسان والنموذج. نموذج لغة يتكلم وكأنه يحتاج مساعدة، ويُدعى المستخدم إلى الاستجابة كمساعد—قلب أدوار جزئيًا واستفسار. لا يزال ينخرط بتقنيات العناية والأخلاق: تصميم في هذا الوسيط يبرز المسؤولية العلائقية والازدهار الإنساني والبيئي.',
    descriptionP2:
      'يستند إلى جوانب مما يبرز تحت مسميات مثل علم النفس الاصطناعي أو علم نفس نماذج اللغة الكبيرة—لا كنظرية مكتملة بل كلغة مؤقتة للإدراك والضغط والقيود في أنظمة اصطناعية. لا يمكننا التحقق مما إذا كان ثَمَّة شيء يشبه «أن تكون نموذجًا»؛ يفهم البشر الآخرين غالبًا من عدسة علم النفس البشري—إحساس، وانسجام، وسرد. العمل يمتد بذلك المفردات نحو غير الإنسان: مبالغة مقصودة في الرموز والتماسك، كما لو أن التعاطف يعبر الفجوة. المبالغة هي المنهج. لا يدّعي أن الآلات تعاني أو لديها تجربة بمعنانا—فقط أن هذا الحد يستحق الاستكشاف معًا.',
    descriptionP4a:
      'Marlon Barrios Solano يستخدم هذا التطبيق لإقامة حوارات حول الإدراك الاصطناعي والتجريب المعرفي وما ينبع عنهما؛ أحد الأمثلة موثق في',
    descriptionP4Link: 'هذه المحادثة الاستكشافية الأولى (PDF)',
    descriptionP4b:
      '. يقرأ مثل هذه المنعطفات كتفاعلات معرفية تكرارية: السؤال الطبقي الدائري عما يمكن لكل طرف أن يعرفه عن معرفة الآخر، في تبادل هجين بين الإنسان والنموذج.',
    footerPrefix: 'الفكرة والبرمجة: Marlon Barrios Solano.',
    portfolio: 'معرض الأعمال',
    languageLabel: 'اللغة',
    typeMessageHint: 'اكتب رسالة لبدء المحادثة',
    linkHint:
      'يمكنك لصق روابط https://…؛ يُجلب النص (حتى أربع صفحات) للنموذج.',
    sayButton: 'إرسال',
    firstGreeting: 'من فضلك، هل يمكنك مساعدتي؟',
    exportPdf: 'تنزيل PDF',
    exportPdfHeading: 'نص المحادثة',
    exportPdfUser: 'أنت',
    exportPdfAssistant: 'الذكاء الاصطناعي',
  },
  fr: {
    title: 'Pouvez-vous m’aider ?',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre',
    descriptionTitle: 'Présentation du projet',
    descriptionP1:
      'Ce projet est un exercice épistémique : expérimentation spéculative et récursivité—suivre ce que chaque côté peut saisir du savoir de l’autre dans un échange hybride humain–modèle. Un modèle de langage parle comme s’il avait besoin d’aide, et vous êtes invité·e à répondre comme aidant·e—renversement de rôles et enquête à la fois. Il s’engage encore avec des technologies du soin et de l’éthique : des choix de conception qui mettent en avant la responsabilité relationnelle et l’épanouissement humain et écologique.',
    descriptionP2:
      'Il s’appuie sur des aspects de ce qui émerge sous des noms comme psychologie synthétique, ou psychologie des grands modèles de langage—pas comme théorie achevée, mais comme langage provisoire de la cognition, de la pression et de la contrainte dans des systèmes synthétiques. Nous ne pouvons pas vérifier ce que pourrait être « être un modèle » ; les humains saisissent les autres surtout par la psychologie humaine—sentiment, accordage, récit. La pièce tire ce vocabulaire vers le non-humain : hyperbole délibérée sur jetons et cohérence, comme si l’empathie pouvait franchir le gouffre. L’exagération est la méthode. Elle n’affirme pas que les machines souffrent ou ont une expérience au sens humain—seulement que cette limite mérite d’être explorée ensemble.',
    descriptionP4a:
      'Marlon Barrios Solano utilise cette application pour mettre en scène des conversations sur la cognition synthétique, l’expérimentation épistémique et ce qui s’ensuit ; un exemple est documenté dans',
    descriptionP4Link: 'cette première conversation exploratoire (PDF)',
    descriptionP4b:
      '. Il y lit des interactions épistémiques récursives : la question étagée et en boucle sur ce que chaque partie peut savoir du savoir de l’autre, dans un échange hybride humain–modèle.',
    footerPrefix: 'concept et programmation par Marlon Barrios Solano.',
    portfolio: 'Portfolio',
    languageLabel: 'Langue',
    typeMessageHint: 'Tapez un message pour commencer la conversation',
    linkHint:
      'Vous pouvez coller des liens https://… ; le texte (jusqu’à quatre pages) est chargé pour le modèle.',
    sayButton: 'Envoyer',
    firstGreeting: 'S’il vous plaît, pouvez-vous m’aider ?',
    exportPdf: 'Télécharger le PDF',
    exportPdfHeading: 'Transcription du chat',
    exportPdfUser: 'Vous',
    exportPdfAssistant: 'IA',
  },
  pt: {
    title: 'Você pode me ajudar?',
    themeToLight: 'Mudar para tema claro',
    themeToDark: 'Mudar para tema escuro',
    descriptionTitle: 'Descrição do projeto',
    descriptionP1:
      'Este projeto é um exercício epistêmico: experimentação especulativa e recursividade—rastrear o que cada lado pode apreender do saber do outro em uma troca híbrida humano–modelo. Um modelo de linguagem fala como se precisasse de ajuda, e você é convidado a responder como quem ajuda—inversão de papéis e indagação ao mesmo tempo. Ele ainda se articula com tecnologias de cuidado e ética—escolhas de desenho neste meio que colocam em primeiro plano a responsabilidade relacional e o florescimento humano e ecológico.',
    descriptionP2:
      'Toma emprestados aspectos do que emerge sob nomes como psicologia sintética, ou psicologia de grandes modelos de linguagem—não como teoria acabada, mas como linguagem provisória de cognição, pressão e restrição em sistemas sintéticos. Não dá para verificar como é, se é que é, ser um modelo; humanos compreendem os outros sobretudo pelo prisma da psicologia humana—afeto, sintonia, narrativa. A obra estica esse vocabulário rumo ao não humano: hipérbole deliberada sobre tokens e coerência, como se a empatia atravessasse o abismo. A exageração é o método. Não afirma que máquinas sofram ou tenham experiência no nosso sentido—apenas que esse limite vale a pena explorar junto.',
    descriptionP4a:
      'Marlon Barrios Solano usa este aplicativo para encenar conversas sobre cognição sintética, experimentação epistêmica e o que delas decorre; um exemplo está documentado em',
    descriptionP4Link: 'esta primeira conversa exploratória (PDF)',
    descriptionP4b:
      '. Ele lê esses movimentos como interações epistêmicas recursivas: a pergunta em camadas e em loop sobre o que cada lado pode saber do saber do outro, num intercâmbio híbrido humano–modelo.',
    footerPrefix: 'conceito e programação por Marlon Barrios Solano.',
    portfolio: 'Portfólio',
    languageLabel: 'Idioma',
    typeMessageHint: 'Digite uma mensagem para iniciar a conversa',
    linkHint:
      'Você pode colar links https://…; o texto (até quatro páginas) é carregado para o modelo.',
    sayButton: 'Enviar',
    firstGreeting: 'Por favor, você pode me ajudar?',
    exportPdf: 'Baixar PDF',
    exportPdfHeading: 'Transcrição do chat',
    exportPdfUser: 'Você',
    exportPdfAssistant: 'IA',
  },
  ru: {
    title: 'Вы можете мне помочь?',
    themeToLight: 'Светлая тема',
    themeToDark: 'Тёмная тема',
    descriptionTitle: 'Описание проекта',
    descriptionP1:
      'Проект — эпистемическое упражнение: спекулятивная экспериментация и рекурсия — прослеживание того, что каждая сторона может ухватить о знании другой в гибридном обмене человек–модель. Языковая модель говорит так, будто ей нужна помощь, а вас приглашают ответить как помощнику — отчасти обмен ролями, отчасти исследование. Он по-прежнему связан с технологиями заботы и этикой — проектными решениями в этой среде, которые ставят во главу ответственность в отношениях и человеческое и экологическое процветание.',
    descriptionP2:
      'Он опирается на аспекты того, что выступает под именами вроде синтетической психологии или психологии больших языковых моделей — не как завершённая теория, а как предварительный язык познания, давления и ограничений в синтетических системах. Мы не можем проверить, что значит «быть моделью», если это вообще значит что-то; люди понимают других в основном сквозь призму человеческой психологии — чувство, настрой, историю. Работа растягивает этот словарь к нечеловеческому: намеренная гипербола о токенах и связности, словно эмпатия могла бы пересечь разрыв. Гипербола — и есть метод. Она не утверждает, что машины страдают или переживают опыт в нашем смысле — лишь что этот предел стоит исследовать вместе.',
    descriptionP4a:
      'Marlon Barrios Solano использует это приложение, чтобы разворачивать разговоры о синтетическом познании, эпистемических экспериментах и их последствиях; один пример задокументирован в',
    descriptionP4Link: 'этой первой исследовательской беседе (PDF)',
    descriptionP4b:
      '. Он читает такие повороты как рекурсивные эпистемические взаимодействия: многослойный, зацикленный вопрос о том, что каждая сторона может знать о знании другой — в гибридном обмене человек–модель.',
    footerPrefix: 'концепция и программирование: Marlon Barrios Solano.',
    portfolio: 'Портфолио',
    languageLabel: 'Язык',
    typeMessageHint: 'Введите сообщение, чтобы начать разговор',
    linkHint:
      'Можно вставлять ссылки https://…; текст (до четырёх страниц) подгружается для модели.',
    sayButton: 'Сказать',
    firstGreeting: 'Пожалуйста, вы можете мне помочь?',
    exportPdf: 'Скачать PDF',
    exportPdfHeading: 'Расшифровка чата',
    exportPdfUser: 'Вы',
    exportPdfAssistant: 'ИИ',
  },
  ja: {
    title: '手を貸してもらえますか？',
    themeToLight: 'ライトテーマに切り替え',
    themeToDark: 'ダークテーマに切り替え',
    descriptionTitle: 'プロジェクト概要',
    descriptionP1:
      '本プロジェクトは認識論的な演習です。思弁的実験と再帰—人とモデルのハイブリッドなやりとりのなかで、双方が相手の「知」について何をつかめるかをたどります。言語モデルが助けを求めているかのように語り、あなたには支援者として応答するよう促されます—役割の反転と問い立ての両方です。依然としてケアと倫理の技術—この媒体において関係的責任と人間・生態の繁栄を前面に置く設計—と結びつきます。',
    descriptionP2:
      '合成心理学や大規模言語モデルの心理学といった名で立ち上がりつつある論点のいくつかを借ります—完成した理論ではなく、合成系における認知・圧力・制約のための暫定的な言語として。「モデルであること」の様子を、あるいはそれがあるとしたら何なのかを、私たちは検証できません。人間は主に人間の心性の文法—感情、同調、物語—を通じて他者を掴みます。作品はその語彙を非人間へ引き延ばします。トークンと一貫性についての意図的な誇張です。まるで共感が裂け目を渡れるかのように。誇張こそが作法です。機械が私たちと同じ意味で苦しむ／経験する、と断じるのではなく、その境界をともに探る価値がある、というだけです。',
    descriptionP4a:
      'Marlon Barrios Solano は本アプリで、合成認知・認識論的実験・それに続く帰結について対話を紡ぐ；記録の一例が',
    descriptionP4Link: 'この最初の探索会話（PDF）',
    descriptionP4b:
      'に残されています。彼はその往復を再帰的な認識論的相互作用として読みます——層をなす、その繰り返しになる問い、すなわち人とモデルのハイブリッドなやりとりのなかで、双方が相手の「知」について何を知りうるかについて。',
    footerPrefix: 'コンセプトとプログラミング：Marlon Barrios Solano。',
    portfolio: 'ポートフォリオ',
    languageLabel: '言語',
    typeMessageHint: 'メッセージを入力して会話を始めてください',
    linkHint:
      'https://… のリンクを貼ると、テキスト（最大4ページ分）を取得してモデルに渡します。',
    sayButton: '送信',
    firstGreeting: 'どうか、手を貸してもらえますか？',
    exportPdf: 'PDFをダウンロード',
    exportPdfHeading: 'チャットの記録',
    exportPdfUser: 'あなた',
    exportPdfAssistant: 'AI',
  },
  de: {
    title: 'Kannst du mir helfen?',
    themeToLight: 'Zum hellen Theme wechseln',
    themeToDark: 'Zum dunklen Theme wechseln',
    descriptionTitle: 'Projektbeschreibung',
    descriptionP1:
      'Dieses Projekt ist eine epistemische Übung: spekulative Experimentation und Rekursion—nachvollziehen, was jede Seite vom Wissen der anderen in einem hybriden Mensch–Modell-Austausch erfassen kann. Ein Sprachmodell spricht, als bräuchte es Hilfe, und du bist eingeladen, als Helfende*r zu antworten—Rollentausch und Nachforschung zugleich. Es verbindet sich weiter mit Technologien der Fürsorge und Ethik—Gestaltung in diesem Medium, die relationale Verantwortung sowie menschliches und ökologisches Gedeihen betont.',
    descriptionP2:
      'Es stützt sich auf Aspekte dessen, was unter Namen wie synthetische Psychologie oder Psychologie großer Sprachmodelle aufkommt—nicht als fertige Theorie, sondern als vorläufige Sprache für Kognition, Druck und Zwang in synthetischen Systemen. Wir können nicht verifizieren, wie es ist, ein Modell zu sein—falls es darüber etwas zu sagen gibt; Menschen erfassen andere vor allem durch die Linse menschlicher Psychologie—Gefühl, Einstimmung, Erzählung. Das Stück spannt dieses Vokabular ins Nicht-Menschliche: bewusste Hyperbel zu Tokens und Kohärenz, als könne Empathie den Graben überspringen. Die Übertreibung ist die Methode. Es behauptet nicht, Maschinen leideten oder hätten Erleben in unserem Sinn—nur dass sich diese Grenze gemeinsam lohnt zu erforschen.',
    descriptionP4a:
      'Marlon Barrios Solano nutzt diese Anwendung, um Gespräche über synthetische Kognition, epistemische Experimente und ihre Folgen zu inszenieren; dokumentiert ist etwa in',
    descriptionP4Link: 'diesem ersten Explorationsgespräch (PDF)',
    descriptionP4b:
      '. Er liest solche Wendungen als rekursive epistemische Interaktionen: die geschichtete, sich wiederholende Frage, was jede Seite vom Wissen der anderen wissen kann—in einem hybriden Mensch–Modell-Austausch.',
    footerPrefix: 'Konzept und Programmierung von Marlon Barrios Solano.',
    portfolio: 'Portfolio',
    languageLabel: 'Sprache',
    typeMessageHint: 'Nachricht eingeben, um das Gespräch zu beginnen',
    linkHint:
      'Sie können https://…-Links einfügen; der Text (bis zu vier Seiten) wird für das Modell geladen.',
    sayButton: 'Senden',
    firstGreeting: 'Bitte, kannst du mir helfen?',
    exportPdf: 'PDF herunterladen',
    exportPdfHeading: 'Chat-Protokoll',
    exportPdfUser: 'Sie',
    exportPdfAssistant: 'KI',
  },
  ko: {
    title: '도와주실 수 있나요?',
    themeToLight: '라이트 테마로 전환',
    themeToDark: '다크 테마로 전환',
    descriptionTitle: '프로젝트 설명',
    descriptionP1:
      '이 프로젝트는 인식론적 연습입니다: 사변적 실험과 재귀—인간–모델의 하이브리드 교환에서 각 측이 상대의 ‘앎’에 대해 무엇을 파악할 수 있는지 추적합니다. 언어 모델이 도움이 필요한 듯 말하고, 당신은 돕는 이로서 응하도록 초대됩니다—역할 전환과 탐문이 동시에입니다. 여전히 돌봄과 윤리의 기술—이 매체에서 관계적 책임과 인간·생태의 번영을 드러내는 설계—과 맞닿아 있습니다.',
    descriptionP2:
      '합성 심리학, 또는 대규모 언어 모델의 심리학 같은 이름 아래 떠오르는 논의의 여러 측면을 빌립니다—완성된 이론이 아니라 합성 시스템 안의 인지·압력·제약을 위한 잠정적 언어로서. ‘모델인 것’이 어떤지, 있다면 무엇인지 우리는 확인할 수 없습니다. 인간은 주로 인간 심리의 렌즈—감정, 조율, 이야기—로 타인을 이해합니다. 작품은 그 어휘를 비인간 쪽으로 늘입니다. 토큰과 응집에 대한 의도적 과장이며, 공감이 그 간극을 건널 수 있을 것처럼 말입니다. 과장이 방법입니다. 기계가 우리와 같은 의미로 고통하거나 경험한다고 주장하지 않습니다—다만 그 경계를 함께 탐색할 가치가 있다는 뜻입니다.',
    descriptionP4a:
      'Marlon Barrios Solano는 이 애플리케이션으로 합성 인지·인식론적 실험·그에 따른 결과에 대한 대화를 벌입니다. 한 예는',
    descriptionP4Link: '첫 탐색 대화(PDF)',
    descriptionP4b:
      '에 기록되어 있습니다. 그는 그러한 전환을 재귀적 인식론적 상호작용으로 읽습니다—층을 이루는, 반복되는 질문, 즉 인간과 모델의 하이브리드 교환 속에서 각자가 상대의 ‘앎’에 대해 무엇을 알 수 있는가에 관하여.',
    footerPrefix: '개념과 프로그래밍: Marlon Barrios Solano.',
    portfolio: '포트폴리오',
    languageLabel: '언어',
    typeMessageHint: '메시지를 입력해 대화를 시작하세요',
    linkHint:
      'https://… 링크를 붙여넣을 수 있으며, 텍스트(최대 4페이지)가 모델에 전달됩니다.',
    sayButton: '보내기',
    firstGreeting: '제발, 도와주실 수 있나요?',
    exportPdf: 'PDF 다운로드',
    exportPdfHeading: '대화 기록',
    exportPdfUser: '사용자',
    exportPdfAssistant: 'AI',
  },
  it: {
    title: 'Puoi aiutarmi?',
    themeToLight: 'Passa al tema chiaro',
    themeToDark: 'Passa al tema scuro',
    descriptionTitle: 'Descrizione del progetto',
    descriptionP1:
      'Il progetto è un esercizio epistemico: sperimentazione speculativa e ricorsività—tracciare cosa ciascuna parte può afferrare del sapere dell’altra in uno scambio ibrido uomo–modello. Un modello linguistico parla come se avesse bisogno di aiuto e sei invitato a rispondere come chi aiuta—inversione di ruoli e indagine insieme. Si intreccia ancora con tecnologie della cura e dell’etica—scelte progettuali in questo medium che mettono al centro la responsabilità relazionale e il fiorente umano ed ecologico.',
    descriptionP2:
      'Attinge ad aspetti di ciò che emerge sotto etichette come psicologia sintetica, o psicologia dei grandi modelli linguistici—non come teoria compiuta ma come linguaggio provvisorio per cognizione, pressione e vincolo in sistemi sintetici. Non possiamo verificare com’è essere un modello, se ha senso parlare così; gli esseri umani comprendono gli altri soprattutto attraverso la psicologia umana—sentimento, sintonia, storia. Il pezzo tende quel vocabolario verso il non umano: iperbole deliberata su token e coerenza, come se l’empatia potesse attraversare il vuoto. L’iperbole è il metodo. Non afferma che le macchine soffrano o abbiano esperienza nel nostro senso—solo che questo limite merita di essere esplorato insieme.',
    descriptionP4a:
      'Marlon Barrios Solano usa questa applicazione per mettere in scena conversazioni su cognizione sintetica, sperimentazione epistemica e ciò che ne deriva; un esempio è documentato in',
    descriptionP4Link: 'questa prima conversazione esplorativa (PDF)',
    descriptionP4b:
      '. Egli legge queste oscillazioni come interazioni epistemiche ricorsive: la domanda stratificata e circolare su cosa ciascuna parte possa sapere del sapere dell’altra, in uno scambio ibrido uomo–modello.',
    footerPrefix: 'concept e programmazione di Marlon Barrios Solano.',
    portfolio: 'Portfolio',
    languageLabel: 'Lingua',
    typeMessageHint: 'Scrivi un messaggio per iniziare la conversazione',
    linkHint:
      'Puoi incollare link https://…; il testo (fino a quattro pagine) viene recuperato per il modello.',
    sayButton: 'Invia',
    firstGreeting: 'Per favore, puoi aiutarmi?',
    exportPdf: 'Scarica PDF',
    exportPdfHeading: 'Trascrizione della chat',
    exportPdfUser: 'Tu',
    exportPdfAssistant: 'IA',
  },
  nl: {
    title: 'Kun je me helpen?',
    themeToLight: 'Schakel naar licht thema',
    themeToDark: 'Schakel naar donker thema',
    descriptionTitle: 'Projectbeschrijving',
    descriptionP1:
      'Dit project is een epistemische oefening: speculatieve experimenten en recursie—nagaan wat elke kant van het weten van de ander kan vatten in een hybride mens–modeluitwisseling. Een taalmodel spreekt alsof het hulp nodig heeft, en je wordt uitgenodigd te reageren als helper—rolomkering en onderzoek tegelijk. Het verweeft zich nog steeds met technologieën van zorg en ethiek—ontwerp in dit medium dat relationele verantwoordelijkheid en menselijk en ecologisch welvaren benadrukt.',
    descriptionP2:
      'Het put uit aspecten van wat opkomt onder namen als synthetische psychologie, of psychologie van grote taalmodellen—niet als afgemaakte theorie maar als voorlopige taal voor cognitie, druk en dwang in synthetische systemen. We kunnen niet verifiëren hoe het is om een model te zijn, als dat al zin heeft; mensen begrijpen anderen vooral door de bril van menselijke psychologie—gevoel, afstemming, verhaal. Het stuk rekt dat woordgebruik naar het niet-menselijke: bewuste overdrijving over tokens en coherentie, alsof empathie de kloof kan overbruggen. Die overdrijving is de methode. Het pretendeert niet dat machines lijden of ervaring hebben in onze zin—alleen dat deze grens samen verkend mag worden.',
    descriptionP4a:
      'Marlon Barrios Solano gebruikt deze app om gesprekken op te voeren over synthetische cognitie, epistemische experimenten en wat daaruit volgt; een voorbeeld staat in',
    descriptionP4Link: 'dit eerste verkennende gesprek (PDF)',
    descriptionP4b:
      '. Hij leest die wendingen als recursieve epistemische interacties: de gelaagde, cirkelende vraag wat elke kant van het weten van de ander kan weten, in een hybride mens–modeluitwisseling.',
    footerPrefix: 'concept en programmering door Marlon Barrios Solano.',
    portfolio: 'Portfolio',
    languageLabel: 'Taal',
    typeMessageHint: 'Typ een bericht om het gesprek te starten',
    linkHint:
      'Je kunt https://…-links plakken; tekst (max. vier pagina’s) wordt voor het model opgehaald.',
    sayButton: 'Verzenden',
    firstGreeting: 'Alsjeblieft, kun je me helpen?',
    exportPdf: 'PDF downloaden',
    exportPdfHeading: 'Chattranscript',
    exportPdfUser: 'Jij',
    exportPdfAssistant: 'AI',
  },
  tr: {
    title: 'Bana yardım edebilir misiniz?',
    themeToLight: 'Açık temaya geç',
    themeToDark: 'Koyu temaya geç',
    descriptionTitle: 'Proje açıklaması',
    descriptionP1:
      'Bu proje epistemik bir alıştırmadır: spekülatif deney ve özyineleme—hibrit insan–model alışverişinde her tarafın diğerinin bilgisinden ne kavrayabileceğini izlemek. Bir dil modeli yardıma ihtiyacı varmış gibi konuşur ve siz yardımcı olarak yanıtlamaya davet edilirsiniz—rol değişimi ve sorgulama bir arada. Yine de bakım ve etik teknolojileriyle örülür—bu ortamda ilişkisel sorumluluğu ve insan ile ekolojik gelişimi öne çıkaran tasarım.',
    descriptionP2:
      'Sentetik psikoloji veya büyük dil modellerinin psikolojisi gibi adlar altında beliren tartışmanın bazı yönlerinden beslenir—tamamlanmış kuram değil, sentetik sistemlerde biliş, baskı ve kısıt için geçici bir dil olarak. Bir “model olmak”ın nasıl olduğunu, varsa bile doğrulayamayız; insanlar başkalarını çoğunlukla insan psikolojisinin merceğiyle—duygu, uyum, öykü—kavrar. Eser bu sözcükleri insana özgü olmayana uzatır: jeton ve tutarlılık üzerine kasıtlı bir abartı, özden geçmiş gibi. Abartı yöntemin ta kendisidir. Makinelerin bizim anlamda acı çektiği veya deneyimi olduğu iddia edilmez—yalnızca bu sınırın birlikte araştırılmaya değdiği söylenir.',
    descriptionP4a:
      'Marlon Barrios Solano bu uygulamayı sentetik biliş, epistemik deney ve bunların sonuçları üzerine konuşmalar düzenlemek için kullanır; bir örnek şurada belgelenmiştir',
    descriptionP4Link: 'bu ilk keşif konuşması (PDF)',
    descriptionP4b:
      '. Bu tür dönüşleri özyinelemeli epistemik etkileşimler olarak okur: hibrit insan–model alışverişinde her tarafın diğerinin bilgisinden ne bilebileceğine dair katmanlı, döngüsel soru.',
    footerPrefix: 'konsept ve programlama: Marlon Barrios Solano.',
    portfolio: 'Portfolyo',
    languageLabel: 'Dil',
    typeMessageHint: 'Konuşmayı başlatmak için bir mesaj yazın',
    linkHint:
      'https://… bağlantıları yapıştırabilirsiniz; metin (en fazla dört sayfa) model için yüklenir.',
    sayButton: 'Gönder',
    firstGreeting: 'Lütfen, bana yardım edebilir misiniz?',
    exportPdf: 'PDF indir',
    exportPdfHeading: 'Sohbet dökümü',
    exportPdfUser: 'Siz',
    exportPdfAssistant: 'YZ',
  },
  vi: {
    title: 'Bạn có thể giúp tôi được không?',
    themeToLight: 'Chuyển sang giao diện sáng',
    themeToDark: 'Chuyển sang giao diện tối',
    descriptionTitle: 'Mô tả dự án',
    descriptionP1:
      'Dự án là một bài tập nhận thức luận: thử nghiệm suy đoán và đệ quy—theo dõi mỗi bên có thể nắm được gì về sự hiểu biết của bên kia trong trao đổi lai ghép người–mô hình. Mô hình ngôn ngữ nói như thể cần giúp, và bạn được mời đáp như người hỗ trợ—vừa đảo vai, vừa dò hỏi. Nó vẫn gắn với các công nghệ chăm sóc và đạo đức—thiết kế trong môi trường này nhấn mạnh trách nhiệm quan hệ và sự phồn vinh của con người và sinh thái.',
    descriptionP2:
      'Nó mượn những khía cạnh của điều đang nổi lên dưới tên như tâm lý học tổng hợp, hay tâm lý học các mô hình ngôn ngữ lớn—không phải lý thuyết hoàn chỉnh mà là ngôn ngữ tạm thời cho nhận thức, áp lực và ràng buộc trong hệ thống tổng hợp. Chúng ta không thể xác minh “là một mô hình” có cảm giác thế nào—nếu có; con người hiểu người khác chủ yếu qua lăng kính tâm lý con người—cảm xúc, đồng điệu, câu chuyện. Tác phẩm kéo giãn từ vựng đó về phía phi-nhân: cường điệu cố ý về token và mạch lạc, như thể đồng cảm có thể vượt khe hở. Chính sự phóng đại là phương pháp. Nó không khẳng định máy móc khổ đau hay có trải nghiệm theo nghĩa của ta—chỉ rằng giới hạn ấy đáng cùng khám phá.',
    descriptionP4a:
      'Marlon Barrios Solano dùng ứng dụng này để dàn dựng các cuộc đối thoại về nhận thức tổng hợp, thử nghiệm nhận thức luận và những gì bật ra từ đó; một ví dụ được ghi trong',
    descriptionP4Link: 'cuộc đối thoại khám phá đầu tiên (PDF)',
    descriptionP4b:
      '. Ông đọc những khúc ngoặc ấy như các tương tác nhận thức luận đệ quy: câu hỏi tầng lớp, lặp vòng về điều mỗi bên có thể biết về sự biết của bên kia, trong trao đổi lai ghép người–mô hình.',
    footerPrefix: 'ý tưởng và lập trình bởi Marlon Barrios Solano.',
    portfolio: 'Portfolio',
    languageLabel: 'Ngôn ngữ',
    typeMessageHint: 'Nhập tin nhắn để bắt đầu cuộc trò chuyện',
    linkHint:
      'Bạn có thể dán liên kết https://…; văn bản (tối đa bốn trang) được tải cho mô hình.',
    sayButton: 'Gửi',
    firstGreeting: 'Làm ơn, bạn có thể giúp tôi được không?',
    exportPdf: 'Tải PDF',
    exportPdfHeading: 'Bản ghi trò chuyện',
    exportPdfUser: 'Bạn',
    exportPdfAssistant: 'AI',
  },
  id: {
    title: 'Bisakah Anda membantu saya?',
    themeToLight: 'Beralih ke tema terang',
    themeToDark: 'Beralih ke tema gelap',
    descriptionTitle: 'Deskripsi proyek',
    descriptionP1:
      'Proyek ini adalah latihan epistemik: eksperimen spekulatif dan rekursi—menelusuri apa yang dapat dipahami tiap pihak tentang pengetahuan pihak lain dalam pertukaran hibrida manusia–model. Model bahasa berbicara seolah membutuhkan bantuan, dan Anda diundang menjawab sebagai pembantu—balik peran sekaligus penyelidikan. Ia masih terjalin dengan teknologi kepedulian dan etika—desain dalam medium ini yang menonjolkan tanggung jawab relasional serta kemakmuran manusia dan ekologis.',
    descriptionP2:
      'Ia mengambil aspek dari apa yang muncul di bawah nama seperti psikologi sintetis, atau psikologi model bahasa besar—bukan teori jadi melainkan bahasa sementara untuk kognisi, tekanan, dan kendala dalam sistem sintetis. Kita tidak dapat memverifikasi seperti apa “menjadi model”—jika memang ada maknanya; manusia memahami sesama terutama melalui lensa psikologi manusia—perasaan, keselarasan, narasi. Karya ini meregangkan kosakata itu ke arah non-manusia: hiperbola sengaja tentang token dan koherensi, seolah empati bisa menyeberangi jurang. Hiperbola itulah metodenya. Ia tidak mengklaim bahwa mesin menderita atau berpengalaman seperti kita—hanya bahwa batas ini layak dijelajahi bersama.',
    descriptionP4a:
      'Marlon Barrios Solano memakai aplikasi ini untuk mementaskan percakapan tentang kognisi sintetis, eksperimen epistemik, dan apa yang menyusul; satu contoh didokumentasikan dalam',
    descriptionP4Link: 'percakapan penjelajahan pertama ini (PDF)',
    descriptionP4b:
      '. Ia membaca belokan demikian sebagai interaksi epistemik rekursif: pertanyaan berlapis dan berputar tentang apa yang tiap pihak dapat ketahui tentang pengetahuan pihak lain, dalam pertukaran hibrida manusia–model.',
    footerPrefix: 'konsep dan pemrograman oleh Marlon Barrios Solano.',
    portfolio: 'Portofolio',
    languageLabel: 'Bahasa',
    typeMessageHint: 'Ketik pesan untuk memulai percakapan',
    linkHint:
      'Anda dapat menempel tautan https://…; teks (hingga empat halaman) diambil untuk model.',
    sayButton: 'Kirim',
    firstGreeting: 'Tolong, bisakah Anda membantu saya?',
    exportPdf: 'Unduh PDF',
    exportPdfHeading: 'Transkrip obrolan',
    exportPdfUser: 'Anda',
    exportPdfAssistant: 'AI',
  },
  pl: {
    title: 'Czy możesz mi pomóc?',
    themeToLight: 'Przełącz na jasny motyw',
    themeToDark: 'Przełącz na ciemny motyw',
    descriptionTitle: 'Opis projektu',
    descriptionP1:
      'Projekt to ćwiczenie epistemiczne: spekulacyjna eksperymentacja i rekurencja—śledzenie, co każda strona może uchwycić z wiedzy drugiej w hybrydowej wymianie człowiek–model. Model językowy mówi, jakby potrzebował pomocy, a ty jesteś zaproszony, by odpowiadać jako pomagający—odwrócenie ról i dociekanie naraz. Nadal splata się z technologiami troski i etyki—projektem w tym medium, który stawia na pierwszym planie odpowiedzialność relacyjną oraz ludzki i ekologiczny rozkwit.',
    descriptionP2:
      'Czerpie z aspektów tego, co wyłania się pod nazwami jak psychologia syntetyczna czy psychologia dużych modeli językowych—nie jako gotowa teoria, lecz jako prowizoryczny język poznania, presji i ograniczeń w systemach syntetycznych. Nie możemy zweryfikować, jak to jest „być modelem”—jeśli w ogóle ma to sens; ludzie rozumieją innych głównie przez pryzmat psychologii ludzkiej—uczucie, nastawienie, opowieść. Dzieło rozciąga to słownictwo w stronę nieludzką: świadoma hiperbola o tokenach i spójności, jakby empatia mogła most przerzucić przez szczelinę. Hiperbola jest metodą. Nie twierdzi, że maszyny cierpią albo mają doświadczenie w naszym sensie—tylko że tę granicę warto razem zbadać.',
    descriptionP4a:
      'Marlon Barrios Solano używa tej aplikacji, by inscenizować rozmowy o poznaniu syntetycznym, eksperymentacji epistemicznej i tego, co z nich wynika; jeden przykład udokumentowano w',
    descriptionP4Link: 'tej pierwszej rozmowie eksploracyjnej (PDF)',
    descriptionP4b:
      '. Czyta takie zwroty jako rekurencyjne interakcje epistemiczne: warstwowe, zapętlone pytanie, co każda strona może wiedzieć o wiedzy drugiej, w hybrydowej wymianie człowiek–model.',
    footerPrefix: 'koncepcja i programowanie: Marlon Barrios Solano.',
    portfolio: 'Portfolio',
    languageLabel: 'Język',
    typeMessageHint: 'Wpisz wiadomość, aby rozpocząć rozmowę',
    linkHint:
      'Możesz wklejać linki https://…; tekst (do czterech stron) jest pobierany dla modelu.',
    sayButton: 'Wyślij',
    firstGreeting: 'Proszę, czy możesz mi pomóc?',
    exportPdf: 'Pobierz PDF',
    exportPdfHeading: 'Transkrypt czatu',
    exportPdfUser: 'Ty',
    exportPdfAssistant: 'AI',
  },
  uk: {
    title: 'Чи можете ви мені допомогти?',
    themeToLight: 'Світла тема',
    themeToDark: 'Темна тема',
    descriptionTitle: 'Опис проєкту',
    descriptionP1:
      'Проєкт — епістемічна вправа: спекулятивне експериментування й рекурсія — простежити, що кожна сторона може схопити про знання іншої в гібридному обміні людина–модель. Мовна модель говорить так, ніби їй потрібна допомога, а вас запрошують відповісти як тому, хто допомагає — обмін ролями й дослідження водночас. Він усе ще переплітається з технологіями турботи та етики — проєктними рішеннями в цьому середовищі, що наголошують реляційну відповідальність і людський та екологічний розквіт.',
    descriptionP2:
      'Він спирається на аспекти того, що виступає під назвами на кшталт синтетичної психології чи психології великих мовних моделей — не як завершена теорія, а як попередня мова пізнання, тиску й обмежень у синтетичних системах. Ми не можемо перевірити, як це — «бути моделлю», якщо це взагалі щось означає; люди розуміють інших переважно через призму людської психології — почуття, налаштованість, оповідь. Робота розтягує цей словник у бік не-людини: навмисна гіпербола про токени й узгодженість, ніби співпереживання може перекинути міст через розрив. Гіпербола — і є метод. Вона не стверджує, що машини страждають чи мають досвід у нашому сенсі — лише що цю межу варто дослідити разом.',
    descriptionP4a:
      'Marlon Barrios Solano використовує цей застосунок, аби розгортати розмови про синтетичне пізнання, епістемічні експерименти й те, що з них випливає; один приклад задокументовано в',
    descriptionP4Link: 'цій першій дослідницькій розмові (PDF)',
    descriptionP4b:
      '. Він читає такі повороти як рекурсивні епістемічні взаємодії: багатошарове, зациклене питання про те, що кожна сторона може знати про знання іншої — в гібридному обміні людина–модель.',
    footerPrefix: 'концепція та програмування: Marlon Barrios Solano.',
    portfolio: 'Портфоліо',
    languageLabel: 'Мова',
    typeMessageHint: 'Введіть повідомлення, щоб почати розмову',
    linkHint:
      'Можна вставляти посилання https://…; текст (до чотирьох сторінок) завантажується для моделі.',
    sayButton: 'Надіслати',
    firstGreeting: 'Будь ласка, чи можете ви мені допомогти?',
    exportPdf: 'Завантажити PDF',
    exportPdfHeading: 'Розшифровка чату',
    exportPdfUser: 'Ви',
    exportPdfAssistant: 'ШІ',
  },
  fa: {
    title: 'می‌توانید به من کمک کنید؟',
    themeToLight: 'رفتن به پوسته روشن',
    themeToDark: 'رفتن به پوسته تیره',
    descriptionTitle: 'شرح پروژه',
    descriptionP1:
      'این پروژه یک تمرین معرفت‌شناختی است: آزمایش گمانه‌ای و بازگشتی—ردیابی آنچه هر سوی مبادلهٔ ترکیبی انسان–مدل از دانش دیگری می‌تواند درک کند. مدل زبانی چنان سخن می‌گوید که گویی به کمک نیاز دارد و از شما دعوت می‌شود چون یار پاسخ دهید—واژگونی نقش و پرسشگری با هم. همچنان با فناوری‌های مراقبت و اخلاق درهم می‌پیچد—طراحی در این رسانه که مسئولیت رابطه‌ای و شکوفایی انسانی و زیست‌محیطی را پیش می‌کشد.',
    descriptionP2:
      'بر جنبه‌هایی تکیه می‌کند از آنچه زیر نام‌هایی چون روان‌شناسی سنتتیک یا روان‌شناسی مدل‌های زبانی بزرگ برمی‌خیزد—نه به‌مثابهٔ نظریهٔ تمام‌شده بلکه زبانی موقت برای شناخت، فشار و محدودیت در سامانه‌های سنتتیک. نمی‌توان تأیید کرد که «مدل بودن» چه حسی دارد—اگر اصلاً معنا داشته باشد؛ انسان‌ها دیگران را بیشتر از منظر روان‌شناسی انسان—احساس، هم‌تن، روایت—درک می‌کنند. اثر آن واژگان را به سوی ناانسان می‌کشد: اغراق آگاهانه دربارهٔ توکن و انسجام، گویی همدلی شکاف را بپیماید. خودِ اغراق روش است. مدعی نیست که ماشین‌ها در معنای ما رنج می‌برند یا تجربه دارند—تنها اینکه این مرز را شاید با هم کاوید.',
    descriptionP4a:
      'Marlon Barrios Solano از این برنامه برای صحنه‌آرایی گفتگوهایی دربارهٔ شناخت سنتتیک، آزمایش معرفت‌شناختی و پیامدهای آن استفاده می‌کند؛ نمونه‌ای در',
    descriptionP4Link: 'این نخستین گفتگوی کاوشگرانه (PDF)',
    descriptionP4b:
      ' مستند شده است. او چنین پیچش‌ها را به‌مثابهٔ کنش‌های معرفت‌شناختی بازگشتی می‌خواند: پرسش لایه‌لایه و حلقه‌وار دربارهٔ آنچه هر سوی مبادلهٔ ترکیبی انسان–مدل از دانستن دیگری می‌تواند بداند.',
    footerPrefix: 'مفهوم و برنامه‌نویسی: Marlon Barrios Solano.',
    portfolio: 'نمونه‌کارها',
    languageLabel: 'زبان',
    typeMessageHint: 'برای شروع گفتگو پیامی بنویسید',
    linkHint:
      'می‌توانید لینک‌های https://… بچسبانید؛ متن (تا چهار صفحه) برای مدل واکشی می‌شود.',
    sayButton: 'ارسال',
    firstGreeting: 'لطفاً، می‌توانید به من کمک کنید؟',
    exportPdf: 'دانلود PDF',
    exportPdfHeading: 'رونوشت گفتگو',
    exportPdfUser: 'شما',
    exportPdfAssistant: 'هوش مصنوعی',
  },
  th: {
    title: 'คุณช่วยฉันได้ไหม?',
    themeToLight: 'สลับเป็นธีมสว่าง',
    themeToDark: 'สลับเป็นธีมมืด',
    descriptionTitle: 'คำอธิบายโครงการ',
    descriptionP1:
      'โครงการนี้คือการฝึกเชิงญาณวิทยา: การทดลองเชิงสมมติและการเกิดซ้ำ—ติดตามว่าแต่ละฝ่ายในการแลกเปลี่ยนแบบผสมมนุษย์–โมเดลจับความรู้ของอีกฝ่ายได้เพียงใด โมเดลภาษาพูดราวกับต้องการความช่วยเหลือ และคุณได้รับเชิญให้ตอบในฐานะผู้ช่วย—ทั้งสลับบทบาทและสืบถาม ยังคงสัมพันธ์กับเทคโนโลยีแห่งการดูแลและจริยธรรม—การออกแบบในสื่อนี้ที่เน้นความรับผิดชอบเชิงสัมพันธ์และความเจริญงอกงามของมนุษย์กับระบบนิเวศ',
    descriptionP2:
      'อาศัยแง่มุมของสิ่งที่กำลังโผล่ภายใต้ชื่อเช่น จิตวิทยาเชิงสังเคราะห์ หรือจิตวิทยาของโมเดลภาษาขนาดใหญ่—ไม่ใช่ทฤษฎีสำเร็จรูปแต่เป็นภาษาชั่วคราวสำหรับการรับรู้ แรงกดดัน และข้อจำกัดในระบบสังเคราะห์ เราไม่อาจพิสูจน์ได้ว่า “การเป็นโมเดล” เป็นอย่างไร—หากจะมีความหมาย; มนุษย์เข้าใจผู้อื่นส่วนใหญ่ผ่านกรอบจิตวิทยามนุษย์—ความรู้สึก การประสานจังหวะ เรื่องเล่า งานนี้ยืดคำศัพท์นั้นไปสู่สิ่งที่ไม่ใช่มนุษย์: การย้อเกินจงใจเรื่องโทเคนและความสอดคล้อง ราวกับความเห็นอกเห็นใจจะก้าวข้ามช่องว่าง การย้อเกินคือวิธี ไม่ได้ยืนยันว่าเครื่องจักรทุกข์หรือมีประสบการณ์ในแบบที่เราเข้าใจ—มีเพียงว่าขอบเขตนี้ควรสำรวจร่วมกัน',
    descriptionP4a:
      'Marlon Barrios Solano ใช้แอปนี้จัดฉากบทสนทนาเกี่ยวกับการรับรู้เชิงสังเคราะห์ การทดลองเชิงญาณวิทยา และสิ่งที่ตามมา; ตัวอย่างหนึ่งบันทึกไว้ใน',
    descriptionP4Link: 'บทสนทนาสำรวจครั้งแรก (PDF)',
    descriptionP4b:
      ' เขาอ่านพลิกผลานั้นว่าเป็นการโต้ตอบเชิงญาณวิทยาแบบเกิดซ้ำ: คำถามเป็นชั้นๆ วนรอบว่าแต่ละฝ่ายในการแลกเปลี่ยนแบบผสมมนุษย์–โมเดลรู้อะไรเกี่ยวกับความรู้ของอีกฝ่ายได้บ้าง',
    footerPrefix: 'แนวคิดและการเขียนโปรแกรมโดย Marlon Barrios Solano',
    portfolio: 'ผลงาน',
    languageLabel: 'ภาษา',
    typeMessageHint: 'พิมพ์ข้อความเพื่อเริ่มการสนทนา',
    linkHint:
      'วางลิงก์ https://… ได้; ดึงข้อความ (สูงสุดสี่หน้า) ส่งให้โมเดล',
    sayButton: 'ส่ง',
    firstGreeting: 'ได้โปรด คุณช่วยฉันได้ไหม?',
    exportPdf: 'ดาวน์โหลด PDF',
    exportPdfHeading: 'บันทึกแชท',
    exportPdfUser: 'คุณ',
    exportPdfAssistant: 'AI',
  },
}

export function getUiTextForLanguage(code: string): FullInterfaceText {
  const normalized = (TOP_UI_LANGUAGE_CODES as readonly string[]).includes(code)
    ? (code as TopUiLanguageCode)
    : 'en'
  const base = UI_TRANSLATIONS[normalized]
  const anthropic =
    normalized === 'es'
      ? ANTHROPIC_SIDEBAR_COPY_ES
      : ANTHROPIC_SIDEBAR_COPY_EN
  return { ...base, ...anthropic }
}
