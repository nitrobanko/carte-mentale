import React from 'react';
import { Box, Typography, Card, CardContent, Button, ImageList, ImageListItem, Avatar, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const PageEvent: React.FC = () => {
  const navigate = useNavigate();

  const handleRetour = () => {
    navigate('/gestion-event');
  };

  const eventDetails = {
    title: 'Événement Caritatif',
    subtitle: 'Aidez-nous à rendre le monde meilleur',
    description: 'Joignez-vous à nous pour un événement caritatif visant à collecter des fonds pour les enfants dans le besoin. Votre présence et votre soutien peuvent faire une grande différence.',
    address: '123 Rue de la Bienfaisance, 75008 Paris, France',
    date: '25 Juin 2024',
    time: '18:00 - 21:00',
    duration: '3 heures',
    maxParticipants: 100,
    ageGroup: '18-35 ans',
    professionalStatus: 'Étudiants et Professionnels',
    eventType: 'Conférence',
    theme: 'Éducation et Aide Humanitaire',
    format: 'Présentiel',
    registrationLink: 'https://example.com/register'
  };

  const images = [
    'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  ];

  const prescripteurs = [
    {
      name: 'Jane Smith',
      avatarUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400'
    },
    {
      name: 'Alex Johnson',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400'
    },
    {
      name: 'Emily Davis',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400'
    },
  ];

  const cardAnimation = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{
        flexGrow: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #0070f3, #009999, #00bcd4)',
        padding: 4,
      }}>
        <Box sx={{ width: '100%', maxWidth: 1200, bgcolor: '#fff', boxShadow: 3, borderRadius: 3, p: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Button variant="contained" color='success' onClick={handleRetour}>Retour</Button>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" color="error">Archiver</Button>
              <Button variant="contained" color="success">Éditer</Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h2" gutterBottom>
                {eventDetails.title}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {eventDetails.subtitle}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {eventDetails.description}
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Galerie d'images
                </Typography>
                <ImageList sx={{ width: '100%', height: 250 }} cols={3} rowHeight={164}>
                  {images.map((image, index) => (
                    <ImageListItem key={index}>
                      <img
                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={`Gallery image ${index + 1}`}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">Adresse</Typography>
                  <Typography variant="body1">{eventDetails.address}</Typography>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">Date & Heure</Typography>
                  <Typography variant="body1">{eventDetails.date} à {eventDetails.time}</Typography>
                  <Typography variant="body1">Durée: {eventDetails.duration}</Typography>
                  <Typography variant="body1">Participants max: {eventDetails.maxParticipants}</Typography>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">Tranche d'âge et Statut professionnel</Typography>
                  <Typography variant="body1">Âge: {eventDetails.ageGroup}</Typography>
                  <Typography variant="body1">Statut: {eventDetails.professionalStatus}</Typography>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">Détails de l'événement</Typography>
                  <Typography variant="body1">Type: {eventDetails.eventType}</Typography>
                  <Typography variant="body1">Thème: {eventDetails.theme}</Typography>
                  <Typography variant="body1">Format: {eventDetails.format}</Typography>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: 3, mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">Inscription</Typography>
                  <motion.div whileTap={cardAnimation}>
                    <Button
                      variant="contained"
                      color="error"
                      href={eventDetails.registrationLink}
                      target="_blank"
                    >
                      Inscription à l'événement
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 1200, bgcolor: '#fff', boxShadow: 3, borderRadius: 3, p: 4, mt: 4, display: 'flex', gap: 4 }}>
          <Card sx={{ flex: 1, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Projet</Typography>
              <Typography variant="body1">Détails sur le projet en cours...</Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Prescripteurs</Typography>
              <Grid container spacing={2}>
                {prescripteurs.map((prescripteur, index) => (
                  <Grid item xs={4} key={index}>
                    <Avatar
                      alt={prescripteur.name}
                      src={prescripteur.avatarUrl}
                      sx={{ width: 48, height: 48, borderRadius: 1, boxShadow: 3 }}
                    />
                    <Typography variant="body2" align="center">{prescripteur.name}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default PageEvent;
