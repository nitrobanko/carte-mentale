import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
        Gestion Participants
      </Typography>
     
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Plus
        </Link>
      </div>
    </React.Fragment>
  );
}
