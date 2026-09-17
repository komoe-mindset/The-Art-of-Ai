import { LadderStep, PathStep, Principle, SocraticResponses } from './types';

export interface TranslationData {
  brand: {
    title: string;
    sub: string;
  };
  nav: {
    principles: string;
    arena: string;
    teacher: string;
    manifesto: string;
    enterArena: string;
    langSwitch: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleHighlight: string;
    tagline: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    compassLabels: {
      one: string;
      two: string;
      three: string;
      four: string;
    };
    compassCenter: {
      title: string;
      subtitle: string;
    };
    quoteRibbon: {
      label: string;
      text: string;
    };
  };
  principlesSection: {
    eyebrow: string;
    title: string;
    desc: string;
    questionLabel: string;
    items: Principle[];
  };
  arenaSection: {
    eyebrow: string;
    title: string;
    desc: string;
    missionNumber: string;
    badge: string;
    briefEyebrow: string;
    claimTitle: string;
    claimDesc: string;
    scenarioLabel: string;
    scenarioText: string;
    studentClaim: string;
    buttonLabels: {
      clarify: string;
      evidence: string;
      assumption: string;
      counter: string;
    };
    pathSteps: PathStep[];
    responses: SocraticResponses;
  };
  teacherSection: {
    eyebrow: string;
    title: string;
    teachTag: string;
    desc: string;
    challenge: {
      eyebrow: string;
      title: string;
      statementPrefix: string;
      statementClaim: string;
      statementSuffix: string;
      points: {
        prefix: string;
        text: string;
      }[];
    };
    ladder: {
      eyebrow: string;
      title: string;
      steps: LadderStep[];
    };
  };
  manifestoSection: {
    eyebrow: string;
    quoteLine1: string;
    quoteHighlight: string;
    desc: string;
  };
  footer: {
    artOfAi: string;
    socraticLab: string;
    languageNote: string;
  };
}

