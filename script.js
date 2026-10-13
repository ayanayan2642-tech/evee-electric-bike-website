/* =========================================================
   EVEE PROFESSIONAL WEBSITE JS
   Compatible with the provided EVEE HTML + CSS
========================================================= */

"use strict";


/* =========================================================
   DOM HELPERS
========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


/* =========================================================
   EVEE MODEL DATABASE
========================================================= */

const models = {

    "S1 Air": {
        name: "EVEE S1 Air",
        tag: "PERFORMANCE SERIES",
        price: "Rs. 275,000",
        image:
            "https://evee.pk/wp-content/uploads/2025/08/Untitled-4.jpeg",

        text:
            "A performance-focused electric scooter designed for modern urban mobility, combining strong acceleration, practical range and everyday comfort.",

        specs: [
            ["TOP SPEED", "65–70 KM/H"],
            ["RANGE", "90–110 KM"],
            ["MOTOR", "2200W"],
            ["CHARGING", "5 HOURS"]
        ],

        features: [
            "LED Headlight",
            "Disc Brake",
            "Digital Meter",
            "Graphene Battery",
            "Multiple Riding Modes"
        ]
    },


    "S1": {
        name: "EVEE S1",
        tag: "URBAN SERIES",
        price: "Rs. 206,000+",
        image:
            "https://evee.pk/wp-content/uploads/2024/02/Untitled-3-3-jpeg.webp",

        text:
            "A practical urban electric scooter built for everyday commuting with a balanced combination of speed, range and affordability.",

        specs: [
            ["TOP SPEED", "50–55 KM/H"],
            ["RANGE", "70–90 KM"],
            ["MOTOR", "1200–1500W"],
            ["CHARGING", "7 HOURS"]
        ],

        features: [
            "LED Headlight",
            "Disc Brake",
            "Digital Meter",
            "Comfortable Ride"
        ]
    },


    "GEN-Z": {
        name: "EVEE GEN-Z",
        tag: "URBAN SERIES",
        price: "Rs. 177,900+",
        image:
            "https://evee.pk/wp-content/uploads/2024/02/Untitled-3-3-jpeg.webp",

        text:
            "A stylish and accessible electric scooter designed for efficient city transportation and everyday urban journeys.",

        specs: [
            ["TOP SPEED", "45–50 KM/H"],
            ["RANGE", "70–90 KM"],
            ["MOTOR", "1000W"],
            ["CHARGING", "7 HOURS"]
        ],

        features: [
            "LED Headlight",
            "Digital Meter",
            "Disc Brake",
            "Urban Design"
        ]
    },


    "SQUBE": {
        name: "EVEE SQUBE",
        tag: "POWER SERIES",
        price: "Rs. 239,000",
        image:
            "https://evee.pk/wp-content/uploads/2025/08/Untitled-4.jpeg",

        text:
            "A powerful electric scooter engineered for riders looking for stronger performance and confident city riding.",

        specs: [
            ["TOP SPEED", "65 KM/H"],
            ["RANGE", "80–90 KM"],
            ["MOTOR", "2000W"],
            ["CHARGING", "7–8 HOURS"]
        ],

        features: [
            "Powerful Motor",
            "LED Lighting",
            "Disc Brake",
            "Digital Meter"
        ]
    },


    "LX": {
        name: "EVEE LX",
        tag: "CITY SERIES",
        price: "Rs. 160,000",
        image:
            "https://evee.pk/wp-content/uploads/2024/02/Untitled-3-3-jpeg.webp",

        text:
            "A compact and economical electric scooter made for simple, efficient and comfortable daily city transportation.",

        specs: [
            ["TOP SPEED", "40–45 KM/H"],
            ["RANGE", "70–90 KM"],
            ["MOTOR", "1000W"],
            ["CHARGING", "7–8 HOURS"]
        ],

        features: [
            "LED Headlight",
            "Digital Meter",
            "City Friendly",
            "Low Running Cost"
        ]
    },


    "S1 3W": {
        name: "EVEE S1 3W",
        tag: "ACCESSIBLE MOBILITY",
        price: "Rs. 245,000",
        image:
            "https://evee.pk/wp-content/uploads/2025/08/Untitled-4.jpeg",

        text:
            "An accessible three-wheel electric mobility solution designed to provide stable and practical everyday transportation.",

        specs: [
            ["TOP SPEED", "35–40 KM/H"],
            ["RANGE", "50–70 KM"],
            ["MOTOR", "1200W"],
            ["CHARGING", "7–8 HOURS"]
        ],

        features: [
            "Three-Wheel Stability",
            "LED Lighting",
            "Digital Meter",
            "Comfort Focused"
        ]
    }

};


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader = $("#preloader");

    if (!preloader) return;

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 700);

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = $("#header");

function handleHeaderScroll() {

    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleHeaderScroll, {
    passive: true
});

handleHeaderScroll();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = $("#menuBtn");
const mobileMenu = $("#mobileMenu");

function closeMobileMenu() {

    if (!menuBtn || !mobileMenu) return;

    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("open");

    menuBtn.setAttribute(
        "aria-expanded",
        "false"
    );

}

function openMobileMenu() {

    if (!menuBtn || !mobileMenu) return;

    menuBtn.classList.add("active");
    mobileMenu.classList.add("open");

    menuBtn.setAttribute(
        "aria-expanded",
        "true"
    );

}

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.contains("open");

        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }

    });


    $$("#mobileMenu a").forEach(link => {

        link.addEventListener("click", () => {
            closeMobileMenu();
        });

    });

}


/* =========================================================
   SMOOTH INTERNAL NAVIGATION
========================================================= */

$$('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            $(targetId);

        if (!target) return;

        event.preventDefault();

        const headerHeight =
            header
                ? header.offsetHeight
                : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight +
            5;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    $$(".nav-link");

const sections =
    $$("section[id]");

function updateActiveNavigation() {

    if (!sections.length) return;

    const scrollPosition =
        window.scrollY +
        (header ? header.offsetHeight : 80) +
        100;

    let currentSection = "";

    sections.forEach(section => {

        if (
            scrollPosition >=
            section.offsetTop
        ) {
            currentSection =
                section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* =========================================================
   PRODUCT MODAL
========================================================= */

const modal = $("#productModal");
const modalClose = $("#modalClose");
const modalOverlay = $(".modal-overlay");

const modalImage = $("#modalImage");
const modalTag = $("#modalTag");
const modalTitle = $("#modalTitle");
const modalText = $("#modalText");
const modalSpecs = $("#modalSpecs");
const modalFeatures = $("#modalFeatures");


function openProductModal(modelName) {

    const model =
        models[modelName];

    if (!model || !modal) return;


    if (modalImage) {

        modalImage.src =
            model.image;

        modalImage.alt =
            model.name;

    }


    if (modalTag) {
        modalTag.textContent =
            model.tag;
    }


    if (modalTitle) {
        modalTitle.textContent =
            model.name;
    }


    if (modalText) {
        modalText.textContent =
            model.text;
    }


    if (modalSpecs) {

        modalSpecs.innerHTML =
            model.specs
                .map(spec => `
                    <div class="modal-spec">
                        <span>${escapeHTML(spec[0])}</span>
                        <strong>${escapeHTML(spec[1])}</strong>
                    </div>
                `)
                .join("");

    }


    if (modalFeatures) {

        modalFeatures.innerHTML =
            model.features
                .map(feature => `
                    <span class="modal-feature">
                        ${escapeHTML(feature)}
                    </span>
                `)
                .join("");

    }


    modal.classList.add("show");

    document.body.classList.add(
        "modal-open"
    );

    if (modalClose) {
        modalClose.focus();
    }

}


function closeProductModal() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   PRODUCT BUTTONS
========================================================= */

$$("[data-model]").forEach(button => {

    button.addEventListener("click", () => {

        const modelName =
            button.dataset.model;

        if (
            modelName &&
            models[modelName]
        ) {
            openProductModal(modelName);
        }

    });

});


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProductModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProductModal
    );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProductModal();
            closeMobileMenu();

        }

    }
);


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   SAVINGS CALCULATOR
========================================================= */

const distanceInput = $("#distance");
const petrolInput = $("#petrol");
const averageInput = $("#average");
const electricityInput = $("#electricity");
const evEfficiencyInput = $("#evEfficiency");

const distanceValue = $("#distanceValue");
const petrolValue = $("#petrolValue");
const averageValue = $("#averageValue");
const electricityValue = $("#electricityValue");
const evEfficiencyValue =
    $("#evEfficiencyValue");

const petrolYearly =
    $("#petrolYearly");

const savingResult =
    $("#savingResult");


function formatPKR(number) {

    return new Intl.NumberFormat(
        "en-PK"
    ).format(
        Math.round(number)
    );

}


function updateSavingsCalculator() {

    if (
        !distanceInput ||
        !petrolInput ||
        !averageInput ||
        !electricityInput ||
        !evEfficiencyInput
    ) {
        return;
    }


    const distance =
        Number(distanceInput.value);

    const petrol =
        Number(petrolInput.value);

    const average =
        Number(averageInput.value);

    const electricity =
        Number(electricityInput.value);

    const evEfficiency =
        Number(evEfficiencyInput.value);


    /*
       Petrol calculation
       365 days
    */

    const petrolLitres =
        (distance / average) * 365;

    const petrolCost =
        petrolLitres * petrol;


    /*
       EV calculation

       Wh/KM → kWh/KM
    */

    const evKwh =
        (distance *
            evEfficiency *
            365) /
        1000;

    const evCost =
        evKwh *
        electricity;


    const savings =
        Math.max(
            petrolCost - evCost,
            0
        );


    if (distanceValue) {

        distanceValue.textContent =
            `${distance} KM`;

    }

    if (petrolValue) {

        petrolValue.textContent =
            petrol;

    }

    if (averageValue) {

        averageValue.textContent =
            average;

    }

    if (electricityValue) {

        electricityValue.textContent =
            electricity;

    }

    if (evEfficiencyValue) {

        evEfficiencyValue.textContent =
            evEfficiency;

    }

    if (petrolYearly) {

        petrolYearly.textContent =
            `Rs. ${formatPKR(petrolCost)}`;

    }

    if (savingResult) {

        savingResult.textContent =
            `Rs. ${formatPKR(savings)}`;

    }

}


[
    distanceInput,
    petrolInput,
    averageInput,
    electricityInput,
    evEfficiencyInput
]
.forEach(input => {

    if (!input) return;

    input.addEventListener(
        "input",
        updateSavingsCalculator
    );

});

updateSavingsCalculator();


/* =========================================================
   EMI CALCULATOR
========================================================= */

const bikePriceInput =
    $("#bikePrice");

const downPaymentInput =
    $("#downPayment");

const loanMonthsInput =
    $("#loanMonths");

const emiResult =
    $("#emiResult");


function updateEMI() {

    if (
        !bikePriceInput ||
        !downPaymentInput ||
        !loanMonthsInput ||
        !emiResult
    ) {
        return;
    }


    const price =
        Math.max(
            Number(bikePriceInput.value) || 0,
            0
        );


    let downPayment =
        Math.max(
            Number(downPaymentInput.value) || 0,
            0
        );


    /*
       Down payment cannot
       exceed bike price.
    */

    downPayment =
        Math.min(
            downPayment,
            price
        );


    const months =
        Math.max(
            Number(loanMonthsInput.value) || 1,
            1
        );


    const principal =
        Math.max(
            price - downPayment,
            0
        );


    const monthlyPayment =
        principal / months;


    emiResult.textContent =
        `Rs. ${formatPKR(monthlyPayment)}`;

}


[
    bikePriceInput,
    downPaymentInput,
    loanMonthsInput
]
.forEach(input => {

    if (!input) return;

    input.addEventListener(
        "input",
        updateEMI
    );

    input.addEventListener(
        "change",
        updateEMI
    );

});

updateEMI();


/* =========================================================
   EV FINDER
========================================================= */

const finderState = {

    priority: null,
    range: null,
    budget: null

};


const finderOptions =
    $$(".finder-option");


function updateFinderUI() {

    finderOptions.forEach(button => {

        const choice =
            button.dataset.choice;

        const range =
            button.dataset.range;

        const budget =
            button.dataset.budget;


        let selected = false;


        if (
            choice &&
            finderState.priority === choice
        ) {
            selected = true;
        }


        if (
            range &&
            finderState.range === range
        ) {
            selected = true;
        }


        if (
            budget &&
            finderState.budget === budget
        ) {
            selected = true;
        }


        button.classList.toggle(
            "selected",
            selected
        );

    });

}


function getFinderRecommendation() {

    const {
        priority,
        range,
        budget
    } = finderState;


    /*
       Strong direct matches
    */

    if (
        priority === "performance" ||
        range === "long" ||
        budget === "high"
    ) {

        return {
            model: "S1 Air",
            text:
                "S1 Air is your strongest match if you want higher performance, longer range and a premium electric riding experience."
        };

    }


    if (
        priority === "budget" &&
        budget === "low"
    ) {

        return {
            model: "GEN-Z",
            text:
                "GEN-Z is a great value-focused choice for affordable everyday urban mobility."
        };

    }


    if (
        priority === "city" &&
        budget === "low"
    ) {

        return {
            model: "LX",
            text:
                "LX is suited to simple, economical city commuting with a practical electric setup."
        };

    }


    if (
        range === "short" &&
        priority === "city"
    ) {

        return {
            model: "LX",
            text:
                "LX is a practical city-focused choice for shorter daily journeys."
        };

    }


    if (
        range === "medium" &&
        budget === "mid"
    ) {

        return {
            model: "S1",
            text:
                "S1 offers a balanced combination of everyday range, speed and value."
        };

    }


    if (
        priority === "performance" &&
        budget === "mid"
    ) {

        return {
            model: "SQUBE",
            text:
                "SQUBE gives you a strong performance-oriented setup while staying below the S1 Air price point."
        };

    }


    /*
       Default recommendation
    */

    return {
        model: "S1",
        text:
            "S1 is a balanced all-rounder for everyday urban mobility."
    };

}


function updateFinderResult() {

    const recommendationName =
        $("#recommendationName");

    const recommendationText =
        $("#recommendationText");

    const recommendationButton =
        $("#recommendationButton");


    if (
        !recommendationName ||
        !recommendationText
    ) {
        return;
    }


    const selectedCount =
        Object.values(finderState)
            .filter(Boolean)
            .length;


    if (selectedCount === 0) {

        recommendationName.textContent =
            "Choose your preferences";

        recommendationText.textContent =
            "Select one option from each category.";

        if (recommendationButton) {
            recommendationButton.dataset.model =
                "S1 Air";
        }

        return;

    }


    const recommendation =
        getFinderRecommendation();


    recommendationName.textContent =
        recommendation.model;

    recommendationText.textContent =
        recommendation.text;


    if (recommendationButton) {

        recommendationButton.dataset.model =
            recommendation.model;

    }

}


finderOptions.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            if (button.dataset.choice) {

                finderState.priority =
                    button.dataset.choice;

            }

            if (button.dataset.range) {

                finderState.range =
                    button.dataset.range;

            }

            if (button.dataset.budget) {

                finderState.budget =
                    button.dataset.budget;

            }


            updateFinderUI();
            updateFinderResult();

        }
    );

});

