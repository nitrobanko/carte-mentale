import * as React from 'react';
import { Box, Typography, Card, CardContent, Button, Avatar } from '@mui/joy';
import Orders from '../components/Orders';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArrowBack from '@mui/icons-material/ArrowBack';

// Composant pour afficher une carte de représentant
const RepresentativeCard: React.FC<{ name: string; title: string; avatarUrl: string }> = ({ name, title, avatarUrl }) => (
  <Card
    sx={{
      width: 120,
      padding: 1,
      margin: 1,
      boxShadow: 3,
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Avatar
      src={avatarUrl}
      alt={name}
      sx={{
        width: 40,
        height: 40,
        marginBottom: 1,
      }}
    />
    <Box sx={{ textAlign: 'center' }}>
      <Typography component="h3" sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>
        {name}
      </Typography>
      <Typography sx={{ fontSize: '0.7rem' }}>{title}</Typography>
    </Box>
  </Card>
);

const Organisme = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <Box
      sx={{
        flex: 1,
        width: '100%',
        padding: 4,
        backgroundImage: 'linear-gradient(to right, #0070f3, #009999, #00bcd4)',
      }}
    >
      {/* En-tête */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f5f5f5',
          padding: 2,
          borderRadius: 2,
          marginBottom: 8,
          position: 'relative',
        }}
      >
        {/* Bouton de retour */}
        <Button
          variant="outlined"
          startDecorator={<ArrowBack />}
          onClick={handleBackClick}
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 10,
          }}
        >
          Retour
        </Button>

        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography level="h2" component="h1" sx={{ marginBottom: 1 }}>
            Insersite
          </Typography>
          <Typography>
            Gérez vos événements avec facilité et efficacité. Ajoutez, modifiez ou supprimez des événements.
          </Typography>
        </Box>
        <Card
          sx={{
            minWidth: 200,
            padding: 2,
          }}
        >
          <CardContent>
            <Typography>Prochaine Événement</Typography>
            <Typography component="h2" sx={{ marginBottom: 1 }}>
              Réunion annuelle
            </Typography>
            <Typography>Date: 25 Juin 2024</Typography>
            <Typography sx={{ marginBottom: 2 }}>Lieu: Paris, France</Typography>
            <Button variant="solid" size="sm">
              Voir Détails
            </Button>
          </CardContent>
        </Card>
        <Avatar
          src="/insersite.jpg"
          alt="Profil"
          sx={{
            width: 150,
            height: 150,
            position: 'absolute',
            bottom: -75,
            left: '50%',
            transform: 'translateX(-50%)',
            border: '2px solid white',
            borderRadius: '50%',
          }}
        />
      </Box>

      {/* Contenu principal */}
      <Box
        component="main"
        sx={{
          backgroundImage: 'linear-gradient(to right, #0070f3, #009999, #00bcd4)',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}></Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
              </Paper>
            </Grid>
            {/* Liste des représentants */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom>Liste des représentants</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <RepresentativeCard name="Jean Dupont" title="Directeur Général" avatarUrl="/avatars/jean.jpg" />
                  <RepresentativeCard name="Marie Curie" title="Responsable RH" avatarUrl="/avatars/marie.jpg" />
                  <RepresentativeCard name="Albert Einstein" title="Chef de Projet" avatarUrl="/avatars/albert.jpg" />
                  {/* Ajouter plus de cartes de représentants si nécessaire */}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Organisme;
