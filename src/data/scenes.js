import goodEndingImg from "../assets/endings/ending4.jpg";
import badEndingImg from "../assets/endings/ending2.jpg";
import neutralEndingImg from "../assets/endings/ending1.jpg";
import anotherEndingImg from "../assets/endings/ending3.jpg";
const scenes = {
    start: {
        id: "start", // scene name/id
        name: "Девочка",
        text: " Я самая обыкновенная юная девочка, что живет самой простой жизнью.В последнее время вокруг начали ходить слухи о загадочном парне, что похищает души людей, отчего они умирают. Я проследила за ним и нашла его особняк глубоко в чаще леса. Мне надо туда направиться чтоб узнать его тайну.",
        bg: "/src/assets/bg/intro.jpeg",
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
    bg: "/src/assets/bg/kitchen.jpg",
    choices: [{ text: "Вернуться", next: "scene7", type: "back" }],
    },

    scene8_right: {
    id: "rightRoom",
    name: "Девочка",
    text: "Ты открыла правую дверь и попала в гостинную",
    bg: "/src/assets/bg/livingroom.jpeg",
    choices: [
            { text: "идти дальше", next: "scene9", type: "next" },
            { text: "Назад", next: "scene7", type: "back" },
        ],
    },
    scene9: {
        id: "corridor", 
        name: "Девочка",
        text: " Коридор",
        bg: "/src/assets/bg/corridor.jpg",
        char: "/src/assets/chars/girl.png",
        music: "",
        choices: [
            { text: "осмотреться", next: "scenephoto", type: "normal" },
            { text: "идти дальше", next: "scene12", type: "normal" },
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
            { text: "Назад", next: "scene9", type: "back" },
        ],
    },

    scene12: {
    id: "doors_room2",
    name: "",
    text: "В комнате стояло две двери",
    bg: "/src/assets/bg/doors.jpg",
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
    choices: [{ text: "Назад", next: "scene6", type: "back" }],
    },
    scene13_left: {
    id: "leftRoom13",
    name: "Девочка",
    text: "Ты вошла в лабороторию",
    bg: "/src/assets/bg/lab.jpeg",
    choices: [
        { text: "идти дальше", next: "scene14", type: "normal" },
        { text: "Вернуться", next: "scene13", type: "back" },
    ],
    },
    scene13_right: {
    id: "rightRoom13",
    name: "Девочка",
    text: "Ты вошла в ванную",
    bg: "/src/assets/bg/bathroom.jpeg",
    choices: [{ text: "Вернуться", next: "scene13", type: "back" }],
    },
    scene14: {
    id: "Room14",
    name: "Девочка",
    text: "ты вошла в коридор",
    bg: "/src/assets/bg/corridor.jpg",
    choices: [
        { text: "идти дальше", next: "scene15", type: "normal" },
        { text: "Вернуться", next: "scene13_left", type: "back" }
    ],
    },
    scene15: {
    id: "Room15",
    name: "Девочка",
    text: "ты вошла в комнату с бабочками",
    bg: "/src/assets/bg/collectorroom.jpeg",
    choices: [
        { text: "идти дальше", next: "scene16", type: "normal" },
        { text: "Вернуться", next: "scene14", type: "back" }
    ],
    },
    scene16: {
    id: "doors_room3",
    name: "",
    text: "В комнате стояло две двери",
    bg: "/src/assets/bg/doors.jpg",
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
    bg: "/src/assets/bg/ghostroom.jpeg",
    choices: [
        { text: "осмотреться", next: "scene17_left_look", type: "normal" },
        { text: "идти дальше", next: "scene18", type: "normal" },
        { text: "Вернуться", next: "scene16", type: "back" }
    ],
    },
    scene17_left_look: {
    id: "leftRoom17_look",
    name: "Девочка",
    text: "Ты осмотрела комнату и нашла фонарик",
    bg: "/src/assets/bg/ghostroom.jpeg",
    choices: [
        { text: "Подобрать фонарик", next: "scene17_left", type: "normal", giveItem: "hasFlashlight" },
    ],
    },
    scene17_right: {
    id: "rightRoom17",
    name: "Девочка",
    text: "Ты вошла в комнату с призраками",
    bg: "/src/assets/bg/ghostroom.jpeg",
    choices: [
        { text: "идти дальше", next: "scene18", type: "normal" },
        { text: "Вернуться", next: "scene16", type: "back" }
    ],
    },
    scene18: {
    id: "Room18",
    name: "Девочка",
    text: "Ты видишь дверь в подвал",
    bg: "/src/assets/bg/basementdoor.jpg",
    choices: [
        { text: "идти дальше", next: "scene19", type: "normal" },
        { text: "Вернуться", next: "scene17_right", type: "back" }
    ],
    },
    scene19: {
    id: "Room19",
    name: "Девочка",
    text: "черный экран",
    bg: "/src/assets/bg/black.png",
    choices: [
        { text: "Далее", next: "scene20", type: "next" },
        { text: "Вернуться", next: "scene18", type: "back" }
    ],
    },
    scene20: {
    id: "Room20",
    name: "Девочка",
    text: "Подвал",
    bg: "/src/assets/bg/basement.jpeg",
    choices: [
        { text: "идти дальше", next: "scene18_back", type: "normal" },
        { text: "Вернуться", next: "scene19", type: "back" }
    ],
    },
    scene18_back: {
    id: "Room18_back",
    name: "Девочка",
    text: "дверь в подвал побег",
    bg: "/src/assets/bg/basementdoor.jpg",
    choices: [
        { text: "идти дальше", next: "scene15_back", type: "normal" },
        { text: "Вернуться", next: "scene20", type: "back" }
    ],
    },
    scene15_back: {
    id: "Room15_back",
    name: "Девочка",
    text: "Ты вернулась в комнату с бабочками побег",
    bg: "/src/assets/bg/collectorroom.jpeg",
    choices: [
        { text: "идти дальше", next: "scene14_back", type: "normal" },
        { text: "Вернуться", next: "scene18_back", type: "back" }
    ],
    },
    scene14_back: {
    id: "Room14_back",
    name: "Девочка",
    text: "Ты вернулась в коридор побег",
    bg: "/src/assets/bg/corridor.jpg",
    choices: [
        { text: "идти дальше", next: "scene13_back", type: "normal" },
        { text: "Вернуться", next: "scene15_back", type: "back" }
    ],
    },
    scene13_back: {
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
            next: "scene8_left_back",
            label: "Левая дверь"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scene8_right_back",
            label: "Правая дверь"
        },
    ],
    choices: [{ text: "Назад", next: "scene14_back", type: "back" }],
    },
    scene8_left_back: {
    id: "leftRoom",
    name: "Девочка",
    text: "Ты вошла на кухню",
    bg: "/src/assets/bg/kitchen.jpg",
    choices: [{ text: "Вернуться", next: "scene13_back", type: "back" }],
    },
    scene8_right_back: {
    id: "rightRoom",
    name: "Девочка",
    text: "Ты вошла в лабораторию",
    bg: "/src/assets/bg/lab.jpeg",
    choices: [
        { text: "Идти дальше", next: "scene9_back", type: "normal" },
        { text: "Вернуться", next: "scene13_back", type: "back" }
    ],
    },
    scene9_back: {
        id: "corridor", 
        name: "Девочка",
        text: " Коридор",
        bg: "/src/assets/bg/corridor.jpg",
        choices: [
            { text: "Осмотреться", next: "scenephoto_back", type: "normal" },
            { text: "Идти дальше", next: "scene12_back", type: "normal" },
            { text: "Назад", next: "scene8_right_back", type: "back" },
        ],
    },
    scenephoto_back: {
        id: "photoRoom", 
        name: "Девочка",
        text: " фото семьи",
        bg: "/src/assets/bg/photo.jpeg",
        char: "",
        music: "",
        choices: [
            { text: "Назад", next: "scene9_back", type: "back" },
        ],
    },
    scene12_back: {
    id: "doors_room4",
    name: "Девочка",
    text: "Ты видишь две двери",
    bg: "/src/assets/bg/doors.jpg",
    hotspots: [
        {
            id: "leftDoor",
            x: "36.3%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scene13_left_back",
            label: "Левая дверь"
        },
        {
            id: "rightDoor",
            x: "88%",
            y: "52%",
            width: "30%",
            height: "70%",
            next: "scene13_right_back",
            label: "Правая дверь"
        },
    ],
    choices: [{ text: "Назад", next: "scene9_back", type: "back" }],
    },
    scene13_right_back: {
    id: "rightRoom13",
    name: "Девочка",
    text: "Ты вошла на кухню",
    bg: "/src/assets/bg/kitchen.jpg",
    choices: [
        { text: "Назад", next: "scene12_back", type: "back" },
    ],
    },
    scene13_left_back: {
    id: "leftRoom13",
    name: "Девочка",
    text: "Ты вошла в гостиную",
    bg: "/src/assets/bg/living_room.jpg",
    choices: [
        {text: "идти дальше", next: "scene14_back", type: "normal" },
        { text: "Назад", next: "scene12_back", type: "back" },
    ],
    },
    scene14_back: {
    id: "Room14_back",
    name: "Девочка",
    text: "Ты вошла в коридор",
    bg: "/src/assets/bg/corridor.jpg",
    choices: [
        { text: "идти дальше", next: "scene15_back", type: "normal" },
        { text: "Назад", next: "scene13_left_back", type: "back" },
    ],
    },
    scene15_back: {
    id: "Room15_back",
    name: "Девочка",
    text: "Ты вошла в прихожую",
    bg: "/src/assets/bg/livingroom.jpeg",
    choices: [
        { text: "Посветить в лицо фонариком", next: "scene17_back", type: "normal", requireItem: "hasFlashlight" },
        { text: "концовка 1", next: "sceneEnding1", type: "normal" },
        { text: "концовка 2", next: "sceneEnding2", type: "normal" },
        { text: "Назад", next: "scene14_back", type: "back" },
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
    scene17_back: {
    id: "Room17_back",
    name: "Девочка",
    text: "черный экран",
    bg: "/src/assets/bg/black.png",
    choices: [
        { text: "идти дальше", next: "scene18_back", type: "normal" },
        { text: "Назад", next: "scene15_back", type: "back" },
    ],
    },
    scene18_back: {
    id: "Room18_back",
    name: "Девочка",
    text: "Ты вышла из особняка и побежала домой",
    bg: "/src/assets/bg/mansion.jpg",
    choices: [
        { text: "идти дальше", next: "sceneForest", type: "normal" },
        { text: "Назад", next: "scene17_back", type: "back" },
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
            { text: "Назад", next: "scene18_back", type: "back" },
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