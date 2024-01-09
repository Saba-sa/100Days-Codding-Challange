document.addEventListener('DOMContentLoaded', () => {
    // Selecting DOM elements
    let elems = document.querySelectorAll('img');
    let btn = document.querySelector('.btn');
    let current = 0;
    let zIndex = 2;

    // Function to reset image position and rotation
    function reset(elem) {
        clearTimeout(timeoutId); // Clear any existing timeout
        timeoutId = setTimeout(() => {
            elem.style.transform = `rotate(-80deg)`;
            elem.style.transformOrigin = `100% 0%`;
            elem.style.top = `100%`;
        }, 1000);
    }

    // Event listener for clockwise rotation button
    btn.addEventListener('click', () => {
        current++;
        if (current < 0) {
            current = 2;
            displayImg();
            reset(elems[0]);
        } else if (current === 3) {
            current = 0;
            displayImg();
            reset(elems[2]);
        } else {
            displayImg();
            reset(elems[current - 1]);
        }
    });

    // Function to display the current image with appropriate styles
    function displayImg() {
        console.log(current);
        elems[current].style.transform = `rotate(0deg)`;
        elems[current].style.transformOrigin = `50% 50%`;
        elems[current].style.top = `0`;
        elems[current].style.zIndex = zIndex++;
    }
});
