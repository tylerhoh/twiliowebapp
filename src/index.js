import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import {useImmer} from 'use-immer';
import Login from './components/Login'
import axios from './utils/Axios';
const App = () =>{
  const [user,setUser] = useImmer({
    username:"",
    mobileNumber:"",
    verificationCode:'',
    verificationSent:false
  })
  const sendSmsCode=async()=>{
    console.log('sending sms');
    await axios.post('/login',{
      to:user.mobileNumber,
      username: user.username,
      channel: 'sms',
    });
    setUser((draft) =>{
      draft.verificationSent=true;
    });
  }
  return(
    <div>
    <Login user={user} setUser={setUser} sendSmsCode={sendSmsCode}></Login>
    </div>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
