import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import history from '../utils/history';
import MainXg from '../src/component/xgzhuanshu/MainXg.jsx';
import Draw from '../src/component/xgzhuanshu/Draw.jsx';

ReactDOM.render(
  <BrowserRouter history={history}>
  <MainXg />
  <Route path="/" exact component={MainXg}></Route>
  <Route path="/random" component={Draw}></Route>
  </BrowserRouter>
  , document.getElementById('root'));

// import React from 'react';
// import dva, { connect } from 'dva';

// const app = dva();

// app.model({
//   namespace:"count",
//   state:0,
//   reducers:{
//     add (count){
//       return count+1;
//     },
//     minus (count){
//       return count-1;
//     }
//   }
// })

// const App = connect(({count})=>({count}))(function(props){
//   return(
//     <div>
//       <h2>{ props.count }</h2>
//       <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
//       <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
//     </div>
// )
// })

// app.router(() => <App />);

// app.start('#root');

