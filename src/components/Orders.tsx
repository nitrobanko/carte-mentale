import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: string,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'pole orientation',
    'Elvis Presley',
    'Tupelo, MS',
    '16/09/2024',
    '16/09/2024',
  ),
  createData(
    1,
    'pole orientation',
    'Paul McCartney',
    'London, UK',
    '16/09/2024',
    '16/09/2024',
  ),
  createData(2, 'pole orientation', 'Tom Scholz', 'Boston, MA', '16/09/2024', '16/09/2024'),
  createData(
    3,
    'pole orientation',
    'Michael Jackson',
    'Gary, IN',
    '16/09/2024',
    '16/09/2024',
  ),
  createData(
    4,
    'pole orientation',
    'Bruce Springsteen',
    'Long Branch, NJ',
    '16/09/2024',
    '16/09/2024',
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Liste des événements </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nom de l'événement</TableCell>
            <TableCell>Crée par</TableCell>
            <TableCell>Ville</TableCell>
            <TableCell>Début le</TableCell>
            <TableCell align="right">Fin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Voir plus d'événements
      </Link>
    </React.Fragment>
  );
}
