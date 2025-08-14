// // ------------ FUNCTION 1 ------------
    
//     // This function toggles between three themes by checking the current href attribute of the link element with id 'style'.
//     // It only uses one link element with id 'style' to change the stylesheet.
    
//     function toggleTheme() {
//         // Get the link element with id 'style'
//         let style = document.getElementById('style');
        
//         // Check the current href attribute of the link element
//         // If the href is 'finalending.css', a click on the button will change it to 'silentstrength.css'.
//         if (style.getAttribute('href') == 'finalending.css') {
//             style.setAttribute('href', 'silentstrength.css');
//         }
//         // If the href is 'wilderness.css', a click on the button will change it to 'finalending.css'.
//         else if (style.getAttribute('href') == 'wilderness.css') {
//             style.setAttribute('href', 'finalending.css');
//         }
//         // If the href is 'silentstrength.css', a click on the button will change it to 'wilderness.css'.
//         else if (style.getAttribute('href') == 'silentstrength.css') {
//             style.setAttribute('href', 'wilderness.css');
//         }
//         // If the href is not one of the expected values, it defaults to 'finalending.css'.
//         else {
//             style.setAttribute('href', 'finalending.css');
//         }
//     }

// // ------------ FUNCTION 2 ------------

//     // This function toggles between three themes by cycling through an array of theme names.
//     // It only uses one link element with id 'style' to change the stylesheet.
//     // create an array of theme names
//     // The themes are the names of the CSS files that will be used for styling.
//     const themes = [
//         'wilderness.css',
//         'silentstrength.css',
//         'finalending.css'
//     ];

//     function toggleTheme() {
//         // Get the link element with id 'style'
//         const style = document.getElementById('style');
//         // Get the current href attribute of the link element
//         const currentTheme = style.getAttribute('href');

//         // The indexOf method returns the position of the current theme in the themes array.
//         let index = themes.indexOf(currentTheme);

//         // The (index + 1) expression calculates the next index (theme) in the array.
//         // The % operator ensures that if we reach the end of the array, we loop back to the start.
//         index = (index + 1) % themes.length;

//         // Set the href attribute of the link element to the next theme in the array
//         style.setAttribute('href', themes[index]);
//     }

// ------------ FUNCTION 3 ------------
    
    // This function toggles between multiple stylesheets ind index file, by disabling the current one and enabling the next one in the list.
    
    function toggleTheme() {
        // gets all links tags that are stylesheets and converts them to an array
        const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
        // returns first index of stylesheet that is not disabled
        const activeIndex = stylesheets.findIndex(sheet => !sheet.disabled);

        // sets the currently active stylesheet to disabled
        stylesheets[activeIndex].disabled = true;

        // activeIndex + 1 gives the next stylesheet in the array.
        // % stylesheets.length ensures that if we reach the end, we start over (loop).
        const nextIndex = (activeIndex + 1) % stylesheets.length;

        // remove disabled attribute from the next stylesheet and apply it
        stylesheets[nextIndex].disabled = false;
    }