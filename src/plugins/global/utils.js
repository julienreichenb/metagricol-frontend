const Utils = {
    groupBy(list, key) {
        return list.reduce((rv, x) => {
            (rv[x[key]] = rv[x[key]] || []).push(x)
            return rv
        }, {})
    },
    scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    },
}

export { Utils }