export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPage = (limit, skip) => {
    return Math.ceil(skip / 10 + 1)
}