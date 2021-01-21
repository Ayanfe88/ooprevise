import {animalData} from './data/data.js';
import {animal} from '/class/Animal.js'

/**
 * 1.Get the data (promise)
 */
const aPromise = new Promise((resolve,reject) => {
setTimeout(() => {
	const promiseData = animalData
	if (promiseData) {
		resolve(promiseData);
	}else{
		alert('Something failed')
		reject(null);
	}
},100 );
aPromise.then((promiseData) =>{
	const setDataIntoClasses = (fetchedData) => {
				const animals = fetchedData.map(
					(animal) =>
						new Animal(
							animal.id,
							animal.name,
							animal.animal_name,
							animal.scientific_name,
							animal.type,
							animal.description
						)
				);
			};
		}
	
)	
})
/**
 *
 * 3.Set data into classes
 */

/**
 *
 * 4.Display data
 */

const HTMLElementGenerator = (item, type) => {
	// const wrapper = document.createElement('div');
	// const heading = document.createElement('h2');
	// const headingText = document.createTextNode(item.name);
	// heading.appendChild(headingText);
	// const description = document.createElement('p');
	// const descriptionText = document.createTextNode(item.fullDescription());
	// description.appendChild(descriptionText);
	// const image = document.createElement('img');
	// const button = document.createElement('button');
	// const buttonText = document.createTextNode('Click to see image');
	// button.appendChild(buttonText);
	// const infoButton = document.createElement('button');
	// const infoButtonText = document.createTextNode('Click for some info on me');
	// infoButton.appendChild(infoButtonText);
	// wrapper.appendChild(heading);
	// wrapper.appendChild(description);
	// wrapper.appendChild(button);
	// wrapper.appendChild(image);
	// wrapper.appendChild(infoButton);
	// wrapper.classList.add('item');
	// const container = document.getElementById(type);
	// container.appendChild(wrapper);
};

/**
 * 5. Create a small summary of data
 */
