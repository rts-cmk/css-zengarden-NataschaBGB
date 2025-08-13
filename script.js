function toggleTheme() {
    let style = document.getElementById('style');
    
    if (style.getAttribute('href') == 'finalending.css') {
        style.setAttribute('href', 'silentstrength.css');
    }
    else if (style.getAttribute('href') == 'silentstrength.css') {
        style.setAttribute('href', 'wilderness.css');
    }
    else {
        style.setAttribute('href', 'finalending.css');
    }
}