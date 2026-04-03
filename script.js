// Dynamic news / ads
const newsContainer = document.getElementById('news-container');

const newsItems = [
    { title: "Happy Hour!", content: "50% off cocktails from 6-8 PM" },
    { title: "New Shisha Flavor", content: "Try our new Mango-Mint mix" },
    { title: "Live DJ Tonight", content: "DJ Ali spins at 9 PM" }
];

newsItems.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
    newsContainer.appendChild(div);
});

// Notifications
const notifyBtn = document.getElementById('notify-btn');
notifyBtn.addEventListener('click', () => {
    if (Notification.permission === "granted") {
        new Notification("Club Lounge", {
            body: "Check out our latest drinks & offers!",
            icon: "images/icon.png"
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if(permission === "granted"){
                new Notification("Club Lounge", {
                    body: "Welcome! Notifications enabled.",
                    icon: "images/icon.png"
                });
            }
        });
    }
});
