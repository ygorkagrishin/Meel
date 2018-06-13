const menu = (()=> {
    
    let 
        openButton = document.querySelector('.menu'),
        navigator = document.querySelector('.nav'),
        navigatorLinks = navigator.getElementsByTagName('a'),
        closeButton = document.querySelector('.menu--close');

    let toSwitchButton = () => {
        if (!openButton.classList.contains('collapsed')) {
            openButton.classList.add('collapsed');
        }
        else {
            openButton.classList.remove('collapsed');
        }

        if (!closeButton.classList.contains('collapsed')) {
            closeButton.classList.add('collapsed');
        }
        else {
            closeButton.classList.remove('collapsed');
        }
    }

    let toOpenMenu = () => {
        toSwitchButton();
        
        if (!navigator.classList.contains('active')) {
            navigator.classList.add('active');
        }
    }

    openButton.addEventListener('click', toOpenMenu);

    let toCloseMenu = () => {
        toSwitchButton();

        if (navigator.classList.contains('active')) {
            navigator.classList.remove('active');
        }
    } 

    closeButton.addEventListener('click', toCloseMenu);

    for (let i=0, len=navigatorLinks.length-1; i<=len; i++) {
        let currentLink = navigatorLinks[i];

        currentLink.addEventListener('click', toCloseMenu);
    }

})();