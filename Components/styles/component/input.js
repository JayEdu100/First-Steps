export function Input({
    variant = "",
    state = "",
    label = "Email",
    placeholder = "Enter your",
    disabled = false,
}) {
    let classes = ["input"];
    // State
    if (state) {
        classes.push(`input--${state}`);}
    
    // Disabled

    const disabledAttr = disabled ? "disabled" : "";
    
    // Variant
    if (variant === "floating") {
        classes.push(`input--${variant}`);
        return`
        <div class="${classes.join(" ")}">
            <div class="input__wrapper">
                <input class="input__field" type="text" id="email" placeholder=" " ${disabledAttr}/>
                <label class="input__label" for="email">${label}</label>
            </div> <span class="input__message">Invalid ${label}</span>
        </div>
    `;
    } else { return`
        <div class="${classes.join(" ")}">
            <label class="input__label" for="email">${label}</label>
            <input class="input__field" type="text" id="email" placeholder="${placeholder} ${label}" ${disabledAttr}/>
            <span class="input__message">Invalid ${label}</span>
        </div>
    `;
    }
};

