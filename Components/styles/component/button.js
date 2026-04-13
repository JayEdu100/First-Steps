export function Button({
    variant = "primary",
    size = "small",
    iconPosition = "none",
    disabled = false,
    label = "Button"
}) {
    let classes = ["button"];

    // Variant
    classes.push(`button--variant-${variant}`);

    // Size
    classes.push(`button--size-${size}`);

    // Icon Position
    if(iconPosition === "right") {
        classes.push("button--icon-right");
    } else if(iconPosition === "left") {
        classes.push("button--icon-left");
    } else if (iconPosition === "only") {
        classes.push("button--icon-only");
    };

    // Disabled
    
    const disabledAttr = disabled ? "disabled" : "";

    return`
        <button class="${classes.join(" ")}" ${disabledAttr}>
            <span class="label">${label}</span>
        </button>
    `;

}
