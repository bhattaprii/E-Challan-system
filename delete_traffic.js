async function main(){
    document.querySelector("#del-traffic-form").addEventListener("submit",async function(event){
    event.preventDefault();

    const ID = event.target.querySelector("#trafficID").value;
    console.log(ID);
    
    await fetch("http://localhost:3000/traffics/"+ID,{
        "method":"delete"
    })


    });
}
main();