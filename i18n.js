/* ============================================================================
   NATURAL WONDER BEAUTY CREATION — TRANSLATIONS (English → 中文)
   A simple lookup keyed by the English string. The language toggle button in
   the header flips the whole page between English and Chinese using this map.
   To translate new menu text, add the English string as a key and its Chinese
   value here. Anything without an entry stays in English (e.g. the brand name,
   the street address, and prices).
   ========================================================================== */

const I18N = {
  /* Static UI strings (header, search, staff modal, edit toolbar, messages) */
  ui: {
    "San Francisco": "旧金山",
    "Search services…": "搜索服务…",
    "Staff Access": "员工权限",
    "Enter the staff PIN to edit prices & durations.": "输入员工 PIN 码以编辑价格和时长。",
    "Incorrect PIN. Please try again.": "PIN 码错误，请重试。",
    "Cancel": "取消",
    "Unlock": "解锁",
    "✎ Staff edit mode": "✎ 员工编辑模式",
    "Tap any price or duration to change it.": "点按任意价格或时长即可修改。",
    "Save to file (export)": "保存到文件（导出）",
    "Reset edits": "重置编辑",
    "Done": "完成",
    "No services match your search.": "没有匹配的服务。",
    "Ask our team for details about this service.": "请向我们的团队咨询此服务的详情。"
  },

  /* Business info (the brand name and street address intentionally stay English) */
  business: {
    "Advanced skincare & beauty, crafted with care": "先进护肤与美容，用心呵护",
    "Tue–Sun 10:00am–6:30pm · Closed Monday": "周二至周日 上午10:00–下午6:30 · 周一休息"
  },

  /* Service durations */
  durations: {
    "15 min": "15 分钟",
    "20 min": "20 分钟",
    "30 min": "30 分钟",
    "35 min": "35 分钟",
    "45 min": "45 分钟",
    "60 min": "60 分钟",
    "75 min": "75 分钟",
    "90 min": "90 分钟"
  },

  /* Category names + descriptions, and every service name + description.
     Keyed by the exact English text used in services.js. */
  content: {
    /* ---- Basic Skin Care ---- */
    "Basic Skin Care": "基础护肤",
    "Relaxing, restorative facials to cleanse, nourish, and refresh your skin.":
      "舒缓、修护的面部护理，清洁、滋养并焕活肌肤。",
    "European Facial Treatment": "欧式面部护理",
    "A classic deep-cleansing facial that exfoliates, extracts, and hydrates to leave skin refreshed and glowing.":
      "经典深层清洁面部护理，去角质、清除杂质并补水，令肌肤焕然一新、容光焕发。",
    "ACNE Treatment": "祛痘护理",
    "A targeted facial that deep-cleans congested pores and calms breakouts to promote clearer, more balanced skin.":
      "针对性面部护理，深层清洁堵塞毛孔并舒缓痘痘，促进肌肤更清透、更均衡。",
    "Clé de Peau Treatment": "肌肤之钥护理",
    "A luxurious facial using premium Clé de Peau Beauté products for radiant, refined, and deeply nourished skin.":
      "采用高端肌肤之钥（Clé de Peau Beauté）产品的奢华面部护理，令肌肤光彩、细致并深层滋养。",
    "Hot Stone Aromatherapy": "热石芳香疗法",
    "Warm stones and aromatic oils melt away tension while relaxing the face and body for total calm.":
      "温热石头与芳香精油融化紧张感，放松面部与身体，达到全然的平静。",

    /* ---- Deep Skin Care ---- */
    "Deep Skin Care": "深层护肤",
    "Results-focused treatments that target hydration, firmness, and radiance.":
      "注重效果的护理，针对补水、紧致与光彩。",
    "Collagen Ultrasound Treatment": "胶原蛋白超声波护理",
    "Ultrasound technology helps infuse collagen to firm, plump, and smooth the look of fine lines.":
      "超声波技术帮助导入胶原蛋白，紧致、丰盈并淡化细纹外观。",
    "Rose Hydration Treatment": "玫瑰补水护理",
    "A soothing rose-infused treatment that replenishes moisture for dewy, supple, calmed skin.":
      "舒缓的玫瑰精华护理，补充水分，令肌肤水润、柔软并平静。",
    "Q10 Activated Cells Treatment": "Q10 活化细胞护理",
    "An antioxidant-rich Q10 treatment that energizes skin and supports a fresh, revitalized look.":
      "富含抗氧化成分的 Q10 护理，为肌肤注入活力，呈现清新焕活的外观。",
    "Tea Tree Balance Oil Treatment": "茶树平衡控油护理",
    "A purifying tea tree treatment that balances oil and clarifies for a fresh, comfortable finish.":
      "净化型茶树护理，平衡油脂并清透肌肤，带来清新舒适的肤感。",
    "Brightening Treatment": "亮肤护理",
    "A radiance-boosting treatment that targets dullness and uneven tone for luminous, even-looking skin.":
      "提升光彩的护理，针对暗沉与肤色不均，呈现透亮、均匀的肌肤。",

    /* ---- Skin Special Care ---- */
    "Skin Special Care": "肌肤特殊护理",
    "Advanced technology treatments to lift, tighten, and refine.":
      "先进科技护理，提拉、紧致并细致肌肤。",
    "Intensive Pulsed Light Treatment": "强脉冲光护理",
    "Gentle pulsed light targets uneven tone and sun-related concerns to reveal clearer, brighter-looking skin.":
      "温和的脉冲光针对肤色不均与日晒问题，呈现更清透、更明亮的肌肤。",
    "Radiofrequency Treatment": "射频护理",
    "RF energy gently warms deeper layers of skin to firm and tighten its appearance.":
      "射频能量温和地加热肌肤深层，紧致并提升肌肤外观。",
    "3D Tighten Outline Treatment": "3D 紧致轮廓护理",
    "A contouring treatment that lifts and defines facial outlines for a firmer, sculpted appearance.":
      "塑形护理，提拉并勾勒面部轮廓，呈现更紧致、立体的外观。",

    /* ---- Waxing ---- */
    "Waxing": "脱毛",
    "Professional waxing for smooth, long-lasting results. Pricing varies by area.":
      "专业蜡脱毛，光滑持久。价格因部位而异。",
    "Upper Lip": "上唇",
    "Lower Chin": "下巴",
    "Eyebrow Shape": "修眉",
    "Face & Eyebrow Shape": "面部及修眉",
    "Underarm": "腋下",
    "Full Arm (without underarm)": "全臂（不含腋下）",
    "Lower Leg": "小腿",
    "Thigh": "大腿",
    "Back": "背部",
    "Bikini Line": "比基尼线",
    "Bikini": "比基尼",
    "Thigh & Bikini": "大腿及比基尼",
    "Full Leg": "全腿",
    "Full Leg & Bikini": "全腿及比基尼",

    /* ---- Body Massage ---- */
    "Body Massage": "身体按摩",
    "Soothing bodywork and wellness rituals to relax and renew.":
      "舒缓的身体护理与养生仪式，放松并焕新。",
    "Full Body Massage": "全身按摩",
    "A full-body massage that eases muscle tension and restores relaxation from head to toe.":
      "全身按摩，缓解肌肉紧张，从头到脚恢复放松。",
    "Ear Candle": "耳烛",
    "A gentle ear-candling ritual designed to soothe and relax.":
      "温和的耳烛仪式，旨在舒缓与放松。",
    "Navel Candle": "肚脐烛疗",
    "A warming navel-candling treatment for deep relaxation and comfort.":
      "温热的肚脐烛疗护理，带来深度放松与舒适。",
    "MB Body Slimming": "MB 身体塑形",
    "A body-contouring treatment that targets problem areas to help refine and smooth the silhouette.":
      "身体塑形护理，针对问题部位，帮助细致并平滑身体线条。",
    "Capsule Sauna Detox": "胶囊桑拿排毒",
    "A warming capsule sauna session that promotes sweating, relaxation, and a refreshed feeling.":
      "温热的胶囊桑拿，促进排汗、放松，带来焕然一新的感觉。",
    "Full Body Exfoliator & 30-Minute Back Massage": "全身去角质 & 30 分钟背部按摩",
    "Full-body exfoliation to renew the skin, followed by a relaxing 30-minute back massage.":
      "全身去角质焕活肌肤，随后进行放松的 30 分钟背部按摩。",

    /* ---- Eye Treatment ---- */
    "Eye Treatment": "眼部护理",
    "Brightening, lifting, and lash & brow services for the delicate eye area.":
      "针对娇嫩眼部的提亮、提拉以及睫毛和眉毛服务。",
    "Eye Basic Care": "眼部基础护理",
    "A nourishing treatment that hydrates and refreshes the delicate eye area.":
      "滋养护理，为娇嫩眼部补水并焕活。",
    "RF Eye Treatment": "射频眼部护理",
    "Radiofrequency warmth helps firm and smooth the look of the eye area.":
      "射频温热帮助紧致并平滑眼部外观。",
    "3D Eye Lifting Treatment": "3D 眼部提拉护理",
    "A lifting treatment that targets puffiness and helps the eye area look firmer and brighter.":
      "提拉护理，针对浮肿，帮助眼部看起来更紧致、更明亮。",
    "Eyebrow Tint": "眉毛染色",
    "Semi-permanent tint to define and enrich the color of your brows.":
      "半永久染色，勾勒并加深眉色。",
    "Eyelash Tint": "睫毛染色",
    "Darkens lashes for a fuller, mascara-free look that lasts.":
      "加深睫毛颜色，呈现更浓密、免睫毛膏的持久效果。",
    "Eyelash Perm": "睫毛烫翘",
    "Lifts and curls natural lashes for an open, wide-eyed effect.":
      "提拉并卷翘天然睫毛，呈现明亮有神的双眼效果。",
    "Eyelash Extension": "睫毛嫁接",
    "Individual extensions applied for longer, fuller, beautiful lashes.":
      "逐根嫁接睫毛，呈现更长、更浓密、更美丽的睫毛。",
    "Eyelash Extension Refill": "睫毛嫁接补做",
    "Maintains your lash extensions by refilling areas that have naturally shed.":
      "通过补做自然脱落的部位，维持您的睫毛嫁接效果。",

    /* ---- UltraFormer II (brand name kept in English) ---- */
    "Poly-lifting, tightening, and anti-aging treatment. Choose your target area.":
      "多重提拉、紧致与抗衰老护理。请选择目标部位。",
    "Face": "面部",
    "Non-invasive lifting and tightening across the face.": "非侵入式的面部提拉与紧致。",
    "Eye": "眼部",
    "Targeted lifting to firm and refresh the eye area.": "针对性提拉，紧致并焕活眼部。",
    "Double Chin": "双下巴",
    "Helps define the jawline and reduce the look of a double chin.":
      "帮助勾勒下颌线并减少双下巴的外观。",
    "Neck": "颈部",
    "Firms and smooths the appearance of the neck.": "紧致并平滑颈部外观。",
    "Breast": "胸部",
    "A lifting treatment to firm and shape the bust area.": "提拉护理，紧致并塑造胸部。",
    "Bye-Bye Arm": "拜拜肉护理",
    "Targets upper-arm laxity for a firmer, more toned look.":
      "针对上臂松弛，呈现更紧致、更结实的外观。",
    "Belly": "腹部",
    "Tightens and smooths the appearance of the abdomen.": "紧致并平滑腹部外观。",
    "Hip": "臀部",
    "Firms and refines the contour of the hips.": "紧致并细致臀部轮廓。",
    "Inner Thigh": "大腿内侧",
    "Targets the inner thighs for a firmer, smoother look.":
      "针对大腿内侧，呈现更紧致、更平滑的外观。",

    /* ---- Endermologie (brand name kept in English) ---- */
    "Experience smoother skin, diminished cellulite, and improved circulation with our non-invasive endermologie services, offering a gentle yet effective mechanical massage and suction technique.":
      "通过我们的非侵入式 Endermologie 服务，体验更光滑的肌肤、减少橘皮组织并改善循环，采用温和而有效的机械按摩与吸力技术。",
    "Endermologie Session": "Endermologie 单次护理",
    "A non-invasive mechanical massage and suction treatment to smooth skin, reduce the look of cellulite, and boost circulation.":
      "非侵入式机械按摩与吸力护理，平滑肌肤、减少橘皮组织外观并促进循环。",

    /* ---- JUVTA Hydra Glow (brand name kept in English) ---- */
    "Our signature non-invasive hydra-glow treatment.": "我们的招牌非侵入式水光焕亮护理。",
    "JUVTA Non-Invasive Hydra Glow Treatment": "JUVTA 非侵入式水光焕亮护理",
    "A non-invasive hydra-glow facial that deeply hydrates and infuses nutrients for plump, dewy, luminous skin.":
      "非侵入式水光焕亮面部护理，深层补水并注入营养，呈现丰盈、水润、透亮的肌肤。"
  }
};
