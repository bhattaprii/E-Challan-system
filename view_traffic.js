async function main(){
    const response = await fetch("http://localhost:3000/traffics/")
    
    const traffic = await response.json();
    console.log(traffic);

    document.querySelector("#traffic-body").innerHTML = traffic.map(i => `
    <tr class="active-row">
        <td>${i.id}</td>
        <td>${i.Name}</td>
        <td>${i.Username}</td>
        <td>${i.Address}</td>
        <td>${i["Phone Number"]}</td>
    </tr>`).join("");
}
main();