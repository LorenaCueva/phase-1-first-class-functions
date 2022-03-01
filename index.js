function receivesAFunction(fun){
    fun();
}

function returnsANamedFunction(){
    return (function fun(){
        console.log('Named function');
    })
}


function returnsAnAnonymousFunction(){
    return (function () {
         console.log('Anonymous');
    })
}