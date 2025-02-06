const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const everybodyURL = baseURL + endpointSquad;

getData(everybodyURL).then(dataIedereen => {
    // console.log(dataIedereen)

    let everybodySection = document.querySelector("section:nth-of-type(2)");
    let Persons = dataIedereen.data;

    Persons.forEach(person => {
       
       let personName = person.name;
       let personImage = person.avatar;
       let personWebsite = person.website;

       let getalTussen0en2 = Math.random();
       

       if(personImage){

       } else {
        personImage = "images/placeholder2.svg";
       }

        let personHTML =  `    <article>
        <h3>${personName}</h3>
        <img src="${personImage}" alt="${personName}">
        <a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
      </article>`;

      everybodySection.insertAdjacentHTML('beforeend',personHTML);
    })
    
})















/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }