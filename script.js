// منوی موبایل

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// بستن منو بعد از کلیک

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });




// تغییر حالت تاریک و روشن

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.innerHTML = "🌙";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (
        document.body.classList.contains("light-mode")
    ) {

        localStorage.setItem(
            "theme",
            "light"
        );

        themeToggle.innerHTML = "🌙";

    } else {

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeToggle.innerHTML = "☀";

    }

});




// انیمیشن ظاهر شدن بخش‌ها

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {

            threshold: 0.1

        }

    );



document
    .querySelectorAll(
        ".skill-card, .project-card, .journey-item"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "all 0.6s ease";

        observer.observe(element);

    });




// لینک اینستاگرام

const instagramLink =
    document.getElementById("instagramLink");


instagramLink.addEventListener(
    "click",
    function () {

        this.href =
            "https://instagram.com/aarad58224";

    }
);



// لینک تلگرام
// فقط USERNAME را با آیدی تلگرام خودت جایگزین کن

const telegramLink =
    document.getElementById("telegramLink");


telegramLink.addEventListener(
    "click",
    function () {

        const username =
            "YOUR_TELEGRAM_USERNAME";

        if (
            username !==
            "YOUR_TELEGRAM_USERNAME"
        ) {

            this.href =
                "https://t.me/" + username;

        } else {

            alert(
                "ابتدا آیدی تلگرام خود را در فایل script.js وارد کنید."
            );

            event.preventDefault();

        }

    }
);




// افکت اسکرول برای هدر

window.addEventListener(
    "scroll",
    () => {

        const header =
            document.querySelector("header");


        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.15)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);    
const username =
    "YOUR_TELEGRAM_USERNAME";
const username =
    "arad123";
