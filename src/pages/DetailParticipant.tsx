import React from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import emailjs from 'emailjs-com';
import Sidebar from '../components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ProfileCardProps {
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, phone, avatarUrl }) => (
  <Card sx={{ maxWidth: 600, margin: 2, borderRadius: 3, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 }, height: 250 }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <Avatar alt={name} src={avatarUrl} sx={{ width: 140, height: 120, marginBottom: 1, border: '2px solid #fff' }} />
      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
        {name}
      </Typography>
      <Divider sx={{ width: '100%', marginY: 1 }} />
      <Typography variant="body2" color="text.secondary">
        Email: {email}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Phone: {phone}
      </Typography>
    </CardContent>
  </Card>
);

const ProfileBlock: React.FC = () => {
  const profiles = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
    },
    {
      name: 'Insersite',
      email: 'contact@insersite.com',
      phone: '098-765-4321',
      avatarUrl: process.env.PUBLIC_URL + '/insersite.jpg'
    }
  ];

  const handleReturn = () => {
    console.log('Retour');
    // Action à effectuer lors du clic sur Retour
  };

  const handleEdit = () => {
    console.log('Éditer');
    // Action à effectuer lors du clic sur Éditer
  };

  const buttonAnimation = {
    scale: 1.2,
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
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #0070f3, #009999, #00bcd4)',
        padding: 4,
      }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
          Gestion des participants
        </Typography>
        <Card sx={{
          maxWidth: 800,
          width: '100%',
          padding: 2,
          borderRadius: 3,
          boxShadow: 3,
          background: '#fff',
        }}>
          <Grid container spacing={1} justifyContent="center">
            <Grid item sm={10} xs={6}>
              
              <ProfileCard {...profiles[0]} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProfileCard {...profiles[1]} />
            </Grid>
          </Grid>
          <CardActions sx={{ justifyContent: 'space-between', marginTop: 2 }}>
            <motion.div whileTap={buttonAnimation}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
                onClick={handleReturn}
                sx={{ background: '#0070f3' }}
              >
                Retour
              </Button>
            </motion.div>
            <motion.div whileTap={buttonAnimation}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={handleEdit}
                sx={{ background: '#00bcd4' }}
              >
                Éditer
              </Button>
            </motion.div>
          </CardActions>
        </Card>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default ProfileBlock;
