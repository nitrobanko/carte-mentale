import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

interface MemberCardProps {
  name: string;
  organization: string;
  avatarUrl: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, organization, avatarUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/validation', { state: { name, organization, avatarUrl } });
  };

  return (
    <motion.div whileTap={{ scale: 0.95 }} onClick={handleClick}>
      <Card sx={{ maxWidth: 600, margin: 2, borderRadius: 3, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 }, height: 250 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
          <Avatar alt={name} src={avatarUrl} sx={{ width: 140, height: 120, marginBottom: 1, border: '2px solid #fff' }} />
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            {name}
          </Typography>
          <Divider sx={{ width: '100%', marginY: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {organization}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MemberCard;
