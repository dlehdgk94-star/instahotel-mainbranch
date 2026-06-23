(function () {
    var path = window.location.pathname.replace(/\\/g, '/');
    var isSubfolder = path.indexOf('/rooms/') !== -1;
    var base = isSubfolder ? '../' : '';

    function isActive(page) {
        if (page === 'index.html') return /index\.html$|\/insta-hotel-html\/?$|\/[^/]*$/.test(path) && !isSubfolder && !/rooms\.html|gallery\.html|nearby\.html|booking/.test(path);
        if (page === 'rooms.html') return /rooms\.html$/.test(path) || isSubfolder;
        if (page === 'gallery.html') return /gallery\.html$/.test(path);
        if (page === 'nearby.html') return /nearby\.html$/.test(path);
        return false;
    }

    function link(page, label) {
        var cls = isActive(page) ? ' class="mob-active"' : '';
        return '<li><a href="' + base + page + '"' + cls + '>' + label + '</a></li>';
    }

    var overlay = document.createElement('div');
    overlay.id = 'mobileNavOverlay';
    overlay.innerHTML =
        '<div id="mobileNavDrawer">' +
            '<button id="mobileNavClose"><i class="fa-solid fa-xmark"></i></button>' +
            '<div class="mob-nav-logo">' +
                '<a href="' + base + 'index.html"><img src="' + base + 'logo.svg" alt="INSTA HOTEL"></a>' +
            '</div>' +
            '<ul class="mob-nav-links">' +
                link('index.html', '개요') +
                link('rooms.html', '객실') +
                link('gallery.html', '갤러리') +
                link('nearby.html', '주변안내') +
                '<li><a href="#">멤버쉽</a></li>' +
            '</ul>' +
            '<div class="mob-nav-footer">' +
                '<a href="https://www.instagram.com/instar_hotel_/" target="_blank"><i class="fa-brands fa-instagram"></i></a>' +
                '<div class="mob-nav-contact">+82 31-203-4301</div>' +
            '</div>' +
        '</div>';

    function openNav() {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeNav() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.body.appendChild(overlay);

        var hamburger = document.querySelector('.hamburger-menu');
        if (hamburger) hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            openNav();
        });

        document.getElementById('mobileNavClose').addEventListener('click', closeNav);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeNav();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeNav();
        });
    });
})();
