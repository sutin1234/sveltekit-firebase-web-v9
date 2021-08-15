
export const dateLocaleOpt: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
export const toDateLocaleTh = (dateStr: string): string => new Date(dateStr).toLocaleDateString('th', dateLocaleOpt)
export const toFirestoreDateLocaleTh = (dateStr: { seconds: number, nanoseconds: number }): string => {
    return new Date(dateStr?.seconds * 1000).toLocaleDateString('th', dateLocaleOpt)
}
export const timeStamp = new Date().getTime()