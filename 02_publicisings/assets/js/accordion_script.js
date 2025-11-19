const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        // 현재 클릭된 항목이 이미 열려 있는지 확인
        const isCurrentlyActive = item.classList.contains('active');

        // 모든 항목 닫기
        accordionItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // 닫혀있던 항목만 열기 (토글)
        if (!isCurrentlyActive) {
            item.classList.add('active');
        }
    });
});