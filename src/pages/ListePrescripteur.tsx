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

// Exemple de données de prescripteurs
const prescripteurs = [
  { id: 1, organization: 'Mission Locale', creationDate: '2023-06-20' },
  { id: 2, organization: 'France Travail', creationDate: '2023-06-21' },
  { id: 3, organization: 'Insersite', creationDate: '2023-06-22' },
  { id: 4, organization: 'Emily Davis', creationDate: '2023-06-23' },
  { id: 5, organization: 'Alex Johnson', creationDate: '2023-06-24' },
];

const ListePrescripteur: React.FC = () => {
  const handleEdit = (prescripteurId: number) => {
    toast.info(`Modification du prescripteur avec l'ID: ${prescripteurId}`);
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
          Gestion des Prescripteurs
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 800, bgcolor: '#fff', boxShadow: 3, borderRadius: 3, p: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Prescripteurs</TableCell>
                  <TableCell>Créer le</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {prescripteurs.map((prescripteur) => (
                  <TableRow key={prescripteur.id}>
                    <TableCell>{prescripteur.organization}</TableCell>
                    <TableCell>{prescripteur.creationDate}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => handleEdit(prescripteur.id)}
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

export default ListePrescripteur;
