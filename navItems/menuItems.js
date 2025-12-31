fetch("navItems/menuItems.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const mainNav = document.getElementById("mainNav");
        const menuItems = Array.isArray(data.menuItems) ? data.menuItems : [];
        const ul = document.createElement("ul");
        ul.classList.add("navbar-nav", "mx-auto", "mb-2", "mb-lg-0");
        menuItems.forEach(item => {
            const li = document.createElement("li");
            li.classList.add("nav-item");
            if (item.subMenu) {
                li.classList.add("dropdown");
                const aDropdown = document.createElement("a");
                aDropdown.classList.add("nav-link", "dropdown-toggle");
                aDropdown.href = "#";
                aDropdown.dataset.bsToggle = "dropdown";
                aDropdown.role = "button";
                aDropdown.ariaExpanded = "false";
                aDropdown.textContent = item.name;
                li.appendChild(aDropdown);
                const ulDropdown = document.createElement("ul");
                ulDropdown.classList.add("dropdown-menu");
                item.subMenu.forEach(subItem => {
                    const liDropdown = document.createElement("li");
                    const aSub = document.createElement("a");
                    aSub.classList.add("dropdown-item");
                    aSub.href = subItem.link;
                    aSub.textContent = subItem.name;
                    liDropdown.appendChild(aSub);
                    ulDropdown.appendChild(liDropdown);
                    li.appendChild(ulDropdown);

                });
            } else {
                const a = document.createElement("a");
                a.classList.add("nav-link");
                a.href = item.link;
                a.textContent = item.name;
                li.appendChild(a);
            }
            ul.appendChild(li);
        });
        mainNav.prepend(ul);
        const loging = document.getElementById("loging");
        loging.classList.add("d-flex", "align-items-center", "gap-3");
        const login = data.login;
        login.forEach(l => {
            const a = document.createElement("a");
            if (l.id == 3) {
                a.classList.add("btn", "btn-primary", "px-4", "py-2");
            } else {
                a.classList.add("nav-link");
            }
            a.href = l.link;
            a.textContent = l.name;

            loging.appendChild(a);
        })


    }).catch(error => console.error('Error loading menu items:', error));