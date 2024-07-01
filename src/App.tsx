import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Dashboard from './pages/Dashboard';
import SignInSide from './pages/SignInSide';
import Liste from './pages/Liste'
import ListEvent from './pages/ListEvent'
import AjoutPrescripteur from './pages/AjoutPrescripteur';
import GestionEvenement from './pages/GestionEvenement';
import ListParticip from './pages/ListParticip';
import ListeMembre from './pages/ListeMembre';
import GestionParticipant from './pages/GestionParticipants';
import DetailParticipant from './pages/DetailParticipant';
import ListeMembreEnAttente from './pages/ListeMembreEnAttente';
import Organisme from "./pages/Organisme";
import ProfilMembre from "./pages/ProfilMembre";
import ListePrescripteur from "./pages/ListePrescripteur";
import ModifPage from "./pages/ModifPage";
import AdminPrescripteur from "./pages/AdminPrescripteur";
import GestionTrad from "./pages/GestionTrad";
import PageEvent from "./pages/PageEvent";
import OrganismePanel from "./pages/OrganismePanel";
import AjouterMembre from "./pages/AjouterMembre";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Insersite
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInSide/>} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="gestion-event" element={<ListEvent/>} />
      <Route path="list-event" element={<GestionEvenement/>} />
      <Route path="participants" element={<ListParticip/>} />
      <Route path="validation" element={<GestionParticipant/>} />
      <Route path="prescripteur" element={<AjoutPrescripteur/>} />
      <Route path="membre" element={<ListeMembre/>} />
      <Route path="details" element={<DetailParticipant/>} />
      <Route path="membres-en-attente" element={<ListeMembreEnAttente />} />
      <Route path="organisme" element={<Organisme />} />
      <Route path="profile" element={<ProfilMembre />} />
      <Route path="list-prescri" element={<ListePrescripteur />} />
      <Route path="ajout-admin" element={<AdminPrescripteur />} />
      <Route path="modifier-pages" element={<ModifPage />} />
      <Route path="trad" element={<GestionTrad />} />
      <Route path="event" element={<PageEvent />} />
      <Route path="admin-page" element={<OrganismePanel />} />
      <Route path="ajout-event" element={<AjouterMembre />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App;