import goodEndingImg from "../assets/endings/ending4.jpg";
import badEndingImg from "../assets/endings/ending2.jpg";
import neutralEndingImg from "../assets/endings/ending1.jpg";
import anotherEndingImg from "../assets/endings/ending3.jpg";
import girl from "/src/assets/chars/girl.png";
import intro from "/src/assets/bg/intro.jpeg";
import mansion from "/src/assets/bg/mansion.png";
import basement from "/src/assets/bg/basement.jpeg";
import basementdoor from "/src/assets/bg/basementdoor.jpg";
import bathroom from "/src/assets/bg/bathroom.jpeg";
import black from "/src/assets/bg/black.png";
import collectorroom from "/src/assets/bg/collectorroom.jpeg";
import corridor from "/src/assets/bg/corridor.jpg";
import prototype from "/src/assets/chars/Prototype.png";
import collector from "/src/assets/chars/magician.png";
import doors from "/src/assets/bg/doors.jpg";
import doors2 from "/src/assets/bg/doors2.jpg";
import doors3 from "/src/assets/bg/doors3.jpg";
import ghostroom from "/src/assets/bg/ghostroom.jpeg";
import hallway from "/src/assets/bg/hallway.jpeg";
import forest from "/src/assets/bg/forest.jpeg";
import kitchen from "/src/assets/bg/kitchen.jpg";
import lab from "/src/assets/bg/lab.jpeg";
import livingroom from "/src/assets/bg/livingroom.jpeg";
import photo from "/src/assets/bg/photo.jpeg";
import photo1 from "/src/assets/bg/photo1.jpg";
import collectora from "/src/assets/chars/magician_angry.png";
import girls from "/src/assets/chars/girl_scared.png";
import collectorh from "/src/assets/chars/magician_happy.png";
import girlh from "/src/assets/chars/girl_happy.png";

