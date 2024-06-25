

const obtenerDigimones = async () => {

    try{
        const response = await  fetch("https://digimon-api.vercel.app/api/digimon")

        const data = await response.json();
        return data;
    
    }
    catch(error){
        console.log(`el error es ${error}`);

    }

}

obtenerDigimones()
    .then(( digimones )=>{
        digimones.map (( digimon )=>{
            console.log(digimon);
        });
    })

const crearTarjetas = (digimones) => {
    
    let digimonRow = document.getElementById("digimonRow");

    digimones.map( ( digimon ) => {
        
        const{ name, level, img} = digimon ;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-12");
        divRow.classList.add("col-xs-12");
        divRow.classList.add("mt-2");
        divRow.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card")  


    })

}


obtenerDigimones()
    .then((digimones) => {
        crearTarjetas(digimones);
    })
    .catch((error) => {
        console.log(error);
    })