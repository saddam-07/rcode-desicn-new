document.addEventListener('scroll', function () {
    const blocks = document.querySelectorAll('.section-block');
    const triggerHeight = window.innerHeight / 1.5;  // Высота, при которой блоки начинают появляться

    blocks.forEach(block => {
        const blockTop = block.getBoundingClientRect().top;
        const blockBottom = block.getBoundingClientRect().bottom;

        // Если блок входит в зону видимости
        if (blockTop < triggerHeight && blockBottom > 0) {
            block.classList.add('visible');  // Появляется анимация
        } else {
            block.classList.remove('visible');  // Скрытие анимации при уходе за границу экрана
        }
    });
});


const reviews = [
    {
        avatar: './images/отзыв-1.jpg',  // Замени на путь к изображениям
        name: 'HowDor',
        type: 'Аватарка премиум качества',
        review: 'Идеальные аватарки, цена явно соответствует качеству, продавец общался уважительно, в общем советую к покупке аватарок у данного продавца!'
    },
    {
        avatar: './images/отзыв-2.jpg',
        name: 'TheMagicFire',
        type: 'Логотип премиум качества',
        review: 'Заказ был выполнен на отлично, продавец профи своего дела, цена соответствует качеству. В общем рекомендую от всей души!'
    },
    {
        avatar: './images/отзыв-3.jpg',
        name: 'LATINAS123',
        type: 'Премиум оформление twitch канала',
        review: 'Работа была выполнена на самом высоком уровне! Качество соответствует цене, а продавец — настоящий профессионал в своем деле. Не сомневайтесь и берите заказ у этого продавца!'
    }
];

function displayReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        
        reviewItem.innerHTML = `
            <img src="${review.avatar}" alt="${review.name}">
            <div class="review-text">
                <h3>${review.name}</h3>
                <p><strong>${review.type}</strong></p>
                <p>${review.review}</p>
            </div>
        `;
        reviewsContainer.appendChild(reviewItem);
    });
}

document.addEventListener('DOMContentLoaded', displayReviews);







