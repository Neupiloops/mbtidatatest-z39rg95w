// 免费版MBTI 40题题库，均衡覆盖四个维度，每维度10题
window.freeQuestions = [
  // EI 维度 10题
  {
    text: "在社交场合中，您通常：",
    options: ["主动与他人交谈，扩展社交圈", "倾向于与已认识的人交流，保持低调"],
    dimension: "EI"
  },
  {
    text: "您更喜欢的工作环境是：",
    options: ["开放、互动、有团队协作的环境", "安静、独立、能够专注的空间"],
    dimension: "EI"
  },
  {
    text: "当您需要恢复精力时，您会选择：",
    options: ["与朋友一起外出活动", "独自安静地阅读或放松"],
    dimension: "EI"
  },
  {
    text: "在团队讨论中，您更倾向于：",
    options: ["积极参与讨论，表达想法", "仔细倾听，深思熟虑后再发言"],
    dimension: "EI"
  },
  {
    text: "您如何看待新的社交活动？",
    options: ["是结交新朋友的机会，感到兴奋", "需要消耗能量，可能感到压力"],
    dimension: "EI"
  },
  {
    text: "您更享受的社交方式是：",
    options: ["与多人互动，气氛活跃", "与少数人深入交流"],
    dimension: "EI"
  },
  {
    text: "当有空闲时间时，您更可能：",
    options: ["联系他人一起活动", "独自从事个人兴趣"],
    dimension: "EI"
  },
  {
    text: "在团队中，您更倾向于：",
    options: ["积极推动讨论", "在幕后默默贡献"],
    dimension: "EI"
  },
  {
    text: "您对公开表达的看法是：",
    options: ["感到兴奋，乐于分享", "感到谨慎，倾向低调"],
    dimension: "EI"
  },
  {
    text: "您更倾向于：",
    options: ["与他人共同解决问题", "独自思考解决方案"],
    dimension: "EI"
  },

  // SN 维度 10题
  {
    text: "当解决问题时，您更倾向于：",
    options: ["关注具体事实和细节", "关注整体模式和可能性"],
    dimension: "SN"
  },
  {
    text: "您更相信：",
    options: ["实际经验和观察到的事物", "直觉和灵感"],
    dimension: "SN"
  },
  {
    text: "您更喜欢的学习方式是：",
    options: ["循序渐进，掌握具体技能", "探索概念和理论"],
    dimension: "SN"
  },
  {
    text: "在工作中，您更看重：",
    options: ["实用性和效率", "创新和未来可能性"],
    dimension: "SN"
  },
  {
    text: "您更喜欢的书籍或电影类型是：",
    options: ["描述现实生活的作品", "富有想象力和抽象概念的作品"],
    dimension: "SN"
  },
  {
    text: "在观察事物时，您更注重：",
    options: ["实际的、可见的细节", "抽象的、潜在的联系"],
    dimension: "SN"
  },
  {
    text: "您更感兴趣的是：",
    options: ["现实中的实用方案", "创新性的未来构想"],
    dimension: "SN"
  },
  {
    text: "在解决问题时，您更倾向于：",
    options: ["使用已验证的方法", "尝试新的可能性"],
    dimension: "SN"
  },
  {
    text: "您更喜欢的讨论主题是：",
    options: ["具体的事实和案例", "抽象的理论和想法"],
    dimension: "SN"
  },
  {
    text: "在处理新任务时，您更关注：",
    options: ["当前的实际需求", "长远的潜在机会"],
    dimension: "SN"
  },

  // TF 维度 10题
  {
    text: "做决定时，您更倾向于基于：",
    options: ["逻辑分析和客观因素", "个人价值观和对他人的影响"],
    dimension: "TF"
  },
  {
    text: "当朋友向您倾诉问题时，您通常会：",
    options: ["提供解决方案和分析", "提供情感支持和共情"],
    dimension: "TF"
  },
  {
    text: "在评估情况时，您更重视：",
    options: ["公正和一致性", "和谐与个人情况"],
    dimension: "TF"
  },
  {
    text: "您认为给予反馈时应该：",
    options: ["直接坦率，指出问题所在", "体贴入微，注重表达方式"],
    dimension: "TF"
  },
  {
    text: "在工作中，您更看重：",
    options: ["能力和成就", "团队合作和人际关系"],
    dimension: "TF"
  },
  {
    text: "您更看重的品质是：",
    options: ["理性和公正", "同理心和关怀"],
    dimension: "TF"
  },
  {
    text: "在团队中，您更倾向于：",
    options: ["追求效率和结果", "促进和谐和合作"],
    dimension: "TF"
  },
  {
    text: "面对分歧时，您更倾向于：",
    options: ["分析问题根源", "考虑情感影响"],
    dimension: "TF"
  },
  {
    text: "在评价他人时，您更注重：",
    options: ["能力和客观表现", "动机和情感态度"],
    dimension: "TF"
  },
  {
    text: "在给出反馈时，您更倾向于：",
    options: ["直截了当，指出问题", "温和委婉，避免伤害"],
    dimension: "TF"
  },

  // JP 维度 10题
  {
    text: "关于计划，您更倾向于：",
    options: ["提前安排，按计划行事", "保持灵活，视情况而定"],
    dimension: "JP"
  },
  {
    text: "您的工作区域通常是：",
    options: ["井然有序，物品各归其位", "创意性混乱，随手可及"],
    dimension: "JP"
  },
  {
    text: "面对deadline，您更可能：",
    options: ["提前完成，避免压力", "临近截止日期才完成，受压力驱动"],
    dimension: "JP"
  },
  {
    text: "您更喜欢的工作方式是：",
    options: ["有明确的步骤和指导", "有探索和即兴发挥的空间"],
    dimension: "JP"
  },
  {
    text: "您度假时更倾向于：",
    options: ["计划好行程和活动", "即兴决定，随性而为"],
    dimension: "JP"
  },
  {
    text: "在组织事务时，您更倾向于：",
    options: ["保持整齐和规律", "允许灵活和随意"],
    dimension: "JP"
  },
  {
    text: "在规划活动时，您更喜欢：",
    options: ["制定详细的安排", "根据情况即兴决定"],
    dimension: "JP"
  },
  {
    text: "您对规则的态度是：",
    options: ["认为规则提供秩序", "认为规则限制自由"],
    dimension: "JP"
  },
  {
    text: "在团队工作中，您更倾向于：",
    options: ["明确分工和计划", "灵活协作和调整"],
    dimension: "JP"
  },
  {
    text: "您更喜欢的日程安排是：",
    options: ["有明确的计划", "保持开放和灵活"],
    dimension: "JP"
  }
];