const formControls = document.querySelectorAll(".form-control");

if (formControls) {
    formControls.forEach((control) => {
        const input = control.querySelector("input");
        const label = control.querySelector("label");
        input.addEventListener("focus", () => {
            label.classList.add("label-top");
        });
        input.addEventListener("blur", () => {
            if (!input.value) {
                label.classList.remove("label-top");
            }
        });
    });
}
