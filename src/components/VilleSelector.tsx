import React, { useState } from 'react';

const villesYvelines = [
  "Achères", "Aigremont", "Les Alluets-le-Roi", "Andelu", "Andrésy",
  "Arnouville-lès-Mantes", "Auffargis", "Aulnay-sur-Mauldre", "Bailly",
  "Béhoust", "Bennecourt", "Boinville-en-Mantois", "Bois-d'Arcy", "Boissy-sans-Avoir",
  "Boinvilliers", "Bonnelles", "Bouafle", "Bourdonné", "Brezolles",
  "Brou-sur-Chantereine", "Buchelay", "Bullion", "Cernay-la-Ville", "Chambourcy",
  "Chaufour-lès-Bonnières", "Chavenay", "Chevreuse", "Choisel", "Clairefontaine-en-Yvelines",
  "Conflans-Sainte-Honorine", "Crespières", "Croissy-sur-Seine", "Dampierre-en-Yvelines", "Drocourt",
  "Élancourt", "Épône", "Évecquemont", "Follainville-Dennemont", "Fontenay-le-Fleury",
  "Gambais", "Garancières", "Gargenville", "Gazeran", "Goussonville",
  "Guernes", "Guerville", "Guitrancourt", "Hardricourt", "Hermeray",
  "Houdan", "Jouars-Pontchartrain", "Jouy-en-Josas", "Jumeauville", "La Celle-les-Bordes",
  "La Queue-les-Yvelines", "Le Mesnil-le-Roi", "Le Pecq", "Le Perray-en-Yvelines", "Le Port-Marly",
  "Le Tremblay-sur-Mauldre", "Les Clayes-sous-Bois", "Les Essarts-le-Roi", "Lévis-Saint-Nom", "Limay",
  "Longvilliers", "Louveciennes", "Mareil-Marly", "Mareil-sur-Mauldre", "Mantes-la-Jolie",
  "Mantes-la-Ville", "Marcq", "Mareil-sur-Mauldre", "Mareil-le-Guyon", "Mareil-Marly",
  "Maurecourt", "Maurepas", "Meulan", "Mézières-sur-Seine", "Montesson",
  "Montfort-l'Amaury", "Montigny-le-Bretonneux", "Montigny-le-Gannelon", "Méré", "Neauphle-le-Château",
  "Neauphle-le-Vieux", "Neauphlette", "Noisy-le-Roi", "Orgeval", "Plaisir",
  "Poigny-la-Forêt", "Porcheville", "Rambouillet", "Rennemoulin", "Rochefort-en-Yvelines",
  "Rosny-sur-Seine", "Saint-Arnoult-en-Yvelines", "Saint-Cyr-l'École", "Saint-Germain-en-Laye", "Saint-Germain-de-la-Grange",
  "Saint-Hilarion", "Saint-Léger-en-Yvelines", "Saint-Martin-la-Garenne", "Saint-Rémy-l'Honoré", "Saint-Rémy-lès-Chevreuse",
  "Sartrouville", "Saulx-Marchais", "Septeuil", "Tacoignières", "Tessancourt-sur-Aubette",
  "Thoiry", "Trappes", "Triel-sur-Seine", "Verneuil-sur-Seine", "Vernouillet",
  "Versailles", "Vieux-Moulin", "Villennes-sur-Seine", "Viroflay", "Voisins-le-Bretonneux",
];

const VilleSelector = () => {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <nav style={styles.navbar}>
      <div style={styles.navItem}>
        <label htmlFor="villes" style={styles.label}>Sélectionnez une ville :</label>
        <select
          id="villes"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={styles.select}
        >
          <option value="" disabled>Choisissez une ville</option>
          {villesYvelines.map((ville, index) => (
            <option key={index} value={ville}>
              {ville}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '15px', // Arrondi des coins de la barre
  },
  navItem: {
    color: 'black',
  },
  label: {
    marginRight: '10px',
  },
  select: {
    padding: '5px',
    fontSize: '16px',
  },
};

export default VilleSelector;
