export const SORT_BY = {
    NAME : 'name'
};

export const SORT_ORDER = {
    ASC : 'asc',
    DESC : 'desc'
}

export function addNameFilter(filter) {
    return {
        type: 'ADD_NAME_FILTER',
        filter
    }
}

export function changeSort(sort) {
    return {
        type: 'CHANGE_SORT',
        sort
    }
}