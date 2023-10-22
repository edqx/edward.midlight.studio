export function load({ url }) {
    const colors = [ "#feeae9", "#fffdde", "#d2e6fa", "#e0f0e3", "#ffe3e3" ];

    return {
        url: url.pathname,
        bgColor: colors[Math.floor(Math.random() * colors.length)]
    };
}