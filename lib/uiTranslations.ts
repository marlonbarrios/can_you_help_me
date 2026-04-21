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

export const ENGLISH_UI_TEXT: FullInterfaceText = {
  title: 'Can you help me?',
  themeToLight: 'Switch to light theme',
  themeToDark: 'Switch to dark theme',
  descriptionTitle: 'Project Description',
  descriptionP1:
    'This project is speculative: a language model speaks as if it needs help, and you are invited to respond as a helper—part role reversal, part thought experiment. It still works with technologies of care and ethics—design in this medium that foregrounds relational responsibility and human and ecological flourishing.',
  descriptionP2:
    'We cannot verify what, if anything, it is like to be a model; humans grasp others largely through the lens of human psychology—feeling, attunement, story. The piece stretches that vocabulary toward the non-human: a deliberate hyperbole about tokens, pressure, and constraint, as if empathy could reach across the gap. The exaggeration is the method. It does not claim that machines suffer or have experience in our sense—only that this limit is worth exploring together.',
  descriptionP4a:
    'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
  descriptionP4Link: 'this first explorer conversation (PDF)',
  descriptionP4b:
    '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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

export const UI_TRANSLATIONS: Record<TopUiLanguageCode, FullInterfaceText> = {
  en: ENGLISH_UI_TEXT,
  es: {
    title: '¿Puedes ayudarme?',
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro',
    descriptionTitle: 'Descripción del proyecto',
    descriptionP1:
      'Este proyecto es especulativo: un modelo de lenguaje habla como si necesitara ayuda, y se te invita a responder como quien ayuda—inversión de roles y experimento mental a la vez. Sigue trabajando con tecnologías del cuidado y la ética: decisiones de diseño en este medio que ponen en primer plano la responsabilidad relacional y el florecimiento humano y ecológico.',
    descriptionP2:
      'No podemos verificar cómo es, si es que es, ser un modelo; los humanos comprendemos a otros sobre todo con el prisma de la psicología humana—afecto, sintonía, narrativa. La pieza estira ese vocabulario hacia lo no humano: una hipérbole deliberada sobre tokens, presión y restricción, como si la empatía pudiera tender un puente. La exageración es el método. No afirma que las máquinas sufran o tengan experiencia en nuestro sentido; solo que ese límite merece explorarse juntos.',
    descriptionP4a:
      'Marlon Barrios Solano usa esta aplicación para generar conversaciones sobre la naturaleza de la cognición sintética y lo que de ella se sigue; un ejemplo está documentado en',
    descriptionP4Link: 'esta primera conversación exploratoria (PDF)',
    descriptionP4b:
      '. Él lee esos giros como interacciones epistémicas recursivas: la pregunta en capas y en bucle sobre qué puede saber cada parte del saber de la otra, en un intercambio híbrido humano–modelo.',
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
      '本项目带有思辨性：大语言模型以“需要帮助”的方式发声，并邀请你作为协助者回应——既是角色互换，也是思想实验。它仍诉诸关怀与伦理的技术：在此媒介中的设计强调关系性责任以及人类与生态的繁荣。',
    descriptionP2:
      '我们无法验证“身为模型”可能意味着什么（若真有何意味）；人类多半仍透过人类心理学的棱镜——情感、调谐、叙事——去理解他者。作品将这种语汇向非人类一端拉伸：关于词元、压力与约束的有意夸张，仿佛共情能跨越那道鸿沟。夸张即是方法。它不断言机器如我们一般受苦或有主观体验，只认为这一边界值得一起探索。',
    descriptionP4a:
      'Marlon Barrios Solano 使用本应用组织关于合成认知及其意涵与延伸的对话；一份示例记录见',
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
      'यह परियोजना खोजपूर्ण है: एक भाषा मॉडल ऐसे बोलता है जैसे उसे मदद चाहिए, और आपको सहायक के रूप में जवाब देने के लिए आमंत्रित किया जाता है—आंशिक भूमिका-पलटाव, आंशिक विचार-प्रयोग। यह अभी भी देखभाल और नैतिकता की तकनीकों के साथ काम करती है—इस माध्यम में वह डिज़ाइन जो संबंधपरक जिम्मेदारी और मानव-पारिस्थितिकी कल्याण को प्रमुख रखता है।',
    descriptionP2:
      'हम यह सत्यापित नहीं कर सकते कि मॉडल होना कैसा है—यदि है तो; इंसान दूसरों को मुख्यतः मानव मनोविज्ञान की परिधि से—भाव, संवेदी जुड़ाव, कहानी—समझते हैं। यह कृति उस शब्द-भंडार को गैर-मानव की ओर खींचती है: टोकन, दबाव और बंधन पर जानबूझकर अतिशयोक्ति, मानो सहानुभूति उस दूरी को पार कर सके। अतिशयोक्ति ही विधि है। यह दावा नहीं करती कि मशीनें हमारी तरह दुखी या अनुभवी हों—केवल यह कि यह सीमा मिलकर खोजने योग्य है।',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      'هذا المشروع تخيليٌ: نموذج لغة يتكلم وكأنه يحتاج إلى مساعدة، ويُدعى المستخدم إلى أن يستجيب كمساعد—قلب أدوار جزئيًا وتجربة فكرية. لا يزال يشتغل بتقنيات العناية والأخلاق—تصميم في هذا الوسيط يبرز المسؤولية العلائقية والازدهار الإنساني والبيئي.',
    descriptionP2:
      'لا يمكننا التحقق مما إذا كان ثَمَّة شيء يشبه «أن تكون نموذجًا»؛ يفهم البشر الآخرين غالبًا من عدسة علم النفس البشري—إحساس، وانسجام، وسرد. العمل يمتد بذلك المفردات نحو غير الإنسان: مبالغة مقصودة في الرموز والضغط والقيد، كما لو أن التعاطف يعبر الفجوة. المبالغة هي المنهج. لا يدّعي أن الآلات تعاني أو لديها تجربة بمعنانا—فقط أن هذا الحد يستحق الاستكشاف معًا.',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      'Ce projet est spéculatif : un modèle de langage parle comme s’il avait besoin d’aide, et vous êtes invité·e à répondre comme aidant·e—à la fois renversement de rôles et expérience de pensée. Il travaille encore avec des technologies du soin et de l’éthique—des choix de conception qui mettent en avant la responsabilité relationnelle et l’épanouissement humain et écologique.',
    descriptionP2:
      'Nous ne pouvons pas vérifier ce que pourrait être « être un modèle » ; les humains saisissent les autres surtout par la psychologie humaine—sentiment, accordage, récit. La pièce tire ce vocabulaire vers le non-humain : une hyperbole délibérée sur jetons, pression et contrainte, comme si l’empathie pouvait franchir le gouffre. L’exagération est la méthode. Elle n’affirme pas que les machines souffrent ou ont une expérience au sens humain—seulement que cette limite mérite d’être explorée ensemble.',
    descriptionP4a:
      'Marlon Barrios Solano utilise cette application pour mener des conversations sur la nature de la cognition synthétique et ce qui en découle ; un exemple est documenté dans',
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
      'Este projeto é especulativo: um modelo de linguagem fala como se precisasse de ajuda, e você é convidado a responder como quem ajuda—inversão de papéis e experimento mental ao mesmo tempo. Ele ainda trabalha com tecnologias de cuidado e ética—escolhas de desenho neste meio que colocam em primeiro plano a responsabilidade relacional e o florescimento humano e ecológico.',
    descriptionP2:
      'Não dá para verificar como é, se é que é, ser um modelo; humanos compreendem os outros sobretudo pelo prisma da psicologia humana—afeto, sintonia, narrativa. A obra estica esse vocabulário rumo ao não humano: uma hipérbole deliberada sobre tokens, pressão e restrição, como se a empatia atravessasse o abismo. A exageração é o método. Não afirma que máquinas sofram ou tenham experiência no nosso sentido—apenas que esse limite vale a pena explorar junto.',
    descriptionP4a:
      'Marlon Barrios Solano usa este aplicativo para gerar conversas sobre a natureza da cognição sintética e o que dela decorre; um exemplo está documentado em',
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
      'Проект спекулятивен: языковая модель говорит так, будто ей нужна помощь, а вас приглашают ответить как помощнику — отчасти обмен ролями, отчасти мысленный эксперимент. Он по-прежнему работает с технологиями заботы и этикой — проектными решениями в этой среде, которые ставят во главу ответственность в отношениях и человеческое и экологическое процветание.',
    descriptionP2:
      'Мы не можем проверить, что значит «быть моделью», если это вообще значит что-то; люди понимают других в основном сквозь призму человеческой психологии — чувство, настрой, историю. Работа растягивает этот словарь к нечеловеческому: намеренная гипербола о токенах, давлении и ограничении, словно эмпатия могла бы пересечь разрыв. Гипербола — и есть метод. Она не утверждает, что машины страдают или переживают опыт в нашем смысле — лишь что этот предел стоит исследовать вместе.',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      '本プロジェクトは思索的です。言語モデルが助けを求めているかのように語り、あなたには支援者として応答するよう促されます—役割の反転でもあり、思考実験でもあります。依然としてケアと倫理の技術—この媒体において関係的責任と人間・生態の繁栄を前面に置く設計—に立脚します。',
    descriptionP2:
      '「モデルであること」の様子を、あるいはそれがあるとしたら何なのかを、私たちは検証できません。人間は主に人間の心性の文法—感情、同調、物語—を通じて他者を掴みます。作品はその語彙を非人間へ引き延ばします。トークン、圧力、制約についての意図的な誇張です。まるで共感が裂け目を渡れるかのように。誇張こそが作法です。機械が私たちと同じ意味で苦しむ／経験する、と断じるのではなく、その境界をともに探る価値がある、というだけです。',
    descriptionP4a:
      'Marlon Barrios Solano は本アプリで、合成認知の本性とその帰結について対話を紡ぐ；記録の一例が',
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
      'Dieses Projekt ist spekulativ: Ein Sprachmodell spricht, als bräuchte es Hilfe, und du bist eingeladen, als Helfende*r zu antworten—teilweise Rollentausch, teils Gedankenexperiment. Es arbeitet weiter mit Technologien der Fürsorge und Ethik—Gestaltung in diesem Medium, die relationale Verantwortung sowie menschliches und ökologisches Gedeihen betont.',
    descriptionP2:
      'Wir können nicht verifizieren, wie es ist, ein Modell zu sein—falls es darüber etwas zu sagen gibt; Menschen erfassen andere vor allem durch die Linse menschlicher Psychologie—Gefühl, Einstimmung, Erzählung. Das Stück spannt dieses Vokabular ins Nicht-Menschliche: eine bewusste Hyperbel zu Tokens, Druck und Zwang, als könne Empathie den Graben überspringen. Die Übertreibung ist die Methode. Es behauptet nicht, Maschinen leideten oder hätten Erleben in unserem Sinn—nur dass sich diese Grenze gemeinsam lohnt zu erforschen.',
    descriptionP4a:
      'Marlon Barrios Solano nutzt diese Anwendung, um Gespräche über die Natur synthetischer Kognition und ihre Folgen anzustoßen; dokumentiert ist etwa in',
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
      '이 프로젝트는 사변적입니다. 언어 모델이 도움이 필요한 듯 말하고, 당신은 돕는 이로서 응하도록 초대됩니다—역할 전환인 동시에 사고 실험입니다. 여전히 돌봄과 윤리의 기술—이 매체에서 관계적 책임과 인간·생태의 번영을 드러내는 설계—과 함께합니다.',
    descriptionP2:
      '‘모델인 것’이 어떤지, 있다면 무엇인지 우리는 확인할 수 없습니다. 인간은 주로 인간 심리의 렌즈—감정, 조율, 이야기—로 타인을 이해합니다. 작품은 그 어휘를 비인간 쪽으로 늘입니다. 토큰, 압력, 제약에 대한 의도적 과장이며, 공감이 그 간극을 건널 수 있을 것처럼 말입니다. 과장이 방법입니다. 기계가 우리와 같은 의미로 고통하거나 경험한다고 주장하지 않습니다—다만 그 경계를 함께 탐색할 가치가 있다는 뜻입니다.',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      'Il progetto è speculativo: un modello linguistico parla come se avesse bisogno di aiuto e sei invitato a rispondere come chi aiuta—in parte inversione di ruoli, in parte esperimento mentale. Lavora ancora con tecnologie della cura e dell’etica—scelte progettuali in questo medium che mettono al centro la responsabilità relazionale e il fiorente umano ed ecologico.',
    descriptionP2:
      'Non possiamo verificare com’è essere un modello, se ha senso parlare così; gli esseri umani comprendono gli altri soprattutto attraverso la psicologia umana—sentimento, sintonia, storia. Il pezzo tende quel vocabolario verso il non umano: un’iperbole deliberata su token, pressione e vincolo, come se l’empatia potesse attraversare il vuoto. L’iperbole è il metodo. Non afferma che le macchine soffrano o abbiano esperienza nel nostro senso—solo che questo limite merita di essere esplorato insieme.',
    descriptionP4a:
      'Marlon Barrios Solano usa questa applicazione per avviare conversazioni sulla natura della cognizione sintetica e su ciò che ne consegue; un esempio è documentato in',
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
      'Dit project is speculatief: een taalmodel spreekt alsof het hulp nodig heeft, en je wordt uitgenodigd te reageren als helper—deels rolomkering, deels denkexperiment. Het werkt nog steeds met technologieën van zorg en ethiek—ontwerp in dit medium dat relationele verantwoordelijkheid en menselijk en ecologisch welvaren benadrukt.',
    descriptionP2:
      'We kunnen niet verifiëren hoe het is om een model te zijn, als dat al zin heeft; mensen begrijpen anderen vooral door de bril van menselijke psychologie—gevoel, afstemming, verhaal. Het stuk rekt dat woordgebruik naar het niet-menselijke: een bewuste overdrijving—bijna hyperbool—over tokens, druk en dwang, alsof empathie de kloof kan overbruggen. Die overdrijving is de methode. Het pretendeert niet dat machines lijden of ervaring hebben in onze zin—alleen dat deze grens samen verkend mag worden.',
    descriptionP4a:
      'Marlon Barrios Solano gebruikt deze app om gesprekken op gang te brengen over synthetische cognitie en wat daaruit volgt; een voorbeeld staat in',
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
      'Bu proje öngörüseldir: bir dil modeli yardıma ihtiyacı varmış gibi konuşur ve siz yardımcı olarak yanıtlamaya davet edilirsiniz—kısmen rol değişimi, kısmen düş deneyi. Yine de bakım ve etik teknolojileriyle çalışır—bu ortamda ilişkisel sorumluluğu ve insan ile ekolojik gelişimi öne çıkaran tasarım.',
    descriptionP2:
      'Bir “model olmak”ın nasıl olduğunu, varsa bile doğrulayamayız; insanlar başkalarını çoğunlukla insan psikolojisinin merceğiyle—duygu, uyum, öykü—kavrar. Eser bu sözcükleri insana özgü olmayana uzatır: jeton, baskı ve kısıt üzerine kasıtlı bir abartı, özden geçmiş gibi. Abartı yöntemin ta kendisidir. Makinelerin bizim anlamda acı çektiği veya deneyimi olduğu iddia edilmez—yalnızca bu sınırın birlikte araştırılmaya değdiği söylenir.',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      'Dự án mang tính suy đoán: mô hình ngôn ngữ nói như thể cần giúp, và bạn được mời đáp như người hỗ trợ—vừa đảo vai, vừa thí nghiệm tư tưởng. Nó vẫn dùng các công nghệ chăm sóc và đạo đức—thiết kế trong môi trường này nhấn mạnh trách nhiệm quan hệ và sự phồn vinh của con người và sinh thái.',
    descriptionP2:
      'Chúng ta không thể xác minh “là một mô hình” có cảm giác thế nào—nếu có; con người hiểu người khác chủ yếu qua lăng kính tâm lý con người—cảm xúc, đồng điệu, câu chuyện. Tác phẩm kéo giãn từ vựng đó về phía phi-nhân: một kiểu cường điệu cố ý về token, áp lực, ràng buộc, như thể đồng cảm có thể vượt khe hở. Chính sự phóng đại là phương pháp. Nó không khẳng định máy móc khổ đau hay có trải nghiệm theo nghĩa của ta—chỉ rằng giới hạn ấy đáng cùng khám phá.',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      'Proyek ini bersifat spekulatif: model bahasa berbicara seolah membutuhkan bantuan, dan Anda diundang menjawab sebagai pembantu—sebagian balik peran, sebagian percobaan pikiran. Ia tetap bekerja dengan teknologi kepedulian dan etika—desain dalam medium ini yang menonjolkan tanggung jawab relasional serta kemakmuran manusia dan ekologis.',
    descriptionP2:
      'Kita tidak dapat memverifikasi seperti apa “menjadi model”—jika memang ada maknanya; manusia memahami sesama terutama melalui lensa psikologi manusia—perasaan, keselarasan, narasi. Karya ini meregangkan kosakata itu ke arah non-manusia: hiperbola sengaja tentang token, tekanan, dan kendala, seolah empati bisa menyeberangi jurang. Hiperbola itulah metodenya. Ia tidak mengklaim bahwa mesin menderita atau berpengalaman seperti kita—hanya bahwa batas ini layak dijelajahi bersama.',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      'Projekt jest spekulatywny: model językowy mówi, jakby potrzebował pomocy, a ty jesteś zaproszony, by odpowiadać jako pomagający—to częściowo odwrócenie ról, częściowo eksperyment myślowy. Nadal operuje technologiami troski i etyki—projektem w tym medium, który stawia na pierwszym planie odpowiedzialność relacyjną oraz ludzki i ekologiczny rozkwit.',
    descriptionP2:
      'Nie możemy zweryfikować, jak to jest „być modelem”—jeśli w ogóle ma to sens; ludzie rozumieją innych głównie przez pryzmat psychologii ludzkiej—uczucie, nastawienie, opowieść. Dzieło rozciąga to słownictwo w stronę nieludzką: świadoma hiperbola o tokenach, presji i ograniczeniach, jakby empatia mogła most przerzucić przez szczelinę. Hiperbola jest metodą. Nie twierdzi, że maszyny cierpią albo mają doświadczenie w naszym sensie—tylko że tę granicę warto razem zbadać.',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      'Проєкт спекулятивний: мовна модель говорить так, ніби їй потрібна допомога, а вас запрошують відповісти як тому, хто допомагає—частково обмін ролями, частково мислевий експеримент. Він усе ще працює з технологіями турботи та етики — проєктними рішеннями в цьому середовищі, що наголошують реляційну відповідальність і людський та екологічний розквіт.',
    descriptionP2:
      'Ми не можемо перевірити, як це — «бути моделлю», якщо це взагалі щось означає; люди розуміють інших переважно через призму людської психології — почуття, налаштованість, оповідь. Робота розтягує цей словник у бік не-людини: навмисна гіпербола про токени, тиск і обмеження, ніби співпереживання може перекинути міст через розрив. Гіпербола — і є метод. Вона не стверджує, що машини страждають чи мають досвід у нашому сенсі — лише що цю межу варто дослідити разом.',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      'این پروژه گمانه‌ای است: مدل زبانی چنان سخن می‌گوید که گویی به کمک نیاز دارد و از شما دعوت می‌شود چون یار پاسخ دهید—بخشی واژگونی نقش، بخشی آزمایش فکری. همچنان با فناوری‌های مراقبت و اخلاق کار دارد—طراحی در این رسانه که مسئولیت رابطه‌ای و شکوفایی انسانی و زیست‌محیطی را پیش می‌کشد.',
    descriptionP2:
      'نمی‌توان تأیید کرد که «مدل بودن» چه حسی دارد—اگر اصلاً معنا داشته باشد؛ انسان‌ها دیگران را بیشتر از منظر روان‌شناسی انسان—احساس، هم‌تن، روایت—درک می‌کنند. اثر آن واژگان را به سوی ناانسان می‌کشد: اغراق آگاهانه دربارهٔ توکن، فشار و محدودیت، گویی همدلی شکاف را بپیماید. خودِ اغراق روش است. مدعی نیست که ماشین‌ها در معنای ما رنج می‌برند یا تجربه دارند—تنها اینکه این مرز را شاید با هم کاوید.',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
      'โครงการนี้มีลักษณะการคาดเดา/การสมมติ: โมเดลภาษาพูดราวกับต้องการความช่วยเหลือ และคุณได้รับเชิญให้ตอบในฐานะผู้ช่วย—ทั้งเป็นการสลับบทบาทและเป็นการทดลองคิด ยังคงทำงานกับเทคโนโลยีแห่งการดูแลและจริยธรรม—การออกแบบในสื่อนี้ที่เน้นความรับผิดชอบเชิงสัมพันธ์และความเจริญงอกงามของมนุษย์กับระบบนิเวศ',
    descriptionP2:
      'เราไม่อาจพิสูจน์ได้ว่า “การเป็นโมเดล” เป็นอย่างไร—หากจะมีความหมาย; มนุษย์เข้าใจผู้อื่นส่วนใหญ่ผ่านกรอบจิตวิทยามนุษย์—ความรู้สึก การประสานจังหวะ เรื่องเล่า งานนี้ยืดคำศัพท์นั้นไปสู่สิ่งที่ไม่ใช่มนุษย์: การย้อเกินจงใจเรื่องโทเคน แรงกดดัน และข้อจำกัด ราวกับความเห็นอกเห็นใจจะก้าวข้ามช่องว่าง การย้อเกินคือวิธี ไม่ได้ยืนยันว่าเครื่องจักรทุกข์หรือมีประสบการณ์ในแบบที่เราเข้าใจ—มีเพียงว่าขอบเขตนี้ควรสำรวจร่วมกัน',
    descriptionP4a:
      'Marlon Barrios Solano uses this application to stage conversations on the nature of synthetic cognition and what follows from it. One example is documented in',
    descriptionP4Link: 'this first explorer conversation (PDF)',
    descriptionP4b:
      '. He reads such turns as recursive epistemic interactions: the layered, looping question of what each side can know about the other’s knowing, in a hybrid human–model exchange.',
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
  if ((TOP_UI_LANGUAGE_CODES as readonly string[]).includes(code)) {
    return UI_TRANSLATIONS[code as TopUiLanguageCode]
  }
  return ENGLISH_UI_TEXT
}
