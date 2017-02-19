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

export function addClassFilter(class_name) {
  return {
    type: 'ADD_CLASS_FILTER',
    class_name
  }
}

export function changeSort(sort) {
  return {
    type: 'CHANGE_SORT',
    sort
  }
}

export function toggleVisibilityFilter(filter) {
  return {
    type: 'TOGGLE_FILTER_VISIBILITY',
    filter: filter
  }
}
