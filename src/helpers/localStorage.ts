export const addToLocalStorage = (name: string) => {
    if (localStorage.getItem('cities') === null){
        localStorage.setItem('cities', JSON.stringify([name]))
    } else {
        let temp = JSON.parse(localStorage.cities)
        if (!temp.includes(name)) {
            temp.push(name)
            localStorage.setItem('cities', JSON.stringify(temp))
        }
    }
}

export const removeLocalStorage = (name: string) => {
    let temp = JSON.parse(localStorage.cities).filter((cityName: string) => cityName !== name)
    localStorage.setItem('cities', JSON.stringify(temp))
}