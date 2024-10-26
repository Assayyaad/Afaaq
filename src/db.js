// @ts-expect-error
import PEOPLE from './assets/services/eva--people-fill.png'
// @ts-expect-error
import QUESTION from './assets/services/fluent-emoji-flat--white-question-mark.png'
// @ts-expect-error
import WATER from './assets/services/ion--water.png'
// @ts-expect-error
import FOOD from './assets/services/fluent--food-toast-16-filled.png'
// @ts-expect-error
import ACS from './assets/sponsors/acs.jpg'
// @ts-expect-error
import CMC from './assets/sponsors/cmc.jpg'
// @ts-expect-error
import QMA from './assets/sponsors/qiyam.png'

export const main = {
  name: 'آفاق المعرفة'
}

export const nav = {
  home: 'الرئيسية',
  services: 'الخدمات',
  table: 'جدول الأسبوع',
  sponsors: 'شركاؤنا',
  contact: 'تواصل معنا'
}

export const desc = {
  title: 'ما هذا الحدث؟',
  bio: 'محاضرات طلابية تفاعلية في مخلتف العلوم والمجالات',
  text: [
    'مبادرة طلابية تقدم الفرصة للطلاب لتتحسين مهاراتهم في الإلقاء والتقديم، تتنوع المواضيع المطروحة بين المهنية والدينية، وتهدف لتعزيز المهارات وتوسيع الأفق المعرفي والثقافي',
    'يمكّن هذا الحدث الحضور من التعرف على علوم ومجالات متنوعة ومختلفة وتبادل الأفكار والنقاش في بيئة داعمة وبناءة، كما يساعد على إكتساب مهارات جديدة وإستكشاف أفكار جديدة، والأهم من ذلك التعرف على الطلاب المحاضرين  وبناء شبكة علاقات ممتازة'
  ]
}

export const register = {
  title: 'سجل الآن',
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSfaBlI64Rbq3N6Smbr3CwC0NFUw-9Wr0YwI8Zf-CWWCPas2-w/viewform'
}

export const countDown = {
  title: 'سيبدأ الحدث خلال',
  date: '2024-10-27T11:00:00',
  msg: 'بدأ الحدث',
  location: ['قاعة 1026', 'كلية FOE الطابق الأول', 'جامعة MMU Cyberjaya'],
  maps: 'https://maps.app.goo.gl/W6cdnsGP9dYPGBQC9'
}

export const serv = {
  title: 'مزايا',
  arr: [
    {
      img: PEOPLE,
      title: 'شبكة علاقات',
      desc: 'فرصة للتعرف على الطلاب والمحاضرين والمنظمين'
    },
    {
      img: QUESTION,
      title: 'معارف جديدة',
      desc: 'استكشاف مواضيع جديدة ومجالات مختلفة'
    },
    {
      img: WATER,
      title: 'توزيع مشروبات',
      desc: 'توزيع مشروبات مرطبة مقدمة من المنظمين كل يوم للحضور'
    },
    {
      img: FOOD,
      title: 'مأكولات عربية',
      desc: 'توفير قائمة مأكولات عربية منزلية خفيفة للطلب'
    }
  ]
}

