console.log("salom");


const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

window.onload = () => {
    scrollTo(0,0)
}

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("DOMContentLoaded", () => {

    const rows = document.querySelectorAll(".comparison-table tbody tr");

    rows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            row.style.background = "#f3f9f9";
        });
        row.addEventListener("mouseleave", () => {
            row.style.background = "white";
        });
    });


    const hubspotCard = document.querySelector(".hubspot-card");

    hubspotCard.addEventListener("click", () => {
        hubspotCard.style.transform = "scale(1.03)";
        hubspotCard.style.transition = "0.2s";

        setTimeout(() => {
            hubspotCard.style.transform = "scale(1)";
        }, 200);
    });


    const radios = document.querySelectorAll(".checkbox-circle");

    radios.forEach(r => {
        r.addEventListener("change", () => {
            radios.forEach(x => x.style.outline = "none");
            r.style.outline = "3px solid #336E6D";
            r.style.borderColor = "#336E6D";
        });
    });
});

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const email = document.getElementById('email').value;
    const emailConfirm = document.getElementById('emailConfirm').value;

    if (!form.checkValidity()) {
        alert('すべての必須項目を入力してください。');
        return;
    }

    if (email !== emailConfirm) {
        alert('メールアドレスが一致しません。');
        return;
    }

    alert('お問い合わせありがとうございます。確認画面に移動します。');
}


document.getElementById('contactForm').addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});