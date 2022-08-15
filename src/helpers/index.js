export const generatingId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)
    return random + date
}

export const formatDate = date => {
    const newestDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return newestDate.toLocaleString('es-ES', options)
}