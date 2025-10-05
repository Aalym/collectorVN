const scenes = {
    start: {
        id: "start", // scene name/id
        name: "Девочка",
        text: "- Я самая обыкновенная юная девочка, что живет самой простой жизнью.В последнее время вокруг начали ходить слухи о загадочном парне, что похищает души людей, отчего они умирают. Я проследила за ним и нашла его особняк глубоко в чаще леса. Мне надо туда направиться чтоб узнать его тайну.",
        bg: "/src/assets/bg/room.jpg",
        choices: [
            { text: "Продолжить", next: "scene2", type: "next" },
        ],
    },
    scene2: {
        id: "street", // custom scene name/id
        name: "Девочка",
        text: "2сцена",
        bg: "/src/assets/bg/street.jpg",
        choices: [
            { text: "Назад", next: "start", type: "normal" },
            { text: "Продолжить", next: "scene3", type: "next" },
        ],
    },
    scene3: {
        id: "park", // custom scene name/id
        name: "Девочка", 
        text: "сцена3",
        bg: "/src/assets/bg/park.jpg",
        choices: [
            { text: "Исследовать особняк", next: "scene4", type: "normal" },
            { text: "Назад", next: "scene2" },
        ],
    },
    scene4: {
        id: "mansion", // custom scene name/id
        name: "Девочка",
        text: "- Мне надо пробраться в особняк.",
        bg: "/src/assets/bg/mansion.jpg",
        choices: [
            { text: "Продолжить", next: "scene5" },
            { text: "Назад", next: "scene3" },
        ],
    },
    scene5: {
        id: "mansion_interior", // custom scene name/id
        name: "Девочка",
        text: "Внутри особняка было темно и тихо. Я чувствовала, как сердце колотится в груди.",
        bg: "/src/assets/bg/mansion_interior.jpg",
        choices: [
            { text: "Осмотреться", next: "scene6" },
            { text: "Уйти", next: "scene4" },
        ],
    },
};

export default scenes;