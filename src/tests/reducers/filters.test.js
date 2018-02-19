import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filer', () => {
    const text = '';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER',
    text
});
    expect(state.text).toBe(text);
});


test('should set startDate filer', () => {
    const startDate = moment(0).valueOf;
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toBe(moment(0).valueOf);
});


test('should set endDate filer', () => {
    const endDate = moment(0).valueOf;
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toBe(moment(0).valueOf);
});