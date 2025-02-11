import './Entete.scss';
 
const Entete = () => {
  return (
    <header className="entete">
 
      <div className="entete-actions">      
        <p className="entete-titre">xYzADMIN</p>
        <input type="text" placeholder="Rechercher..." className="entete-recherche" />
        <button className="entete-bouton">Connexion</button>
        <button className="entete-bouton">Inscription</button>
      </div>
      <h2>Catalogue</h2>
    </header>
  );
};
 
export default Entete;