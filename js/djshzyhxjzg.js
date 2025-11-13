const values = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
let currentIndex = 0;

function getRandomColor() {
    const chars = '89ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return color;
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (e) {
        const span = document.createElement('span');
        span.textContent = values[currentIndex];

        currentIndex = (currentIndex + 1) % values.length;

        const x = e.clientX;
        const y = e.clientY;

        span.style.position = 'fixed';
        span.style.left = x + 'px';
        span.style.top = (y - 20) + 'px';
        span.style.zIndex = '99999';
        span.style.fontSize = '24px';
        span.style.fontWeight = 'bold';
        span.style.pointerEvents = 'none';
        span.style.userSelect = 'none';
        span.style.textShadow = '0 2px 4px rgba(0,0,0,0.5)';
        span.style.transition = 'all 1.5s ease-out';

        span.style.color = getRandomColor();

        document.body.appendChild(span);

        span.getBoundingClientRect();

        span.style.transform = 'translateY(-150px)';
        span.style.opacity = '0';

        setTimeout(() => {
            if (span.parentNode) {
                span.parentNode.removeChild(span);
            }
        }, 1500);
    });
});
