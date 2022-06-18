export const navbarSection = (token, user) => {
    return (
        ` <div id="navbar">
            <div id="navbar-menu">
                <div id="navbar-logo">
                    <a href="index.html"><img src="./assets/adidasLogo.png" alt="adidasLogo"></a>
                </div>
                <div id="navbar-section">
                    <div><a href="products.html">ALL PRODUCTS</a></div>
                    <div><a href="products.html">MEN</a></div>
                    <div><a href="products.html">WOMEN</a></div>
                    <div><a href="products.html">KIDS</a></div>
                </div>
                <div id="navbar-user">
                    <img src="./assets/cart.svg" alt="">
                    <img src="./assets/favourite.svg" alt="">
                    <img style="display:${!token ? 'block' : 'none'}" src="./assets/user.svg" alt="">
                    <div style="display:${token ? 'block' : 'none'}" class="dropdown">
                        <p class="dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            ${user}
                        </p>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button class="dropdown-item" type="button">Favourite</button></li>
                            <li><button class="dropdown-item" type="button">Cart</button></li>
                            <li><button class="dropdown-item" type="button">Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
    );
};