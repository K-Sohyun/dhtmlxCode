document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URL(location.href).searchParams;
    const pageName = urlParams.get('page');
    // console.log(pageName);

    const menuEls = document.querySelectorAll('#sidebarArea button');
    // console.log(menuEls);

    // menuEls.forEach(function(menuEl) {
    //     menuEl.classList.add('on');
    // });
});