updateFinderResult();


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems =
    $$(".faq-item");


faqItems.forEach(item => {

    const question =
        $(".faq-question", item);

    if (!question) return;


    question.addEventListener(
        "click",
        () => {

            const wasOpen =
                item.classList.contains("open");


            /*
               Close all other FAQ items
            */

            faqItems.forEach(otherItem => {

                otherItem.classList.remove(
                    "open"
                );

                const otherQuestion =
                    $(".faq-question", otherItem);

                if (otherQuestion) {

                    otherQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            });


            /*
               Open clicked item
            */

            if (!wasOpen) {

                item.classList.add("open");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );

});


/* =========================================================
   TEST RIDE FORM
========================================================= */

const rideForm =
    $("#rideForm");

const formMessage =
    $("#formMessage");


if (rideForm) {

    rideForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                $("#name")?.value.trim();

            const phone =
                $("#phone")?.value.trim();

            const model =
                $("#model")?.value;

            const city =
                $("#city")?.value;

            const date =
                $("#rideDate")?.value;

            const time =
                $("#rideTime")?.value;


            /*
               Basic validation
            */

            if (
                !name ||
                !phone
            ) {

                showFormMessage(
                    "Please enter your name and phone number."
                );

                return;

            }


            /*
               Simple phone validation
            */

            const phonePattern =
                /^[+0-9\s()-]{8,20}$/;


            if (
                !phonePattern.test(phone)
            ) {

                showFormMessage(
                    "Please enter a valid phone number."
                );

                return;

            }


            /*
               Date validation
            */

            if (date) {

                const selectedDate =
                    new Date(
                        `${date}T00:00:00`
                    );

                const today =
                    new Date();

                today.setHours(
                    0,
                    0,
                    0,
                    0
                );


                if (
                    selectedDate < today
                ) {

                    showFormMessage(
                        "Please choose a future date."
                    );

                    return;

                }

            }


            const message =

                `Hello EVEE!%0A%0A` +

                `I would like to request a test ride.%0A%0A` +

                `Name: ${encodeURIComponent(name)}%0A` +

                `Phone: ${encodeURIComponent(phone)}%0A` +

                `Model: ${encodeURIComponent(model)}%0A` +

                `City: ${encodeURIComponent(city)}%0A` +

                `Preferred Date: ${encodeURIComponent(date || "Not specified")}%0A` +

                `Preferred Time: ${encodeURIComponent(time || "Not specified")}`;


            const whatsappURL =
                `https://wa.me/923252292290?text=${message}`;


            showFormMessage(
                "Opening WhatsApp..."
            );


            /*
               Small delay gives user
               feedback before redirect.
            */

            setTimeout(() => {

                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }, 500);

        }
    );

}


function showFormMessage(message) {

    if (!formMessage) return;

    formMessage.textContent =
        message;

}


/* =========================================================
   SET MINIMUM TEST RIDE DATE
========================================================= */

const rideDate =
    $("#rideDate");


if (rideDate) {

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    rideDate.min =
        `${year}-${month}-${day}`;

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealTargets = [
    ".section-top",
    ".intro-grid",
    ".featured-model",
    ".model-card",
    ".comparison-wrap",
    ".performance-copy",
    ".performance-visual",
    ".tech-card",
    ".savings-copy",
    ".calculator",
    ".emi-box",
    ".finder-step",
    ".finder-result",
    ".experience-image",
    ".experience-copy",
    ".gallery-item",
    ".ride-form",
    ".contact-points",
    ".faq-item"
];


const revealElements =
    $$(revealTargets.join(","));


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    entry.target.classList.add(
                        "revealed"
                    );


                    revealObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        element => {

            element.classList.add(
                "revealed"
            );

        }
    );

}


