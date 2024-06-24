import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Select from '@mui/joy/Select';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import DropZone from './DropZone';
import CountrySelector from './CountrySelector';
import VilleSelector from './VilleSelector';

export default function MyProfile() {
  const [hasOrganization, setHasOrganization] = React.useState(false);
  const [wantsToSpecifyOrganization, setWantsToSpecifyOrganization] = React.useState(false);
  const [savedMessage, setSavedMessage] = React.useState("");
  const [organizationName, setOrganizationName] = React.useState("");

  const handleSavePersonalInfo = () => {
    const firstNameFilled = true;
    const lastNameFilled = true;
    const emailFilled = true;

    if (firstNameFilled && lastNameFilled && emailFilled) {
      setSavedMessage("Données sauvegardées");
    } else {
      setSavedMessage("Veuillez remplir tous les champs requis");
    }
  };

  const handleSaveOrganizationInfo = () => {
    if (organizationName) {
      setSavedMessage("Données de l'organisme sauvegardées");
    } else {
      setSavedMessage("Veuillez remplir le nom de l'organisme");
    }
  };

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          paddingBottom: 2,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="small" />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="none"
              color="neutral"
              href="#some-link"
              aria-label="Home"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <HomeRoundedIcon />
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="#some-link"
              fontSize={12}
              fontWeight={500}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              Users
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
              Ajouter un membre
            </Typography>
          </Breadcrumbs>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Ajouter un membre
          </Typography>
        </Box>
        <Tabs
          defaultValue={0}
          sx={{
            bgcolor: 'transparent',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <TabList
            tabFlex={1}
            size="sm"
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                transition: 'color 0.3s',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                    transition: 'all 0.3s',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0', transition: 'background-color 0.3s' }} indicatorInset value={0}>
              Paramètres
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0', transition: 'background-color 0.3s' }} indicatorInset value={1}>
              Carte
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0', transition: 'background-color 0.3s' }} indicatorInset value={2}>
              Events
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0', transition: 'background-color 0.3s' }} indicatorInset value={3}>
              Connexion
            </Tab>
          </TabList>
        </Tabs>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Infos personnel</Typography>
            <Typography level="body-sm">
              Ajoutez vos infos personnel.
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: 'background.body',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  left: 100,
                  top: 170,
                  boxShadow: 'sm',
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Nom</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input size="sm" placeholder="Prénom" />
                  <Input size="sm" placeholder="Nom" sx={{ flexGrow: 1 }} />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    defaultValue="siriwatk@test.com"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: 'background.body',
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: 32,
                    top: 76,
                    boxShadow: 'sm',
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Nom</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="Prénom" />
                  <Input size="sm" placeholder="Nom" />
                </FormControl>
              </Stack>
            </Stack>
            <FormControl>
              <FormLabel>Rôle</FormLabel>
              <Input size="sm" defaultValue="Développeur UI" />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Input
                size="sm"
                type="email"
                startDecorator={<EmailRoundedIcon />}
                placeholder="email"
                defaultValue="siriwatk@test.com"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <div>
              <CountrySelector />
            </div>
            <div>
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Timezone</FormLabel>
                <Select
                  size="sm"
                  startDecorator={<AccessTimeFilledRoundedIcon />}
                  defaultValue="1"
                >
                  {/* Options to be added here */}
                </Select>
              </FormControl>
            </div>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button
                size="sm"
                variant="outlined"
                color="neutral"
                onClick={handleSavePersonalInfo}
              >
                Sauvegarder
              </Button>
            </CardActions>
          </CardOverflow>
          {savedMessage && (
           <Typography  color="success" sx={{ mt: 2, textAlign: 'center' }}>
           {savedMessage}
         </Typography>
          )}
        </Card>

        {!hasOrganization && (
          <Card>
            <Box sx={{ mb: 1 }}>
              <Typography level="title-md">Voulez-vous créer un organisme ?</Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  size="sm"
                  variant="outlined"
                  onClick={() => {
                    setHasOrganization(true);
                    setWantsToSpecifyOrganization(false);
                  }}
                >
                  Oui
                </Button>
                <Button
                  size="sm"
                  variant="outlined"
                  onClick={() => {
                    setHasOrganization(false);
                    setWantsToSpecifyOrganization(true);
                  }}
                >
                  Non
                </Button>
              </Stack>
            </Box>
          </Card>
        )}

        {wantsToSpecifyOrganization && !hasOrganization && (
          <Card>
            <Box sx={{ mb: 1 }}>
              <Typography level="title-md">Précisez votre organisme</Typography>
              <FormControl sx={{ my: 2 }}>
                <FormLabel>Nom de l'organisme</FormLabel>
                <Input
                  size="sm"
                  placeholder="Nom de l'organisme"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                />
              </FormControl>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button
                  size="sm"
                  variant="solid"
                  onClick={handleSaveOrganizationInfo}
                >
                  Sauvegarder
                </Button>
              </CardActions>
            </Box>
          </Card>
        )}

        {hasOrganization && (
          <Card className="organisme-section">
            <Box sx={{ mb: 1 }}>
              <Typography level="title-md">Organisme</Typography>
              <Typography level="body-sm">
                Ajoutez l'organisme dans notre base de données.
              </Typography>
            </Box>
            <Divider />
            <FormControl
              sx={{
                display: {
                  sm: 'flex-column',
                  md: 'flex-row',
                },
                gap: 2,
              }}
            >
              <FormLabel>Nom de l'organisme</FormLabel>
              <Input size="sm" placeholder="Nom de l'organisme" />
            </FormControl>
            <FormControl
              sx={{
                display: {
                  sm: 'flex-column',
                  md: 'flex-row',
                },
                gap: 2,
              }}
            >
              <FormLabel>Siret</FormLabel>
              <Input size="sm" placeholder="Siret" />
            </FormControl>
            <FormControl
              sx={{
                display: {
                  sm: 'flex-column',
                  md: 'flex-row',
                },
                gap: 2,
              }}
            >
              <FormLabel>Adresse</FormLabel>
              <Input size="sm" placeholder="Adresse" />
            </FormControl>
            <Stack spacing={2} sx={{ my: 1 }}>
              <FormControl
                sx={{
                  display: {
                    sm: 'flex-column',
                    md: 'flex-row',
                  },
                  gap: 2,
                }}
              >
                <FormLabel>Code postal</FormLabel>
                <Input size="sm" placeholder="Code postal" />
              </FormControl>
              <FormControl
                sx={{
                  display: {
                    sm: 'flex-column',
                    md: 'flex-row',
                  },
                  gap: 2,
                }}
              >
                <FormLabel>Région</FormLabel>
                <Input size="sm" placeholder="Région" />
              </FormControl>
              <FormControl>
                <CountrySelector />
              </FormControl>
              <FormControl>
                <VilleSelector />
              </FormControl>
              <DropZone />
            </Stack>
            <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Annuler
                </Button>
                <Button size="sm" variant="solid">
                  Sauvegarder
                </Button>
              </CardActions>
            </CardOverflow>
          </Card>
        )}
      </Stack>
    </Box>
  );
}
