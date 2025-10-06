import goodEndingImg from "../assets/endings/ending4.jpg";
import badEndingImg from "../assets/endings/ending2.jpg";
import neutralEndingImg from "../assets/endings/ending1.jpg";
import anotherEndingImg from "../assets/endings/ending3.jpg";
const scenes = {
    start: {
        id: "start", // scene name/id
        name: "Девочка",
        text: " Я самая обыкновенная юная девочка, что живет самой простой жизнью. В последнее время вокруг начали ходить слухи о загадочном парне, что похищает души людей, отчего они умирают. Я проследила за ним и нашла его особняк глубоко в чаще леса. Мне надо туда направиться чтоб узнать его тайну.",
        bg: "/src/assets/bg/intro.jpeg",
        char: "",
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
        text: " Мне надо пробраться в особняк.",
        char: "/src/assets/chars/girl.png",
        bg: "src/assets/bg/mansion.png",
        choices: [
            { text: "подойти к особняку", next: "scene4", type: "next" },
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
        text: " Мрачновато",
        bg: "/src/assets/bg/hallway.jpeg",
        char: "/src/assets/chars/girl.png",
        music: "",
        choices: [
            { text: "осмотреться", next: "scene7", type: "next" },
            { text: "Назад", next: "scene5", type: "back" },
        ],
    },
    scene7: {
    id: "doors_room",
    name: "",
    text: "В комнате стояло две двери: одна слева, другая справа. Куда пойти?",
    bg: "/src/assets/bg/doors.jpg",
    hotspots: [
        {
            id: "leftDoor",
            x: "36.3%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scene8_left",
            label: "Левая дверь"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scene8_right",
            label: "Правая дверь"
        },
    ],
    choices: [{ text: "Назад", next: "scene6", type: "back" }],
},

    scene8_left: {
    id: "leftRoom",
    name: "Девочка",
    text: "Ты вошла на кухню",
    char: "/src/assets/chars/girl.png",
    bg: "/src/assets/bg/kitchen.jpg",
    choices: [
        {text: "Вернуться назад", next: "scene7", type: "normal" },
        { text: "Назад", next: "scene7", type: "back" }
    ],
    },

    scene8_right: {
    id: "rightRoom",
    name: "",
    text: "Ты открыла правую дверь и попала в гостинную",
    char: "/src/assets/chars/girl.png",
    bg: "/src/assets/bg/livingroom.jpeg",
    choices: [
            {text: "Вернуться назад", next: "scene7", type: "normal" },
            { text: "Идти дальше в коридор", next: "scene9", type: "normal" },
            { text: "Назад", next: "scene7", type: "back" },
        ],
    },
    scene9: {
        id: "corridor", 
        name: "",
        text: " Вы из гостиной прошли в коридор",
        bg: "/src/assets/bg/corridor.jpg",
        char: "/src/assets/chars/girl.png",
        music: "",
        choices: [
            { text: "осмотреться", next: "scenephoto", type: "normal" },
            { text: "идти дальше по коридору", next: "scene12", type: "normal" },
            { text: "Назад", next: "scene8_right", type: "back" },
        ],
    },
    scenephoto: {
        id: "photoRoom", 
        name: "Девочка",
        text: " фото семьи",
        bg: "/src/assets/bg/photo.jpeg",
        char: "",
        music: "",
        choices: [
            { text: "Вернутся назад", next: "scene9", type: "normal" },
            { text: "Назад", next: "scene9", type: "back" },
        ],
    },

    scene12: {
    id: "doors_room2",
    name: "",
    text: "В комнате стояло две двери бер.зового цвета",
    bg: "/src/assets/bg/doors2.jpg",
    hotspots: [
        {
            id: "leftDoor",
            x: "36.3%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scene13_left",
            label: "Левая дверь"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scene13_right",
            label: "Правая дверь"
        },
    ],
    choices: [{ text: "Назад", next: "scene9", type: "back" }],
    },
    scene13_left: {
    id: "leftRoom13",
    name: "Девочка",
    text: "Ты вошла в лабороторию",
    char: "/src/assets/chars/girl.png",
    bg: "/src/assets/bg/lab.jpeg",
    choices: [
        { text: "Идти дальше в коридор", next: "scene14", type: "normal" },
        { text: "Назад", next: "scene12", type: "back" },
    ],
    },
    scene13_right: {
    id: "rightRoom13",
    name: "Девочка",
    char: "/src/assets/chars/girl.png",
    text: "Ты вошла в ванную",
    bg: "/src/assets/bg/bathroom.jpeg",
    choices: [
        { text: "Вернуться", next: "scene12", type: "normal" },
        { text: "Назад", next: "scene12", type: "back" }
    ],
    },
    scene14: {
    id: "Room14",
    name: "Девочка",
    text: "ты вошла в коридор",
    char: "/src/assets/chars/girl.png",
    bg: "/src/assets/bg/corridor.jpg",
    choices: [
        { text: "Идти дальше в комнату с бабочками", next: "scene15", type: "normal" },
        { text: "Назад", next: "scene13_left", type: "back" }
    ],
    },
    scene15: {
    id: "Room15",
    name: "Девочка",
    text: "ты вошла в комнату с бабочками",
    char: "/src/assets/chars/girl.png",
    bg: "/src/assets/bg/collectorroom.jpeg",
    choices: [
        { text: "Идти дальше по комнате с бабочками", next: "scene16", type: "normal" },
        { text: "Назад", next: "scene14", type: "back" }
    ],
    },
    scene16: {
    id: "doors_room3",
    name: "",
    text: "В комнате стояло две двери лаймового цвета",
    bg: "/src/assets/bg/doors3.jpg",
    hotspots: [
        {
            id: "leftDoor",
            x: "36.3%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scene17_left",
            label: "Левая дверь"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scene17_right",
            label: "Правая дверь"
        },
    ],
    choices: [{ text: "Назад", next: "scene15", type: "back" }],
    },
    scene17_left: {
    id: "leftRoom17",
    name: "Девочка",
    text: "Ты вошла в комнату с призраками",
    char: "/src/assets/chars/girl.png",
    bg: "/src/assets/bg/ghostroom.jpeg",
    choices: [
        { text: "осмотреться", next: "scene17_left_look", type: "normal" },
        {text: "Идти дальше по комнате с призраками", next: "scene17_right2", type: "normal" },
        { text: "Назад", next: "scene16", type: "back" }
    ],
    },
    scene17_right2: {
    id: "rightRoom17",
    name: "Девочка",
    text: "Ты видишь дверь в подвал",
    bg: "/src/assets/bg/basementdoor.jpg",
    choices: [
        { text: "Идти в подвал", next: "scene19", type: "normal" },
        { text: "Назад", next: "scene17_left", type: "back" }
    ],
    },
    scene17_left_look: {
    id: "leftRoom17_look",
    name: "Девочка",
    text: "Ты осмотрела комнату и нашла фонарик",
    bg: "/src/assets/bg/ghostroom.jpeg",
    choices: [
        { text: "Подобрать фонарик", next: "scene17_left2", type: "normal", giveItem: "hasFlashlight" },
        { text: "Назад", next: "scene17_left", type: "back" }
    ],
    },
    scene17_left2: {
    id: "leftRoom17.2",
    name: "Девочка",
    text: "Ты в комнате с призраками",
    char: "/src/assets/chars/girl.png",
    bg: "/src/assets/bg/ghostroom.jpeg",
    choices: [
        { text: "Идти дальше по комнате с призраками", next: "scene17_right2", type: "normal" },
        { text: "Назад", next: "scene17_left_look", type: "back" }
    ],
    },

    scene17_right: {
    id: "rightRoom17",
    name: "Девочка",
    text: "Ты видишь дверь в подвал",
    bg: "/src/assets/bg/basementdoor.jpg",
    choices: [
        { text: "Идти в подвал", next: "scene19", type: "normal" },
        { text: "Назад", next: "scene16", type: "back" }
    ],
    },
    scene19: {
    id: "Room19",
    name: "Девочка",
    text: "Вы спускаетесь в подвал",
    bg: "/src/assets/bg/black.png",
    choices: [
        { text: "Далее", next: "scene20", type: "next" },
        { text: "Назад", next: "scene17_right", type: "back" }
    ],
    },
    scene20: {
    id: "Room20",
    name: "Девочка",
    text: "Вы вошли в подвал",
    bg: "/src/assets/bg/basement.jpeg",
    choices: [
        { text: "Бежать", next: "scenerun", type: "normal" },
        { text: "Назад", next: "scene19", type: "back" }
    ],
    },
    scenerun: {
    id: "Room18_back",
    name: "Девочка",
    text: "Из  подвала в Дверь в подвал",
    bg: "/src/assets/bg/basementdoor.jpg",
    choices: [
        { text: "Бежать дальше", next: "scenerun2", type: "normal" },
        { text: "Назад", next: "scene20", type: "back" }
    ],
    },
    scenerun2: {
    id: "Room15_back",
    name: "Девочка",
    text: "Из дверь в подвал в комнату с бабочками",
    bg: "/src/assets/bg/collectorroom.jpeg",
    choices: [
        { text: "Бежать дальше", next: "scenerun3", type: "normal" },
        { text: "Назад", next: "scenerun", type: "back" }
    ],
    },
    scenerun3: {
    id: "Room14_back",
    name: "Девочка",
    text: "Из комнаты с бабочками в коридор ",
    bg: "/src/assets/bg/corridor.jpg",
    choices: [
        { text: "Бежать дальше", next: "scenerun4", type: "normal" },
        { text: "Назад", next: "scenerun2", type: "back" }
    ],
    },
    scenerun4: {
    id: "doors_room",
    name: "",
    text: "Из коридора к дверям лаймового цвета",
    bg: "/src/assets/bg/doors3.jpg",
    hotspots: [
        {
            id: "leftDoor",
            x: "36.3%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scenerun5_left",
            label: "Левая дверь"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scenerun5_right",
            label: "Правая дверь"
        },
    ],
    choices: [{ text: "Назад", next: "scenerun3", type: "back" }],
    },
    scenerun5_left: {
    id: "leftRoom",
    name: "Девочка",
    text: "Ты вошла на кухню",
    bg: "/src/assets/bg/kitchen.jpg",
    choices: [
        {text: "Вернуться назад", next: "scenerun4", type: "normal" },
        { text: "Назад", next: "scenerun4", type: "back" }
    ],
    },
    scenerun5_right: {
    id: "rightRoom",
    name: "Девочка",
    text: "Ты вошла в лабораторию",
    bg: "/src/assets/bg/lab.jpeg",
    choices: [
        { text: "Идти дальше", next: "scenerun6", type: "normal" },
        { text: "Назад", next: "scenerun4", type: "back" }
    ],
    },
    scenerun6: {
        id: "corridor", 
        name: "Девочка",
        text: " Вы прибежали в коридор",
        bg: "/src/assets/bg/corridor.jpg",
        choices: [
            { text: "Осмотреться", next: "scenephotorun", type: "normal" },
            { text: "Идти дальше", next: "scenerun7", type: "normal" },
            { text: "Назад", next: "scenerun5_right", type: "back" },
        ],
    },
    scenephotorun: {
        id: "photoRoom", 
        name: "Девочка",
        text: " фото семьи",
        bg: "/src/assets/bg/photo1.jpg",
        char: "",
        music: "",
        choices: [
            { text: "Вернутся назад", next: "scenerun6", type: "normal" },
            { text: "Назад", next: "scenerun6", type: "back" },
        ],
    },
    scenerun7: {
    id: "doors_room4",
    name: "Девочка",
    text: "Ты вернулся к дверям берюзового цвета",
    bg: "/src/assets/bg/doors2.jpg",
    hotspots: [
        {
            id: "leftDoor",
            x: "36.3%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scenerun8_left",
            label: "Левая дверь"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scenerun8_right",
            label: "Правая дверь"
        },
    ],
    choices: [{ text: "Назад", next: "scenerun6", type: "back" }],
    },
    scenerun8_right: {
    id: "rightRoom13",
    name: "Девочка",
    text: "Ты вошла на кухню",
    bg: "/src/assets/bg/kitchen.jpg",
    choices: [
        {text: "Вернуться", next: "scenerun7", type: "normal" },
        { text: "Назад", next: "scenerun7", type: "back" },
    ],
    },
    scenerun8_left: {
    id: "leftRoom13",
    name: "Девочка",
    text: "Ты вернулась в гостинную",
    bg: "/src/assets/bg/livingroom.jpeg",
    choices: [
        {text: "Бежать в коридор", next: "scenerun9", type: "normal" },
        { text: "Назад", next: "scenerun7", type: "back" },
    ],
    },
    scenerun9: {
    id: "Room14_back",
    name: "Девочка",
    text: "Ты прибежала в коридор",
    bg: "/src/assets/bg/corridor.jpg",
    choices: [
        { text: "идти дальше", next: "scenerun10", type: "normal" },
        { text: "Назад", next: "scenerun8_left", type: "back" },
    ],
    },
    scenerun10: {
    id: "Room15_back",
    name: "Девочка",
    text: "Ты вошла в прихожую",
    bg: "/src/assets/bg/livingroom.jpeg",
    choices: [
        { text: "Посветить в лицо фонариком ", next: "scenerun11", type: "normal", requireItem: "hasFlashlight" },
        { text: "концовка 1", next: "sceneEnding1", type: "normal" },
        { text: "концовка 2", next: "sceneEnding2", type: "normal" },
        { text: "Назад", next: "scenerun9", type: "back" },
    ],
    },
    sceneEnding1: {
        id: "ending1",
        name: "Концовка 1",
        bg: badEndingImg,
        end: true,
    },
    sceneEnding2: {
        id: "ending2",
        name: "Концовка 2",
        bg: neutralEndingImg,
        end: true,
    },
    scenerun11: {
    id: "Room17_back",
    name: "Девочка",
    text: "Вы посветили в лицо",
    bg: "/src/assets/bg/black.png",
    choices: [
        { text: "Выбежать из особняка", next: "scenerun12", type: "normal" },
        { text: "Назад", next: "scenerun10", type: "back" },
    ],
    },
    scenerun12: {
    id: "Room18_back",
    name: "Девочка",
    text: "Ты выбежала из особняка и побежала домой",
    bg: "/src/assets/bg/mansion.jpg",
    choices: [
        { text: "идти дальше", next: "sceneForest", type: "normal" },
        { text: "Назад", next: "scenerun11", type: "back" },
    ],
    },
    sceneForest: {
        id: "forest",
        name: "Девочка",
        text: "Ты оказалась в лесу",
        bg: "/src/assets/bg/forest.jpg",
        choices: [
            { text: "концовка 3", next: "sceneending3", type: "normal" },
            { text: "концовка 4", next: "sceneending4", type: "normal" },
            { text: "Назад", next: "scenerun12", type: "back" },
        ],
    },
    sceneending3: {
        id: "ending3",
        name: "Концовка 3",
        bg: anotherEndingImg,
        end: true,

    },
    sceneending4: {
        id: "ending4",
        name: "Концовка 4",
        bg: goodEndingImg,
        end: true,
    },
};
export default scenes;  