/* =========================================================
   STAGGERED CARD ANIMATION
========================================================= */

$$(
    ".model-grid .model-card"
).forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${Math.min(index * 60, 300)}ms`;

    }
);


$$(
    ".technology-grid .tech-card"
).forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${Math.min(index * 70, 280)}ms`;

    }
);


/* =========================================================
   PRODUCT IMAGE ERROR FALLBACK
========================================================= */

$$("img").forEach(image => {

    image.addEventListener(
        "error",
        () => {

            /*
               Don't repeatedly trigger
               the error handler.
            */

            if (
                image.dataset.fallbackApplied
            ) {
                return;
            }


            image.dataset.fallbackApplied =
                "true";


            image.style.opacity =
                "0.15";

        }
    );

});


/* =========================================================
   PREVENT DOUBLE SUBMISSION
========================================================= */

if (rideForm) {

    let submitting = false;


    rideForm.addEventListener(
        "submit",
        () => {

            if (submitting) {
                return;
            }

            submitting = true;


            setTimeout(() => {

                submitting = false;

            }, 1500);

        },
        true
    );

}


/* =========================================================
   SAVE EV FINDER PREFERENCES
========================================================= */

const FINDER_STORAGE_KEY =
    "eveeFinderPreferences";


function saveFinderState() {

    try {

        localStorage.setItem(
            FINDER_STORAGE_KEY,
            JSON.stringify(
                finderState
            )
        );

    } catch (error) {

        /*
           localStorage may be blocked
           in private browsing contexts.
        */

    }

}