const scenes = {
    start: {
        id: "start", 
        name: "Девочка",
        text: " Я самая обыкновенная юная девочка, что живет самой простой жизнью. В последнее время вокруг начали ходить слухи о загадочном парне, что похищает души людей, отчего они умирают. Я проследила за ним и нашла его особняк глубоко в чаще леса. Мне надо туда направиться чтоб узнать его тайну.",
        bg: intro ,
        char: "",
        music: "",
        choices: [
            { text: "Продолжить", next: "scene2", type: "next" },
        ],
    },
    scene2: {
        id: "mansion", 
        name: "",
        text: "Яркий особняк красуется в темном лесу, что так и манит к себе… ",
        bg: mansion,
        music: "",
        choices: [
            { text: "Назад", next: "start", type: "back" },
            { text: "Продолжить", next: "scene2a", type: "next" },
        ],
    },

    scene2a: {
        id: "mansion2a", // custom scene name/id
        name: "Девочка",
        text: "Мне надо пробраться в особняк.",
        char: girl,
        bg: mansion,
        music: "",
        choices: [
            { text: "Назад", next: "scene2", type: "back" },
            { text: "Продолжить", next: "scene2b", type: "next" },
        ],
    },
    scene2b: {
        id: "mansion2b", // custom scene name/id
        name: "",
        text: "Тихий хруст травы под ногами девчонки, стремящейся ко входу в особняк.",
        bg: mansion,
        music: "",
        choices: [
            { text: "Назад", next: "scene2a", type: "back" },
            { text: "Продолжить", next: "scene2c", type: "next" },
        ],
    },
    scene2c: {
        id: "mansion2b", // custom scene name/id
        name: "",
        text: "Дверь была открыта… Девочка входит в прихожую особняка. Тень за дверью испаряется.",
        bg: "src/assets/bg/black.png",
        music: "",
        choices: [
            { text: "Назад", next: "scene2b", type: "back" },
            { text: "Продолжить", next: "scene3", type: "next" },
        ],
    },


    scene3: {
        id: "hallway s2", 
        name: "", 
        text: "Дом выглядел пустым и мрачным. Он явно угрожал девочке своей внешностью, но её это не пугало. Надо было продвинуться дальше...",
        char: "",
        bg: hallway,
        char: girl,
        choices: [
            { text: "Продолжить", next: "scene3a", type: "next" },
            { text: "Назад", next: "scene2", type: "back"    },
        ],
    },
    scene3a: {
        id: "hallway s2", 
        name: "", 
        text: "Девочка сделала свои первые шаги по особняку Коллекционера, внимательно осматриваясь вокруг.",
        char: girl,
        bg: hallway,
        choices: [
            { text: "подойти к особняку", next: "scene4", type: "next" },
            { text: "Назад", next: "scene3", type: "back"  },
        ],
    },

    scene4: {
        id: "corridor s2", 
        name: "",
        char: girl,
        text: "Коридоры зловещего особняка не пугали девочку своим видом,Хоть свет есть только в избраных комнатах особняк гниёт и выглядит заброшенным, а пол где-то проваливается, где-то он целый. На самом деле ей он даже приглянулся...",
        bg: corridor,
        choices: [
            { text: "Продолжить", next: "scene5", type: "next" },
            { text: "Назад", next: "scene3", type: "back" },
        ],
    },

    scene5: {
        id: "door s2", 
        name: "",
        text: "Перед тобой 2 двери",
        bg: doors,
        hotspots: [
        {
            id: "leftDoor",
            x: "36.3%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scenekitchen",
            label: "Кухня"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scenelivingroom",
            label: "Гостинная"
        },
        ],
        choices: [
            { text: "Назад", next: "scene4", type: "back" },
        ],
    },
    scenekitchen: {
        id: "kitchen s2", 
        name: "",
        char: girl,
        text: "Девочка смотрит на совершенно пустую кухню, где не было даже еды.",
        bg: kitchen,
        choices: [
            { text: "Продолжить", next: "scenekitchen2", type: "next" },
            { text: "Назад", next: "scene5", type: "back" },
        ],
    },
    scenekitchen2: {
        id: "kitchen s2", 
        name: "Девочка",
        char: girl,
        text: " Он ей совершенно не пользуется...Вот досада, у него нет времени даже не еду.",
        bg: kitchen,
        choices: [
            { text: "Вернутся", next: "scene5", type: "normal" },
            { text: "Назад", next: "scene5", type: "back" },
        ],
    },
    scenelivingroom: {
        id: "corridor s2", 
        name: "",
        char: girl,
        text: "Девочка осматривает гостинную и видит везде бардак и суету. У коллекционера нет времени ухаживать за своим домом. Он занят всегда чем то другим...",
        bg: livingroom,
        choices: [
            { text: "Продолжить", next: "sceneportrait", type: "next" },
            { text: "Назад", next: "scene5", type: "back" },
        ],
    },
    sceneportrait: {
        id: "portrait s2", 
        name: "",
        char: null,
        text: "Портрет с Коллекционером, неизвестной женщиной и маленькой девочкой между ними…",
        bg: photo,
        choices: [
            { text: "Продолжить", next: "sceneportrait2", type: "next" },
            { text: "Назад", next: "scenelivingroom", type: "back" },
        ],
    },
    sceneportrait2: {
        id: "portrait2 s2", 
        name: "Девочка",
        char: girl,
        text: "Это он и его семья? Но почему его жены и дочери нет в этом особняке?",
        bg: photo,
        choices: [
            { text: "Продолжить", next: "sceneportrait3", type: "next" },
            { text: "Назад", next: "sceneportrait", type: "back" },
        ],
    },
    sceneportrait3: {
        id: "portrait3 s2", 
        name: "Девочка",
        char: girl,
        text: "А может...он их украл и их души?",
        bg: photo,
        choices: [
            { text: "Идти в коридор", next: "scenecorridor", type: "next" },
            { text: "Назад", next: "sceneportrait2", type:  "back" },
        ],
    },
    scenecorridor: {
        id: "portrait3 s2", 
        name: "",
        char: girl,
        text: "Вы в коридоре",
        bg: corridor,
        choices: [
            { text: "Идти дальше", next: "scenedoors2", type: "normal" },
            { text: "Назад", next: "sceneportrait3", type:  "back" },
        ],
    },
    scenedoors2: {
        id: "portrait3 s2", 
        name: "",
        char: girl,
        text: "Вы в коридоре",
        bg: doors2,
        hotspots: [
        {
            id: "leftDoor",
            x: "36.3%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scenemagic",
            label: "Лаборотория"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scenebathroom",
            label: "Ванная"
        },
        ],
        choices: [
            { text: "Назад", next: "scenecorridor", type:  "back" },
        ],
    },
    scenebathroom: {
        id: "magic s3", 
        name: "",
        char: girl,
        text: "Девочка осматривает ванную и заглядывает во все шкафчики в поисках зацепок и информации о загадочном колдуне.Она находит большое количество лекарств и различных антидепрессантов в тумбочках. ",
        bg: bathroom,
        choices: [
            { text: "Вернутся", next: "scenedoors2", type: "normal" },
            { text: "Назад", next: "scenedoors2", type:  "back" },
        ],
    },

    scenemagic: {
        id: "magic s3", 
        name: "Девочка",
        char: girl,
        text: "Что это за комната? Он практикует магию? ",
        bg: lab,
        choices: [
            { text: "Продолжить", next: "scenemagic2", type: "next" },
            { text: "Назад", next: "scenedoors2", type:  "back" },
        ],
    },
    scenemagic2: {
        id: "magic2 s3", 
        name: "Девочка",
        char: girl,
        text: " Может он колдун? Раз него есть способность красть души... ",
        bg: lab,
        choices: [
            { text: "Продолжить", next: "scenemagic3", type: "next" },
            { text: "Назад", next: "scenemagic", type:  "back" },
        ],
    },
    scenemagic3: {
        id: "magic2 s3", 
        name: "",
        char: girl,
        text: ' Девочка осматривает шкафы и полочки, читая каждое мимолетное название книг: "Основы магии", "Душа человека", "Магия и химия", "Жизнь из магии" ',
        bg: lab,
        choices: [
            { text: "Продолжить", next: "scenemagic4", type: "next" },
            { text: "Назад", next: "scenemagic2", type:  "back" },
        ],
    },
    scenemagic4: {
        id: "magic2 s3", 
        name: "Девочка",
        char: girl,
        text: ' Судя по этим названиям, он крадет души не ради веселья.',
        bg: lab,
        choices: [
            { text: "Продолжить", next: "scenecollector", type: "next" },
            { text: "Назад", next: "scenemagic3", type:  "back" },
        ],
    },
    scenecollector: {
        id: "collector s3", 
        name: "Девочка",
        char: girl,
        text: ' Такая большая коллекция бабочек...',
        bg: collectorroom,
        choices: [
            { text: "Оглянуться", next: "scenelook", type: "normal" },
            { text: "Назад", next: "scenemagic4", type:  "back" },
        ],
    },
    scenelook: {
        id: "collector s3", 
        name: "",
        char: girl,
        text: ' Девочка оглядывается, и находит рядом надпись "души людей"...',
        bg: collectorroom,
        choices: [
            { text: "Продолжить", next: "scenelook2", type: "next" },
            { text: "Назад", next: "scenecollector", type:  "back" },
        ],
    },
    scenelook2: {
        id: "collector s3", 
        name: "Девочка",
        char: girl,
        text: ' Это коллекции душ?',
        bg: collectorroom,
        choices: [
            { text: "Продолжить", next: "scenelook3", type: "next" },
            { text: "Назад", next: "scenelook", type:  "back" },
        ],
    },
    scenelook3: {
        id: "collector s3", 
        name: "Девочка",
        char: girl,
        text: ' Значит вот как они выглядят...',
        bg: collectorroom,
        choices: [
            { text: "Продолжить", next: "scenelook4", type: "next" },
            { text: "Назад", next: "scenelook2", type:  "back" },
        ],
    },
    scenelook4: {
        id: "collector s3", 
        name: "Девочка",
        char: girl,
        text: ' Красиво. Бабочки за стеклом, даже рамки есть. Будто и не люди вовсе.',
        bg: collectorroom,
        choices: [
            { text: "Идти дальше", next: "scenelook5", type: "next" },
            { text: "Назад", next: "scenelook3", type:  "back" },
        ],
    },
    scenelook5: {
        id: "collector s3", 
        name: "",
        char: girl,
        text: ' Вы в коридоре',
        bg: corridor,
        choices: [
            { text: "Продолжить", next: "scenedoors", type: "next" },
            { text: "Назад", next: "scenelook4", type:  "back" },
        ],
    },
    scenedoors: {
        id: "collector s3", 
        name: "",
        char: "",
        text: ' Вы видите 2 двери',
        bg: doors2,
        hotspots: [
        {
            id: "leftDoor",
            x: "36.3%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "sceneghost",
            label: "Комната с призраками"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scenepodval",
            label: "Дверь в подвал"
        },
        ],
        choices: [
            { text: "Назад", next: "scenelook5", type:  "back" },
        ],
    },
    sceneghost: {
        id: "collector s3", 
        name: "Девочка",
        text: "Что это? Манекены?",
        char: "/src/assets/chars/girl.png",
        bg: ghostroom,
        choices: [
            { text: "Продолжить", next: "sceneghostlook", type: "next" },
            { text: "Назад", next: "scenedoors", type: "back" }
        ],
    },
    sceneghostlook: {
        id: "collector s3", 
        name: "Девочка",
        char: girl,
        text: ' Бездушные тела... Он прячет здесь своих жертв?',
        bg: ghostroom,
        choices: [
            { text: "Продолжить", next: "sceneghostlook2", type: "next" },
            { text: "Назад", next: "sceneghost", type:  "back" },
        ],
    },
    sceneghostlook2: {
        id: "collector s3", 
        name: "Девочка",
        char: girl,
        text: ' Видимо это то, что осталось от всех предыдущих жертв.',
        bg: ghostroom,
        choices: [
            { text: "Продолжить", next: "sceneghostlook3", type: "next" },
            { text: "Назад", next: "sceneghostlook", type:  "back" },
        ],
    },
    sceneghostlook3: {
        id: "collector s3", 
        name: "Девочка",
        char: girl,
        text: ' Оболочка, которая теперь странствует в поисках своих внутренностей...  ',
        bg: ghostroom,
        choices: [
            { text: "Продолжить", next: "sceneghostlook4", type: "next" },
            { text: "Назад", next: "sceneghostlook2", type:  "back" },
        ],
    },
    sceneghostlook4: {
        id: "collector s3", 
        name: "Девочка",
        char: girl,
        text: ' Выглядит жалко.',
        bg: ghostroom,
        choices: [
            { text: "осмотреться", next: "sceneghostlook5", type: "normal" },
            { text: "Идти дальше ", next: "scenepodval", type: "normal" },
            { text: "Назад", next: "sceneghostlook3", type:  "back" },
        ],
    },
    sceneghostlook5: {
        id: "collector s3", 
        name: "",
        char: girl,
        text: ' Находит фонарик',
        bg: ghostroom,
        choices: [
        { text: "Подобрать фонарик", next: "sceneghostlook6", type: "normal", giveItem: "hasFlashlight" },
        { text: "Назад", next: "sceneghostlook4", type: "back" }
        ],
    },
    sceneghostlook6: {
        id: "collector s3", 
        name: "Девочка",
        char: girl,
        text: 'Это будет полезно для меня в будущем.',
        bg: ghostroom,
        choices: [
        { text: "Идти дальше", next: "scenepodval", type: "normal"},
        { text: "Назад", next: "sceneghostlook5", type: "back" }
        ],
    },
    scenepodval: {
    id: "podval",
    name: "",
    text: "Девочка находит темную загадочную лестницу вниз.  Вероятнее всего, это был подвал.  Героиня сложила всю свою волю в кулак и направилась вниз по хрупким деревянным ступенькам, ожидая нечто страшное внизу...  ",
    bg: basementdoor,
    choices: [
        { text: "Продолжить", next: "scenepodval2", type: "next" },
        { text: "Назад", next: "scenedoors", type: "back" }
    ],
    },
    scenepodval2: {
    id: "podval",
    name: "",
    text: "Спустившись в подвал, она ничего не обнаружила. Кроме одной единственной сырой комнаты, что была подозрительно пуста...",
    bg: basement,
    choices: [
        { text: "Подойти ближе", next: "scenepodval3", type: "normal" },
        { text: "Назад", next: "scenepodval", type: "back" }
    ],
    },
    scenepodval3: {
    id: "podval",
    name: "",
    text: "Посередине комнаты лежала странная кукла, тяжело дышащая и неестественно выглядящая…  ",
    char: prototype, 
    bg: basement,
    choices: [
        { text: "Ты кто?", next: "scenepodvalch1", type: "normal" },
        { text: "Что ты здесь делаешь?", next: "scenepodvalch2", type: "normal" },
        { text: "Назад", next: "scenepodval2", type: "back" }
    ],
    },
    scenepodvalch1: {
    id: "podval",
    name: "Кукла",
    text: "Кто я? Я - дочь моего папы!",
    char: prototype, 
    bg: basement,
    choices: [
        { text: "Продолжить", next: "scenepodvalch1a", type: "next" },
        { text: "Назад", next: "scenepodval3", type: "back" }
    ],
    },
    scenepodvalch1a: {
    id: "podval",
    name: "Девочка",
    text: "(Это дочь Коллекционера? Она выглядит очень странно... Может ли она быть его целью? То, ради чего он их коллекционирует?)",
    char: girl, 
    bg: basement,
    choices: [
        { text: "Продолжить", next: "scenepodvalname", type: "next" },
        { text: "Назад", next: "scenepodvalch1", type: "back" }
    ],
    },
    scenepodvalch2: {
    id: "podval",
    name: "Кукла",
    text: "Жду папу. Его долго нет сегодня.",
    char: prototype, 
    bg: basement,
    choices: [
        { text: "Продолжить", next: "scenepodvalch2a", type: "next" },
        { text: "Назад", next: "scenepodval3", type: "back" }
    ],
    },
    scenepodvalch2a: {
    id: "podval",
    name: "Девочка",
    text: "(Это дочь Коллекционера? Она выглядит очень странно... Может ли она быть его целью - то, ради чего он их коллекционирует?)",
    char: girl, 
    bg: basement,
    choices: [
        { text: "Продолжить", next: "scenepodvalname", type: "next" },
        { text: "Назад", next: "scenepodval3", type: "back" }
    ],
    },
    scenepodvalname: {
    id: "podval",
    name: "Девочка",
    text: "У тебя есть имя?",
    char: girl, 
    bg: basement,
    choices: [
        { text: "Продолжить", next: "scenepodvalname2", type: "next" },
        { text: "Назад", next: "scenepodvalch1a", type: "back" }
    ],
    },
    scenepodvalname2: {
    id: "podval",
    name: "Кукла",
    text: "Что такое имя?",
    char: prototype, 
    bg: basement,
    choices: [
        { text: "Продолжить", next: "scenepodvalname3", type: "next" },
        { text: "Назад", next: "scenepodvalname", type: "back" }
    ],
    },
    scenepodvalname3: {
    id: "podval",
    name: "Девочка",
    text: "(Она совершенно ничего не понимает...)",
    char: girl, 
    bg: basement,
    choices: [
        { text: "Оставить её",next: "scenepodvalleave", type: "normal" },
        { text: "Продолжить разговор", next: "scenepodvalchat", type: "normal" },
        { text: "Назад", next: "scenepodvalname2", type: "back" }
    ],
    },
    scenepodvalleave: {
    id: "podval",
    name: "",
    text: "Она очень странная и подозрительная. ",
    char: prototype, 
    bg: basement,
    choices: [
        { text: "Назад", next: "scenepodvalname3", type: "back" }
    ],
    },
    scenepodvalchat: {
    id: "podval",
    name: "Девочка",
    text: "Ты знаешь кем является твой папа? ",
    char: girl, 
    bg: basement,
    choices: [
        { text: "Продолжить",next: "scenepodvalchat2", type: "next" },
        { text: "Назад", next: "scenepodvalname3", type: "back" }
    ],
    },
        scenepodvalchat2: {
        id: "podval",
        name: "Кукла",
        text: "Да. Он является папой!",
        char: prototype,
        bg: basement,
        choices: [
            { text: "Продолжить", next: "scenepodvalchat3", type: "next" },
            { text: "Назад", next: "scenepodvalchat", type: "back" }
        ],
    },

    scenepodvalchat3: {
        id: "podval",
        name: "Девочка",
        text: "А ты знаешь, что он убивает людей?",
        char: girl,
        bg: basement,
        choices: [
            { text: "Продолжить", next: "scenepodvalchat4", type: "next" },
            { text: "Назад", next: "scenepodvalchat2", type: "back" }
        ],
    },

    scenepodvalchat4: {
        id: "podval",
        name: "Кукла",
        text: "Что? Он убивает людей? Это ужасно!",
        char: prototype,
        bg: basement,
        choices: [
            { text: "Продолжить", next: "scenepodvalchat5", type: "next" },
            { text: "Назад", next: "scenepodvalchat3", type: "back" }
        ],
    },

    scenepodvalchat5: {
        id: "podval",
        name: "Девочка",
        text: "Да, он очень плохой человек. Тебе не стоит с ним оставаться, это опасно.",
        char: girl,
        bg: basement,
        choices: [
            { text: "Продолжить", next: "scenepodvalchat6", type: "next" },
            { text: "Назад", next: "scenepodvalchat4", type: "back" }
        ],
    },
    scenepodvalchat6: {
        id: "podval",
        name: "Девочка",
        text: "Пойдем вместе со мной, я тебя выведу отсюда!",
        char: girl,
        bg: basement,
        choices: [
            { text: "Продолжить", next: "scenepodvalchat7", type: "next" },
            { text: "Назад", next: "scenepodvalchat5", type: "back" }
        ],
    },
        scenepodvalchat7: {
        id: "podval",
        name: "Кукла",
        text: "Хорошо! ",
        char: prototype,
        bg: basement,
        choices: [
            { text: "Продолжить", next: "sceneescapeTogether", type: "next" },
            { text: "Назад", next: "scenepodvalchat6", type: "back" }
        ],
    },
    sceneescapeTogether: {
        id: "escape",
        name: "",
        text: "Девочка берет куклу за ручку. Теперь отныне они шли вместе, и их новая цель была найти выход отсюда как можно скорее… ",
        char: "",
        bg: "black",
        choices: [
            { text: "Продолжить", next: "sceneescapeTogether2", type: "next" },
            { text: "Назад", next: "scenepodvalchat7", type: "back" }
        ],
    },
    sceneescapeTogether2: {
        id: "escape",
        name: "",
        text: "Неподалеку послышались шорохи. Вероятно, из прихожей… Это могло значить лишь одно.",
        char: "",
        bg: "black",
        choices: [
            { text: "Продолжить", next: "scenecollectorAppears", type: "next" },
            { text: "Назад", next: "scenepodvalchat7", type: "back" }
        ],
    },
    scenecollectorAppears: {
        id: "escape",
        name: "Девочка",
        text: "(О нет, Он вернулся... Надо сбежать отсюда как можно скорее.)",
        char: girl,
        bg: basement,
        choices: [
            { text: "Продолжить", next: "scenecollectorAppears2", type: "next" },
            { text: "Назад", next: "sceneescapeTogether2", type: "back"}
        ],
    },
    scenecollectorAppears2: {
        id: "escape",
        name: "Девочка",
        text: "Побежали",
        char: girl,
        bg: basement,
        choices: [
            { text: "Продолжить", next: "scenecollectorCatch", type: "next" },
            { text: "Назад", next: "scenecollectorAppears", type: "back"}
        ],
    },
    scenecollectorCatch: {
        id: "escape",
        name: "",
        text: "Коллекционер выбегает и насильно ловит обеих девочек грубой хваткой своих рук.",
        char: collector,
        bg: black,
        choices: [
            { text: "Продолжить", next: "scenecollectorCatch2", type: "next" },
            { text: "Использовать фонарик", next: "sceneflashlight", type: "normal", requiredItem: "hasFlashlight"  },
            { text: "Назад", next: "scenecollectorAppears2", type: "back"}
        ],
    },
    scenecollectorCatch2: {
        id: "escape",
        name: "Девочка",
        text: "!",
        char: girls,
        bg: black,
        choices: [
            { text: "Продолжить", next: "scenecollectorCatch3", type: "next" },
            { text: "Назад", next: "scenecollectorCatch", type: "back"}
        ],
    },
    scenecollectorCatch3: {
        id: "escape",
        name: "Девочка",
        text: "Кто ты?! Что ты делаешь в моём доме и с моей дочерью?!",
        char: collectora,
        bg: black,
        choices: [
            { text: "Продолжить", next: "scenecollectorThrow", type: "next" },
            { text: "Назад", next: "scenecollectorCatch2", type: "back"}
        ],
    },
    scenecollectorThrow: {
        id: "escape",
        name: "",
        text: "Коллекционер с помощью магии вышвыривает незнакомую девчонку из своего дома, пробивая все стены и потолки под давлением силы телекинеза.",
        char: collectora,
        bg: null,
        choices: [
            { text: "Продолжить", next: "scenecollectorEnd", type: "next" },
            { text: "Назад", next: "scenecollectorCatch3", type: "back"}
        ],
    },
    scenecollectorEnd: {
        id: "final",
        name: "",
        text: 'Успокаиваясь от адреналина, Коллекционер поворачивается к своей "дочери" с обеспокоенным лицом.',
        char: collectora,
        bg: hallway,
        choices: [
            { text: "Продолжить", next: "scenedaughterFinal", type: "next" },
            { text: "Назад", next: "scenecollectorThrow", type: "back"}
        ],
    },
    scenedaughterFinal: {
        id: "final",
        name: "Коллекционер",
        text: "Ты в порядке? Кто это был? Она с тобой ничего не сделала?",
        char: collector,
        bg: hallway,
        choices: [
            { text: "Продолжить", next: "sceneFinal3", type: "next" },
            { text: "Назад", next: "scenecollectorEnd", type: "back"}
        ],
    },
    sceneFinal3: {
    id: "final3",
    name: "",
    text: "Дочь Коллекционера избегает ответов на вопросы отца, презрительно смотря на него своим отсутствующим взглядом.",
    char: null,
    bg: hallway,
    choices: [
            { text: "Продолжить", next: "sceneFinal4", type: "next" },
            { text: "Назад", next: "scenedaughterFinal", type: "back"}
        ],
    },
    sceneFinal4: {
        id: "final4",
        name: "Дочь",
        text: "Папа, ты плохой. Ты убиваешь людей, мне с тобой опасно, поэтому я вынуждена отказаться быть твоей дочерью.",
        char: prototype,
        bg: hallway,
        choices: [
            { text: "Продолжить", next: "sceneFinal5", type: "next" },
            { text: "Назад", next: "sceneFinal3", type: "back"}
        ],
    },
    sceneFinal5: {
        id: "final5",
        name: "Коллекционер",
        text: "...",
        char: collectora,
        bg: hallway,
        choices: [
            { text: "Продолжить", next: "sceneFinal6", type: "next" },
            { text: "Назад", next: "sceneFinal4", type: "back"}
        ],
    },
    sceneFinal6: {
        id: "final6",
        name: "Коллекционер",
        text: "Что? Что ты такое говоришь?",
        char: collectora,
        bg: hallway,
        choices: [
            { text: "Продолжить", next: "sceneFinal7", type: "next" },
            { text: "Назад", next: "sceneFinal5", type: "back"}
        ],
    },
    sceneFinal7: {
        id: "final7",
        name: "Дочь",
        text: "Я не желаю быть твоей дочерью.",
        char: prototype,
        bg: hallway,
        choices: [
            { text: "Продолжить", next: "sceneFinal8", type: "next" },
            { text: "Назад", next: "sceneFinal6", type: "back"}
        ],
    },
    sceneFinal8: {
        id: "final8",
        name: "Коллекционер",
        text: " ...",
        char: collectora,
        bg: hallway,
        choices: [
            { text: "Продолжить", next: "sceneFinal10", type: "next" },
            { text: "Назад", next: "sceneFinal7", type: "back"}
        ],
    },
    sceneFinal10: {
    id: "final10",
    name: "Коллекционер",
    text: "Ты и вправду отказываешься?",
    char: collectora,
    bg: hallway,
    choices: [
        { text: "Продолжить", next: "sceneFinal11", type: "next" },
        { text: "Назад", next: "sceneFinal9", type: "back" }
    ],
},

    sceneFinal11: {
        id: "final11",
        name: "Дочь",
        text: "Да",
        char: prototype,
        bg: hallway,
        choices: [
            { text: "Продолжить", next: "sceneFinal12", type: "next" },
            { text: "Назад", next: "sceneFinal10", type: "back" }
        ],
    },

    sceneFinal12: {
        id: "final12",
        name: "Коллекционер",
        text: "...",
        char: collectora,
        bg: black,
        choices: [
            { text: "Продолжить", next: "sceneFinal13", type: "next" },
            { text: "Назад", next: "sceneFinal11", type: "back" }
        ],
    },

    sceneFinal13: {
        id: "final13",
        name: "Коллекционер",
        text: "Зачем я вообще тогда заново собирал тебя...",
        char: collectora,
        bg: black,
        choices: [
            { text: "Продолжить", next: "sceneFinal14", type: "next" },
            { text: "Назад", next: "sceneFinal12", type: "back" }
        ],
    },

    sceneFinal14: {
        id: "final14",
        char: null,
        bg: black,
        choices: [
            { text: "Продолжить", next: "sceneFinal15", type: "next" },
            { text: "Назад", next: "sceneFinal13", type: "back" }
        ],
    },
    sceneFinal15: {
        id: "final13",
        char: null,
        bg: badEndingImg,
        choices: [
            { text: "Продолжить", next: "sceneFinal16", type: "next" },
            { text: "Назад", next: "sceneFinal14", type: "back" }
        ],
    },
    sceneFinal16: {
        id: "final13",
        name: "Коллекционер",
        text: "...",
        char: collectora,
        bg: badEndingImg,
        choices: [
            { text: "Продолжить", next: "sceneFinal17", type: "next" },
            { text: "Назад", next: "sceneFinal15", type: "back" }
        ],
    },
    sceneFinal17: {
        id: "final13",
        name: "Коллекционер",
        text: "Неужели всё было напрасно? ",
        char: collectora,
        bg: badEndingImg,
        choices: [
            { text: "Продолжить", next: "sceneFinal18", type: "next" },
            { text: "Назад", next: "sceneFinal16", type: "back" }
        ],
    },
    sceneFinal18: {
        id: "final13",
        name: "Коллекционер",
        text: " Мне судьба не оставляет выбора...",
        char: collectora,
        bg: badEndingImg,
        choices: [
            { text: "Продолжить", next: "sceneFinal19", type: "next" },
            { text: "Назад", next: "sceneFinal17", type: "back" }
        ],
    },
    sceneFinal19: {
        id: "final13",
        name: null,
        text: null,
        char: null,
        bg: null,
        choices: [
            { text: "Продолжить", next: "sceneFinal20", type: "next" },
            { text: "Назад", next: "sceneFinal18", type: "back" }
        ],
    },
    sceneFinal20: {
        id: "final13",
        name: "Девочка",
        text: "С тех пор Мистера Коллекционера больше не видели. Но а я...так и осталась пустой оболочкой без души.",
        char: girlh,
        bg: badEndingImg,
        choices: [
            { text: "Продолжить", next: "sceneFinal21", type: "next" },
            { text: "Назад", next: "sceneFinal19", type: "back" }
        ],
    },
    sceneFinal21: {
        id: "final13",
        name: "Девочка",
        text: "С тех пор Мистера Коллекционера больше не видели. Но а я...так и осталась пустой оболочкой без души.",
        char: null,
        bg: badEndingImg,
        end: true,
        choices: [
            { text: "Назад", next: "sceneFinal20", type: "back" }
        ],
    },

    sceneflashlight: {
        id: "flashlight",
        name: "Коллекционер",
        text: "Арргх!",
        char: collectora,
        bg: black,
        choices: [
            { text: "Продолжить", next: "sceneflashlight2", type: "next" },
            { text: "Назад", next: "scenecollectorCatch", type: "back" }
        ],
    },

    sceneflashlight2: {
        id: "flashlight",
        name: "",
        text: "Коллекционер от света фонаря оглушительно падает на скрипящий пол. Раздался грохот. Те смогли выиграть для себя время, и девочка отрывает куклу от её цепей. Они берутся за руки, вместе выбегая из особняка Коллекционера. ",
        char: null,
        bg: black,
        choices: [
            { text: "Продолжить", next: "sceneforest", type: "next" },
            { text: "Назад", next: "sceneflashlight", type: "back" }
        ],
    },
    sceneforest: {
        id: "flashlight",
        name: "",
        text: "Тяжелое дыхание, быстро-сменяющиеся изображения леса пробегают мимо глаз. Они бежали прямо без остановки, пока особняк сзади не превратился в мутный силуэт.  ",
        char: null,
        bg: forest,
        choices: [
            { text: "Продолжить", next: "sceneforest2", type: "next" },
            { text: "Назад", next: "sceneflashlight2", type: "back" }
        ],
    },
    sceneforest2: {
        id: "flashlight",
        name: "Девочка",
        text: "Фухх! Нам удалось!",
        char: girl,
        bg: forest,
        choices: [
            { text: "Продолжить", next: "sceneforest3", type: "next" },
            { text: "Назад", next: "sceneforest", type: "back" }
        ],
    },
    sceneforest3: {
        id: "flashlight",
        name: "Прототип дочери",
        text: "Теперь куда?",
        char: prototype,
        bg: forest,
        choices: [
            { text: "Продолжить", next: "sceneforest4", type: "next" },
            { text: "Назад", next: "sceneforest2", type: "back" }
        ],
    },
    sceneforest4: {
        id: "flashlight",
        name: "Девочка",
        text: "...",
        char: girlh,
        bg: forest,
        choices: [
            { text: "Продолжить", next: "sceneforest5", type: "next" },
            { text: "Назад", next: "sceneforest3", type: "back" }
        ],
    },
    sceneforest5: {
        id: "flashlight",
        name: "",
        text: "Настроение девочки внезапно меняется. От неё исходит зловещая аура и чувство напряжения нарастает. Та внезапно хватает прототип дочери, поймав её в свою хватку.",
        char: null,
        bg: forest,
        choices: [
            { text: "Продолжить", next: "sceneforest6", type: "next" },
            { text: "Назад", next: "sceneforest4", type: "back" }
        ],
    },
    sceneforest6: {
        id: "flashlight",
        name: "Девочка",
        text: "Теперь наконец-то у меня будет душа... ",
        char: null,
        bg: forest,
        choices: [
            { text: "Продолжить", next: "sceneforest7", type: "next" },
            { text: "Назад", next: "sceneforest5", type: "back" }
        ],
    },
    sceneforest7: {
        id: "flashlight",
        name: "",
        text: "Девочка разрывает лицо прототипа и поглощает все его души в себя.",
        char: null,
        bg: anotherEndingImg,
        choices: [
            { text: "Продолжить", next: "sceneforest8", type: "next" },
            { text: "Назад", next: "sceneforest6", type: "back" }
        ],
    },
    sceneforest8: {
        id: "flashlight",
        name: "",
        text: "Концовка: Прототип Дочери",
        char: null,
        bg: anotherEndingImg,
        end: true,
        choices: [
            { text: "Назад", next: "sceneforest7", type: "back" }
        ],
    },

};

export default scenes;  