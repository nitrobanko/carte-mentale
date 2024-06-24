import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GestionParticipant: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Utiliser useNavigate pour la redirection
  const { name, organization, avatarUrl } = location.state || {};

  const handleValidation = () => {
    toast.success(`${name} a été validé avec succès!`);
    setTimeout(() => navigate('/membres-en-attente'), 2000); // Redirection après un délai
  };

  const handleInvalidation = () => {
    toast.error(`${name} a été refusé.`);
    setTimeout(() => navigate('/membres-en-attente'), 2000); // Redirection après un délai
  };

  const buttonAnimation = {
    scale: 1.2,
    transition: { duration: 0.2 },
  };

  const boxAnimation = {
    scale: 0.95,
    transition: { duration: 0.2 },
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(45deg, #0070f3, #009999, #00bcd4)', padding: 4 }}>
      <Card sx={{ maxWidth: 800, width: '100%', padding: 2, borderRadius: 3, boxShadow: 3, background: '#fff' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Box sx={{ flex: 1, margin: 2 }}>
              <motion.div whileTap={boxAnimation}>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                  <Card sx={{ borderRadius: 3, boxShadow: 3, cursor: 'pointer' }}>
                    <CardContent>
                      <Avatar alt={organization} src={avatarUrl} sx={{ width: 140, height: 120, marginBottom: 1, border: '2px solid #fff', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 1 }}>
                        {organization}
                      </Typography>
                      <Divider sx={{ width: '80%', margin: '10px auto' }} />
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                        Membre
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </Box>
            <Box sx={{ flex: 1, margin: 2 }}>
              <motion.div whileTap={boxAnimation}>
                <Link to="/organisme" style={{ textDecoration: 'none' }}>
                  <Card sx={{ borderRadius: 3, boxShadow: 3, cursor: 'pointer' }}>
                    <CardContent>
                      <Avatar alt={name} src={avatarUrl} sx={{ width: 140, height: 120, marginBottom: 1, border: '2px solid #fff', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 1 }}>
                        {name}
                      </Typography>
                      <Divider sx={{ width: '80%', margin: '10px auto' }} />
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                        Organisme
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <motion.div whileTap={buttonAnimation}>
              <Button
                variant="contained"
                color="success"
                onClick={handleValidation}
                sx={{ marginRight: 1 }}
              >
                Valider
              </Button>
            </motion.div>
            <motion.div whileTap={buttonAnimation}>
              <Button
                variant="contained"
                color="error"
                onClick={handleInvalidation}
              >
                Refuser
              </Button>
            </motion.div>
          </Box>
        </CardContent>
      </Card>
      <ToastContainer />
    </Box>
  );
};

export default GestionParticipant;
