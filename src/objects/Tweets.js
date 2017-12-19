const data = [
  /* arrest */
  {
    name: "Денис Стяжкин",
    text: "#Москва на Белорусской задержали уже 10 человек",
    nickname: "styazshkin",
  },
  {
    name: "Грани.ру",
    text: "У Пушкина начали задерживать праздношатающихся",
    nickname: "granitweet",
    type: "arrest"
  },
  {
    name: "Vyacheslav Gimadi",
    text: "Меня задержали. Шёл по Тверской в кроссовках. #ДимонОтветит и мы победим!",
    nickname: "vigimadi",
    type: "arrest"
  },
  {
    name: "ОВД-Инфо",
    text: "В Москве на акциях против коррупции задержано более 130 человек. Задержания в настоящий момент продолжаются на Тверской.",
    nickname: "ovdinfo",
    type: "arrest"
  },
  {
    name: "мутабор",
    text: "даже не дошла до митинга и уже в автозаке",
    nickname: "koshelyaeva",
    type: "arrest"
  },
  {
    name: "Andrey Pivovarov",
    text: "Задержали депутата Максима Резника",
    nickname: "brewerov",
    type: "arrest"
  },
  {
    name: "швец д",
    text: "круто (увезли)",
    nickname: "asilikedem",
    type: "arrest"
  },
  {
    name: "Александр Паль",
    text: "В автозаке тепло.",
    nickname: "tw_fb_pal",
    type: "arrest"
  },

  /* omon */

  {
    name: "Ян Кателевский",
    text: "Жёстко повязали, сорвали пресс карта избили ногами и лубинками, повредили трахею когда душили, били головой об автозак",
    nickname: "ya_yanson",
    type: "omon"
  },
  {
    name: "Юлия Галямина",
    text: "Омоновец дал мне кулаком в лицо. Мужа сильно избили, сломали очки",
    nickname: "galiamina",
    type: "omon"
  },
  {
    name: "ОГОН",
    text: "Задержанных около Тверского бульвара бьют головой об автозак, и дубинкой по ногам. Автозак номер о0577 до этого был у Известий #12июня",
    nickname: "ogonwatch",
    type: "omon"
  },
  {
    name: "The Insider",
    text: "Полиция уже избивает дубинками людей. Всех, без разбору.",
    nickname: "the_ins_ru",
    type: "omon"
  },
  {
    name: "Алексей Кириленко",
    text: "Омон надел противогаз #ДеньРоссии",
    nickname: "kirilenko_a",
    type: "omon"
  },
  {
    name: "Телеканал Дождь",
    text: "На вид мальчику не больше 12-13 лет.",
    nickname: "tvrain",
    type: "omon"
  },
  {
    name: "Пётр Верзилов",
    text: "На  Пушкинский ОМОН двигается боевыми квадратами, валит людей на землю и задерживает.",
    nickname: "gruppa_voina",
    type: "omon"
  },
  {
    name: "Пётр Верзилов",
    text: "Парня повалили на землю возле памятника Пушкину и бьют, заломив руки за спину",
    nickname: "gruppa_voina",
    type: "omon"
  },
  {
    name: "ТоталитаризмЖараИюль",
    text: "ОМОН разбивает толпу",
    nickname: "kszhivago",
    type: "omon"
  },

  /* defended */

  {
    name: "Plushev",
    text: "Толпа не отдаёт задержанных",
    nickname: "plushev",
    type: "defended"
  },

  /* star */

  {
    name: "Алексей Абанин",
    text: "Большая куча вместе с @navalny идёт в сторону пушкинской от маяковской",
    nickname: "aban_in",
    type: "star"
  },
  {
    name: "Рубанов Роман",
    text: "Навального задержали",
    nickname: "rrubanov",
    type: "star"
  },
  {
    name: "Навальный",
    text: "Ребята, со мной все хорошо. Не надо меня отбивать. Идите по Тверской. Наша сегодняшняя тема - борьба с коррупцией",
    nickname: "navalny",
    type: "star"
  },

  {
    name: "Пётр Верзилов",
    text: "Народ все прибывает на Пушкинскую, идут задержания",
    nickname: "gruppa_voina",
    type: "star"
  },
  {
    name: "Пётр Верзилов",
    text: "Медиамагнат Пётр Верзилов был задержан на Пушкинской площади в Москве.",
    nickname: "gruppa_voina",
    type: "star"
  },
  {
    name: "Пётр Верзилов",
    text: 'Уау, в нашем автозаке актёр Александр Паль, лауреат премии "Кинотавра" за лучшую мужскую роль в фильме "Тряпичный союз". Очень крутой фильм!',
    nickname: "gruppa_voina",
    type: "star"
  },

  {
    name: "Илья Варламов",
    text: "Лимонова задержали",
    nickname: "varlamov",
    type: "star"
  },
  {
    name: "Медиазона",
    text: "По предварительным данным, Лимонова повезут в ОВД по Тверскому району, остальных задержанных — в ОВД Красносельский",
    nickname: "mediazzzona",
    type: "star"
  },
  {
    name: "Телеканал Дождь",
    text: "Илья Яшин оказался в автозаке, хотя даже не успел совершить ничего провокационного и незаконного. Яшин рассказал, как его задержали, и кто оказался с ним в автозаке",
    nickname: "tvrain",
    type: "star"
  },
  

  /* description */

  {
    name: "Журавлева",
    text: "на тверской заставе омон, космонавты в черном, спецтехника и ШТАБ",
    nickname: "zhuravleva",
  },
  {
    name: "Plushev",
    text: "Над Тверской вертолёт",
    nickname: "plushev",
  },
  {
    name: "ОГОН",
    text: "На Охотном ряду выстаиваются сотрудники и устанавливают ограждения.",
    nickname: "ogonwatch",
  },

  /* journalist_arrest */

  {
    name: "Alec Luhn",
    text: "I took a photo of police detaining a guy at @navalny protest so they detained me as well even though I repeatedly said I was a journalist",
    nickname: "asluhn",
  },
  {
    name: "Feldman",
    text: "меня задержали на Пушкинской площади",
    nickname: "evgenyfeldman",
  },

]