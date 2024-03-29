export const formatDate = (date) => {
    let dateObj = new Date(date);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format

    return `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${amPm}`;
}
