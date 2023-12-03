window.onload = () => {
    /*Transition JS*/
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let i=0; i<anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.currentTarget.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 500);

        });
    }
    /*Shepherd's page translate*/
    let shep = document.getElementById('title');
    shep.style.transition = "3s";
    shep.style.transform = "translateX(0)";
    /*Dark mode storage*/
    if (localStorage.getItem('dark-mode') == true) {
        document.body.classList.toggle('dark-mode');
    }
}


let dmToggle = document.querySelector('.switch');
let body = document.getElementById('body');
dmToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    if (dmToggle.checked) {
        localStorage.setItem("dark-mode", true);
    } else {
        localStorage.setItem("dark-mode", false);
    }
})
