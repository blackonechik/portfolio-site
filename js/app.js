function enableTypeIt() {
    const typeIt = new TypeIt("#js-typeIt", {
        lifeLike: false,
        speed: 0,
        loop: true,
    })
        .type("V")
        .pause(224)
        .type("l")
        .pause(160)
        .type("a")
        .pause(184)
        .type("d")
        .pause(128)
        .type("i")
        .pause(128)
        .type("s")
        .pause(96)
        .type("l")
        .pause(192)
        .type("a")
        .pause(96)
        .type("v")
        .pause(624)
        .type(" ")
        .pause(200)
        .type("S")
        .pause(160)
        .type("u")
        .pause(488)
        .type("r")
        .pause(80)
        .type("n")
        .pause(208)
        .type("i")
        .pause(192)
        .type("n")
        .pause(2560)
        .delete(1)
        .pause(507)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(46)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(32)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(32)
        .delete(1)
        .pause(30)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(47)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(909)
        .type("B")
        .pause(160)
        .type("l")
        .pause(152)
        .type("a")
        .pause(105)
        .type("c")
        .pause(112)
        .type("k")
        .pause(560)
        .type("O")
        .pause(193)
        .type("n")
        .pause(104)
        .type("e")
        .pause(3064)
        .type("c")
        .pause(304)
        .type("h")
        .pause(88)
        .type("i")
        .pause(176)
        .type("k")
        .pause(2128)
        .delete(1)
        .pause(510)
        .delete(1)
        .pause(32)
        .delete(1)
        .pause(32)
        .delete(1)
        .pause(30)
        .delete(1)
        .pause(32)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(47)
        .delete(1)
        .pause(30)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(31)
        .delete(1)
        .go();
}

function pushNotify(status, title, text) {
    new Notify({
        status: status,
        title: title,
        text: text,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right bottom'
    })
}

function enableSwiper() {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 30,
        width: null,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

function enableFeedback() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const btn = document.getElementById('js-feedback-btn');
    const inputs = [name, email, subject, message];

    btn.addEventListener(`click`, async (e) => {
        e.preventDefault();

        // const responseCaptcha = grecaptcha.getResponse();
        // if (responseCaptcha == 0) {
        //     pushNotify(`error`, `Error!`, `You did not pass the CAPTCHA check properly`);
        //     return
        // }

        if (!inputs.some(input => input.value === ``)) {
            const response = await sendFeedback({
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value,
            });

            if (response.ok) {
                pushNotify(`success`, `Successfully!`, `Your request has been sent`);
                inputs.forEach(input => input.value = ``)
            } else {
                pushNotify(`error`, `Error!`, `The server is not responding`);
            }

        } else {
            pushNotify(`error`, `Error!`, `The input fields are empty`);
        }

    })
}

function sendFeedback(msg) {
    const ENDPOINT_URL = `https://portfilio-backend.onrender.com/send/`;

    return fetch(ENDPOINT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(msg),
    })
}

function addRedirectToButtons() {
    const buttons = document.querySelectorAll(`.js-contact-btn`);
    buttons.forEach(btn => btn.addEventListener(`click`, (e) => {
        e.preventDefault();
        window.location.href = 'https://t.me/blackonechik';
    }))
}

function enableCursor() {
    const cursorBall = document.querySelector(".cursor-ball");
    const cursorOutline = document.querySelector(".cursor-outline");

    const buttons = document.querySelectorAll(`.btn`);
    const links = document.querySelectorAll(`a`);

    const hoverableItems = [...buttons, ...links];

    hoverableItems.forEach(btn => btn.addEventListener(`mouseover`, () => {
        cursorToActivityState(cursorBall, cursorOutline)
    }))
    hoverableItems.forEach(btn => btn.addEventListener(`mouseout`, () => {
        cursorToInactiveState(cursorBall, cursorOutline)
    }))

    document.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorBall.style.left = `${posX}px`;
        cursorBall.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" })
    });

    document.addEventListener(`mousedown`, () => {
        cursorToActivityState(cursorBall, cursorOutline);
    })

    document.addEventListener(`mouseup`, () => {
        cursorToInactiveState(cursorBall, cursorOutline);
    })
}

function cursorToActivityState(cursorBall, cursorOutline) {
    cursorBall.style.transform = `translate(-50%, -50%) scale(4)`;
    cursorOutline.style.transform = `translate(-50%, -50%) scale(0)`;
}

function cursorToInactiveState(cursorBall, cursorOutline) {
    cursorBall.style.transform = `translate(-50%, -50%)`;
    cursorOutline.style.transform = `translate(-50%, -50%)`;
}

function enableThemeSwitch() {
    const button = document.querySelector(`.js-theme-switch`);
    const page = document.querySelector(`.page`);
    button.addEventListener(`click`, () => {
        page.classList.toggle(`dark`);
    })
}

export default function portfolioApp() {
    addRedirectToButtons();
    enableSwiper();
    enableTypeIt();
    enableFeedback();
    enableCursor();
    enableThemeSwitch();
}
