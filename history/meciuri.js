document.querySelectorAll('.score').forEach(scoreElement => {
    scoreElement.addEventListener('click', () => {
        const goals = scoreElement.getAttribute('data-goals');
        const stadium = scoreElement.getAttribute('data-stadium');

        // Crearea elementului care va conține informațiile despre goluri
        let goalInfo = scoreElement.querySelector('.goal-info');
        if (!goalInfo) {
            goalInfo = document.createElement('div');
            goalInfo.classList.add('goal-info');
            goalInfo.innerHTML = `<strong>Marcatori:</strong> ${goals}<br><strong>Stadion:</strong> ${stadium}`;
            scoreElement.appendChild(goalInfo);
        }

        // Afișează sau ascunde informațiile despre goluri
        goalInfo.style.display = goalInfo.style.display === 'block' ? 'none' : 'block';
    });
});
