import JsonP from 'jsonp';
export default class Axios{
    static jsonp(optioins){
        return new Promise((resolve,reject)=>{
            JsonP(optioins.url,{
                param:'callback'
            },function (err,response) {
                //to-do
               // debugger;
                if (response.status=="success") {
                    resolve(response);
                }
                else{
                    reject(response.message);
                }
            })
        })
    }
}