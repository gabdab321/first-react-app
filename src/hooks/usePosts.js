import {useMemo} from "react";

export const usePosts = (posts, sort, query) => {
    return useMemo(() => {
        if(sort) {
            return [...posts]
                .sort((a, b) => a[sort].localeCompare(b[sort]))
                .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
        }
        return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sort, posts])
}