import './listeCategorie.scss';

import Categorie from './Categorie.jsx';
import categories from './data/categories.json';
 
  const ListeCategories = () => {
    return (
      <ul className='listeCategorie'>
        {categories.map((categorie) => (
          <Categorie
            key={categorie.id}
            id={categorie.id}
            nom={categorie.nom}
            couleur={categorie.couleur}
          />
        ))}
      </ul>
    );
  };
 
  export default ListeCategories;