import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Grid from '@mui/material/Grid';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { TextareaAutosize } from '@mui/material';
import { DatePicker } from '@nextui-org/react'; // Import du DatePicker
import { parseDate } from "@internationalized/date";

const AjouterMembre = () => {
  const [titre, setTitre] = React.useState('');
  const [motsCles, setMotsCles] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [images, setImages] = React.useState<File[]>([]);
  const [adresse, setAdresse] = React.useState('');
  const [codePostal, setCodePostal] = React.useState('');
  const [ville, setVille] = React.useState('');
  const [lienUrl, setLienUrl] = React.useState('');
  const [startDate, setStartDate] = React.useState<any>(null); // Utilisation d'un type générique pour startDate
  const [endDate, setEndDate] = React.useState<any>(null); // Utilisation d'un type générique pour endDate

  const handleTitreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitre(event.target.value);
  };

  const handleMotsClesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMotsCles(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages([...images, ...filesArray]);
    }
  };

  const handleImageRemove = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleAdresseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdresse(event.target.value);
  };

  const handleCodePostalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodePostal(event.target.value);
  };

  const handleVilleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVille(event.target.value);
  };

  const handleLienUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLienUrl(event.target.value);
  };

  const handleStartDateChange = (date: any) => { // Utilisation d'un type générique pour date
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => { // Utilisation d'un type générique pour date
    setEndDate(date);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validation personnalisée pour les dates
    if (!startDate || !endDate) {
      alert('Veuillez sélectionner une date de début et une date de fin.');
      return;
    }

    const motsClesArray = motsCles.split(',').map(mot => mot.trim());
    console.log('Titre:', titre);
    console.log('Mots Clés:', motsClesArray);
    console.log('Description:', description);
    console.log('Adresse:', adresse);
    console.log('Code Postal:', codePostal);
    console.log('Ville:', ville);
    console.log('Lien URL:', lienUrl);
    console.log('Date de début:', startDate);
    console.log('Date de fin:', endDate);
    if (images.length > 0) {
      console.log('Images:');
      images.forEach((image, index) => {
        console.log(`Image ${index + 1}:`, image);
      });
    }
  };

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100vh',
            gap: 1,
            backgroundImage: 'linear-gradient(to right, #0070f3, #009999, #00bcd4)',
          }}
        >
          <Typography level="h1" sx={{ mb: 3, color: 'white' }}>
            Ajouter un événement
          </Typography>
          <Card variant="outlined" sx={{ maxWidth: 800, mx: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardContent>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  width: '100%',
                }}
              >
                <FormControl>
                  <FormLabel>Titre de l'événement</FormLabel>
                  <Input
                    value={titre}
                    onChange={handleTitreChange}
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Mots Clés (séparés par des virgules)</FormLabel>
                  <Input
                    value={motsCles}
                    onChange={handleMotsClesChange}
                    placeholder="mot1, mot2, mot3"
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <TextareaAutosize
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Entrez la description de l'événement"
                    minRows={3}
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Images</FormLabel>
                  <input
                    type="file"
                    onChange={handleImagesChange}
                    multiple
                  />
                  {images.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography>Aperçu des images sélectionnées :</Typography>
                      <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                        {images.map((image, index) => (
                          <Box key={index} sx={{ position: 'relative' }}>
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`Image ${index + 1}`}
                              style={{ maxWidth: 150, maxHeight: 150, objectFit: 'cover' }}
                            />
                            <Button
                              sx={{ position: 'absolute', top: 0, right: 0 }}
                              onClick={() => handleImageRemove(index)}
                            >
                              Supprimer
                            </Button>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}
                </FormControl>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormControl>
                      <FormLabel>Adresse</FormLabel>
                      <Input
                        value={adresse}
                        onChange={handleAdresseChange}
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl>
                      <FormLabel>Code Postal</FormLabel>
                      <Input
                        value={codePostal}
                        onChange={handleCodePostalChange}
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl>
                      <FormLabel>Ville</FormLabel>
                      <Input
                        value={ville}
                        onChange={handleVilleChange}
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl>
                      <FormLabel>URL</FormLabel>
                      <Input
                        value={lienUrl}
                        onChange={handleLienUrlChange}
                        required
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <FormControl>
                      <FormLabel>Date de début</FormLabel>
                      <DatePicker
                        label="Sélectionnez la date de début"
                        value={startDate}
                        onChange={handleStartDateChange}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl>
                      <FormLabel>Date de fin</FormLabel>
                      <DatePicker
                        label="Sélectionnez la date de fin"
                        value={endDate}
                        onChange={handleEndDateChange}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                
                <Button type="submit" color="primary" sx={{ mt: 2 }}>
                  Ajouter
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default AjouterMembre;
