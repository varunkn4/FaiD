import registry from 'app-registry';
import { store } from '../../store';

function register(action) {
    const requestOptions = {
        crossDomain: true,
        method: 'POST',
        body:action.registerData
      };
      const request = registry.get('request');
      request.postMethod('http://192.168.80.65:8089/faid_registration',requestOptions)
      .then(function(response){
        if(response === null){
          store.dispatch({ type: "REGISTRATION:NEW_USER:ERROR", data: "Registration Failed" });
        }
        else{
            debugger;
          store.dispatch({ type: "REGISTRATION:NEW_USER:SUCCESS",data: "Registration Success"});
      }}); 
}

export default register;




