import * as React from 'react';
import { Box, Stack, Typography, Card, CardContent, Button, Avatar } from '@mui/joy';

const Organisme = () => {
  return (
    <Box sx={{ flex: 1, width: '100%', padding: 4, backgroundColor: '#E0FFFF' }}>
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
            <Typography sx={{ marginBottom: 2 }}>
              Lieu: Paris, France
            </Typography>
            <Button variant="solid" size="sm">Voir Détails</Button>
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

      {/* Card avec du texte */}
      <Card sx={{ marginBottom: 4, marginTop: 4 }}> {/* Ajout de marginTop: 4 */}
        <CardContent>
          <Typography mt={3} sx={{ marginBottom: 2 }}>
            Bienvenue dans la gestion des événements
          </Typography>
          <Typography>
            Ici, vous pouvez gérer tous les événements liés à votre organisation. Ajoutez de nouveaux événements, modifiez les détails existants ou supprimez-les selon vos besoins.
          </Typography>
        </CardContent>
      </Card>

      {/* Contenu principal */}
      <Stack spacing={4} sx={{ flexGrow: 1, justifyContent: 'flex-end' }}>
        
      </Stack>
    </Box>
  );
};

export default Organisme;
