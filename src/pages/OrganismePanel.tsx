import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';

const OrganismePanel: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{
        flexGrow: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #0070f3, #009999, #00bcd4)',
        padding: 4,
      }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#fff', mb: 4 }}>
          Panneau d'organisme
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button variant="contained" color="primary" sx={{ minWidth: 200 }}>
            Mes annonces
          </Button>
          <Button variant="contained" color="primary" sx={{ minWidth: 200 }}>
            Gestion de mon équipe
          </Button>
          <Button variant="contained" color="primary" sx={{ minWidth: 200 }}>
            Créer un événement
          </Button>
          <Button variant="contained" color="primary" sx={{ minWidth: 200 }}>
            Ajouter membre
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrganismePanel;
