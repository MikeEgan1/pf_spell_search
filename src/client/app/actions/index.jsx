const FILTER_BY_SPELL_NAME = 'FILTER_BY_SPELL_NAME';

export const SORT_BY = {
    NAME : 'name'
};

export const SORT_ORDER = {
    ASC : 'asc',
    DESC : 'desc'
}

export function filterBySpellName(text) {
    return { type : FILTER_BY_SPELL_NAME, text }

}