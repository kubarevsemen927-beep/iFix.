function copyEmail() {
    const email = 'sfzdfc@mail.ru';
    navigator.clipboard.writeText(email).then(() => {
        alert('Почта украдена в буфер обмена!');
    });
}

function goToMax() {
    window.open('https://max.ru/iFix', '_blank');
}

function openReviewForm() {
    const name = prompt('Как тебя зовут?');
    if (!name) return;
    const text = prompt('Напиши свой отзыв:');
    if (!text) return;
    alert('Спасибо, ' + name + '! Твой отзыв скоро появится на сайте после модерации.');
}
