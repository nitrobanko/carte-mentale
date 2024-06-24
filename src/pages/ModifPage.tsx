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

// Exemple de données de pages
const pages = [
  { id: 1, name: 'Projet' },
  { id: 2, name: 'Contact' },
];

const ModifPage: React.FC = () => {
  const handleEdit = (pageId: number) => {
    toast.info(`Modification de la page avec l'ID: ${pageId}`);
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
          Gestion du site internet
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 800, bgcolor: '#fff', boxShadow: 3, borderRadius: 3, p: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Liste des pages</TableCell>
                  <TableCell align="right">Modifier</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pages.map((page) => (
                  <TableRow key={page.id}>
                    <TableCell>{page.name}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => handleEdit(page.id)}
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

export default ModifPage;
