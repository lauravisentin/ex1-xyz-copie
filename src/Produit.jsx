const Produit = ({ id, avatar, nom, categories, unites, ventes }) => {
  return (
    <tr>
      <td>
        <img src={avatar} alt={nom} className="avatar" />
        {nom}
      </td>
      <td>
        <button>
            Modifier
        </button>
      </td>
      <td>
        <ul>
          {categories}
        </ul>
      </td>
      <td>{unites}</td>
      <td>{ventes}</td>
    </tr>
  );
};

export default Produit;
