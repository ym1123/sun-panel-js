// 社会主义核心价值观数组
const values = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
let currentIndex = 0;

// 随机颜色生成函数
function getRandomColor() {
    const chars = '89ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return color;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    // 添加点击事件监听
    document.body.addEventListener('click', function (e) {
        // 创建新的span元素
        const span = document.createElement('span');
        span.textContent = values[currentIndex];

        // 更新索引，循环使用
        currentIndex = (currentIndex + 1) % values.length;

        // 获取鼠标点击位置
        const x = e.clientX;
        const y = e.clientY;

        // 设置span样式
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

        // 使用随机颜色
        span.style.color = getRandomColor();

        // 添加到body
        document.body.appendChild(span);

        // 触发重绘
        span.getBoundingClientRect();

        // 添加动画效果
        span.style.transform = 'translateY(-150px)';
        span.style.opacity = '0';

        // 动画结束后移除元素
        setTimeout(() => {
            if (span.parentNode) {
                span.parentNode.removeChild(span);
            }
        }, 1500);
    });
});