function loadFinderState() {

    try {

        const saved =
            localStorage.getItem(
                FINDER_STORAGE_KEY
            );


        if (!saved) return;


        const parsed =
            JSON.parse(saved);


        if (
            parsed &&
            typeof parsed === "object"
        ) {

            finderState.priority =
                parsed.priority || null;

            finderState.range =
                parsed.range || null;

            finderState.budget =
                parsed.budget || null;

        }

    } catch (error) {

        /*
           Ignore invalid storage.
        */

    }

}


finderOptions.forEach(button => {

    button.addEventListener(
        "click",
        saveFinderState
    );

});


loadFinderState();
updateFinderUI();
updateFinderResult();


/* =========================================================
   BUTTON PRESS MICRO INTERACTION
========================================================= */

$$(
    ".btn, .details-btn, .submit-btn, .round-arrow"
).forEach(button => {

    button.addEventListener(
        "mousedown",
        () => {

            button.style.transform =
                "scale(.97)";

        }
    );


    button.addEventListener(
        "mouseup",
        () => {

            button.style.transform =
                "";

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "";

        }
    );

});


/* =========================================================
   PREVENT IMAGE DRAGGING
========================================================= */

$$("img").forEach(image => {

    image.setAttribute(
        "draggable",
        "false"
    );

});


/* =========================================================
   REDUCE MOTION SUPPORT
========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (
    prefersReducedMotion.matches
) {

    document.documentElement.style
        .scrollBehavior = "auto";

    revealElements.forEach(
        element => {

            element.classList.add(
                "revealed"
            );

        }
    );

}


/* =========================================================
   WINDOW RESIZE
========================================================= */

let resizeTimer;

window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(() => {

                /*
                   Close mobile menu
                   when switching to desktop.
                */

                if (
                    window.innerWidth > 760
                ) {
                    closeMobileMenu();
                }

            }, 150);

    },
    { passive: true }
);


/* =========================================================
   INITIALIZATION MESSAGE
========================================================= */

console.log(
    "%c EVEE Website ",
    "background:#c8ef45;color:#070907;font-weight:800;padding:5px 10px;border-radius:5px;"
);

console.log(
    "%c Professional EVEE JS initialized successfully.",
    "color:#737a70;"
);