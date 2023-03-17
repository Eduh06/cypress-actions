const cypress = require('cypress')      //importa o Cypress
const tesults = require('cypress-tesults-reporter');  //importa o Tesults

const TOKEN ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjNhMWE5NzIyLTcwYTMtNGMwMi1iNWViLTI0MmNhNTljNDk3MS0xNjc4ODM4MzQzNTQxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZTAxNTc2ZTctOGE3MS00OWVhLTkyZDMtYTk3ZDQ4ZGMxZWMyIiwidHlwZSI6InQifQ.B913iTedKZy9UwYn14pVgd2MqzS3m6b_V3tIeK8mWY8'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,    //Token gerado ao criar projeto
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})  
