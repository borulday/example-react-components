export default function classname() {
    var classnames = [];

    Array.from(arguments).forEach(function (arg) {
        if (!arg) {
            // nop;
        } else if (Array.isArray(arg)) {
            classnames = classnames.concat(arg);
        } else if (typeof arg === "string") {
            classnames.push(arg);
        } else if (typeof arg === "object") {
            classnames = classnames.concat(
                Object.keys(arg).filter(function (cls) {
                    return arg[cls] === true;
                })
            );
        }
    });

    return classnames.join(" ");
}