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
      sub: 'မမေးမီ အရင်တွေးပါ',
    },
    nav: {
      principles: 'အခြေခံမူများ',
      arena: 'တွေးခေါ်မှု အာရီနာ',
      teacher: 'ဆိုကရေးတီး ဓာတ်ခွဲခန်း',
      manifesto: 'ရွှေရောင်စည်းမျဉ်း',
      enterArena: 'အာရီနာသို့ ဝင်မည်',
      langSwitch: 'ဘာသာစကားပြောင်းရန်',
    },
    hero: {
      eyebrow: 'AI × မဟာဗျူဟာ × ဝေဖန်ဆင်ခြင်တွေးခေါ်မှု',
      titleStart: 'ဉာဏ်ရည်တု',
      titleHighlight: 'အတွေးအနုပညာ',
      tagline: 'မမေးမီ အရင်တွေးပါ။',
      lead: 'AI သည် သင်၏ တွေးခေါ်နိုင်စွမ်းကို အစားမထိုးသင့်ပါ။ ပိုမိုထက်မြက်အောင်သာ သွေးပေးသင့်ပါသည်။ မေးခွန်းထုတ်တတ်ရန်၊ သက်သေအထောက်အထားများကို စိစစ်ရန်၊ အထင်အမြင်များကို စိန်ခေါ်ရန်၊ မဟာဗျူဟာကို လိုက်လျောညီထွေ ပြင်ဆင်ရန်နှင့် ကိုယ်ပိုင်ဆုံးဖြတ်ချက်များ ချမှတ်တတ်ရန် လေ့ကျင့်ပါ။',
      ctaPrimary: 'တွေးခေါ်မှု မစ်ရှင် စတင်ရန်',
      ctaSecondary: 'ဆိုကရေးတီး ဓာတ်ခွဲခန်း လေ့လာရန်',
      compassLabels: {
        one: 'မိမိကိုယ်ကို သိပါ',
        two: 'အကြံပေးကို မေးခွန်းထုတ်ပါ',
        three: 'ပတ်ဝန်းကျင်ကို အကဲခတ်ပါ',
        four: 'ပြင်ဆင်ပြီး ဆုံးဖြတ်ပါ',
      },
      compassCenter: {
        title: 'လူသား၏ ဆင်ခြင်တုံတရား',
        subtitle: 'AI က အကြံပေးသည်။\nသင်က ဆုံးဖြတ်သည်။',
      },
      quoteRibbon: {
        label: 'ကျောင်းသားများအတွက် စည်းမျဉ်း -',
        text: 'တွေးခေါ်ရမှာကို ရှောင်လွှဲရန် AI ကို အသုံးမပြုပါနှင့်။ တွေးခေါ်မှုကို ပိုမိုတိုးတက်စေရန်သာ AI ကို အသုံးပြုပါ။',
      },
    },
    principlesSection: {
      eyebrow: 'ကျောင်းသားများ လျှောက်လှမ်းရာလမ်း',
      title: 'ဖြတ်လမ်းကို မရှာပါနှင့်၊\nမဟာဗျူဟာကို သင်ယူပါ။',
      desc: 'မစ်ရှင်တိုင်းသည် သင်၏ ကိုယ်ပိုင်စိတ်ကူးဖြင့် စတင်ပါသည်။ AI သည် နောက်မှသာ အတိုက်အခံ၊ အကြံပေးသူ၊ ကြေးမုံပြင် သို့မဟုတ် သုတေသနမိတ်ဆွေအဖြစ် ပါဝင်လာခြင်း ဖြစ်သည်။ ရည်မှန်းချက်မှာ အမြန်ဆုံး အဖြေရရန် မဟုတ်ပါ။ ပိုမိုခိုင်မာသော ဆင်ခြင်တုံတရား ရရှိစေရန် ဖြစ်သည်။',
      questionLabel: 'ဆင်ခြင်ရန် မေးခွန်း -',
      items: [
        {
          id: 'p1',
          number: '၀၁',
          title: 'မိမိ၏ မစ်ရှင်ကို ရှင်းလင်းစွာ သိရှိပါ',
          desc: 'AI အား မည်သည့်အရာမျှ မမေးမီ စစ်မှန်သော ပြဿနာကို အရင်သတ်မှတ်ပါ။',
          question: 'ငါတို့ အမှန်တကယ် ဖြေရှင်းဖို့ ကြိုးစားနေတာ ဘာလဲ။',
        },
        {
          id: 'p2',
          number: '၀၂',
          title: 'ကိုယ့်ကိုယ်ကိုယ် သိနားလည်ပါ',
          desc: 'မိမိသိထားသောအရာ၊ ထင်မြင်ယူဆထားသောအရာနှင့် ထပ်မံလေ့လာရန် လိုအပ်သောအရာများကို ခွဲခြားပါ။',
          question: 'ငါ အမှန်လို့ ကြိုတင်ယူဆထားတာ ဘာလဲ။',
        },
        {
          id: 'p3',
          number: '၀၃',
          title: 'မိမိအသုံးပြုသော AI ကို နားလည်ပါ',
          desc: 'AI ၏ အားသာချက်များကို အသုံးချပါ၊ သို့သော် ယုံကြည်မှုရှိစွာ ဖြေဆိုခြင်းနှင့် အမှန်တကယ် မှန်ကန်ခြင်းတို့ကို မရောထွေးပါနှင့်။',
          question: 'ဒီအဖြေက ဘယ်လိုနေရာမှာ မှားယွင်းနေနိုင်သလဲ။',
        },
        {
          id: 'p4',
          number: '၀၄',
          title: 'ပတ်ဝန်းကျင် အခြေအနေကို အကဲခတ်ပါ',
          desc: 'အခြေအနေနှင့် နောက်ခံအကြောင်းအရာအရ ဆုံးဖြတ်ချက်များ ပြောင်းလဲသွားတတ်သည်။ တူညီသောအဖြေသည် မတူညီသောအခြေအနေတွင် အသုံးမဝင်ဖြစ်သွားနိုင်သည်။',
          question: 'အခြေအနေ နောက်ခံ ပြောင်းလဲသွားပါက ဘာတွေ ပြောင်းလဲသွားမလဲ။',
        },
        {
          id: 'p5',
          number: '၀၅',
          title: 'အကြံပေးကို ပြန်လည်စိန်ခေါ်ပါ',
          desc: 'ဆန့်ကျင်ဘက် အငြင်းပွားချက်များ၊ ပျောက်ဆုံးနေသော အထောက်အထားများနှင့် သင့်အား အထိရောက်ဆုံး ဆန့်ကျင်နိုင်သော အချက်များကို မေးမြန်းပါ။',
          question: 'ငါ့ရဲ့ အမြင်ကို ဘယ်အချက်က ပြောင်းလဲစေနိုင်မလဲ။',
        },
        {
          id: 'p6',
          number: '၀၆',
          title: 'လိုက်လျောညီထွေ ပြောင်းလဲဆုံးဖြတ်ပါ',
          desc: 'ပိုမိုခိုင်လုံသော အထောက်အထားများ တွေ့ရှိပါက သင်၏ရပ်တည်ချက်ကို ပြင်ဆင်ပါ။ နောက်ဆုံး ဆုံးဖြတ်ချက်မှာ လူသား၏ တာဝန်သာ ဖြစ်သည်။',
          question: 'အခု ငါ ဘာကို ယုံကြည်သင့်သလဲ၊ ဘာကြောင့်လဲ။',
        },
      ],
    },
    arenaSection: {
      eyebrow: 'လက်တွေ့စမ်းသပ် သရုပ်ပြခန်း',
      title: 'ဆိုကရေးတီး\nတွေးခေါ်မှု အာရီနာ',
      desc: 'ဤအာရီနာတွင် AI သည် သင့်အား အဖြေကို အလွယ်တကူ ပေးမည်မဟုတ်ပါ။ သင်၏ တွေးခေါ်မှုကို ပိုမိုနက်နဲခက်ခဲစေမည် ဖြစ်သည်။ မေးခွန်းတစ်ခုကို ရွေးချယ်ပြီး ဆွေးနွေးမှု ပိုမိုနက်ရှိုင်းသွားပုံကို လေ့လာကြည့်ပါ။',
      missionNumber: 'မစ်ရှင် ၀၁ · AI နှင့် အိမ်စာ',
      badge: 'ဆိုကရေးတီး စနစ် · ကျောင်းသား',
      briefEyebrow: 'မစ်ရှင် ရှင်းလင်းချက်',
      claimTitle: 'ကျောင်းသားများ အိမ်စာလုပ်ရာတွင် AI ကို အသုံးပြုခွင့် ပေးသင့်ပါသလား။',
      claimDesc: 'သင်သည် စကားရည်လုပွဲတွင် “အနိုင်ရရန်” ကြိုးစားနေခြင်း မဟုတ်ပါ။ အကြောင်းပြချက်များနှင့် ခိုင်လုံသော သက်သေများဖြင့် ကာကွယ်ရပ်တည်နိုင်မည့် အခိုင်မာဆုံးသော အမြင်တစ်ခုကို တည်ဆောက်နေခြင်း ဖြစ်သည်။',
      scenarioLabel: 'သင်၏ ပထမဆုံး ရပ်တည်ချက် -',
      scenarioText: '“AI သည် ပိုမိုမြန်ဆန်စွာ သင်ယူနိုင်ရန် ကူညီပေးသောကြောင့် ကျောင်းသားများကို အိမ်စာလုပ်ရာတွင် AI သုံးခွင့် ပေးသင့်သည်။”',
      studentClaim: 'AI သည် ပိုမိုမြန်ဆန်စွာ သင်ယူနိုင်ရန် ကူညီပေးသောကြောင့် ကျောင်းသားများကို အိမ်စာလုပ်ရာတွင် AI သုံးခွင့် ပေးသင့်သည်။',
      buttonLabels: {
        clarify: 'အဆိုပြုချက်ကို ရှင်းလင်းစေပါ',
        evidence: 'သက်သေအထောက်အထား တောင်းပါ',
        assumption: 'ကြိုတင်ယူဆချက်ကို ထောက်ပြပါ',
        counter: 'ဆန့်ကျင်ဘက်ကို စမ်းသပ်ပါ',
      },
      pathSteps: [
        {
          num: '၀၁',
          tag: 'ရပ်တည်ချက်',
          title: 'သင် ဘာထင်သလဲ။',
          desc: 'အစပြု ရပ်တည်ချက်တစ်ခုကို ချမှတ်ပါ။',
        },
        {
          num: '၀၂',
          tag: 'ရှင်းလင်းခြင်း',
          title: 'အဘယ်အရာကို ဆိုလိုသလဲ။',
          desc: 'ဝေဝါးသော စိတ်ကူးများကို တိကျအောင် ပြုလုပ်ပါ။',
        },
        {
          num: '၀၃',
          tag: 'စစ်ဆေးခြင်း',
          title: 'သက်သေအထောက်အထား ဘယ်မှာလဲ။',
          desc: 'ယုံကြည်မှုနှင့် သက်သေပြနိုင်မှုကို ခွဲခြားပါ။',
        },
        {
          num: '၀၄',
          tag: 'စိန်ခေါ်ခြင်း',
          title: 'သင် မှားနေခဲ့လျှင်ကော။',
          desc: 'ကြိုတင်ယူဆချက်များနှင့် ဆန့်ကျင်ဘက် သာဓကများကို ရှာပါ။',
        },
        {
          num: '၀၅',
          tag: 'ပြင်ဆင်ခြင်း',
          title: 'ဘာတွေ ပြောင်းလဲသွားသလဲ။',
          desc: 'သက်သေများ ပိုခိုင်လုံလာပါက သင်၏ ရှုထောင့်ကို မွမ်းမံပါ။',
        },
      ],
      responses: {
        clarify: [
          '“ပိုမိုမြန်ဆန်စွာ သင်ယူနိုင်သည်” ဟု ဆိုရာတွင် အဘယ်အရာကို ဆိုလိုပါသလဲ။',
          'အိမ်စာ အချိန်တိုအတွင်း ပြီးသွားရုံမျှမဟုတ်ဘဲ အမှန်တကယ် သင်ယူနားလည်မှု တိုးတက်လာကြောင်း မည်သို့ သိရှိနိုင်မည်နည်း။',
          'မြန်မြန်ပြီးမြောက်ခြင်းသည် နက်နက်နဲနဲ နားလည်သဘောပေါက်ခြင်းနှင့် အတူတူပင် ဖြစ်ပါသလား။',
        ],
        evidence: [
          'သင်၏ အဆိုကို မည်သည့် သက်သေအထောက်အထားက ထောက်ခံပါသနည်း။',
          'ထိုအထောက်အထားသည် သင်၏ ကိုယ်တွေ့အတွေ့အကြုံ၊ စနစ်တကျ လေ့လာချက် သို့မဟုတ် ထင်မြင်ယူဆချက် အပေါ် အခြေခံထားပါသလား။',
          'မည်သည့် အထောက်အထားက သင်၏ အဆိုကို အားနည်းသွားစေနိုင်သနည်း။',
        ],
        assumption: [
          'AI ၏ အဖြေ အရည်အသွေးနှင့် ပတ်သက်၍ သင် မည်သို့ ကြိုတင်ယူဆထားပါသနည်း။',
          'AI က အလွန်ယုံကြည်မှုရှိရှိဖြင့် မှားယွင်းသော ရှင်းပြချက်ကို ပေးလာပါက မည်သို့ ဖြစ်လာမည်နည်း။',
          'ကျောင်းသားတိုင်း AI ကို တူညီသော နည်းလမ်းအတိုင်း အသုံးပြုသည်ဟု သင် ယူဆနေပါသလား။',
        ],
        counter: [
          'AI သည် သင်ယူမှုကို ပိုမိုဆိုးရွားသွားစေနိုင်သည့် အခြေအနေမျိုး ရှိနိုင်ပါသလား။',
          'ခက်ခဲသော အဆင့်တိုင်းအတွက် ကျောင်းသားတစ်ဦးက AI ကို အားကိုးသုံးစွဲနေသည်ဟု မြင်ယောင်ကြည့်ပါ။ မည်သည့် အရည်အချင်း မဖွံ့ဖြိုးဘဲ ကျန်ရစ်နိုင်ပါသနည်း။',
          'သင်၏ လက်ရှိ ရပ်တည်ချက်ကို ချေပနိုင်မည့် အခိုင်မာဆုံးသော အချက်မှာ အဘယ်နည်း။',
        ],
      },
    },
    teacherSection: {
      eyebrow: 'ဆရာများအတွက် အပိုင်း',
      title: 'ဆိုကရေးတီး ဓာတ်ခွဲခန်း',
      teachTag: 'မေးခွန်းများဖြင့် သင်ကြားပါ။',
      desc: 'ဆရာသည် အဖြေထုတ်ပေးသည့် စက်မဟုတ်ပါ။ ကျောင်းသားများအနေဖြင့် အဓိပ္ပာယ်၊ အကြောင်းပြချက်၊ သက်သေအထောက်အထား၊ ကြိုတင်ယူဆချက်၊ ရှုထောင့်များနှင့် နောက်ဆက်တွဲ အကျိုးဆက်များကို စေ့စေ့စပ်စပ် စူးစမ်းနိုင်စေရန် မေးခွန်းများကို ဖန်တီးပုံဖော်ပေးသူ ဖြစ်သည်။',
      challenge: {
        eyebrow: 'ဆရာများအတွက် စိန်ခေါ်မှု',
        title: 'ချက်ချင်း အဖြေမပေးပါနှင့်။',
        statementPrefix: 'ကျောင်းသားတစ်ဦးက ',
        statementClaim: '“AI က ဆရာတွေကို အစားထိုးလိမ့်မယ်”',
        statementSuffix: 'ဟု ပြောလာသည်။ သင်၏ တာဝန်မှာ ကိုယ်ပိုင်နိဂုံးကို ချက်ချင်းမပြောဘဲ ကျောင်းသားကိုယ်တိုင် ထိုအဆိုကို လေ့လာစူးစမ်းနိုင်ရန် ကူညီပေးခြင်း ဖြစ်သည်။',
        points: [
          {
            prefix: 'တုံ့ပြန်မည့်အစား -',
            text: '“မဟုတ်ဘူး၊ AI က ဆရာတွေကို အစားမထိုးနိုင်ဘူး”',
          },
          {
            prefix: 'ဤသို့မေးပါ -',
            text: '“ဒီနေရာမှာ ‘အစားထိုးသည်’ ဆိုတာ ဘာကို ရည်ညွှန်းတာလဲ။”',
          },
          {
            prefix: 'ဆက်လက်မေးပါ -',
            text: '“သင်ကြားမှုရဲ့ ဘယ်အပိုင်းတွေကို AI က လုပ်နိုင်ပြီး ဘယ်အပိုင်းတွေက ပိုခက်ခဲမလဲ။”',
          },
          {
            prefix: 'နိဂုံးချုပ် မေးမြန်းပါ -',
            text: '“ဘယ်လို အထောက်အထားမျိုးက မင်းရဲ့ အမြင်ကို ပြောင်းလဲစေနိုင်မလဲ။”',
          },
        ],
      },
      ladder: {
        eyebrow: 'မေးခွန်း လှေကားထစ်',
        title: 'တစ်ဆင့်ချင်း တစ်ဆင့်ချင်း ပိုမိုနက်နဲအောင် သွားပါ။',
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
            detail: 'အခြေခံ ဆင်ခြင်တုံတရား ယုတ္တိကို ရှာဖွေပါ။',
          },
          {
            level: 3,
            title: 'သက်သေအထောက်အထား',
            question: 'သင်၏ အဆိုကို အဘယ်အရာက ထောက်ခံသနည်း။',
            detail: 'အမှန်တရားနှင့် ထင်မြင်ချက်ကို ကွဲပြားစွာ ခွဲခြားပါ။',
          },
          {
            level: 4,
            title: 'ကြိုတင်ယူဆချက်',
            question: 'မည်သည့်အချက်ကို အမှန်ဟု ယူဆထားသနည်း။',
            detail: 'စိစစ်မထားသော အခြေခံယူဆချက်များကို ဖော်ထုတ်ပါ။',
          },
          {
            level: 5,
            title: 'ရှုထောင့်',
            question: 'အခြားသူတစ်ဦးက မည်သို့ သဘောထားကွဲနိုင်သလဲ။',
            detail: 'ခိုင်လုံသော ဆန့်ကျင်ဘက် အမြင်များကို စူးစမ်းပါ။',
          },
          {
            level: 6,
            title: 'နောက်ဆက်တွဲ အကျိုးဆက်',
            question: 'အမှန်ဖြစ်ခဲ့လျှင် နောက်ဆက်တွဲ ဘာဖြစ်လာမည်နည်း။',
            detail: 'ရေရှည်သက်ရောက်မှုနှင့် အပြန်အလှန်ပေးဆပ်ရမှုများကို ခြေရာခံပါ။',
          },
          {
            level: 7,
            title: 'ပြန်လည်ဆင်ခြင်ခြင်း',
            question: 'မည်သည့်အရာက သင်၏ အမြင်ကို ပြောင်းလဲစေနိုင်သလဲ။',
            detail: 'ပညာဉာဏ်နှိမ့်ချမှုနှင့် ပွင့်လင်းသောစိတ်ကို ဆက်လက်ထိန်းသိမ်းပါ။',
          },
        ],
      },
    },
    manifestoSection: {
      eyebrow: 'ရွှေရောင်စည်းမျဉ်း',
      quoteLine1: '“AI ဆီမှ အဖြေကို မတောင်းပါနှင့်။',
      quoteHighlight: 'သင်၏ တွေးခေါ်မှုကို ပိုမိုနက်ရှိုင်းခက်ခဲစေရန်သာ AI ကို တောင်းဆိုပါ။”',
      desc: 'AI သည် အချက်အလက်များကို ထုတ်လုပ်ပေးနိုင်သည်။ သင်၏ တာဝန်မှာ မေးခွန်းထုတ်ရန်၊ အတည်ပြုစစ်ဆေးရန်၊ နှိုင်းယှဉ်ရန်၊ လိုက်လျောညီထွေ ပြင်ဆင်ရန်နှင့် ဆုံးဖြတ်ချက် ချရန် ဖြစ်သည်။',
    },
    footer: {
      artOfAi: 'THE ART OF AI · မမေးမီ အရင်တွေးပါ။',
      socraticLab: 'SOCRATIC LAB · မေးခွန်းများဖြင့် သင်ကြားပါ။',
      languageNote: 'အင်္ဂလိပ်နှင့် မြန်မာ နှစ်ဘာသာစနစ်ဖြင့် ဖတ်ရှုနိုင်သည်',
    },
  },
};
