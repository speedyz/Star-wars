export const changeCSSVariables = theme => {
    const root = document.querySelector(':root');

    const cssVariables = ['header', 'bgImage'];

    cssVariables.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`
        );
    })
}
