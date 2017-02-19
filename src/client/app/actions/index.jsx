export const SORT_BY = {
  NAME: 'name'
};

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc'
}

export function addNameFilter(filter) {
  return {
    type: 'ADD_NAME_FILTER',
    filter
  }
}

export function addSchoolFilter(school) {
  return {
    type: 'ADD_SCHOOL_FILTER',
    school
  }
}

export function changeSort(sort) {
  return {
    type: 'CHANGE_SORT',
    sort
  }
}

export function toggleNameFilter() {
  return {
    type: 'TOGGLE_NAME_FILTER'
  }
}

export function toggleSchoolFilter() {
  return {
    type: 'TOOGLE_SCHOOL_FILTER'
  }
}
