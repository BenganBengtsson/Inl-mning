

let ageDropdown = document.getElementById("age");

 function saveData() {
     const titel = document.getElementById('program-input').value;     
     const beskrivning = document.getElementById('beskrivning-input').value;
     const ålder = document.getElementById('age').value;


     console.log(titel);

     let existingData = localStorage.getItem('savedData'); 
         existingData = existingData ? JSON.parse(existingData) : []; 
         
        let innehåll = {0:titel, 1:ålder, 2:beskrivning,};

         existingData.push(innehåll);
         localStorage.setItem('savedData', JSON.stringify(existingData));

        alert('Program sparad!');
        
        }
    
     function showData() {
        const savedData = localStorage.getItem("savedData");
         if (savedData) {
             if (savedData.length > 0) {
                    alert('Sparade program: ' + savedData);
             } else {
                    alert('Inget program hittad');
                }
             } else {
                alert('Inget program hittad');
             }
        }
        
        function clearStorage() {
            localStorage.removeItem('savedData');
            alert('Sparade program rensad!');
        }


let ikon = document.getElementById("ikon");

function sök() {
    const newData = JSON.parse(localStorage.getItem("savedData")); //får in data från localstorage 
    let sökvärde = document.getElementById("sökfält").value; 
    let outputdiv = document.getElementById("outputdiv");

    outputdiv.style.display = "block";

    outputdiv.innerHTML = "";

    for (let i = 0; i < newData.length; i++){
        if(newData[i][0] === sökvärde){
        for (let j = 0; j < 3; j++){
            outputdiv.innerHTML += newData[i][j] + ' ';
        }
        }
    }
}


ikon.addEventListener('click', sök);






