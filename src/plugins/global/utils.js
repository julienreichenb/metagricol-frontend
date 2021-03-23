const Utils = {
    groupBy(list, key) {
        return list.reduce((rv, x) => {
            (rv[x[key]] = rv[x[key]] || []).push(x)
            return rv
        }, {})
    },
    scrollToTop() {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        });
    },
}

export { Utils }