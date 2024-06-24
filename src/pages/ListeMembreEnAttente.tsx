import React from 'react';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Sidebar from '../components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MemberCard from '../components/MemberCard';

const ListeMembreEnAttente: React.FC = () => {
  const members = [
    {
      name: 'Jane Smith',
      organization: 'Company A',
      avatarUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400'
    },
    {
      name: 'Alex Johnson',
      organization: 'Company B',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400'
    },
    {
      name: 'Emily Davis',
      organization: 'Company C',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400'
    },
    {
      name: 'Michael Brown',
      organization: 'Company D',
      avatarUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400'
    },
    {
      name: 'Linda Wilson',
      organization: 'Company E',
      avatarUrl: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a3?auto=format&fit=crop&w=400'
    },
    {
      name: 'Robert Taylor',
      organization: 'Company F',
      avatarUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=400'
    },
    {
      name: 'Patricia Moore',
      organization: 'Company G',
      avatarUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400'
    },
    {
      name: 'James Anderson',
      organization: 'Company H',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400'
    },
    {
      name: 'Barbara Thomas',
      organization: 'Company I',
      avatarUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400'
    },
    {
      name: 'William Jackson',
      organization: 'Company J',
      avatarUrl: 'https://images.unsplash.com/photo-1532074205216-cb5867c1abf3?auto=format&fit=crop&w=400'
    }
  ];

  const handleValidation = (name: string) => {
    toast.success(`${name} a été validé avec succès!`);
  };

  const handleInvalidation = (name: string) => {
    toast.error(`${name} a été refusé.`);
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
          Liste des membres en attente
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {members.map((member, index) => (
            <Grid item key={index}>
              <MemberCard name={member.organization} organization={member.name} avatarUrl={member.avatarUrl} />
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
                <motion.div whileTap={buttonAnimation}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleValidation(member.name)}
                    sx={{ marginRight: 1 }}
                  >
                    Valider
                  </Button>
                </motion.div>
                <motion.div whileTap={buttonAnimation}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleInvalidation(member.name)}
                  >
                    Refuser
                  </Button>
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default ListeMembreEnAttente;
