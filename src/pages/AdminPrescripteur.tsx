import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Sidebar from '../components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

// Styles de transition pour les boutons
const buttonAnimation = {
  scale: 1.2,
  transition: { duration: 0.2 },
};

const AdminPrescripteur: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    number: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    toast.success('Prescripteur ajouté avec succès!');
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
          Ajouter un Prescripteur
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 800, bgcolor: '#fff', boxShadow: 3, borderRadius: 3, p: 3 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nom"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="email"
            />
            <TextField
              label="Confirmer Email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="email"
            />
            <TextField
              label="Mot de passe"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
            />
            <TextField
              label="Confirmer Mot de passe"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
            />
            <TextField
              label="Numéro"
              name="number"
              value={formData.number}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              type="tel"
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <motion.div whileTap={buttonAnimation}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginRight: 1 }}
                >
                  Ajouter
                </Button>
              </motion.div>
              <motion.div whileTap={buttonAnimation}>
                <Button
                  type="reset"
                  variant="outlined"
                  onClick={() => setFormData({ name: '', email: '', confirmEmail: '', password: '', confirmPassword: '', number: '' })}
                >
                  Réinitialiser
                </Button>
              </motion.div>
            </Box>
          </form>
        </Box>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default AdminPrescripteur;
