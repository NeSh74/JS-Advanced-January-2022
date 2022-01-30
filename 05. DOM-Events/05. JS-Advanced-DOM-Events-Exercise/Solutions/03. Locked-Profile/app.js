function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle))

    function onToggle(e) {
        //const infoDif = e.target.parentElement.querySelectorAll('div');
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        if (isActive) {

            const infoDif = profile.querySelector('div');

            if (e.target.textContent == 'Show more') {
                infoDif.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDif.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}

// function lockedProfile() {
    // Array.from(document.qerySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle))    // function onToggle(ev) {
        // let profile = ev.trget.parentElement;
        // let isActive = profile.querySelector(input[value="unlock"]').checked;
        // if (isActive) 
            // let info =Array.from(profile.querySelectorAll('div'))
                // .find(p => p.id.includes('HiddenFields'))            // if (ev.target.textContent === 'Show more') {
                // ev.target.textContent = 'Hide it'
                // info.style.display = 'block'
            // } else 
                // ev.arget.textContent = 'Show more';
                // info.style.display = 'none'
            // 
        // 
    // 
// 
