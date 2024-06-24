import * as React from 'react';
import Card, { CardProps } from '@mui/joy/Card';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';

import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';

export default function DropZone(props: CardProps & { icon?: React.ReactElement }) {
  const { icon, sx, ...other } = props;
  const [loading, setLoading] = React.useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = React.useState<string | null>(null); // State pour l'URL de l'image téléchargée
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true); // Démarre le chargement
      // Simuler le traitement du fichier (à remplacer par votre logique réelle)
      setTimeout(() => {
        setLoading(false); // Termine le chargement
        const imageUrl = URL.createObjectURL(file); // Créer l'URL de l'image à partir du fichier
        setUploadedImageUrl(imageUrl); // Mettre à jour l'état avec l'URL de l'image
        alert('Image téléchargée avec succès !');
      }, 2000); // Simule un chargement de 2 secondes
    }
  };

  return (
    <Card
      variant="soft"
      {...other}
      sx={[
        {
          borderRadius: 'sm',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'center',
          px: 3,
          flexGrow: 1,
          boxShadow: 'none',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <AspectRatio
        ratio="1"
        variant="solid"
        color="primary"
        sx={{
          minWidth: 32,
          borderRadius: '50%',
          '--Icon-fontSize': '16px',
        }}
      >
        {uploadedImageUrl ? (
          <img src={uploadedImageUrl} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
        ) : (
          <div>{icon ?? <FileUploadRoundedIcon />}</div>
        )}
      </AspectRatio>
      <Typography level="body-sm" textAlign="center">
        {/* Utilisation de la balise <label> pour afficher le lien de manière accessible */}
        <label style={{ cursor: 'pointer' }}>
          <Link component="button" overlay onClick={handleFileUpload}>
            Cliquez ici
          </Link>
          <input
            type="file"
            accept="image/svg+xml,image/png,image/jpeg,image/gif"
            style={{ display: 'none' }}
            ref={inputRef}
            onChange={handleFileChange}
          />
        </label>{' '}
        pour ajouter l'image de l'organisme
        <br /> SVG, PNG, JPG ou GIF (max. 800x400px)
      </Typography>
      {loading && (
        <Typography level="body-xs" color="primary">
          Chargement en cours...
        </Typography>
      )}
    </Card>
  );
}
