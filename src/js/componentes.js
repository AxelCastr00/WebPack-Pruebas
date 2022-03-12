import '../css/componetes.css';
import logo from '../asset/img/1223.png'


export const saludar = (name) => {
  console.log('Añadimos un h1');
  const h1 = document.createElement('h1');
  h1.innerText = `Hola ${name}`;
  document.body.append(h1)
}


const img = document.createElement( 'img' ); 
img.src = logo;
document.body.append( img );