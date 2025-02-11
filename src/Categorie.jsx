import './Categorie.scss';

const Categorie = ({ nom, couleur }) => {
  return (
    <li className='categorie' style={{ backgroundColor: couleur }}>
      {nom}
    </li>
  );
};

export default Categorie;