const API_KEY = "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";

const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')
const custButtonElement = document.getElementById('b01')
const fileInputElement = document.getElementById('fileInput')
const backbuttonElement = document.getElementById('bb01')

function changeInput(value)
{
    var inputElement = document.querySelector('input')
    inputElement.value = value
    
}

async function getMessage(){
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization':`Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role:"user", content:inputElement.value}],
            
            max_tokens:  100
        })
    }

    try{

        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
        if(data.choices[0].message.content)
        {
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            pElement.addEventListener('click',()=> changeInput(pElement.textContent))
            historyElement.append(pElement)

        }
    }catch (error){
        console.error(error)
    }
}

function cleanInput(){
    inputElement.value = ''
    historyElement.getMessage
}

submitButton.addEventListener('click',getMessage)

buttonElement.addEventListener('click',cleanInput)



// custButtonElement.addEventListener('click',() =>{
//     fileInputElement.click();
//     navigateToPage2();   //shift to page 2
// });

// backbuttonElement.addEventListener('click',() => {
//     navigateToPage();  //shift to page 1
// });

// New function to save uploaded file
// function saveFile(file) {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       const a = document.createElement('a');
//       a.href = reader.result;
//       a.download = file.name;
//       a.click();
//     };
//   }
//   // Listen for changes on the file input
//   fileInputElement.addEventListener('change', () => {
//     const file = fileInputElement.files[0];
//     saveFile(file);
//   });
  
//   //function to change the html page
//   function navigateToPage2(){
//     window.location.href="page2.html";
    
//   }

//   function navigateToPage(){  // function to change back to index page
//     window.location.href="index.html";
//   }  