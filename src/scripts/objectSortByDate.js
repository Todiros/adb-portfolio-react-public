// a : first object containing 'Date' property in the format 'MM.YYYY'
// b : second object containing 'Date' property in the format 'MM.YYYY'
// prop : takes either 'year' or 'month', determines what to compare
// sign : the sign used in the comparison
// -- (0)  : = (the default value)
// -- (1)  : >
// -- (-1) : <
const objectSortByDate = (a, b, prop, sign = 0) => {
    if (!a.Date || !b.Date)
        return null

    prop = prop === 'year' ? 1 
        : prop === 'month' ? 0 
        : null
    
    // splits a string in format 'MM.YYYY' 
    // into 'month' and 'year' integer variables
    const aNum = a.Date.split('.')[prop]    
    const bNum = b.Date.split('.')[prop]
    
    switch (sign) {
        case 0:
            return aNum === bNum
        case 1:
            return aNum > bNum
        case -1:
            return aNum < bNum
        default:
            return aNum === bNum;
    }
}

export default objectSortByDate