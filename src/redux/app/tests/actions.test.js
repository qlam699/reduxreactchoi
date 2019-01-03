import actions from '../actions'

describe('app actions', () => {
    it('test actions action', () => {
        expect(actions.testAction(1)).toEqual({type: 'TEST_ACTION', payload: 1})
    });

    it('test show loading', () => {
        expect(actions.showLoading()).toEqual({type: 'SHOW_LOADING'})

    })

    it('test hide loading', () => {
        expect(actions.hideLoading()).toEqual({type: 'HIDE_LOADING'})

    })
});