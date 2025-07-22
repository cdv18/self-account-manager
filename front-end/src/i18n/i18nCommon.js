import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: 'vi',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    vi: {
      message: {
        hello: 'Xin chào thế giới'
      }
    }
  }
})

export default i18n;