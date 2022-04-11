const tabsTitleInputs = document.querySelectorAll(".tabs__triggers input");

const checkCurrentTab = () => {
    tabsTitleInputs.forEach((tabTitle) => {
        const title = tabTitle.labels[0].control.attributes[2].value;
        const equivalentContent = document.querySelector(`[data-tab="${title}"]`);
        equivalentContent.style.display = "none";
        tabTitle.nextElementSibling.classList.remove("active");
        if (tabTitle.checked) {
            equivalentContent.style.display = "block";
            tabTitle.nextElementSibling.classList.add("active");
        }
    });
};

if (tabsTitleInputs) {
    tabsTitleInputs.forEach((tabTitle) => {
        tabTitle.addEventListener("change", () => {
            checkCurrentTab();
        });
    });

    checkCurrentTab();
}
