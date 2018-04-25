export const CLICKED = 'CLICKED';

const x = new Array(8);
for (var i = 0; i < 8; i++) {
  x[i] = new Array(8);
}
    x[3][3] = true;
    x[4][4] = true;
    x[3][4] = false;
    x[4][3] = false;

const initialState = {
    count: 0,
    value: true,
    isClicked: false,
    arr : x,
  };

  export default (state = initialState, action) => {

    if(action.arg){
      var co = action.arg.split('-')
      state.arr[co[0]][co[1]] = state.value;


      for(var i = Number(co[0])+1 ; i < 8 ; i++ ){

        //if pink is below blue, both will be blue
        if(state.arr[i][co[1]] === false){
          if(state.arr[i][co[1]] === undefined){ break; }
          state.arr[i][co[1]] = true;
          console.log(i+" in  " + state.arr[i][co[1]])

          break;
  
        }


        //if blue is below pink both will be pink
        if(state.arr[i][co[1]] === true){
          state.arr[i][co[1]] = false;
          console.log(i+" in  " + state.arr[co[0]][co[1]])

          break
  
        }

      }


      var count=0;
      if(state.arr.forEach(c=>{
        c.forEach(r=>{
          if(r||c){count++}
        })
      }));
      if(count===64){
        console.log("game over");
        alert("Game Over");
      }
       

    }
    switch (action.type) {
      case CLICKED:
        return {
        ...state,
        isClicked: true,
        value: !state.value,
        count: state.count + 1,
        arr: state.arr
      };

      default:
      return state;
  }
};


export const clicked = (arg) => {
  return dispatch => {

    dispatch({
      type: CLICKED,
      arg: arg
    });
    
  };
};


