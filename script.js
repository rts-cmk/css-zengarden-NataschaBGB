function toggleTheme() {
    let style = document.getElementById('style');
    
    if (style.getAttribute('href') == 'finalending.css') {
        style.setAttribute('href', 'silentstrength.css');
    } else {
        style.setAttribute('href', 'finalending.css');
    }
}