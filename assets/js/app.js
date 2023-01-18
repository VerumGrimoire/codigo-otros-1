const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
//faltaban los . de las demas clases

async function displayUser(username) {
//faltaba el async Debe de ser una función asincrona.
  $n.textContent = 'cargando...';
  try{
  const response = await fetch(`${usersEndpoint}/${username}`);
  if(!response.ok){
    throw new Error(response.statusText);
  }

  const data = await response.json(); //Se creó una constante para 
  // console.log(data);
  $n.textContent = `${data.name}`; //Se utilizan backticks
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`
}catch (err){
  handleError(err);
} //se añadió el cath para el error
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}
  //Se agregó $


displayUser('stolinski');
// se retiró el catch error







