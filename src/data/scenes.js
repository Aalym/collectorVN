import goodEndingImg from "../assets/endings/ending4.jpg";
import badEndingImg from "../assets/endings/ending1.jpg";
import neutralEndingImg from "../assets/endings/ending2.jpg";
import anotherEndingImg from "../assets/endings/ending3.jpg";
const scenes = {
    start: {
        id: "start", // scene name/id
        name: "Девочка",
        text: "- Я самая обыкновенная юная девочка, что живет самой простой жизнью.В последнее время вокруг начали ходить слухи о загадочном парне, что похищает души людей, отчего они умирают. Я проследила за ним и нашла его особняк глубоко в чаще леса. Мне надо туда направиться чтоб узнать его тайну.",
        bg: "/src/assets/bg/room.jpg",
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        char: "/src/assets/chars/girl.png",
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
        text: "Неподалеку послышались шорохи вероятно из прихожей…Это могло значить лишь одно.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather9", type: "next" },
            { text: "Назад", next: "scenechather7", type: "back" },
        ],
    },
    scenechather9: {
        id: "mansion", // разговор с ней 9/id
        name: "Девочка",
        text: "(О нет, он вернулся...Надо сбежать отсюда как можно скорее.)",
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "/src/assets/chars/girl.png",
        choices: [
            { text: "Продолжить", next: "scenechather10", type: "next" },
            { text: "Назад", next: "scenechather8", type: "back" },
        ],
    },
    scenechather10: {
        id: "mansion", // разговор с ней 10/id
        name: "",
        text: "Коллекционер выбегает и насильно ловит обоих девочек грубой хваткой своих рук.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Продолжить", next: "scenechather11", type: "next" },
            { text: "Назад", next: "scenechather9", type: "back" },
        ],
    },
    scenechather11: {
        id: "mansion", // разговор с ней 11/id
        name: "Девочка",
        text: "!",
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "/src/assets/chars/girl.png",
        choices: [
            { text: "Продолжить", next: "scenechather12", type: "next" },
            { text: "Назад", next: "scenechather11", type: "back" },
        ],
    },
    scenechather12: {
        id: "mansion", // разговор с ней 12/id
        name: "Коллекционер",
        text: "Кто ты?! Что ты делаешь в моём доме и с моей дочерью?!",
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "/src/assets/chars/magician.png",
        
        choices: [
            { text: "Продолжить", next: "scenechather13", type: "next" },
            { text: "Назад", next: "scenechather11", type: "back" },
        ],
    },
    scenechather13: {
        id: "mansion", // разговор с ней 13/id
        name: "",
        text: "Коллекционер с помощью магии вышвыривает незнакомую девчонку из своего дома, пробивая все стены и потолки под давлением силы телекинеза",
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "/src/assets/chars/magician.png",
        choices: [
            { text: "Продолжить", next: "scenechather14", type: "next" },
            { text: "Назад", next: "scenechather12", type: "back" },
        ],
    },
    scenechather14: {
        id: "mansion", // разговор с ней 14/id
        name: "Коллекционер",
        text: 'Успокаиваясь от адреналина, Коллекционер поворачивается к своей "дочери" с обеспокоенным лицом. \n Ты в порядке? Она с тобой ничего не сделала?',
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "/src/assets/chars/magician.png",
        choices: [
            { text: "Продолжить", next: "scenechather15", type: "next" },
            { text: "Назад", next: "scenechather13", type: "back" },
        ],
    },
    scenechather15: {
        id: "mansion", // разговор с ней 15/id
        name: "Дочь",
        text: "Папа, ты плохой. Ты убиваешь людей, мне с тобой опасно, поэтому я вынуждена отказаться быть твоей дочерью.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "",
        choices: [
            { text: "Продолжить", next: "scenechather16", type: "next" },
            { text: "Назад", next: "scenechather14", type: "back" },
        ],
    },
    scenechather16: {
        id: "mansion", // разговор с ней 16/id
        name: "Коллекционер",
        text: '...',
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "/src/assets/chars/magician.png",
        choices: [
            { text: "Продолжить", next: "scenechather17", type: "next" },
            { text: "Назад", next: "scenechather15", type: "back" },
        ],
    },
    scenechather17: {
        id: "manion", // разговор с ней 17/id
        name: "Коллекционер",
        text: ' Что? Что ты такое говоришь? Но я же твой отец..',
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "/src/assets/chars/magician.png",
        choices: [
            { text: "Продолжить", next: "scenechather18", type: "next" },
            { text: "Назад", next: "scenechather16", type: "back" },
        ],
    },
    scenechather18: {
        id: "manion", // разговор с ней 18/id
        name: "Дочь",
        text: '  Я не желаю быть твоей дочерью.',
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "",
        choices: [
            { text: "Продолжить", next: "scenechather19", type: "next" },
            { text: "Назад", next: "scenechather17", type: "back" },
        ],
    },
    scenechather19: {
        id: "manion", // разговор с ней 19/id
        name: "Коллекционер",
        text: '  ...',
        bg: "/src/assets/bg/mansion_interior.jpg",
        char: "/src/assets/chars/magician.png",
        choices: [
            { text: "Продолжить", next: "scenechather20", type: "next" },
            { text: "Назад", next: "scenechather18", type: "back" },
        ],
    },
    scenechather20: {
        bg: "/src/assets/endings/ending2.JPG",
        choices: [
            { text: "Продолжить", next: "scenechather21", type: "next" },
            { text: "Назад", next: "scenechather19", type: "back" },
        ],
    },
    scenechather21: {
        id: "manion", // разговор с ней 21/id
        name: "Коллекционер",
        text: '  ...',
        bg: "/src/assets/endings/ending2.JPG",
        char: "/src/assets/chars/magician.png",
        choices: [
            { text: "Продолжить", next: "scenechather22", type: "next" },
            { text: "Назад", next: "scenechather19", type: "back" },
        ],
    },
    scenechather22: {
        id: "manion", // разговор с ней 22/id
        name: "Коллекционер",
        text: '  Неужели это конец? Такова...моя судьба?',
        bg: "/src/assets/endings/ending2.JPG",
        char: "/src/assets/chars/magician.png",
        choices: [
            { text: "Продолжить", next: "scenechather23", type: "next" },
            { text: "Назад", next: "scenechather20", type: "back" },
        ],
    },
    scenechather23: {
        id: "manion", // разговор с ней 21/id
        name: "Коллекционер",
        text: '  ...',
        bg: "/src/assets/endings/ending2.JPG",
        char: "/src/assets/chars/magician.png",
        choices: [
            { text: "Продолжить", next: "endingVoid", type: "next" },
            { text: "Назад", next: "scenechather20", type: "back" },
        ],
    },
    endingVoid: {
        text: '  С тех пор Мистера Коллекционера больше не видели. \nНо а я... так и осталась пустой оболочкой без души.',
        bg: "black",
        ending: true,
        choices: [
            {text: "Назад", next: "scenechather23", type: "back" },
        ],
    },
    scenechather25: {
        id: "manion", // разговор с ней 21/id
        name: "",
        text: '  ...',
        bg: "/src/assets/endings/ending2.JPG",
        char: "/src/assets/chars/magician.png",
        choices: [
            { text: "Продолжить", next: "scenechather25", type: "next" },
            { text: "Назад", next: "scenechather22", type: "back" },
        ],
    },

};

export default scenes;  