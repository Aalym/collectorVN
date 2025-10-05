
const scenes = {
    start: {
        id: "start", // scene name/id
        name: "Девочка",
        text: "- Я самая обыкновенная юная девочка, что живет самой простой жизнью.В последнее время вокруг начали ходить слухи о загадочном парне, что похищает души людей, отчего они умирают. Я проследила за ним и нашла его особняк глубоко в чаще леса. Мне надо туда направиться чтоб узнать его тайну.",
        bg: "/src/assets/bg/room.jpg",
        music: "/src/assets/audio/Intro.ogg",
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
        music: "/src/assets/audio/theme.mp3",
        choices: [
            { text: "осмотреться", next: "scene7", type: "normal" },
            { text: "Назад", next: "scene5", type: "back" },
        ],
    },
    scene7: {
        id: "mansion", // custom scene name/id
        name: "",
        text: "на этом демо заканчивается, продолжение позже",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "осмотреться", next: "scene8" },
            { text: "Назад", next: "scene6", type: "back" },
        ],
    },
    
};

export default scenes;