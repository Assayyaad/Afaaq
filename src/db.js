// @ts-expect-error
import serviceImg from './assets/serviceImg.jpg'
// @ts-expect-error
import ACS from './assets/sponsors/acs.jpg'
// @ts-expect-error
import CMC from './assets/sponsors/cmc.jpg'

export const main = {
  name: 'ينابيع المعرفة'
}

export const nav = {
  home: 'الرئيسية',
  services: 'الخدمات',
  table: 'جدول الأسبوع',
  sponsors: 'شركاؤنا',
  contact: 'تواصل معنا'
}

export const desc = {
  title: 'وصف',
  text: 'فعالية محاضرات طلابية يقدم فيها المحاضرون معلومات في مجالات يبرعون فيها'
}

export const countDown = {
  title: 'سيبدأ الحدث خلال',
  date: '2022-10-26T19:30:00.000Z',
  msg: 'بدأ الحدث'
}

export const serv = {
  title: 'خدمات',
  arr: [
    {
      img: serviceImg,
      title: 'مأكولات عربية',
      desc: 'سيوجد مأكولات عربية متنوعة وشهية مقدمة من عوائل عربية'
    },
    {
      img: serviceImg,
      title: 'فرصة تعارف',
      desc: 'نقدم فرصة للتعارف بين الطلاب والمحاضرين والمشاركين'
    },
    {
      img: serviceImg,
      desc: '...'
    }
  ]
}

export const table = {
  title: 'جدول المحاضرات',
  start: 26,
  arr: [
    [
      {
        name: 'محمد',
        title: 'برمجه',
        desc: 'يتيح لك ايضا القدرة على إضافة علامات الترقيم، لهجات والحروف الخاصة لتكون أقرب إلى اللغات الفرنسية أو غيرها. أيضا'
      },
      {
        name: 'محمود',
        title: 'برمجه',
        desc: 'يتيح لك ايضا القدرة على إضافة علامات الترقيم، لهجات والحروف الخاصة لتكون أقرب إلى اللغات الفرنسية أو غيرها. أيضا'
      }
    ],
    [
      {
        name: 'أحمد',
        title: 'برمجه',
        desc: 'يتيح لك ايضا القدرة على إضافة علامات الترقيم، لهجات والحروف الخاصة لتكون أقرب إلى اللغات الفرنسية أو غيرها. أيضا'
      },
      {
        name: 'حميدة',
        title: 'برمجه',
        desc: 'يتيح لك ايضا القدرة على إضافة علامات الترقيم، لهجات والحروف الخاصة لتكون أقرب إلى اللغات الفرنسية أو غيرها. أيضا',
        femaleOnly: true
      }
    ]
  ]
}

export const spon = {
  title: 'شركاؤنا',
  desc: '.',
  arr: [
    {
      img: ACS
    },
    {
      img: CMC
    }
  ]
}

export const contact = {
  title: 'تواصل معنا',
  desc: 'تأكدوا من البريد الإلكتروني المُدخل حتى نتمكن من الرد عليكم',
  form: {
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    submit: 'إرسال',
    msgs: {
      success: 'تم إرسال الرسالة بنجاح!',
      error: 'حدث خطأ أثناء إرسال الرسالة!',
      invalidEmail: 'البريد الإلكتروني غير صحيح',
      shortMessage: 'يجب أن لا تقل الرسالة عن 20 حرفاً',
      shortName: 'يجب أن لا يقل الاسم عن 3 أحرف'
    }
  }
}

export default { main, nav, desc, countDown, serv, table, spon, contact }