export const translations: Record<'en' | 'my', TranslationData> = {
  en: {
    brand: {
      title: 'THE ART OF AI',
      sub: 'Think Before You Ask',
    },
    nav: {
      principles: 'Principles',
      arena: 'Arena',
      teacher: 'Teacher',
      manifesto: 'Manifesto',
      enterArena: 'Enter the Arena',
      langSwitch: 'Switch Language',
    },
    hero: {
      eyebrow: 'AI × Strategy × Critical Thinking',
      titleStart: 'THE ART',
      titleHighlight: 'OF AI',
      tagline: 'Think Before You Ask.',
      lead: 'AI should not replace your thinking. It should sharpen it. Learn to question, test evidence, challenge assumptions, adapt your strategy, and make your own decisions.',
      ctaPrimary: 'Start a Thinking Mission',
      ctaSecondary: 'Explore Socratic Lab',
      compassLabels: {
        one: 'KNOW YOURSELF',
        two: 'QUESTION THE ADVISOR',
        three: 'READ THE TERRAIN',
        four: 'ADAPT & DECIDE',
      },
      compassCenter: {
        title: 'HUMAN JUDGMENT',
        subtitle: 'AI advises.\nYou decide.',
      },
      quoteRibbon: {
        label: 'Student Rule:',
        text: "Don't use AI to escape thinking. Use AI to improve thinking.",
      },
    },
    principlesSection: {
      eyebrow: 'The Student Path',
      title: 'Learn strategy,\nnot shortcuts.',
      desc: 'Every mission begins with your own idea. AI enters later—as an opponent, advisor, mirror, or research partner. The goal is not the fastest answer. The goal is stronger reasoning.',
      questionLabel: 'Question:',
      items: [
        {
          id: 'p1',
          number: '01',
          title: 'Know Your Mission',
          desc: 'Define the real problem before you ask AI anything.',
          question: 'What are we actually trying to solve?',
        },
        {
          id: 'p2',
          number: '02',
          title: 'Know Yourself',
          desc: 'Separate what you know, what you assume, and what you still need to learn.',
          question: 'What am I assuming is already true?',
        },
        {
          id: 'p3',
          number: '03',
          title: 'Know Your AI',
          desc: 'Use AI for its strengths, but never confuse confidence with correctness.',
          question: 'How could this answer be wrong?',
        },
        {
          id: 'p4',
          number: '04',
          title: 'Read the Terrain',
          desc: 'Context changes decisions. The same answer may fail in a different situation.',
          question: 'What changes if the context changes?',
        },
        {
          id: 'p5',
          number: '05',
          title: 'Challenge the Advisor',
          desc: 'Ask for counterarguments, missing evidence, and the strongest case against you.',
          question: 'What would change my mind?',
        },
        {
          id: 'p6',
          number: '06',
          title: 'Adapt & Decide',
          desc: 'Revise your position when better evidence appears. Final judgment stays human.',
          question: 'What should I believe now—and why?',
        },
      ],
    },
    arenaSection: {
      eyebrow: 'Interactive Demo',
      title: 'Socratic\nThinking Arena',
      desc: 'In this arena, AI does not hand you the answer. It makes your thinking harder. Choose a question and watch the conversation move deeper.',
      missionNumber: 'Mission 01 · AI & Homework',
      badge: 'Socratic Mode · Student',
      briefEyebrow: 'Mission Brief',
      claimTitle: 'Should students be allowed to use AI for homework?',
      claimDesc: 'You are not trying to “win” a debate. You are trying to build the strongest position you can defend with reasons and evidence.',
      scenarioLabel: 'Your first position:',
      scenarioText: '“Students should be allowed to use AI because it helps them learn faster.”',
      studentClaim: 'Students should be allowed to use AI because it helps them learn faster.',
      buttonLabels: {
        clarify: 'Clarify the claim',
        evidence: 'Ask for evidence',
        assumption: 'Expose an assumption',
        counter: 'Test the opposite',
      },
      pathSteps: [
        {
          num: '01',
          tag: 'CLAIM',
          title: 'What do you think?',
          desc: 'Commit to a starting position.',
        },
        {
          num: '02',
          tag: 'CLARIFY',
          title: 'What do you mean?',
          desc: 'Make vague ideas precise.',
        },
        {
          num: '03',
          tag: 'TEST',
          title: 'Where is the evidence?',
          desc: 'Separate belief from proof.',
        },
        {
          num: '04',
          tag: 'CHALLENGE',
          title: "What if you're wrong?",
          desc: 'Search for assumptions and counterexamples.',
        },
        {
          num: '05',
          tag: 'REVISE',
          title: 'What changed?',
          desc: 'Update your view when evidence improves.',
        },
      ],
      responses: {
        clarify: [
          'What do you mean by “learn faster”?',
          'How would you know that learning actually improved—not just that the homework finished sooner?',
          'Is finishing quickly the same thing as understanding deeply?',
        ],
        evidence: [
          'What evidence supports your claim?',
          'Is that evidence based on your own experience, a study, or an assumption?',
          'What evidence would make your claim weaker?',
        ],
        assumption: [
          "What are you assuming about the quality of the AI's answer?",
          'What happens if the AI gives a confident but incorrect explanation?',
          'Are you assuming every student uses AI in the same way?',
        ],
        counter: [
          'Could AI ever make learning worse?',
          'Imagine a student uses AI for every difficult step. What skill might they fail to develop?',
          'What is the strongest argument against your current position?',
        ],
      },
    },
    teacherSection: {
      eyebrow: 'Teacher Side',
      title: 'SOCRATIC LAB',
      teachTag: 'Teach Through Questions.',
      desc: 'The teacher is not the answer machine. The teacher designs questions that help students examine meaning, reasons, evidence, assumptions, perspectives, and consequences.',
      challenge: {
        eyebrow: 'Teacher Challenge',
        title: 'Do Not Answer.',
        statementPrefix: 'A student says: ',
        statementClaim: '“AI will replace teachers.”',
        statementSuffix: 'Your task is to help the student investigate the claim without giving your own conclusion.',
        points: [
          {
            prefix: 'Instead of:',
            text: '“No, AI cannot replace teachers.”',
          },
          {
            prefix: 'Ask:',
            text: '“What does ‘replace’ mean in this claim?”',
          },
          {
            prefix: 'Then:',
            text: '“Which parts of teaching could AI do—and which parts would be harder?”',
          },
          {
            prefix: 'Finally:',
            text: '“What evidence would change your view?”',
          },
        ],
      },
      ladder: {
        eyebrow: 'Question Ladder',
        title: 'Go deeper, one level at a time.',
        steps: [
          {
            level: 1,
            title: 'Clarify',
            question: 'What do you mean?',
            detail: 'Unpack ambiguity and define terms.',
          },
          {
            level: 2,
            title: 'Reason',
            question: 'Why do you think that?',
            detail: 'Identify foundational logic.',
          },
          {
            level: 3,
            title: 'Evidence',
            question: 'What supports your claim?',
            detail: 'Distinguish facts from opinions.',
          },
          {
            level: 4,
            title: 'Assumption',
            question: 'What are you taking for granted?',
            detail: 'Reveal unexamined preconditions.',
          },
          {
            level: 5,
            title: 'Perspective',
            question: 'How might someone disagree?',
            detail: 'Explore valid opposing viewpoints.',
          },
          {
            level: 6,
            title: 'Consequence',
            question: 'If true, what follows?',
            detail: 'Trace downstream impact and trade-offs.',
          },
          {
            level: 7,
            title: 'Reflection',
            question: 'What would change your mind?',
            detail: 'Maintain intellectual humility and openness.',
          },
        ],
      },
    },
    manifestoSection: {
      eyebrow: 'The Golden Rule',
      quoteLine1: '“Don’t ask AI for the answer.',
      quoteHighlight: 'Ask AI to make your thinking harder.”',
      desc: 'AI can generate information. Your responsibility is to question, verify, compare, adapt, and decide.',
    },
    footer: {
      artOfAi: 'THE ART OF AI · Think Before You Ask.',
      socraticLab: 'SOCRATIC LAB · Teach Through Questions.',
      languageNote: 'Dual English & Myanmar (မြန်မာ) interface',
    },
  },
  my: {
    brand: {
      title: 'THE ART OF AI',
      sub: 'မမေးခင် အရင်စဉ်းစားပါ',
    },
    nav: {
      principles: 'အခြေခံမူများ',
      arena: 'တွေးခေါ်မှု အာရီနာ',
      teacher: 'ဆိုကရေးတီး သင်ကြားမှု',
      manifesto: 'ရွှေရောင်စည်းမျဉ်း',
      enterArena: 'အာရီနာသို့ ဝင်မည်',
      langSwitch: 'ဘာသာစကား',
    },
    hero: {
      eyebrow: 'AI × မဟာဗျူဟာ × ဝေဖန်ပိုင်းခြား စဉ်းစားမှု',
      titleStart: 'AI နှင့်',
      titleHighlight: 'စဉ်းစားတွေးခေါ်မှု အနုပညာ',
      tagline: 'မမေးခင် အရင်စဉ်းစားပါ။',
      lead: 'AI ဟာ သင်တွေးတာကို အစားထိုးဖို့ မဟုတ်ဘဲ ပိုထက်မြက်လာအောင် လေ့ကျင့်ပေးဖို့ ဖြစ်ပါတယ်။ မေးခွန်းထုတ်ပါ၊ သက်သေစိစစ်ပါ၊ ကြိုတင်ယူဆချက်တွေကို စိန်ခေါ်ပါ၊ မဟာဗျူဟာကို လိုက်လျောညီထွေ ပြောင်းလဲပြီး ကိုယ်ပိုင်ဆုံးဖြတ်ချက် ချပါ။',
      ctaPrimary: 'စဉ်းစားမှု မစ်ရှင် စတင်မည်',
      ctaSecondary: 'ဆိုကရေးတီးနည်းကို လေ့လာမည်',
      compassLabels: {
        one: 'မိမိကိုယ်ကို သိနားလည်ခြင်း',
        two: 'အကြံပေးကို မေးခွန်းထုတ်ခြင်း',
        three: 'ပတ်ဝန်းကျင်ကို အကဲခတ်ခြင်း',
        four: 'လိုက်လျောညီထွေ ဆုံးဖြတ်ခြင်း',
      },
      compassCenter: {
        title: 'လူသား၏ ဆင်ခြင်ဆုံးဖြတ်နိုင်စွမ်း',
        subtitle: 'AI က အကြံပေးသည်၊\nသင်က ဆုံးဖြတ်သည်။',
      },
      quoteRibbon: {
        label: 'ကျောင်းသားများအတွက် စည်းမျဉ်း -',
        text: 'စဉ်းစားတွေးခေါ်ရမှာကို ရှောင်လွှဲဖို့ AI ကို မသုံးပါနဲ့။ ပိုမိုကောင်းမွန်စွာ စဉ်းစားနိုင်ဖို့သာ သုံးပါ။',
      },
    },
    principlesSection: {
      eyebrow: 'ကျောင်းသားများ လျှောက်လှမ်းရာလမ်း',
      title: 'ဖြတ်လမ်းကို မလိုက်ပါနှင့်၊\nမဟာဗျူဟာကို သင်ယူပါ။',
      desc: 'မစ်ရှင်တိုင်းဟာ သင့်ကိုယ်ပိုင် အတွေးအမြင်နဲ့ စတင်ပါတယ်။ AI ဟာ နောက်မှသာ အတိုက်အခံ၊ အကြံပေး၊ ကြေးမုံပြင် ဒါမှမဟုတ် သုတေသနလက်တွဲဖော်အဖြစ် ဝင်ရောက်လာသင့်တာပါ။ ရည်မှန်းချက်ဟာ အမြန်ဆုံး အဖြေရဖို့ မဟုတ်ဘဲ ပိုမိုခိုင်မာတဲ့ ဆင်ခြင်ဆုံးဖြတ်နိုင်စွမ်း ရရှိဖို့ ဖြစ်ပါတယ်။',
      questionLabel: 'ဆင်ခြင်ရန် မေးခွန်း -',
      items: [
        {
          id: 'p1',
          number: '၀၁',
          title: 'မိမိ၏ ရည်မှန်းချက်ကို ရှင်းလင်းစွာ သတ်မှတ်ပါ',
          desc: 'AI ဆီက ဘာမဆို မမေးခင် သင် အမှန်တကယ် ဖြေရှင်းလိုသည့် ပြဿနာရင်းမြစ်ကို အရင်ဆုံး ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ။',
          question: 'အမှန်တကယ် ဖြေရှင်းဖို့ ကြိုးစားနေတာ ဘာလဲ။',
        },
        {
          id: 'p2',
          number: '၀၂',
          title: 'မိမိကိုယ်ကို ကောင်းစွာ သိနားလည်ပါ',
          desc: 'မိမိ အမှန်တကယ် သိထားသောအရာ၊ ကြိုတင်ယူဆထားသောအရာနှင့် ထပ်မံလေ့လာရန် လိုအပ်သည်များကို သဲသဲကွဲကွဲ ခွဲခြားထားပါ။',
          question: 'ဘာကို အမှန်လို့ ကြိုတင်ယူဆထားသလဲ။',
        },
        {
          id: 'p3',
          number: '၀၃',
          title: 'မိမိအသုံးပြုသည့် AI ကို ကောင်းစွာနားလည်ပါ',
          desc: 'AI ၏ အားသာချက်ကို အသုံးချပါ။ သို့သော် ယုံကြည်မှုရှိစွာ ဖြေကြားနိုင်ခြင်းနှင့် အမှန်တကယ် မှန်ကန်ခြင်းတို့ကို မရောထွေးပါစေနှင့်။',
          question: 'ဒီအဖြေဟာ ဘယ်နေရာတွေမှာ မှားယွင်းနေနိုင်သလဲ။',
        },
        {
          id: 'p4',
          number: '၀၄',
          title: 'ပတ်ဝန်းကျင် အခြေအနေကို အကဲခတ်ပါ',
          desc: 'အခြေအနေနှင့် နောက်ခံအကြောင်းအရာပေါ် မူတည်ပြီး ဆုံးဖြတ်ချက်များ ပြောင်းလဲနိုင်သည်။ အခြေအနေတစ်ခုတွင် မှန်ကန်သောအဖြေသည် အခြားတစ်ခုတွင် မသင့်တော်နိုင်ပါ။',
          question: 'နောက်ခံအခြေအနေ ပြောင်းလဲသွားရင် ဘာတွေ ကွာခြားသွားမလဲ။',
        },
        {
          id: 'p5',
          number: '၀၅',
          title: 'အကြံပေးကို ပြန်လည်မေးခွန်းထုတ်ပါ',
          desc: 'ဆန့်ကျင်ဘက် အကြောင်းပြချက်များ၊ လိုအပ်နေသော သက်သေများနှင့် သင့်အမြင်ကို အပြင်းထန်ဆုံး စိန်ခေါ်နိုင်မည့် အချက်များကို တောင်းဆိုပါ။',
          question: 'သင့်အမြင်ကို ဘယ်အချက်က ပြောင်းလဲစေနိုင်သလဲ။',
        },
        {
          id: 'p6',
          number: '၀၆',
          title: 'အခြေအနေအရ လိုက်လျောညီထွေ ဆုံးဖြတ်ပါ',
          desc: 'ခိုင်လုံသော သက်သေအသစ်များ တွေ့ရှိပါက သင့်ရပ်တည်ချက်ကို ပြင်ဆင်ပါ။ နောက်ဆုံး ဆုံးဖြတ်ချက်ချရမည့် တာဝန်မှာ လူသား၏ တာဝန်သာ ဖြစ်သည်။',
          question: 'ယခုအခါ ဘာကို ယုံကြည်သင့်သလဲ၊ အဘယ်ကြောင့်နည်း။',
        },
      ],
    },
    arenaSection: {
      eyebrow: 'လက်တွေ့စမ်းသပ် လေ့ကျင့်ခန်း',
      title: 'ဆိုကရေးတီးနည်းကျ\nတွေးခေါ်မှု အာရီနာ',
      desc: 'ဒီအာရီနာမှာ AI ဟာ သင့်ကို အဖြေကို အလွယ်တကူ ထုတ်ပေးမှာ မဟုတ်ဘဲ သင့်အတွေးကို ပိုမိုနက်နဲအောင် မေးခွန်းထုတ်ပါလိမ့်မယ်။ မေးခွန်းတစ်ခုကို ရွေးချယ်ပြီး ဆွေးနွေးမှု ပိုမိုနက်ရှိုင်းလာပုံကို လေ့လာကြည့်ပါ။',
      missionNumber: 'မစ်ရှင် ၀၁ · AI နှင့် အိမ်စာ',
      badge: 'ဆိုကရေးတီးနည်းကျ လေ့ကျင့်မှု',
      briefEyebrow: 'မစ်ရှင် အကျဉ်းချုပ်',
      claimTitle: 'ကျောင်းသားတွေကို အိမ်စာလုပ်ရာမှာ AI သုံးခွင့် ပေးသင့်ပါသလား။',
      claimDesc: 'သင်ဟာ စကားရည်လုပွဲမှာ “အနိုင်ရဖို့” ကြိုးစားနေတာ မဟုတ်ပါဘူး။ ခိုင်လုံတဲ့ အကြောင်းပြချက်တွေ၊ သက်သေအထောက်အထားတွေနဲ့ ရပ်တည်နိုင်မယ့် အခိုင်မာဆုံး အမြင်တစ်ခုကို တည်ဆောက်နေတာ ဖြစ်ပါတယ်။',
      scenarioLabel: 'သင့် ကနဦး ရပ်တည်ချက် -',
      scenarioText: '“AI ဟာ ပိုမိုမြန်ဆန်စွာ သင်ယူနိုင်အောင် ကူညီပေးတဲ့အတွက် ကျောင်းသားတွေကို အိမ်စာလုပ်ရာမှာ AI သုံးခွင့် ပေးသင့်ပါတယ်။”',
      studentClaim: 'AI ဟာ ပိုမိုမြန်ဆန်စွာ သင်ယူနိုင်အောင် ကူညီပေးတဲ့အတွက် ကျောင်းသားတွေကို အိမ်စာလုပ်ရာမှာ AI သုံးခွင့် ပေးသင့်ပါတယ်။',
      buttonLabels: {
        clarify: 'အဆိုကို ရှင်းလင်းစေရန်',
        evidence: 'သက်သေအထောက်အထား စစ်ဆေးရန်',
        assumption: 'ကြိုတင်ယူဆချက်ကို စိန်ခေါ်ရန်',
        counter: 'ဆန့်ကျင်ဘက် အကြောင်းပြချက် စူးစမ်းရန်',
      },
      pathSteps: [
        {
          num: '၀၁',
          tag: 'ရပ်တည်ချက်',
          title: 'သင့်အမြင်က ဘာလဲ။',
          desc: 'ကနဦး ရပ်တည်ချက်တစ်ခုကို ရှင်းလင်းစွာ ချမှတ်ပါ။',
        },
        {
          num: '၀၂',
          tag: 'ရှင်းလင်းခြင်း',
          title: 'အဓိပ္ပာယ်က ဘာလဲ။',
          desc: 'ဝေဝါးနေသော သဘောတရားများကို တိကျအောင် ပြုလုပ်ပါ။',
        },
        {
          num: '၀၃',
          tag: 'သက်သေစိစစ်ခြင်း',
          title: 'သက်သေ ဘယ်မှာလဲ။',
          desc: 'ထင်မြင်ယူဆချက်နှင့် သက်သေအထောက်အထားကို ခွဲခြားပါ။',
        },
        {
          num: '၀၄',
          tag: 'စိန်ခေါ်ခြင်း',
          title: 'မှားနေခဲ့ရင်ကော။',
          desc: 'ကြိုတင်ယူဆချက်များနှင့် ဆန့်ကျင်ဘက် အမြင်များကို ရှာဖွေပါ။',
        },
        {
          num: '၀၅',
          tag: 'ပြင်ဆင်ဆုံးဖြတ်ခြင်း',
          title: 'ဘာတွေ ပြောင်းလဲသွားသလဲ။',
          desc: 'သက်သေအသစ်များအရ သင့်ရှုထောင့်ကို မွမ်းမံပြင်ဆင်ပါ။',
        },
      ],
      responses: {
        clarify: [
          '“ပိုမိုမြန်ဆန်စွာ သင်ယူနိုင်သည်” ဟု ဆိုရာတွင် အဘယ်အရာကို ဆိုလိုပါသလဲ။',
          'အိမ်စာ အချိန်တိုအတွင်း ပြီးသွားရုံမျှမကဘဲ အမှန်တကယ် သင်ယူနားလည်မှု တိုးတက်လာကြောင်း မည်သို့ သိရှိနိုင်မည်နည်း။',
          'မြန်မြန်ပြီးမြောက်ခြင်းသည် နက်နက်နဲနဲ နားလည်သဘောပေါက်ခြင်းနှင့် အတူတူပင် ဖြစ်ပါသလား။',
        ],
        evidence: [
          'သင့်အဆိုကို မည်သည့် သက်သေအထောက်အထားက အခိုင်မာဆုံး ထောက်ခံပါသနည်း။',
          'ထိုအထောက်အထားသည် သင့်ကိုယ်တွေ့ အတွေ့အကြုံ၊ စနစ်တကျ လေ့လာမှု သို့မဟုတ် ထင်မြင်ချက်အပေါ် အခြေခံထားပါသလား။',
          'မည်သည့် အချက်အလက်များက သင့်အဆိုကို အားနည်းသွားစေနိုင်ပါသနည်း။',
        ],
        assumption: [
          'AI ထုတ်ပေးသည့် အဖြေများ၏ တိကျမှန်ကန်မှုအပေါ် မည်သို့ ကြိုတင်ယူဆထားပါသနည်း။',
          'AI က အလွန်ယုံကြည်မှုအပြည့်ဖြင့် မှားယွင်းစွာ ရှင်းပြလာပါက မည်သို့ ဖြစ်လာနိုင်သနည်း။',
          'ကျောင်းသားတိုင်း AI ကို တူညီသော နည်းလမ်းအတိုင်း ထိရောက်စွာ အသုံးပြုနိုင်သည်ဟု ယူဆနေပါသလား။',
        ],
        counter: [
          'AI ကို အသုံးပြုခြင်းကြောင့် သင်ယူမှုကို ပိုမိုအားနည်းသွားစေနိုင်သည့် အခြေအနေမျိုး ရှိနိုင်ပါသလား။',
          'ခက်ခဲသော အဆင့်တိုင်းအတွက် AI ကို အမြဲအားကိုးနေပါက မည်သည့် အဓိက အရည်အချင်းများ မဖွံ့ဖြိုးဘဲ ကျန်ရစ်နိုင်ပါသနည်း။',
          'သင့်လက်ရှိ ရပ်တည်ချက်ကို ချေပနိုင်မည့် အခိုင်မာဆုံး ဆန့်ကျင်ဘက် အကြောင်းပြချက်မှာ အဘယ်နည်း။',
        ],
      },
    },
    teacherSection: {
      eyebrow: 'ဆရာ၊ ဆရာမများအတွက်',
      title: 'ဆိုကရေးတီး သင်ကြားရေးစနစ်',
      teachTag: 'မေးခွန်းများဖြင့် လမ်းညွှန်သင်ကြားပါ။',
      desc: 'ဆရာသည် အဖြေထုတ်ပေးသည့် စက်မဟုတ်ပါ။ ကျောင်းသားများအနေဖြင့် အဓိပ္ပာယ်၊ အကြောင်းပြချက်၊ သက်သေအထောက်အထား၊ ကြိုတင်ယူဆချက်၊ ရှုထောင့်များနှင့် နောက်ဆက်တွဲ သက်ရောက်မှုများကို စေ့စေ့စပ်စပ် စူးစမ်းနိုင်စေရန် မေးခွန်းများဖြင့် လမ်းညွှန်ပေးသူ ဖြစ်သည်။',
      challenge: {
        eyebrow: 'ဆရာများအတွက် သင်ကြားရေး စိန်ခေါ်မှု',
        title: 'ချက်ချင်း အဖြေမပေးပါနှင့်။',
        statementPrefix: 'ကျောင်းသားတစ်ဦးက ',
        statementClaim: '“AI က ဆရာတွေကို အစားထိုးလိမ့်မယ်”',
        statementSuffix: 'ဟု ပြောလာသည်။ သင့်တာဝန်မှာ ကိုယ်ပိုင်နိဂုံးကို တန်းမပြောဘဲ ကျောင်းသားကိုယ်တိုင် စဉ်းစားတွေးခေါ်နိုင်ရန် မေးခွန်းများဖြင့် ကူညီပေးခြင်း ဖြစ်သည်။',
        points: [
          {
            prefix: 'တိုက်ရိုက်ငြင်းဆိုမည့်အစား -',
            text: '“မဟုတ်ဘူး၊ AI က ဆရာတွေကို အစားမထိုးနိုင်ဘူး”',
          },
          {
            prefix: 'အဓိပ္ပာယ်ကို စတင်မေးပါ -',
            text: '“ဒီနေရာမှာ ‘အစားထိုးတယ်’ ဆိုတာ ဘာကို ရည်ညွှန်းတာလဲ။”',
          },
          {
            prefix: 'ရှုထောင့်ကို ဆက်လက်မေးပါ -',
            text: '“သင်ကြားမှုရဲ့ ဘယ်အပိုင်းတွေကို AI က လုပ်ဆောင်နိုင်ပြီး ဘယ်အပိုင်းတွေကို လုပ်ဆောင်ဖို့ ခက်ခဲမလဲ။”',
          },
          {
            prefix: 'သက်သေကို မေးမြန်းပါ -',
            text: '“ဘယ်လို သက်သေအထောက်အထားမျိုးက သင့်အမြင်ကို ပြောင်းလဲစေနိုင်မလဲ။”',
          },
        ],
      },
      ladder: {
        eyebrow: 'မေးခွန်း လှေကားထစ် ၇ ဆင့်',
        title: 'တစ်ဆင့်ချင်း ပိုမိုနက်နဲအောင် လမ်းညွှန်ပါ။',
        steps: [
          {
            level: 1,
            title: 'ရှင်းလင်းစေခြင်း',
            question: 'အဘယ်အရာကို ဆိုလိုသနည်း။',
            detail: 'ဝေဝါးမှုကို ရှင်းထုတ်ပြီး ဝေါဟာရအဓိပ္ပာယ်ကို သတ်မှတ်ပါ။',
          },
          {
            level: 2,
            title: 'အကြောင်းပြချက်',
            question: 'အဘယ်ကြောင့် ထိုသို့ ယူဆရသနည်း။',
            detail: 'အခြေခံ ဆင်ခြင်တွေးခေါ်မှု ယုတ္တိကို ရှာဖွေပါ။',
          },
          {
            level: 3,
            title: 'သက်သေအထောက်အထား',
            question: 'သင့်အဆိုကို အဘယ်အရာက ထောက်ခံသနည်း။',
            detail: 'အမှန်တရားနှင့် ထင်မြင်ချက်ကို ကွဲပြားစွာ ခွဲခြားပါ။',
          },
          {
            level: 4,
            title: 'ကြိုတင်ယူဆချက်',
            question: 'မည်သည့်အချက်ကို အမှန်ဟု ကြိုတင်ယူဆထားသနည်း။',
            detail: 'စိစစ်မထားသော အခြေခံယူဆချက်များကို ဖော်ထုတ်ပါ။',
          },
          {
            level: 5,
            title: 'ရှုထောင့်',
            question: 'အခြားသူတစ်ဦးက မည်သို့ သဘောထားကွဲလွဲနိုင်သနည်း။',
            detail: 'ခိုင်လုံသော ဆန့်ကျင်ဘက် အမြင်များကို စူးစမ်းပါ။',
          },
          {
            level: 6,
            title: 'နောက်ဆက်တွဲ အကျိုးဆက်',
            question: 'အမှန်ဖြစ်ခဲ့လျှင် နောက်ဆက်တွဲ ဘာဖြစ်လာနိုင်သနည်း။',
            detail: 'ရေရှည်သက်ရောက်မှုနှင့် အပေးအယူများကို ခြေရာခံပါ။',
          },
          {
            level: 7,
            title: 'ပြန်လည်ဆင်ခြင်ခြင်း',
            question: 'မည်သည့်အရာက သင့်အမြင်ကို ပြောင်းလဲစေနိုင်သနည်း။',
            detail: 'ပညာဉာဏ် နှိမ့်ချမှုနှင့် ပွင့်လင်းသော စိတ်ထားကို မွေးမြူပါ။',
          },
        ],
      },
    },
    manifestoSection: {
      eyebrow: 'ရွှေရောင်စည်းမျဉ်း',
      quoteLine1: '“AI ဆီက အဖြေကို တန်းမတောင်းပါနဲ့။',
      quoteHighlight: 'သင့်အတွေးကို ပိုမိုစိန်ခေါ်ခိုင်းစေပါ။”',
      desc: 'AI သည် အချက်အလက်များကို ဖန်တီးပေးနိုင်သည်။ သင်၏ တာဝန်မှာ မေးခွန်းထုတ်ရန်၊ သက်သေစိစစ်ရန်၊ နှိုင်းယှဉ်ရန်၊ လိုက်လျောညီထွေ ပြင်ဆင်ရန်နှင့် ကိုယ်တိုင် ဆုံးဖြတ်ချက် ချမှတ်ရန် ဖြစ်သည်။',
    },
    footer: {
      artOfAi: 'THE ART OF AI · မမေးခင် အရင်စဉ်းစားပါ။',
      socraticLab: 'SOCRATIC LAB · မေးခွန်းများဖြင့် လမ်းညွှန်သင်ကြားပါ။',
      languageNote: 'အင်္ဂလိပ်နှင့် မြန်မာ နှစ်ဘာသာစနစ်',
    },
  },
};
