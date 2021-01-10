// .js_mega-menu => .site-header-classic__content
// .js_mega-toggle => .js_site-header__menu

const megaMenu = document.getElementsByClassName("js_mega-menu")[0];
const megaToggle = document.getElementsByClassName("js_mega-toggle")[0];

try {
    document
        .getElementsByClassName("site-header-classic__content")[0]
        .appendChild(megaMenu);
} catch (e) {
    console.error(e);
}
try {
    document
        .getElementsByClassName("js_site-header__menu")[0]
        .appendChild(megaToggle);
} catch (e) {
    console.error(e);
}

try {
    document.getElementsByClassName("site-header-classic__top")[0].remove();
} catch (e) {
    console.error(e);
}

console.log(document.getElementsByClassName("panorama"));
document.getElementsByClassName("panorama")[0].remove();
