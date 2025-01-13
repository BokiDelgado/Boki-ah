const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<header class="header">
   <img src="./../photo/logo.png" alt="logo" class="logo">
         <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>
        <nav class="nav" id="nav">
            <button class="cerrar-menu" id="cerrar"><i class="bi bi-x"></i></button>
            <ul class="nav-links">
                <li><a href="./index.html">Boki-ah</a></li>
                <li><a href="./history.html">Historia</a></li>
                <li><a href="./favoritePlaces.html">Lugares favoritos</a></li>
                <li><a href="./gift.html">Donar</a></li>
            </ul>
        </nav>
    </header>`

 footer.innerHTML = ` 
 <footer class="footer">
<section class="footer-links">
<ul class="footer-nav">
    <li><a href="index.html">Boki-ah</a></li>
    <li><a href="history.html">Historia</a></li>
    <li><a href="favoritePlaces.html">Lugares favoritos</a></li>
    <li><a href="gift.html">Donar</a></li>
</ul>
</section>
<section class="footer-social">
<ul class="social-links">
    <li class="social-item">
        <a href="https://www.instagram.com/w_uriz?igsh=NXFxOGVpejg1MTRk" target="_blank"><img class="social-icon" src="./../photo/instagram.png" alt="instagram"></a>
    </li>
    <li class="social-item">
        <a href="https://www.facebook.com/share/1DdXZEKShL/" target="_blank"><img class="social-icon" src="./../photo/facebook.png" alt="facebook"></a>
    </li>
    <li class="social-item">
        <a href="https://github.com/BokiDelgado" target="_blank"><img class="social-icon" src="./../photo/github.png" alt="github"></a>
    </li>
</ul>
</section>
<section class="footer-info">
<p>Para Boki @2025 Zurisarai Delgado Rodriguez</p>
</section>
</footer>`