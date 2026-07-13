/* New Natural Wonder Beauty Creation — service menu
   To change a price or duration, edit the value inside the "quotes" below,
   save the file, and upload it to replace services.js on GitHub. */

const SERVICES_DATA = {
  "business": {
    "name": "New Natural Wonder Beauty Creation",
    "tagline": "Advanced skincare & beauty, crafted with care"
  },
  "currency": "$",
  "categories": [
    {
      "name": "Skin Special Care",
      "description": "Advanced technology treatments to lift, tighten, and refine.",
      "services": [
        {
          "name": "Intensive Pulsed Light Treatment",
          "price": "300",
          "duration": "120 min",
          "package": { "count": 10, "price": 1980 },
          "description": "Gentle pulsed light targets uneven tone and sun-related concerns to reveal clearer, brighter-looking skin."
        },
        {
          "name": "Radiofrequency Treatment",
          "price": "300",
          "duration": "120 min",
          "package": { "count": 10, "price": 1980 },
          "description": "RF energy gently warms deeper layers of skin to firm and tighten its appearance."
        },
        {
          "name": "3D Tighten Outline Treatment",
          "price": "500",
          "duration": "120 min",
          "package": { "count": 5, "price": 1800 },
          "description": "A contouring treatment that lifts and defines facial outlines for a firmer, sculpted appearance."
        },
        {
          "name": "Picosecond Laser Treatment",
          "price": "500",
          "duration": "120 min",
          "package": { "count": 5, "price": 1800 },
          "description": "Ultra-fast picosecond laser pulses target pigmentation, dullness, and uneven tone to reveal clearer, brighter, more refined-looking skin."
        },
        {
          "name": "Juvta Hydra Glow Treatment",
          "price": "300",
          "duration": "120 min",
          "package": { "count": 10, "price": 1980 },
          "description": "A non-invasive hydra-glow facial that deeply hydrates and infuses nutrients for plump, dewy, luminous skin."
        }
      ]
    },
    {
      "name": "Basic Skin Care",
      "description": "Relaxing, restorative facials to cleanse, nourish, and refresh your skin.",
      "services": [
        {
          "name": "European Facial Treatment",
          "price": "120",
          "duration": "75 min",
          "package": { "count": 10, "price": 950 },
          "description": "A classic deep-cleansing facial that exfoliates, extracts, and hydrates to leave skin refreshed and glowing."
        },
        {
          "name": "ACNE Treatment",
          "price": "120",
          "duration": "75 min",
          "package": { "count": 10, "price": 950 },
          "description": "A targeted facial that deep-cleans congested pores and calms breakouts to promote clearer, more balanced skin."
        },
        {
          "name": "Clé de Peau Treatment",
          "price": "150",
          "duration": "75 min",
          "description": "A luxurious facial using premium Clé de Peau Beauté products for radiant, refined, and deeply nourished skin."
        },
        {
          "name": "Hot Stone Aromatherapy",
          "price": "150",
          "duration": "75 min",
          "description": "Warm stones and aromatic oils melt away tension while relaxing the face and body for total calm."
        }
      ]
    },
    {
      "name": "Deep Skin Care",
      "description": "Results-focused treatments that target hydration, firmness, and radiance.",
      "services": [
        {
          "name": "Collagen Ultrasound Treatment",
          "price": "180",
          "duration": "90 min",
          "package": { "count": 10, "price": 1500 },
          "description": "Ultrasound technology helps infuse collagen to firm, plump, and smooth the look of fine lines."
        },
        {
          "name": "Rose / Q10 / Tea Tree Treatment",
          "price": "180",
          "duration": "90 min",
          "package": { "count": 10, "price": 1500 },
          "description": "Choose from three targeted facials — rose hydration for dewy, supple skin; antioxidant Q10 to energize and revitalize; or purifying tea tree to balance oil and clarify — each tailored to your skin's needs."
        },
        {
          "name": "Bio Light Treatment",
          "price": "180",
          "duration": "90 min",
          "package": { "count": 10, "price": 1500 },
          "description": "Soothing bio-light therapy that calms, clarifies, and boosts radiance for a healthier-looking, more even complexion."
        },
        {
          "name": "Living Cell Treatment",
          "price": "180",
          "duration": "90 min",
          "package": { "count": 10, "price": 1500 },
          "description": "A nutrient-rich, cell-renewing treatment that revitalizes tired skin for a firmer, fresher, more youthful-looking appearance."
        },
        {
          "name": "Hydro Peel Treatment",
          "price": "180",
          "duration": "90 min",
          "package": { "count": 10, "price": 1500 },
          "description": "A gentle hydro-exfoliation that resurfaces and deeply hydrates, sweeping away impurities for smooth, refreshed, glowing skin."
        }
      ]
    },
    {
      "name": "Waxing",
      "description": "Professional waxing for smooth, long-lasting results. Pricing varies by area.",
      "services": [
        {
          "name": "Upper Lip",
          "price": "12",
          "duration": "",
          "description": ""
        },
        {
          "name": "Lower Chin",
          "price": "15",
          "duration": "",
          "description": ""
        },
        {
          "name": "Eyebrow Shape",
          "price": "20",
          "duration": "",
          "description": ""
        },
        {
          "name": "Face Wax (Face & Eyebrow Shape)",
          "price": "80",
          "duration": "",
          "description": ""
        },
        {
          "name": "Underarm",
          "price": "25",
          "duration": "",
          "description": ""
        },
        {
          "name": "Full Arm (without underarm)",
          "price": "50",
          "duration": "",
          "description": ""
        },
        {
          "name": "Lower Leg",
          "price": "50",
          "duration": "",
          "description": ""
        },
        {
          "name": "Thigh",
          "price": "80",
          "duration": "",
          "description": ""
        },
        {
          "name": "Back",
          "price": "60",
          "duration": "",
          "description": ""
        },
        {
          "name": "Bikini Line",
          "price": "40",
          "duration": "",
          "description": ""
        },
        {
          "name": "Bikini",
          "price": "60",
          "duration": "",
          "description": ""
        },
        {
          "name": "Full Bikini (Brazilian)",
          "price": "80",
          "duration": "",
          "description": ""
        },
        {
          "name": "Full Leg",
          "price": "90",
          "duration": "",
          "description": ""
        },
        {
          "name": "Full Leg & Bikini",
          "price": "150",
          "duration": "",
          "description": ""
        }
      ]
    },
    {
      "name": "Body Treatment",
      "description": "Soothing bodywork and wellness rituals to relax and renew.",
      "services": [
        {
          "name": "Endermologie Session",
          "price": "150",
          "duration": "",
          "package": { "count": 10, "price": 1200 },
          "description": "A non-invasive mechanical massage and suction treatment to smooth skin, reduce the look of cellulite, and boost circulation."
        },
        {
          "name": "Capsule Sauna Detox Treatment",
          "price": "80",
          "duration": "",
          "package": { "count": 10, "price": 600 },
          "description": "A warming capsule sauna session that promotes sweating, relaxation, and a refreshed feeling."
        },
        {
          "name": "Ear Candle Treatment",
          "price": "80",
          "duration": "",
          "package": { "count": 10, "price": 600 },
          "description": "A gentle ear-candling ritual designed to soothe and relax."
        },
        {
          "name": "Navel Candle Treatment",
          "price": "80",
          "duration": "",
          "package": { "count": 10, "price": 600 },
          "description": "A warming navel-candling treatment for deep relaxation and comfort."
        },
        {
          "name": "Full Body Exfoliator & 30-Minute Back Massage Treatment",
          "price": "180",
          "duration": "",
          "description": "Full-body exfoliation to renew the skin, followed by a relaxing 30-minute back massage."
        }
      ]
    },
    {
      "name": "Eye Treatment",
      "description": "Brightening, lifting, and lash & brow services for the delicate eye area.",
      "services": [
        {
          "name": "Eye Basic Care",
          "price": "80",
          "duration": "",
          "package": { "count": 10, "price": 500 },
          "description": "A nourishing treatment that hydrates and refreshes the delicate eye area."
        },
        {
          "name": "RF Eye Treatment",
          "price": "120",
          "duration": "",
          "package": { "count": 10, "price": 800 },
          "description": "Radiofrequency warmth helps firm and smooth the look of the eye area."
        },
        {
          "name": "3D Eye Lifting Treatment",
          "price": "300",
          "duration": "",
          "package": { "count": 10, "price": 1500 },
          "description": "A lifting treatment that targets puffiness and helps the eye area look firmer and brighter."
        },
        {
          "name": "Eyebrow Tint",
          "price": "20",
          "duration": "",
          "description": "Semi-permanent tint to define and enrich the color of your brows."
        },
        {
          "name": "Eyelash Tint",
          "price": "25",
          "duration": "",
          "description": "Darkens lashes for a fuller, mascara-free look that lasts."
        },
        {
          "name": "Eyelash Perm",
          "price": "80",
          "duration": "",
          "description": "Lifts and curls natural lashes for an open, wide-eyed effect."
        }
      ]
    },
    {
      "name": "UltraFormer II",
      "description": "Poly-lifting, tightening, and anti-aging treatment. Choose your target area.",
      "services": [
        {
          "name": "Face",
          "price": "880",
          "duration": "",
          "package": { "count": 10, "price": 7000 },
          "description": "Non-invasive lifting and tightening across the face."
        },
        {
          "name": "Eye",
          "price": "480",
          "duration": "",
          "package": { "count": 10, "price": 3000 },
          "description": "Targeted lifting to firm and refresh the eye area."
        },
        {
          "name": "Double Chin",
          "price": "480",
          "duration": "",
          "package": { "count": 10, "price": 3000 },
          "description": "Helps define the jawline and reduce the look of a double chin."
        },
        {
          "name": "Neck",
          "price": "880",
          "duration": "",
          "package": { "count": 10, "price": 7000 },
          "description": "Firms and smooths the appearance of the neck."
        }
      ]
    },
    {
      "name": "Laser Hair Removal",
      "description": "Advanced laser hair removal for smooth, long-lasting results. Pricing varies by area.",
      "services": [
        {
          "name": "Full Face",
          "price": "300",
          "duration": "",
          "packages": [
            { "count": 5, "price": 1250 },
            { "count": 10, "price": 2000 }
          ],
          "description": ""
        },
        {
          "name": "Lip",
          "price": "80",
          "duration": "",
          "packages": [
            { "count": 5, "price": 350 },
            { "count": 10, "price": 500 }
          ],
          "description": ""
        },
        {
          "name": "Underarm",
          "price": "150",
          "duration": "",
          "packages": [
            { "count": 5, "price": 600 },
            { "count": 10, "price": 1000 }
          ],
          "description": ""
        },
        {
          "name": "Full Arm",
          "price": "350",
          "duration": "",
          "packages": [
            { "count": 5, "price": 1500 },
            { "count": 10, "price": 2500 }
          ],
          "description": ""
        },
        {
          "name": "Bikini",
          "price": "180",
          "duration": "",
          "packages": [
            { "count": 5, "price": 750 },
            { "count": 10, "price": 1200 }
          ],
          "description": ""
        },
        {
          "name": "Brazilian",
          "price": "360",
          "duration": "",
          "packages": [
            { "count": 5, "price": 1600 },
            { "count": 10, "price": 3000 }
          ],
          "description": ""
        },
        {
          "name": "Lower Leg",
          "price": "300",
          "duration": "",
          "packages": [
            { "count": 5, "price": 1400 },
            { "count": 10, "price": 2500 }
          ],
          "description": ""
        },
        {
          "name": "Chest",
          "price": "300",
          "duration": "",
          "packages": [
            { "count": 5, "price": 1400 },
            { "count": 10, "price": 2500 }
          ],
          "description": ""
        },
        {
          "name": "Back",
          "price": "350",
          "duration": "",
          "packages": [
            { "count": 5, "price": 1600 },
            { "count": 10, "price": 3000 }
          ],
          "description": ""
        },
        {
          "name": "Back & Shoulder",
          "price": "600",
          "duration": "",
          "packages": [
            { "count": 5, "price": 2750 },
            { "count": 10, "price": 4000 }
          ],
          "description": ""
        }
      ]
    }
  ]
};
