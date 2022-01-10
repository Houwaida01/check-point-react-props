import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile';

function App() {
const handelName= (fullName)=> {
  alert (`Hi i am ${fullName}`)
}

  return (
    <div className="App">
      <Profile fullName="DadouuBN" bio="je m'appelle houwaida ben nassib, j'ai 25ans.. 
            j'ai obtenu mon diplome de licence appliqué en génie 
            mécanique spécialité Mécatronique en 2019.. je posséde une 
            grande aisance relationnelle, un sens aigu de l'organisation
             et de la motivation.. je parle couramment le français 
             et j'ai un niveau intermédiaire d'anglais." handelName={handelName} > https://mobilunity.com/wp-content/uploads/2020/03/backend-node-js-developer-roles-and-responsibilities-1200-x-628.png</Profile>
    </div>
  );
}

export default App;
