import { actions } from './actions'
const initialState = (() => {

    return {
        commitee: {
            Name: "", start_date: "", end_date: "", saving_amount: ""
        },
        committee_arr: [],
        obj: {
            month:
            {
                member:
                {

                    day: []

                }

            }
        }
    }
})()
function committeeReducer(state = initialState, action) {
    switch (action.type) {
        case actions.addCommittee.type:
            state.committee_arr.push(action.payload);
            return state;

        case actions.delCommittee.type:
            let newArr=state.committee_arr;
            let index=action.payload.index;
            newArr.splice(index,1);
            return Object.assign({}, state,{committee_arr:newArr})
           //return state;
        case actions.upCommittee.type:
            let newArray = state.committee_arr;
            let elementsIndex=action.payload.index

            newArray[elementsIndex] = action.payload.arr
             return Object.assign({}, state, {committee_arr:newArray})
            

        case actions.addMember.type:
            return Object.assign(
                {},
                state,
                {

                }
            );
        case actions.removeMember.type:
            return Object.assign(
                {},
                state,
                {

                }
            );
        case actions.markAtt.type:
            return Object.assign(
                {},
                state,
                {

                }
            );
        default:
            return state;
    }

}

export default committeeReducer;