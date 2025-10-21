// Запрет перетаскивания для всех изображений
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('draggable', false); // Запрет перетаскивания
    });
});