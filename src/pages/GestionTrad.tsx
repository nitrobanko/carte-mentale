import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from '../components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Exemple de données de sections
const sections = [
  { id: 1, name: 'Accueil' },
  { id: 2, name: 'Listing' },
  { id: 3, name: 'Événements' },
  { id: 4, name: 'Créations d\'événements' },
  { id: 5, name: 'Autres' },
];

const GestionTrad: React.FC = () => {
  const handleEdit = (sectionId: number) => {
    toast.info(`Modification de la section avec l'ID: ${sectionId}`);
    // Logique de modification à implémenter
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
          Gestion des Traductions
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 800, bgcolor: '#fff', boxShadow: 3, borderRadius: 3, p: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Liste des sections</TableCell>
                  <TableCell align="right">Modifier</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sections.map((section) => (
                  <TableRow key={section.id}>
                    <TableCell>{section.name}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => handleEdit(section.id)}
                      >
                        Modifier
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default GestionTrad;