const lec = {
  ja: {
    name: 'نبيل الصياد',
    title: 'مقدمة في اليابانية',
    desc: 'تعرف على أساسيات اللسان اليابانية، بما في ذلك الأحرف والنطق وبعض المفردات والقواعد الأساسية'
  },
  powerBI: {
    time: '1:30 - 4:00 عصراً',
    name: 'سجى السعداوي',
    title: 'تحليل البيانات بPower BI',
    desc: 'مقدمة في أداة Power BI لتحليل البيانات، وكيفية استخدامها لتحويل البيانات إلى تقارير ورسوم بيانية تفاعلية',
    femaleOnly: true
  },
  scholars: {
    name: 'ياسر الحبشي',
    title: 'فضل أهل العلم',
    desc: 'تسليط الضوء على أهمية العلماء ودورهم في حفظ العلم والأخلاق ونقلها للأجيال من بعدهم وأهمية التأدب معهم'
  },
  leadership: {
    name: 'ضياء الدين المرستاني',
    title: 'أنواع القيادات المعاصرة',
    desc: 'استكشاف وفهم أساليب القيادة في المؤسسات الحديثة وكيفية استخدامها أو التعامل معها'
  },
  wifi: {
    name: 'معاذ علي',
    title: 'أمن الWi-Fi',
    desc: 'نظرة سريعة على كيفية تأمين الشبكات اللاسلكية وحماية البيانات من الاختراقات والتهديدات الرقمية'
  },
  database: {
    name: 'عبدالرحمن العساف',
    title: 'تعريف بقواعد البيانات',
    desc: 'مقدمة عن قواعد البيانات مع توضيح أهميتها في تخزين البيانات وتنظيمها، مع شرح الأنواع المختلفة لقواعد البيانات وكيفية استخدامها في إدارة المعلومات بكفاءة'
  },
  lang: {
    name: 'محمد خالد القاضي',
    title: 'اللغة والهوية',
    desc: 'مناقشة علاقة اللغة بالهوية وكيف تُعبِّر عن الهوية الفردية والجماعية. وتناول دور اللغة في تشكيل الهوية والحفاظ على التراث مع الإشارة إلى التحديات التي تواجهها في ظل العولمة'
  },
  sunna: {
    name: 'صالح العواضي',
    title: 'حجية السنة',
    desc: 'عرض مكانة السنة النبوية في التشريع الإسلامي وأهميتها كمصدر موثوق للتوجيه في الحياة وبعض صور محاربتها'
  },
  _3D: {
    name: 'مصطفى يوسف',
    title: 'الطباعة ثلاثية الأبعاد',
    desc: 'مقدمة في تقنية الطباعة ثلاثية الأبعاد وكيفية استخدامها في تصميم وإنتاج الأشياء الثلاثية الأبعاد'
  },
  micro: {
    name: 'عبدالرحمن غالب',
    title: 'شرح المتحكمات الصغرية',
    desc: 'مقدمة في المتحكمات الصغرية وكيفية استخدامها في تصميم وتحكم الأجهزة الرقمية'
  }
}

export const table = {
  title: 'جدول المحاضرات',
  start: 27,
  weekDays: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
  arr: [
    [lec.ja, lec.scholars],
    [lec.leadership, lec.powerBI],
    [lec.database, lec.wifi],
    [lec.sunna, lec._3D],
    [lec.lang, lec.micro]
  ]
}

export const spon = {
  title: 'شركاؤنا',
  desc: 'جزى الله شركائنا خيراً على مساهمتهم في إنجاح هذا الحدث',
  arr: [
    {
      img: ACS,
      url: 'https://linktr.ee/acsmmu'
    },
    {
      img: CMC,
      url: 'https://instagram.com/curious_minds_technology'
    },
    {
      img: QMA,
      url: 'https://qiyamacademy.org/ar/'
    }
  ]
}

export const contact = {
  title: 'تواصل معنا',
  desc: 'لا تتردد في التواصل معنا إذا كان لديك أي استفسار أو تحتاج إلى مساعدة',
  whatsapp: 'https://wa.me/+966536700116',
  telegram: 'https://t.me/assayyaad'
}

export const footer = {
  organizer: {
    intro: 'الحدث بتنظيم',
    name: 'الصياد',
    url: 'https://links.assayyaad.pro'
  },
  dev: {
    intro: 'الموقع بتطوير',
    name: 'عبدالسلام',
    url: 'https://github.com/akashi-miano'
  },
  source: {
    intro: 'تجدون المصدر',
    name: 'هنا',
    url: 'https://github.com/Assayyaad/event'
  }
}

export default { main, nav, desc, register, countDown, serv, table, spon, contact, footer }
