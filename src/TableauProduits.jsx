import './TableauProduits.scss';
import Produit from './Produit.jsx';

import produits from './data/produits.json';

const TableauProduits = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Produit</th>
          <th></th>
          <th>Catégories</th>
          <th>Unités</th>
          <th>Ventes</th>
        </tr>
      </thead>
      <tbody>
        {produits.map(produit => (
          <Produit key={produit.id} {...produit} />
        ))}
      </tbody>
    </table>
  );
};

export default TableauProduits;
