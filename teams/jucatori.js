function showPlayerInfo(player) {
    const name = player.getAttribute('data-name');
    const age = player.getAttribute('data-age');
    const height = player.getAttribute('data-height');
    
    alert(`Nume: ${name}\nVârstă: ${age}\nÎnălțime: ${height}`);
}
