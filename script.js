// function toggleTheme() {
//     let style = document.getElementById('style');
    
//     if (style.getAttribute('href') == 'finalending.css') {
//         style.setAttribute('href', 'silentstrength.css');
//     }
//     else if (style.getAttribute('href') == 'silentstrength.css') {
//         style.setAttribute('href', 'wilderness.css');
//     }
//     else {
//         style.setAttribute('href', 'finalending.css');
//     }
// }

// const themes = [
//     'wilderness.css',
//     'silentstrength.css',
//     'finalending.css'
// ];

// function toggleTheme() {
//     const style = document.getElementById('style');
//     const currentTheme = style.getAttribute('href');

//     // Find index for nuværende tema
//     let index = themes.indexOf(currentTheme);

//     // Beregn næste index (loop rundt til start)
//     index = (index + 1) % themes.length;

//     // Skift til næste tema
//     style.setAttribute('href', themes[index]);
// }

function toggleTheme() {
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    const activeIndex = stylesheets.findIndex(sheet => !sheet.disabled);

    // Deaktiver nuværende
    stylesheets[activeIndex].disabled = true;

    // Beregn næste index
    const nextIndex = (activeIndex + 1) % stylesheets.length;

    // Aktivér næste
    stylesheets[nextIndex].disabled = false;
}