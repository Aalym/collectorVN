
const scenes = {
    start: {
        id: "start", // scene name/id
        name: "Девочка",
        text: "- Я самая обыкновенная юная девочка, что живет самой простой жизнью.В последнее время вокруг начали ходить слухи о загадочном парне, что похищает души людей, отчего они умирают. Я проследила за ним и нашла его особняк глубоко в чаще леса. Мне надо туда направиться чтоб узнать его тайну.",
        bg: "/src/assets/bg/room.jpg",
        music: "",
        choices: [
            { text: "Продолжить", next: "scene2", type: "next" },
        ],
    },
    scene2: {
        id: "mansion", // custom scene name/id
        name: "",
        text: "Яркий особняк красуется в темном лесу, что так и манит к себе… ",
        bg: "src/assets/bg/mansion.png",
        music: "",
        choices: [
            { text: "Назад", next: "start", type: "back" },
            { text: "Продолжить", next: "scene3", type: "next" },
        ],
    },
    scene3: {
        id: "park", // custom scene name/id
        name: "Девочка", 
        text: "- Мне надо пробраться в особняк.",
        bg: "src/assets/bg/mansion.png",
        choices: [
            { text: "подойти к особняку", next: "scene4", type: "normal" },
            { text: "Назад", next: "scene2", type: "back"    },
        ],
    },
    scene4: {
        id: "park", // custom scene name/id
        name: "",
        text: "Тихий хруст травы под ногами девчонки, стремящейся ко входу в особняк.",
        bg: "/src/assets/bg/mansion.jpg",
        choices: [
            { text: "далее", next: "scene5", type: "next" },
            { text: "Назад", next: "scene3", type: "back" },
        ],
    },
    scene5: {
        id: "mansion", // custom scene name/id
        name: "",
        text: "Подойдя к особняку девочка увидела, что дверь была открыта",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Войти в особняк", next: "scene6", type: "normal" },
            { text: "Уйти", next: "sceneleave", type: "normal" },
            { text: "Назад", next: "scene4", type: "back" },
        ],
    },
    sceneleave: {
        id: "leave", // custom scene name/id
        name: "",
        text: "Вы решили уйти.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Назад", next: "scene5", type: "back" },
        ],
    },
    scene6: {
        id: "mansion", // custom scene name/id
        name: "Девочка",
        text: "- Мрачновато",
        bg: "/src/assets/bg/mansion_interior.jpg",
        music: "",
        choices: [
            { text: "осмотреться", next: "scene7", type: "normal" },
            { text: "Назад", next: "scene5", type: "back" },
        ],
    },
    scene7: {
        id: "mansion", // custom scene name/id
        name: "",
        text: "Вы осмотрелись вокруг и увидели 2 двери",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Идти в правую дверь", next: "scenedoorright", type: "normal" },
            { text: "Идти в левую дверь", next: "scenedoorleft", type: "normal" },
            { text: "Назад", next: "scene6", type: "back" },
        ],
    },
    scenedoorright: {
        id: "mansion", // ведет к левойдвери2 и к магии/id
        name: "",
        text: "Вы пошли в правую дверь и оказались в комнате с еще 2 дверьми.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Идти в правую дверь", next: "scenedoorright2", type: "normal" },
            { text: "Идти в левую дверь", next: "sceneroommagic", type: "normal" },
            { text: "Назад", next: "scene7", type: "back" },
        ],
    },
    scenedoorleft: {
        id: "mansion", // ведет к правойдвери2 и к бабочкам/id
        name: "",
        text: "Вы пошли в левую дверь и оказались в комнате с еще 2 дверьми.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Идти в правую дверь", next: "sceneroombutterfly", type: "normal" },
            { text: "Идти в левую дверь", next: "scenedoorleft2", type: "normal" },
            { text: "Назад", next: "scene7", type: "back" },
        ],
    },
    sceneroommagic: {
        id: "mansion", // комната магии/id
        name: "Девочка",
        text: "- Что это за комната? Он практикует магию? ",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "sceneroommagic2", type: "next" },
            { text: "Назад", next: "scenedoorright", type: "back" },
        ],
    },
    sceneroommagic2: {
        id: "mansion", // комната магии2 потом ведет к левой двери и к правой двери2/id
        name: "Девочка",
        text: "- Походу он является колдуном, раз у него есть способность красть души...",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Идти в правую дверь", next: "scenedoorright2", type: "normal" },
            { text: "Идти в левую дверь", next: "scenedoorleft", type: "normal" },
            { text: "Назад", next: "sceneroommagic", type: "back" },
        ],
    },
    scenedoorleft2: {
        id: "mansion", // левая дверь2 ведет к магии и к левой двери/id
        name: "",
        text: "Вы пошли в левую дверь и оказались в комнате с еще 2 дверьми.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Идти в правую дверь", next: "sceneroommagic", type: "normal" },
            { text: "Идти в левую дверь", next: "scenedoorleft", type: "normal" },
            { text: "Назад", next: "sceneroommagic2", type: "back" },
        ],
    },
    scenedoorright2: {
        id: "mansion", // правая дверь2 ведет к бабочкам и к правой двери/id
        name: "",
        text: "Вы пошли в правую дверь и оказались в комнате с еще 2 дверьми.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Идти в правую дверь", next: "scenedoorright", type: "normal" },
            { text: "Идти в левую дверь", next: "sceneroombutterfly", type: "normal" },
            { text: "Назад", next: "scenedoorright", type: "back" },
        ],
    },
    sceneroombutterfly: {
        id: "mansion", // комната бабочек/id
        name: "Девочка",
        text: "- Здесь большая коллекция бабочек...",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Осмотреться", next: "scenelook", type: "normal" },
            { text: "Назад", next: "scenedoorright2", type: "back" },
        ],
    },
    scenelook: {
        id: "mansion", // комната бабочек осмотреться/id
        name: "",
        text: "Девочка оглядывается, и находит рядом надпись 'души людей'",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenelook2", type: "next" },
            { text: "Назад", next: "sceneroombutterfly", type: "back" },
        ],
    },
    scenelook2: {
        id: "mansion", // комната бабочек осмотреться2/id
        name: "Девочка",
        text: "- Это коллекция душ людей?",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Идти в дверь", next: "sceneroomvoid", type: "normal" },
            { text: "Назад", next: "scenelook", type: "back" },
        ],
    },
    sceneroomvoid: {
        id: "mansion", // комната пустыхоболочек/id
        name: "Девочка",
        text: "- Что это? Они выглядят как бездушные люди...Он прячет здесь своих жертв?",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Осмотреться", next: "sceneroomvoidlook", type: "normal" },
            { text: "Назад", next: "scenelook2", type: "back" },
        ],
    },
    sceneroomvoidlook: {
        id: "mansion", // комната пустыхоболочек осмотреться/id
        name: "Девочка",
        text: "(Находит фонарь:) \n - Это будет полезно для меня в будущем.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Идти вперед", next: "sceneroomportrait", type: "normal" },
            { text: "Назад", next: "sceneroomvoid", type: "back" },
        ],
    },
    sceneroomportrait: {
        id: "mansion", // комната портретов/id
        name: "",
        text: "Портрет с Коллекционером, неизвестной девушкой и маленькой девочкой между ними…",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "sceneroomportrait2", type: "next" },
            { text: "Назад", next: "sceneroomvoidlook", type: "back" },
        ],
    },
    sceneroomportrait2: {
        id: "mansion", // комната портретов2 /id
        name: "Девочка",
        text: " - Это он и его семья? Но почему его жены и дочери в особняке нет?",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "sceneroomportrait3", type: "next" },
            { text: "Назад", next: "sceneroomportrait", type: "back" },
        ],
    },
    sceneroomportrait3: {
        id: "mansion", // комната портретов3 /id
        name: "",
        text: " В комнате лежала странная девочка, тяжело дышащая и неестественно выглядящая…Кто она?",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "sceneroomportrait4", type: "next" },
            { text: "Назад", next: "sceneroomportrait2", type: "back" },
        ],
    },
    sceneroomportrait4: {
        id: "mansion", // комната портретов4 /id
        name: "Девочка",
        text: " - Ты кто? Что ты здесь делаешь?",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "sceneroomportrait5", type: "next" },
            { text: "Назад", next: "sceneroomportrait3", type: "back" },
        ],
    },
    sceneroomportrait5: {
        id: "mansion", // комната портретов5 /id
        name: "Неизвестная девочка",
        text: " - Кто я? Я - дочь моего папы!",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "sceneroomportrait6", type: "next" },
            { text: "Назад", next: "sceneroomportrait4", type: "back" },
        ],
    },
    sceneroomportrait6: {
        id: "mansion", // комната портретов6 /id
        name: "Девочка",
        text: " (Это дочь Коллекционера? Она выглядит очень странно...Возможно она состоит из этих душ. Значит он собирает себе дочь из чужих душ?) \n  У тебя есть имя?",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "sceneroomportrait7", type: "next" },
            { text: "Назад", next: "sceneroomportrait5", type: "back" },
        ],
    },
    sceneroomportrait7: {
        id: "mansion", // комната портретов7 /id
        name: "Прототип дочери",
        text: "- Что такое имя?",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "sceneroomportrait8", type: "next" },
            { text: "Назад", next: "sceneroomportrait6", type: "back" },
        ],
    },
    sceneroomportrait8: {
        id: "mansion", // комната портретов8 /id
        name: "Девочка",
        text: "(Она совершенно ничего не понимает...)",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Оставить ее", next: "sceneleaverher", type: "normal" },
            { text: "Продолжить разговор с ней", next: "scenechather", type: "normal" },
            { text: "Назад", next: "sceneroomportrait7", type: "back" },
        ],
    },
    sceneleaverher: {
        id: "mansion", // разговор с ней /id
        name: "",
        text: " не доделано",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Назад", next: "sceneroomportrait8", type: "back" },
        ],
    },
    scenechather: {
        id: "mansion", // разговор с ней /id
        name: "Девочка",
        text: " Ты знаешь кем является твой папа?",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather2", type: "next" },
            { text: "Назад", next: "sceneroomportrait8", type: "back" },
        ],
    },
    scenechather2: {
        id: "mansion", // разговор с ней 2 /id
        name: "Неизвестная девочка",
        text: " Да. Он является папой!",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather3", type: "next" },
            { text: "Назад", next: "scenechather", type: "back" },
        ],
    },
    scenechather3: {
        id: "mansion", // разговор с ней 3/id
        name: "Девочка",
        text: "... \n А ты знаешь, что он убивает людей?",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather4", type: "next" },
            { text: "Назад", next: "scenechather2", type: "back" },
        ],
    },
    scenechather4: {
        id: "mansion", // разговор с ней 4/id
        name: "Прототип дочери",
        text: "Что? Он убивает людей? Это ужасно!",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather5", type: "next" },
            { text: "Назад", next: "scenechather3", type: "back" },
        ],
    },
    scenechather5: {
        id: "mansion", // разговор с ней 5/id
        name: "Девочка",
        text: "Да, он очень плохой человек. Тебе не стоит с ним оставаться, это опасно. Пойдем вместе со мной, я тебя выведу отсюда!",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather6", type: "next" },
            { text: "Назад", next: "scenechather4", type: "back" },
        ],
    },
    scenechather6: {
        id: "mansion", // разговор с ней 6/id
        name: "Прототип дочери",
        text: "Хорошо!",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather7", type: "next" },
            { text: "Назад", next: "scenechather5", type: "back" },
        ],
    },
    scenechather7: {
        id: "mansion", // разговор с ней 7/id
        name: "",
        text: "Девочка берет за ручку прототип. Теперь отныне они шли вместе, и их новая цель была найти выход отсюда как можно скорее…",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather8", type: "next" },
            { text: "Назад", next: "scenechather6", type: "back" },
        ],
    },
    scenechather8: {
        id: "mansion", // разговор с ней 8/id
        name: "",
        text: "Дальше будет продолжение...",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather8", type: "next" },
            { text: "Назад", next: "scenechather7", type: "back" },
        ],
    },

};

export default scenes;  