// MBTI测试功能
document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('start-test');
  const testIntro = document.getElementById('test-intro');
  const testQuestions = document.getElementById('test-questions');
  const testResults = document.getElementById('test-results');
  const progressContainer = document.getElementById('test-progress-container');
  const progressBar = document.getElementById('progress-bar');
  const questionNumber = document.getElementById('question-number');
  const completionPercentage = document.getElementById('completion-percentage');
  const questionText = document.getElementById('question-text');
  const nextButton = document.getElementById('next-question');
  const prevButton = document.getElementById('prev-question');

  // MBTI问题列表
  const questions = [
    {
      text: "在社交场合中，您通常：",
      options: [
        "主动与他人交谈，扩展社交圈",
        "倾向于与已认识的人交流，保持低调"
      ],
      dimension: "EI" // E为第一个选项，I为第二个选项
    },
    {
      text: "您更喜欢的工作环境是：",
      options: [
        "开放、互动、有团队协作的环境",
        "安静、独立、能够专注的空间"
      ],
      dimension: "EI"
    },
    {
      text: "当您需要恢复精力时，您会选择：",
      options: [
        "与朋友一起外出活动",
        "独自安静地阅读或放松"
      ],
      dimension: "EI"
    },
    {
      text: "在团队讨论中，您更倾向于：",
      options: [
        "积极参与讨论，表达想法",
        "仔细倾听，深思熟虑后再发言"
      ],
      dimension: "EI"
    },
    {
      text: "您如何看待新的社交活动？",
      options: [
        "是结交新朋友的机会，感到兴奋",
        "需要消耗能量，可能感到压力"
      ],
      dimension: "EI"
    },
    // S-N维度问题
    {
      text: "当解决问题时，您更倾向于：",
      options: [
        "关注具体事实和细节",
        "关注整体模式和可能性"
      ],
      dimension: "SN"
    },
    {
      text: "您更相信：",
      options: [
        "实际经验和观察到的事物",
        "直觉和灵感"
      ],
      dimension: "SN"
    },
    {
      text: "您更喜欢的学习方式是：",
      options: [
        "循序渐进，掌握具体技能",
        "探索概念和理论"
      ],
      dimension: "SN"
    },
    {
      text: "在工作中，您更看重：",
      options: [
        "实用性和效率",
        "创新和未来可能性"
      ],
      dimension: "SN"
    },
    {
      text: "您更喜欢的书籍或电影类型是：",
      options: [
        "描述现实生活的作品",
        "富有想象力和抽象概念的作品"
      ],
      dimension: "SN"
    },
    // T-F维度问题
    {
      text: "做决定时，您更倾向于基于：",
      options: [
        "逻辑分析和客观因素",
        "个人价值观和对他人的影响"
      ],
      dimension: "TF"
    },
    {
      text: "当朋友向您倾诉问题时，您通常会：",
      options: [
        "提供解决方案和分析",
        "提供情感支持和共情"
      ],
      dimension: "TF"
    },
    {
      text: "在评估情况时，您更重视：",
      options: [
        "公正和一致性",
        "和谐与个人情况"
      ],
      dimension: "TF"
    },
    {
      text: "您认为给予反馈时应该：",
      options: [
        "直接坦率，指出问题所在",
        "体贴入微，注重表达方式"
      ],
      dimension: "TF"
    },
    {
      text: "在工作中，您更看重：",
      options: [
        "能力和成就",
        "团队合作和人际关系"
      ],
      dimension: "TF"
    },
    // J-P维度问题
    {
      text: "关于计划，您更倾向于：",
      options: [
        "提前安排，按计划行事",
        "保持灵活，视情况而定"
      ],
      dimension: "JP"
    },
    {
      text: "您的工作区域通常是：",
      options: [
        "井然有序，物品各归其位",
        "创意性混乱，随手可及"
      ],
      dimension: "JP"
    },
    {
      text: "面对deadline，您更可能：",
      options: [
        "提前完成，避免压力",
        "临近截止日期才完成，受压力驱动"
      ],
      dimension: "JP"
    },
    {
      text: "您更喜欢的工作方式是：",
      options: [
        "有明确的步骤和指导",
        "有探索和即兴发挥的空间"
      ],
      dimension: "JP"
    },
    {
      text: "您度假时更倾向于：",
      options: [
        "计划好行程和活动",
        "即兴决定，随性而为"
      ],
      dimension: "JP"
    }
  ];

  // 扩展问题以达到60个
  const extendedQuestions = [
    // 额外的E-I维度问题
    {
      text: "您更愿意：",
      options: [
        "在热闹的派对中成为焦点",
        "与一两个好友深入交谈"
      ],
      dimension: "EI"
    },
    {
      text: "在陌生环境中，您通常：",
      options: [
        "很快融入并结交新朋友",
        "需要时间观察和适应"
      ],
      dimension: "EI"
    },
    {
      text: "长时间的社交活动后，您通常感到：",
      options: [
        "精力充沛，情绪高涨",
        "需要独处时间恢复精力"
      ],
      dimension: "EI"
    },
    {
      text: "您更喜欢哪种交流方式：",
      options: [
        "面对面交谈",
        "文字交流（如短信、邮件）"
      ],
      dimension: "EI"
    },
    {
      text: "您对以下哪项感到更舒适：",
      options: [
        "参加多人聚会和活动",
        "在家享受宁静时光"
      ],
      dimension: "EI"
    },
    // 额外的S-N维度问题
    {
      text: "读说明书时，您通常：",
      options: [
        "按部就班地按照步骤操作",
        "快速浏览后尝试自己摸索"
      ],
      dimension: "SN"
    },
    {
      text: "您更看重：",
      options: [
        "当下的现实需求",
        "未来的潜在机会"
      ],
      dimension: "SN"
    },
    {
      text: "您更喜欢的老师是：",
      options: [
        "讲授具体知识和实例的老师",
        "探讨理论和概念的老师"
      ],
      dimension: "SN"
    },
    {
      text: "您认为更重要的能力是：",
      options: [
        "实际解决问题的能力",
        "发现新思路的能力"
      ],
      dimension: "SN"
    },
    {
      text: "您更喜欢的工作是：",
      options: [
        "有明确标准和程序的工作",
        "需要创意和想象力的工作"
      ],
      dimension: "SN"
    },
    // 额外的T-F维度问题
    {
      text: "在冲突中，您更注重：",
      options: [
        "找出真相和事实",
        "维护关系和感受"
      ],
      dimension: "TF"
    },
    {
      text: "您更欣赏他人的：",
      options: [
        "清晰的思维和专业知识",
        "同理心和人际智慧"
      ],
      dimension: "TF"
    },
    {
      text: "在团队中，您更倾向于：",
      options: [
        "质疑假设，提出改进建议",
        "支持团队成员，促进和谐"
      ],
      dimension: "TF"
    },
    {
      text: "面对道德两难问题，您更看重：",
      options: [
        "公平和客观的标准",
        "特定情况和人道考量"
      ],
      dimension: "TF"
    },
    {
      text: "您认为最好的领导者应该：",
      options: [
        "果断、客观，能做出艰难决策",
        "体贴、包容，关注团队氛围"
      ],
      dimension: "TF"
    },
    // 额外的J-P维度问题
    {
      text: "您更倾向于：",
      options: [
        "按时完成任务，避免拖延",
        "在临近截止日期时爆发创意"
      ],
      dimension: "JP"
    },
    {
      text: "对于规则和流程，您通常：",
      options: [
        "认为它们提供有价值的结构",
        "认为它们限制了灵活性和创造力"
      ],
      dimension: "JP"
    },
    {
      text: "您更喜欢：",
      options: [
        "有条理的生活和明确的计划",
        "自由、自发的生活方式"
      ],
      dimension: "JP"
    },
    {
      text: "当计划改变时，您通常：",
      options: [
        "感到烦恼并尝试重新计划",
        "轻松接受并找到新的机会"
      ],
      dimension: "JP"
    },
    {
      text: "您更看重：",
      options: [
        "决定和结束",
        "保持选项开放"
      ],
      dimension: "JP"
    }
  ];

  // 将额外问题添加到原有问题中
  questions.push(...extendedQuestions);

  // MBTI类型描述数据
  const mbtiTypes = {
    ISTJ: {
      title: "尽责的现实主义者",
      description: "ISTJ是务实、注重事实的人，他们讲求可靠性和责任感。他们系统地工作，确保重要的细节不被忽视。ISTJ通常安静而严肃，以精确和彻底而著称。他们喜欢传统和秩序，期望同样的标准也适用于他人。",
      strengths: ["可靠且负责任", "关注细节和准确性", "实际和现实主义", "逻辑和系统性思考", "忠诚和坚定", "组织能力强"],
      weaknesses: ["可能过于刻板和固执", "对变化的适应能力较弱", "可能忽视他人情感", "有时过于批判", "在模糊情境中可能感到不适", "可能错过长远视角"],
      careers: ["会计师/财务分析师", "工程师", "项目经理", "法律专业人士", "医疗管理人员", "军事或执法人员"],
      relationships: "ISTJ在关系中寻求稳定和一致性。他们是忠诚的伴侣，通过实际行动而非言语表达关心。他们需要清晰的沟通和明确的期望，可能在表达情感方面有些保守。与理解他们需要个人空间和结构的伴侣相处最为和谐。"
    },
    ISFJ: {
      title: "尽职尽责的守护者",
      description: "ISFJ是安静、友好且负责任的人，他们有很强的记忆力，能记住与重要人物有关的具体细节。他们珍视传统和安全，努力维护既定的结构。ISFJ通常为他人的需求敏感，善于创造和谐的环境。",
      strengths: ["忠诚和富有同情心", "对细节敏感", "实际和可靠", "观察力强", "耐心", "组织能力佳"],
      weaknesses: ["可能过度牺牲自己", "对批评敏感", "可能难以接受变化", "倾向于过度担忧", "可能忽视自己的需求", "有时过于谦虚"],
      careers: ["护士/医护人员", "教师", "社会工作者", "人力资源专员", "客户服务管理", "行政助理"],
      relationships: "ISFJ在关系中深情且忠诚，他们乐于照顾所爱的人并创造舒适的家庭环境。他们重视稳定和安全感，倾向于长期承诺的关系。虽然他们可能不善于表达自己的需求，但他们非常重视与伴侣的深厚情感连接。"
    },
    INFJ: {
      title: "有远见的理想主义者",
      description: "INFJ是16种性格类型中最稀少的类型，约占人口的1-2%。他们拥有深刻的洞察力和直觉，能够看到事物背后的意义和可能性。INFJ通常非常理想主义，总是寻求使世界变得更好的方式。他们富有同情心和创造力，对他人的需求和感受非常敏感。",
      strengths: ["富有创意和想象力", "对他人需求敏感", "善于洞察人际关系和动态", "深思熟虑，注重深度", "有决心和坚持不懈的精神", "善于表达想法和概念"],
      weaknesses: ["可能过度理想化，对自己要求过高", "有时难以接受批评和冲突", "容易内耗和自我怀疑", "可能过度牺牲自己以满足他人需求", "完美主义倾向可能导致压力", "偶尔会过度分析导致决策困难"],
      careers: ["心理咨询师", "作家/编辑", "教师/教育者", "人力资源专家", "环保/非营利组织", "艺术家/设计师"],
      relationships: "INFJ在人际关系中追求真实和深度。他们倾向于拥有少数几个亲密朋友，而不是广泛的社交圈。作为天生的倾听者和观察者，他们能够理解他人的情感和需求，常常被人寻求建议和支持。然而，他们也需要充分的独处时间来恢复能量和处理思绪。"
    },
    INTJ: {
      title: "战略性思考者",
      description: "INTJ具有原创性的思想和强烈的内在动力来实现自己的想法和目标。他们能够快速看到模式和理解复杂系统的内在逻辑。INTJ是独立的、怀疑的、批判性的，对自己和他人都有高标准。他们往往喜欢理论和抽象概念，追求知识和理解。",
      strengths: ["战略性思维和规划能力", "独立和自主", "分析和批判性思考", "追求持续改进", "创新和原创性", "决心和毅力"],
      weaknesses: ["可能显得傲慢或疏远", "可能忽视情感因素", "有时过于完美主义", "对规则和权威有挑战性", "可能固执己见", "容易对简单任务感到不耐烦"],
      careers: ["科学家/研究员", "工程师", "战略规划师", "信息技术专家", "金融分析师", "企业家"],
      relationships: "INTJ在关系中重视理智和独立性。他们寻找能够在智力上挑战他们并尊重其自主性的伴侣。虽然他们可能在情感表达上保持克制，但他们对亲密关系非常忠诚和投入。INTJ欣赏诚实和直接的沟通，不喜欢表面化的社交互动。"
    },
    ISTP: {
      title: "多才多艺的实干家",
      description: "ISTP是冷静的观察者，对生活持务实的态度。他们喜欢了解事物如何运作，擅长发现问题的实际解决方案。ISTP往往是灵活和适应力强的人，他们喜欢行动而不是理论，享受即刻的结果。他们通常安静而沉着，在危机中表现出色。",
      strengths: ["实际和解决问题的能力", "冷静应对压力和危机", "灵活和适应性强", "观察力敏锐", "动手能力强", "独立和自主"],
      weaknesses: ["可能过于冒险", "可能显得疏远或冷漠", "对常规和计划感到受限", "在长期项目中可能失去兴趣", "可能忽视他人感受", "有时过于独立"],
      careers: ["机械师/技师", "工程师", "计算机程序员", "飞行员", "急诊医疗人员", "法医科学家"],
      relationships: "ISTP在关系中注重自由和空间。他们可能不是最情感化或表达的伴侣，但他们通过实际行动表达关心。他们欣赏能够理解其独立需求的伴侣，同时不对情感表达施加压力。ISTP需要时间独处以恢复能量，偏好轻松而不是高度情感化的互动。"
    },
    ISFP: {
      title: "敏感的艺术家",
      description: "ISFP是温和、敏感的人，他们重视自由和个人表达。他们注重美学和感官体验，通常对艺术、音乐或设计有天然的亲和力。ISFP生活在当下，享受简单的快乐和自发的活动。他们对他人温暖且同情，但也需要个人空间来反思和恢复。",
      strengths: ["对审美敏感", "轻松友好的天性", "实用和务实", "富有同情心和善良", "忠诚和投入", "开放和适应性强"],
      weaknesses: ["可能过度谦虚和自我批评", "难以长期规划", "在压力下可能退缩", "可能回避冲突", "有时过于理想化", "可能缺乏自信"],
      careers: ["艺术家/设计师", "音乐家/作曲家", "厨师/美食专家", "园艺师/景观设计师", "健康服务专业人员", "动物护理工作者"],
      relationships: "ISFP在关系中温柔而支持。他们重视真实性和深度连接，但也需要保持自己的独立性。他们通过小而有意义的姿态表达爱，而不是宏大的言语承诺。ISFP寻找能够欣赏其敏感天性并尊重其个人空间的伴侣。他们可能在情感上保持一定保留，直到建立信任。"
    },
    INFP: {
      title: "理想主义的调和者",
      description: "INFP是理想主义和忠诚的人，他们总是寻找生活和人际关系中的意义和目的。他们富有好奇心，看重内心和外部世界的和谐。INFP通常很安静，但对自己重视的人和事充满热情。他们关心他人福祉，对自己和身边的人有高道德标准。",
      strengths: ["富有创意和想象力", "重视真实性和诚信", "善解人意和支持", "适应力强", "忠诚和投入", "理想主义和热情"],
      weaknesses: ["可能过于理想化", "有时缺乏实际性", "对批评敏感", "可能过度自我牺牲", "容易情绪化", "有时难以做决定"],
      careers: ["作家/编辑", "心理咨询师", "社会工作者", "教师/教育者", "艺术家/创意专业人士", "非营利组织工作"],
      relationships: "INFP在关系中重视深度和真实性。他们是忠诚和爱护的伴侣，总是寻求理解伴侣最深层的感受和需求。虽然他们初始可能保持一定距离，但一旦建立信任，他们会全心投入关系。INFP寻找能够欣赏其理想主义和深度的伴侣，避免肤浅或纯物质导向的关系。"
    },
    INTP: {
      title: "逻辑思考的发明家",
      description: "INTP是具有丰富内心生活的安静、深沉的思考者。他们对理论和抽象概念感兴趣，倾向于分析复杂问题并发现隐藏的模式。INTP通常对日常规则和惯例不感兴趣，更喜欢探索新概念和可能性。他们是独立的、有创造力的问题解决者。",
      strengths: ["分析和逻辑思考能力", "创新和创造性", "独立和自主", "好奇心和求知欲", "客观和理性", "适应性强"],
      weaknesses: ["可能过度分析", "有时显得疏远或分心", "可能忽视实际细节", "有时在社交场合感到不适", "难以表达情感", "可能拖延"],
      careers: ["科学家/研究员", "系统分析师/IT专家", "工程师", "哲学家/学者", "战略家", "作家/编辑"],
      relationships: "INTP在关系中重视智力兼容性和独立性。他们需要伴侣给予足够的空间和理解其独处需求。虽然INTP不是最情感化的类型，但他们通过分享想法和概念来建立联系。他们欣赏能够接受其分析思维方式并参与深度讨论的伴侣。在建立信任后，他们会展现忠诚和投入。"
    },
    ESTP: {
      title: "热情的冒险家",
      description: "ESTP是充满活力和冒险精神的人，他们喜欢行动和即刻的经验。他们关注现实世界中的细节，对周围环境保持警觉和适应。ESTP通常具有很强的实际感，能够快速解决问题。他们友好、灵活、自发，享受与他人互动和生活中的乐趣。",
      strengths: ["灵活和适应力强", "解决问题的实际能力", "行动导向", "观察力敏锐", "社交能力强", "冒险精神"],
      weaknesses: ["可能忽视长远后果", "对规则和限制有挑战性", "有时缺乏耐心", "可能忽视情感因素", "可能冒不必要的风险", "难以长期承诺"],
      careers: ["企业家", "销售/市场营销专业人士", "紧急服务人员", "运动员/教练", "建筑师/工程师", "餐饮/娱乐行业"],
      relationships: "ESTP在关系中寻求兴奋和活力。他们倾向于活在当下，享受与伴侣的实际体验和活动。虽然他们不是最情感化或浪漫的类型，但他们以实际方式表达关心和支持。ESTP需要一定的自由和空间，欣赏能够接受其冒险精神并提供一定稳定性的伴侣。"
    },
    ESFP: {
      title: "活力四射的表演者",
      description: "ESFP是充满热情、友好和接受度的人，他们热爱生活和与他人交往。他们喜欢成为关注的中心，善于察觉他人的需求和情感。ESFP生活在当下，喜欢自发的活动和新体验。他们通常精力充沛、乐观，能够让人感到轻松愉快。",
      strengths: ["友好和交际能力强", "实际和观察力敏锐", "适应力和灵活性", "富有同情心", "热情和乐观", "团队合作能力"],
      weaknesses: ["可能对长期计划感到困难", "有时避免冲突", "可能对批评敏感", "对规则和结构有挑战性", "可能冲动", "有时过度关注他人意见"],
      careers: ["表演艺术家", "销售/市场营销", "招待业/旅游业", "公共关系专家", "教师/儿童工作", "社交媒体专家"],
      relationships: "ESFP在关系中热情而充满活力。他们喜欢与伴侣分享体验和冒险，创造美好回忆。ESFP通常表达情感直接并善于察觉伴侣的需求。他们寻找能够接受其社交性格并参与其活跃生活方式的伴侣，同时能够在需要时提供情感支持。"
    },
    ENFP: {
      title: "充满激情的创新者",
      description: "ENFP是富有热情和创造力的人，他们看到生活中充满可能性。他们能够快速联系事件和信息，自信地根据模式做决策。ENFP渴望理解他人，通常在人际交往中表现出色。他们重视真实性、创新和自发性，不喜欢重复和常规。",
      strengths: ["创造力和想象力", "热情和活力", "良好的沟通能力", "灵活和适应性强", "理解他人能力", "解决问题的创新方法"],
      weaknesses: ["可能难以专注", "有时过度承诺", "对常规工作感到不耐烦", "可能情绪波动", "有时过度理想化", "可能拖延"],
      careers: ["创意总监/艺术家", "市场营销/广告专家", "心理咨询师", "企业家", "教师/教育工作者", "媒体/娱乐行业"],
      relationships: "ENFP在关系中热情而忠诚。他们渴望深度连接和真实的交流，常常努力理解伴侣的内心世界。ENFP欣赏能够接受其理想主义同时提供一定稳定性的伴侣。他们需要足够的自由和空间来探索新想法，但也极为重视与伴侣的情感联系。"
    },
    ENTP: {
      title: "思维活跃的辩论者",
      description: "ENTP是聪明、好奇和思想开放的人，他们喜欢智力挑战和理论讨论。他们能够看到情况的多种可能性，喜欢头脑风暴和创新。ENTP通常机敏和善于表达，喜欢挑战传统观念。他们具有创业精神，不惧变化，总是寻求新的见解和方法。",
      strengths: ["创新和创造力", "思维敏捷", "善于辩论和说服", "解决问题的能力", "适应性强", "知识面广"],
      weaknesses: ["可能挑战性强或好辩", "有时缺乏跟进", "可能忽视细节", "对常规感到厌烦", "有时不考虑他人感受", "可能分散注意力"],
      careers: ["企业家", "律师", "工程师/科学家", "咨询顾问", "创意总监", "政治/领导职位"],
      relationships: "ENTP在关系中重视智力刺激和自由。他们喜欢与能够进行深度讨论并挑战其观点的伴侣互动。虽然ENTP可能不是最情感化的类型，但他们通过分享想法和促进伴侣成长来表达关心。他们需要空间来探索新概念，欣赏能够理解其独立性同时提供情感稳定性的伴侣。"
    },
    ESTJ: {
      title: "高效的管理者",
      description: "ESTJ是实际、注重现实的人，他们重视传统、秩序和组织。他们喜欢制定规则和程序以保持结构和效率。ESTJ是决断的领导者，专注于获得结果并完成任务。他们可靠、努力工作，对自己的责任非常认真。",
      strengths: ["组织能力强", "可靠和坚定", "实际和现实", "重视传统和稳定", "直接和诚实", "决断力强"],
      weaknesses: ["可能过于固执", "有时批判性强", "对变化的适应能力较弱", "可能忽视情感因素", "倾向于黑白思维", "在模糊情况下可能不适"],
      careers: ["行政管理", "项目经理", "金融/会计", "军事/执法", "法律专业人士", "生产管理"],
      relationships: "ESTJ在关系中重视稳定性和明确的期望。他们是忠诚和负责任的伴侣，努力提供安全感和结构。ESTJ通常直接表达需求和担忧，期望同样的坦率。他们寻找能够欣赏其传统价值观并能够理解其实际性格的伴侣，同时帮助其培养情感敏感度。"
    },
    ESFJ: {
      title: "热心的关怀者",
      description: "ESFJ是热情、合作的人，他们重视和谐与联系。他们关注他人的需求，并努力创造温暖和支持的环境。ESFJ通常有很强的责任感，尊重传统和既定价值观。他们善于组织人和事物，确保每个人都受到照顾和关注。",
      strengths: ["热情和关怀", "可靠和尽责", "实际和善于组织", "合作精神强", "善于察觉他人需求", "忠诚和有奉献精神"],
      weaknesses: ["可能过度担忧", "有时过度关注他人意见", "对批评敏感", "可能回避冲突", "在变化面前可能挣扎", "有时过度参与他人事务"],
      careers: ["医疗保健专业人士", "教师/教育管理", "人力资源管理", "社区服务协调员", "客户服务管理", "行政助理"],
      relationships: "ESFJ在关系中热情而奉献。他们通常将伴侣的需求置于自己之上，努力创造和谐的家庭环境。ESFJ重视情感表达和沟通，寻找能够欣赏其关怀天性并提供安全感和稳定性的伴侣。他们繁荣于相互依存和深度情感连接的关系中。"
    },
    ENFJ: {
      title: "富有魅力的引导者",
      description: "ENFJ是温暖、同情的人，他们非常关注他人的感受和需求。他们具有天然的领导能力，能够激励他人实现潜力。ENFJ通常很有说服力和表现力，善于促进个人和团队成长。他们真诚地关心他人福祉，寻求创造和谐与积极影响。",
      strengths: ["富有同情心和洞察力", "领导能力强", "良好的沟通技巧", "忠诚和可靠", "善于激励他人", "组织能力强"],
      weaknesses: ["可能过度理想化", "有时过于牺牲自己", "对批评敏感", "在帮助他人时可能忽视自己需求", "可能做出武断决定", "有时过度参与"],
      careers: ["教师/教育管理", "心理咨询师", "人力资源专家", "公共关系", "非营利组织领导", "销售/市场营销"],
      relationships: "ENFJ在关系中深情而投入。他们努力理解伴侣的需求和愿望，常常将对方的幸福置于自己之上。ENFJ是热情的沟通者，重视深度连接和真实性。他们寻找能够欣赏其关怀天性同时鼓励其自我关注的伴侣，在相互支持和成长的关系中茁壮成长。"
    },
    ENTJ: {
      title: "大胆的领导者",
      description: "ENTJ是果断、战略性的领导者，他们善于看到不合理或效率低下的地方，发展和实施全面的系统改进。他们喜欢获取知识，重视能力和智力。ENTJ是直接和决断的，他们自信地组织人和想法，推动实现目标。",
      strengths: ["战略性思考和规划", "决断力强", "自信和果断", "组织能力强", "目标导向", "直接和诚实"],
      weaknesses: ["可能过于专断", "有时缺乏耐心", "可能忽视情感因素", "在表达中可能过于直接", "对不合逻辑的事物难以容忍", "有时过于批判性"],
      careers: ["企业高管", "管理咨询顾问", "企业家", "法律专业人士", "工程/技术领导", "投资银行家"],
      relationships: "ENTJ在关系中重视智力兼容性和相互成长。他们可能不是最情感化的伴侣，但他们通过提供支持和促进伴侣实现目标来表达关心。ENTJ欣赏能够接受其直接沟通方式并帮助其培养情感敏感度的伴侣。他们在充满挑战和相互尊重的关系中蓬勃发展。"
    }
  };

  // MBTI测试结果变量
  let currentQuestionIndex = 0;
  let answers = {
    EI: [], // 外向-内向
    SN: [], // 感觉-直觉
    TF: [], // 思考-情感
    JP: [] // 判断-感知
  };

  // 打乱问题顺序
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // 对问题进行分组和打乱
  function prepareQuestions() {
    let groupedQuestions = {
      EI: questions.filter(q => q.dimension === 'EI'),
      SN: questions.filter(q => q.dimension === 'SN'),
      TF: questions.filter(q => q.dimension === 'TF'),
      JP: questions.filter(q => q.dimension === 'JP')
    };

    // 打乱每个维度内的问题顺序
    for (let dimension in groupedQuestions) {
      groupedQuestions[dimension] = shuffleArray(groupedQuestions[dimension]);
    }

    // 从每个维度选择15个问题
    let finalQuestions = [];
    for (let dimension in groupedQuestions) {
      finalQuestions = finalQuestions.concat(groupedQuestions[dimension].slice(0, 15));
    }

    // 最后打乱所有问题的顺序
    return shuffleArray(finalQuestions);
  }

  const shuffledQuestions = prepareQuestions();

  // 开始测试
  if (startButton) {
    startButton.addEventListener('click', function() {
      testIntro.classList.add('hidden');
      testQuestions.classList.remove('hidden');
      progressContainer.classList.remove('hidden');
      displayQuestion(0);
    });
  }

  // 显示问题
  function displayQuestion(index) {
    if (index < 0 || index >= shuffledQuestions.length) return;

    const question = shuffledQuestions[index];
    questionText.textContent = `${index + 1}. ${question.text}`;

    // 设置选项
    const radioButtons = document.querySelectorAll('input[name="question"]');
    const labels = document.querySelectorAll('label span.font-medium');
    
    radioButtons.forEach((radio, i) => {
      radio.checked = false;
      if (i < question.options.length) {
        const label = labels[i];
        if (label) label.textContent = question.options[i];
      }
    });

    // 如果之前已经回答过这个问题，选中相应的选项
    if (answers[question.dimension][index] !== undefined) {
      const answerIndex = answers[question.dimension][index];
      if (radioButtons[answerIndex]) {
        radioButtons[answerIndex].checked = true;
      }
    }

    // 更新问题编号和进度条
    questionNumber.textContent = `问题 ${index + 1}/${shuffledQuestions.length}`;
    const percentage = Math.round((index + 1) / shuffledQuestions.length * 100);
    completionPercentage.textContent = `${percentage}%`;
    progressBar.style.width = `${percentage}%`;

    // 显示/隐藏上一题按钮
    if (index > 0) {
      prevButton.classList.remove('hidden');
    } else {
      prevButton.classList.add('hidden');
    }

    // 更新下一题按钮文本
    if (index === shuffledQuestions.length - 1) {
      nextButton.textContent = '提交';
    } else {
      nextButton.textContent = '下一题';
    }

    currentQuestionIndex = index;
  }

  // 下一题按钮
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      const radioButtons = document.querySelectorAll('input[name="question"]');
      let selected = false;
      let selectedValue;

      radioButtons.forEach((radio, index) => {
        if (radio.checked) {
          selected = true;
          selectedValue = index;
        }
      });

      if (!selected) {
        alert('请选择一个选项');
        return;
      }

      // 保存答案
      const question = shuffledQuestions[currentQuestionIndex];
      const dimension = question.dimension;
      
      // 初始化维度数组如果不存在
      if (!answers[dimension]) {
        answers[dimension] = [];
      }
      
      // 保存答案（0表示第一个选项，1表示第二个选项）
      answers[dimension][currentQuestionIndex] = selectedValue;

      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        displayQuestion(currentQuestionIndex + 1);
      } else {
        calculateResults();
      }
    });
  }

  // 上一题按钮
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      if (currentQuestionIndex > 0) {
        displayQuestion(currentQuestionIndex - 1);
      }
    });
  }

  // 计算结果
  function calculateResults() {
    let scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    // 统计每个维度的分数
    for (let dimension in answers) {
      for (let i = 0; i < answers[dimension].length; i++) {
        if (answers[dimension][i] !== undefined) {
          if (dimension === 'EI') {
            if (answers[dimension][i] === 0) scores.E++;
            else scores.I++;
          } else if (dimension === 'SN') {
            if (answers[dimension][i] === 0) scores.S++;
            else scores.N++;
          } else if (dimension === 'TF') {
            if (answers[dimension][i] === 0) scores.T++;
            else scores.F++;
          } else if (dimension === 'JP') {
            if (answers[dimension][i] === 0) scores.J++;
            else scores.P++;
          }
        }
      }
    }

    // 确定MBTI类型
    let type = '';
    type += scores.E > scores.I ? 'E' : 'I';
    type += scores.S > scores.N ? 'S' : 'N';
    type += scores.T > scores.F ? 'T' : 'F';
    type += scores.J > scores.P ? 'J' : 'P';

    // 计算每个维度的百分比
    const eiTotal = scores.E + scores.I;
    const snTotal = scores.S + scores.N;
    const tfTotal = scores.T + scores.F;
    const jpTotal = scores.J + scores.P;

    const eiPercentage = Math.round((type[0] === 'I' ? scores.I : scores.E) / eiTotal * 100);
    const snPercentage = Math.round((type[1] === 'N' ? scores.N : scores.S) / snTotal * 100);
    const tfPercentage = Math.round((type[2] === 'F' ? scores.F : scores.T) / tfTotal * 100);
    const jpPercentage = Math.round((type[3] === 'J' ? scores.J : scores.P) / jpTotal * 100);

    // 显示结果
    displayResults(type, {
      eiPercentage,
      snPercentage,
      tfPercentage,
      jpPercentage
    });
  }

  // 显示结果
  function displayResults(type, percentages) {
    testQuestions.classList.add('hidden');
    testResults.classList.remove('hidden');

    // 设置MBTI类型和标题
    document.getElementById('mbti-type').textContent = type;
    document.getElementById('mbti-title').textContent = mbtiTypes[type].title;

    // 设置百分比条
    document.getElementById('e-i-bar').style.width = `${type[0] === 'I' ? percentages.eiPercentage : 100 - percentages.eiPercentage}%`;
    document.getElementById('e-i-bar').parentElement.nextElementSibling.textContent = `${type[0] === 'I' ? percentages.eiPercentage : 100 - percentages.eiPercentage}% ${type[0] === 'I' ? '内向' : '外向'}`;

    document.getElementById('s-n-bar').style.width = `${type[1] === 'N' ? percentages.snPercentage : 100 - percentages.snPercentage}%`;
    document.getElementById('s-n-bar').parentElement.nextElementSibling.textContent = `${type[1] === 'N' ? percentages.snPercentage : 100 - percentages.snPercentage}% ${type[1] === 'N' ? '直觉' : '感觉'}`;

    document.getElementById('t-f-bar').style.width = `${type[2] === 'F' ? percentages.tfPercentage : 100 - percentages.tfPercentage}%`;
    document.getElementById('t-f-bar').parentElement.nextElementSibling.textContent = `${type[2] === 'F' ? percentages.tfPercentage : 100 - percentages.tfPercentage}% ${type[2] === 'F' ? '情感' : '思考'}`;

    document.getElementById('j-p-bar').style.width = `${type[3] === 'J' ? percentages.jpPercentage : 100 - percentages.jpPercentage}%`;
    document.getElementById('j-p-bar').parentElement.nextElementSibling.textContent = `${type[3] === 'J' ? percentages.jpPercentage : 100 - percentages.jpPercentage}% ${type[3] === 'J' ? '判断' : '感知'}`;

    // 设置类型描述
    document.getElementById('mbti-description').textContent = mbtiTypes[type].description;

    // 设置优势
    const strengthsList = document.getElementById('mbti-strengths');
    strengthsList.innerHTML = '';
    mbtiTypes[type].strengths.forEach(strength => {
      const li = document.createElement('li');
      li.textContent = strength;
      strengthsList.appendChild(li);
    });

    // 设置成长空间
    const weaknessesList = document.getElementById('mbti-weaknesses');
    weaknessesList.innerHTML = '';
    mbtiTypes[type].weaknesses.forEach(weakness => {
      const li = document.createElement('li');
      li.textContent = weakness;
      weaknessesList.appendChild(li);
    });

    // 设置职业推荐
    const careersDiv = document.getElementById('mbti-careers');
    careersDiv.innerHTML = '';
    mbtiTypes[type].careers.forEach(career => {
      const div = document.createElement('div');
      div.className = 'bg-gray-50 p-4 rounded-lg';
      
      const careerParts = career.split('/');
      if (careerParts.length > 1) {
        const mainDiv = document.createElement('div');
        mainDiv.className = 'font-medium text-gray-900';
        mainDiv.textContent = careerParts[0].trim();
        
        const subDiv = document.createElement('div');
        subDiv.className = 'text-sm text-gray-600';
        subDiv.textContent = careerParts[1].trim();
        
        div.appendChild(mainDiv);
        div.appendChild(subDiv);
      } else {
        const mainDiv = document.createElement('div');
        mainDiv.className = 'font-medium text-gray-900';
        mainDiv.textContent = career;
        
        div.appendChild(mainDiv);
      }
      
      careersDiv.appendChild(div);
    });

    // 设置人际关系描述
    document.getElementById('mbti-relationships').textContent = mbtiTypes[type].relationships;

    // 其他类型特定的设置
    // ...根据类型选择适当的图片或特别信息
  }
});