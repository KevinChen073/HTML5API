/**
 * Created by air on 15/3/9.
 */
worker.addEventListener("msg",messageHandler,true);

function messageHandler(e){
    PostMessage("woroker say: "+ e.data+"too.");

}