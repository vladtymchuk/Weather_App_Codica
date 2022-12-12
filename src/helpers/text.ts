export const capitalize = (text: string): string => {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}
export const temperatureToCelsium = (temp: number): string => {
    return `${Math.floor(temp - 273.15)}°C`;
}
export const getCustomHours = (dt: number) => {
    return `${new Date(dt * 1000).getHours()}:${new Date(dt * 1000).getMinutes() == 0 ? '00' : new Date(dt * 1000).getMinutes()}`
}