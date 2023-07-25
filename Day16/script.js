function readbook(callback){
    console.log("book read");
    setTimeout(() =>{
        console.log("Reading Finished");
        callback();
    }, 2000);
}
function afterfunction(){
    console.log("write test");
}
readbook(afterfunction);