const initState = {
    contactList: [],
    keyword :'',
    first:'',
};
function reducer(state=initState,action) {
   
    const {type,payload} = action;
    switch(type) {
        case "ADD_CONTACT" : 
            
            state.contactList.push({name : payload.name, phoneNum : payload.phoneNum,});
            state.first ='1';
            break;
        case "SEARCH" :
            
            state.keyword = payload.keyword;
            state.first= '2';
            break;
        default :
            return {...state};            
      
    }
    
   
    return {...state};
}
    
export default reducer;

