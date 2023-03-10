import { Language } from "../context/ApplicationContextInterface";

export const languages = {
  [Language.FR]: {
    hero: {
      title: (
        <>
          Vous voulez
          <br />
          allez quelque part ?
        </>
      ),
      description: (
        <>
          Trolly vous aide à prendre les bons bus pour aller de A à B en
          quelques clics
        </>
      ),
    },
    login: {
      title: <>Ravie de vous revoir !</>,
      description: <>sur cette page vous pourrez vous authentifier</>,
    },
  },
  [Language.EN]: {
    hero: {
      title: (
        <>
          Wanna Go
          <br />
          Somewhere ?
        </>
      ),
      description: (
        <>
          Trolly helps you take the right buses to go from A to B with a few
          clicks.
        </>
      ),
    },
    login: {
      title: <>Welcome back !</>,
      description: <>Here you will be able to login to your account</>,
    },
  },
  [Language.AR]: {
    hero: {
      title: <>هل تريد الذهاب إلى مكان ما؟</>,
      description: (
        <>
          تساعدك Trolly على ركوب الحافلات المناسبة للانتقال من A إلى B ببضع
          نقرات.
        </>
      ),
    },
    login: {
      title: <>مرحبًا بعودتك !</>,
      description: <>هنا سوف تكون قادرًا على تسجيل الدخول إلى حسابك</>,
    },
  },
};
