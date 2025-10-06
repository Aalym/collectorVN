import goodEndingImg from "../assets/endings/ending4.jpg";
import badEndingImg from "../assets/endings/ending1.jpg";
import neutralEndingImg from "../assets/endings/ending2.jpg";
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
    text: "Ты вошла в левую дверь. Холодный воздух ударил в лицо...",
    bg: "/src/assets/bg/kitchen.jpg",
    choices: [{ text: "Вернуться", next: "scene7", type: "back" }],
    },

    scene8_right: {
    id: "rightRoom",
    name: "Девочка",
    text: "Ты открыла правую дверь — внутри тихо, лишь слышно капли воды.",
    bg: "/src/assets/bg/livingroom.jpeg",
    choices: [
            { text: "идти дальше", next: "scene9", type: "next" },
            { text: "Назад", next: "scene7", type: "back" },
        ],
    },
    scene9: {
        id: "corridor", 
        name: "Девочка",
        text: " Мрачновато",
        bg: "/src/assets/bg/corridor.jpg",
        char: "/src/assets/chars/girl.png",
        music: "",
        choices: [
            { text: "осмотреться", next: "scene10", type: "normal" },
            { text: "идти дальше", next: "scene12", type: "normal" },
            { text: "Назад", next: "scene9", type: "back" },
        ],
    },
};

export default scenes;  