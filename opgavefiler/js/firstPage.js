/* Opgave 1*/


// din kode her
let person = "Jude";
let aarArbejdet = 7;
const besked = `Hej ${person} du har nu arbejdet i vores virksomhed i ${aarArbejdet} år`;
const message = document.getElementById('message');
message.innerHTML = besked;


/* Opgave 2*/


// din kode her
const myData = [
    {
        name: 'T-shirt',
        beskrivelse: 'En t-shirt lavet af bomuld',
        pris: 99
    },
    {
        name: 'Jeans',
        beskrivelse: 'Blå denim jeans med straight fit',
        pris: 299
    },
    {
        name: 'Hættetrøje',
        beskrivelse: 'En grå hættetrøje med lynlås',
        pris: 199
    }
];
myData.map((product) => {
    console.log(product.name);
    console.log(product.beskrivelse);
    console.log(product.pris);
    const ListedeProdukter = document.getElementById('produktListe');
    ListedeProdukter.innerHTML += `
    <article class="produkt">
        <h2>${product.name}</h2>
        <p>${product.beskrivelse}</p>
        <p>Pris: ${product.pris} kr.</p>
    </article>`;
})



/* Opgave 3 - skriv videre på koden her: */


// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

/* Simple version
    submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const [navn, alder] = myForm.querySelectorAll('input');
    myPersons.push({ navn: navn.value, alder: parseInt(alder.value) });

    // Sort the list by age
    myPersons.sort((a, b) => a.alder - b.alder);

    // Display the sorted list
    showList();
});

function showList() {
    const html = myPersons.map((person) => `
    <li>${person.navn} er ${person.alder} år gammel.</li>`).join('');
    personList.innerHTML = html;
} */

// event hander on button
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const myFormFelter = myForm.querySelectorAll('input'); // Når knappen trykkes, gemmes al input data i denne variabel

    
    myPersons.push({ // indsætter understående data det tomme array
    navn: myFormFelter[0].value, //insætter værdien af første input felt med property 'name'
    alder: parseInt(myFormFelter[1].value) //insætter værdien af andet input felt med property 'alder' |
});
    
    // Sorter listen efter alder og vis den på siden
const sorteretMyPersons = sorterEfterAlder(myPersons);
    showList(sorteretMyPersons);
});

// view code
function showList(sorteretMyPersons) {
    let html = '';
    sorteretMyPersons.map((person) => {
// html template.
    html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
    });
    personList.innerHTML = html;
}

// Funktion til at sortere listen efter alder
function sorterEfterAlder(age) {
    return age.sort((a, b) => a.alder - b.alder); // parseInt konvertere alder til et heltal 
}