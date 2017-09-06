(()=>{
    var stylesheet = document.createElement("style");
    stylesheet.innerHTML =
`
html {
    perspective: 1500px !important;
    height: 100vh !important;
    overflow-y: hidden !important;
    background: #000 !important;
}

body {
    height: 100vh !important;
    overflow-y: auto !important;
    transform: translateX(-149px) rotateY(-13deg) rotateX(0deg) scaleX(0.99) skewY(-1.4deg) scale(0.88);
}
`;
    document.head.appendChild(stylesheet);
})();