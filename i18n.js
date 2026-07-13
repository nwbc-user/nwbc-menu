/* ============================================================================
   NATURAL WONDER BEAUTY CREATION — TRANSLATIONS (English → 中文)
   A simple lookup keyed by the English string. The language toggle button in
   the header flips the whole page between English and Chinese using this map.
   To translate new menu text, add the English string as a key and its Chinese
   value here. Anything without an entry stays in English (e.g. the brand name,
   the street address, and prices).
   ========================================================================== */

const I18N = {
  /* Static UI strings (header, search, messages) */
  ui: {
    "San Francisco": "旧金山",
    "Search services…": "搜索服务…",
    "No services match your search.": "没有匹配的服务。",
    "Ask our team for details about this service.": "请向我们的团队咨询此服务的详情。",
    "Package": "套餐",
    "treatments": "次护理",
    "Save": "立省"
  },

  /* Business info (the brand name and street address intentionally stay English) */
  business: {
    "Advanced skincare & beauty, crafted with care": "先进护肤与美容，用心呵护"
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
    "90 min": "90 分钟",
    "120 min": "120 分钟"
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
    "Rose / Q10 / Tea Tree Treatment": "玫瑰 / Q10 / 茶树护理",
    "Choose from three targeted facials — rose hydration for dewy, supple skin; antioxidant Q10 to energize and revitalize; or purifying tea tree to balance oil and clarify — each tailored to your skin's needs.":
      "三选一的针对性面部护理：玫瑰补水，令肌肤水润柔软；抗氧化 Q10，注入活力、焕发光彩；或净化茶树，平衡油脂、清透肌肤——为您的肌肤量身定制。",
    "Bio Light Treatment": "生物光护理",
    "Soothing bio-light therapy that calms, clarifies, and boosts radiance for a healthier-looking, more even complexion.":
      "舒缓的生物光疗护理，镇静、清透并提升光彩，令肤色更健康、更均匀。",
    "Living Cell Treatment": "活细胞护理",
    "A nutrient-rich, cell-renewing treatment that revitalizes tired skin for a firmer, fresher, more youthful-looking appearance.":
      "营养丰富的活细胞焕新护理，唤醒疲惫肌肤，呈现更紧致、更清新、更年轻的外观。",
    "Hydro Peel Treatment": "水动力焕肤护理",
    "A gentle hydro-exfoliation that resurfaces and deeply hydrates, sweeping away impurities for smooth, refreshed, glowing skin.":
      "温和的水动力去角质护理，焕新肤质并深层补水，清除杂质，令肌肤光滑、清新、透亮。",

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
    "Picosecond Laser Treatment": "皮秒激光护理",
    "Ultra-fast picosecond laser pulses target pigmentation, dullness, and uneven tone to reveal clearer, brighter, more refined-looking skin.":
      "超快皮秒激光脉冲，针对色素沉着、暗沉与肤色不均，令肌肤更清透、明亮、细致。",
    "Juvta Hydra Glow Treatment": "JUVTA 水光焕亮护理",
    "A non-invasive hydra-glow facial that deeply hydrates and infuses nutrients for plump, dewy, luminous skin.":
      "非侵入式水光焕亮面部护理，深层补水并注入营养，呈现丰盈、水润、透亮的肌肤。",

    /* ---- Waxing ---- */
    "Waxing": "脱毛",
    "Professional waxing for smooth, long-lasting results. Pricing varies by area.":
      "专业蜡脱毛，光滑持久。价格因部位而异。",
    "Upper Lip": "上唇",
    "Lower Chin": "下巴",
    "Eyebrow Shape": "修眉",
    "Face Wax (Face & Eyebrow Shape)": "面部脱毛（面部及修眉）",
    "Underarm": "腋下",
    "Full Arm (without underarm)": "全臂（不含腋下）",
    "Lower Leg": "小腿",
    "Thigh": "大腿",
    "Back": "背部",
    "Bikini Line": "比基尼线",
    "Bikini": "比基尼",
    "Full Bikini (Brazilian)": "全比基尼（巴西式）",
    "Full Leg": "全腿",
    "Full Leg & Bikini": "全腿及比基尼",

    /* ---- Body Treatment ---- */
    "Body Treatment": "身体护理",
    "Soothing bodywork and wellness rituals to relax and renew.":
      "舒缓的身体护理与养生仪式，放松并焕新。",
    "Endermologie Session": "Endermologie 单次护理",
    "A non-invasive mechanical massage and suction treatment to smooth skin, reduce the look of cellulite, and boost circulation.":
      "非侵入式机械按摩与吸力护理，平滑肌肤、减少橘皮组织外观并促进循环。",
    "Capsule Sauna Detox Treatment": "胶囊桑拿排毒护理",
    "A warming capsule sauna session that promotes sweating, relaxation, and a refreshed feeling.":
      "温热的胶囊桑拿，促进排汗、放松，带来焕然一新的感觉。",
    "Ear Candle Treatment": "耳烛护理",
    "A gentle ear-candling ritual designed to soothe and relax.":
      "温和的耳烛仪式，旨在舒缓与放松。",
    "Navel Candle Treatment": "肚脐烛疗护理",
    "A warming navel-candling treatment for deep relaxation and comfort.":
      "温热的肚脐烛疗护理，带来深度放松与舒适。",
    "Full Body Exfoliator & 30-Minute Back Massage Treatment": "全身去角质 & 30 分钟背部按摩护理",
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

    /* ---- Laser Hair Removal (Underarm/Bikini/Lower Leg/Back reuse Waxing entries) ---- */
    "Laser Hair Removal": "激光脱毛",
    "Advanced laser hair removal for smooth, long-lasting results. Pricing varies by area.":
      "先进激光脱毛，光滑持久。价格因部位而异。",
    "Full Face": "全脸",
    "Lip": "唇部",
    "Full Arm": "全臂",
    "Brazilian": "巴西式",
    "Chest": "胸部",
    "Back & Shoulder": "背部及肩部"
  }
};
