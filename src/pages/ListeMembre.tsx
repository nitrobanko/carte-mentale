
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Autocomplete from '@mui/joy/Autocomplete';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Slider from '@mui/joy/Slider';
import Sheet from '@mui/joy/Sheet';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

export default function TeamExample() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const peopleData = [
    {
      name: 'Andrew Smith',
      position: 'Insersite',
      avatar2x: 'https://i.pravatar.cc/80?img=7',
      companyData: [
        {
          role: 'événement 1',
          name: 'Dribbble',
          years: '2015-now',
        },
        {
          role: 'événement 2',
          name: 'Pinterest',
          logo: 'https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg',
          years: '2012-2015',
        },
      ],
      skills: ['Insersite', 'Les Mureaux'],
    },
    {
      name: 'John Doe',
      position: 'France Travail',
      avatar2x: 'https://i.pravatar.cc/80?img=8',
      companyData: [
        {
          role: 'UI Engineer',
          name: 'Google',
          logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg',
          years: '2018-now',
        },
        {
          role: 'Frontend Developer',
          name: 'Amazon',
          logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg',
          years: '2015-2018',
        },
      ],
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Alice Johnson',
      position: 'Mission Locale',
      avatar2x: 'https://i.pravatar.cc/80?img=9',
      companyData: [
        {
          role: 'Product Manager',
          name: 'Microsoft',
          logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
          years: '2016-now',
        },
        {
          role: 'Product Analyst',
          name: 'IBM',
          logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg',
          years: '2013-2016',
        },
      ],
      skills: ['Product Management', 'Market Analysis'],
    },
    {
      name: 'Eva Brown',
      position: 'Digital up',
      avatar2x: 'https://i.pravatar.cc/80?img=10',
      companyData: [
        {
          role: 'Art Director',
          name: 'Adobe',
          logo: 'https://www.vectorlogo.zone/logos/adobe/adobe-icon.svg',
          years: '2019-now',
        },
        {
          role: 'Graphic Designer',
          name: 'Apple',
          logo: 'https://www.vectorlogo.zone/logos/apple/apple-icon.svg',
          years: '2016-2019',
        },
      ],
      skills: ['Graphic Design', 'Illustration'],
    },
  ];

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Stack
        id="tab-bar"
        direction="row"
        justifyContent="space-around"
        spacing={1}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          zIndex: '999',
          bottom: 0,
          position: 'fixed',
          width: '100dvw',
          py: 2,
          backgroundColor: 'background.body',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/joy-ui/getting-started/templates/email/"
          size="sm"
          startDecorator={<EmailRoundedIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}
        >
          Email
        </Button>
        <Button
          variant="plain"
          color="neutral"
          aria-pressed="true"
          component="a"
          href="/joy-ui/getting-started/templates/team/"
          size="sm"
          startDecorator={<PeopleAltRoundedIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}
        >
          Team
        </Button>
        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/joy-ui/getting-started/templates/files/"
          size="sm"
          startDecorator={<FolderRoundedIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}
        >
          Files
        </Button>
      </Stack>
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
        </Layout.Header>
        <Layout.SideNav>
          <Sidebar />
        </Layout.SideNav>
        <Layout.SidePane>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="title-lg" textColor="text.secondary" component="h1">
              Participants
            </Typography>
            <Button startDecorator={<PersonRoundedIcon />} size="sm">
              Ajouter un membre
            </Button>
          </Box>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="title-md">Filtre</Typography>
            <Button size="sm" variant="plain">
              Clear
            </Button>
          </Box>
          <AccordionGroup
            sx={{
              [`& .${accordionDetailsClasses.content}`]: {
                px: 2,
              },
              [`& .${accordionSummaryClasses.button}`]: {
                px: 2,
              },
            }}
          >
            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Organisme</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
                  <Autocomplete
                    size="sm"
                    placeholder="Organisme…"
                    options={[
                      {
                        category: 'Organisme',
                        title: 'Mission Locale',
                      },
                      {
                        category: 'Organisme',
                        title: 'Insersite',
                      },
                      {
                        category: 'Organisme',
                        title: 'Digital Up',
                      },
                     
                      {
                        category: 'Organisme',
                        title: 'France Travail',
                      },
                      
                    ]}
                    groupBy={(option) => option.category}
                    getOptionLabel={(option) => option.title}
                  />
                  <Box sx={{ my: 2, display: 'flex', gap: 1 }}>
                    <Chip
                      variant="soft"
                      size="sm"
                      endDecorator={<ChipDelete variant="soft" />}
                    >
                      Insersite
                    </Chip>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Localisation</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
                  <Autocomplete
                    size="sm"
                    placeholder="Villes, communes…"
                    options={[
                      // some of Thailand provinces
                      'Les Mureaux ',
                      'Meulan',
                      'Hardricourt',
                      'Vexin',
                      'Buriram',
                      'Chachoengsao',
                      'Chai Nat',
                      'Chaiyaphum',
                      'Chanthaburi',
                      'Chiang Mai',
                      'Chiang Rai',
                      'Chonburi',
                    ]}
                  />
                  <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column' }}>
                    <Typography level="title-sm">Range</Typography>
                    <Slider
                      size="sm"
                      variant="solid"
                      valueLabelFormat={(value) => `${value} km`}
                      defaultValue={6}
                      step={1}
                      min={0}
                      max={20}
                      valueLabelDisplay="on"
                    />
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            
           
           
          </AccordionGroup>
        </Layout.SidePane>
        <Layout.Main>
          <List
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 2,
            }}
          >
            {peopleData.map((person, index) => (
              <Sheet
                key={index}
                component="li"
                variant="outlined"
                sx={{
                  borderRadius: 'sm',
                  p: 2,
                  listStyle: 'none',
                }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Avatar
                    variant="outlined"
                    src={person.avatar2x}
                    srcSet={`${person.avatar2x} 2x`}
                    sx={{ borderRadius: '50%' }}
                  />
                  <div>
                    <Typography level="title-md">{person.name}</Typography>
                    <Typography level="body-xs">{person.position}</Typography>
                  </div>
                </Box>
                <Divider component="div" sx={{ my: 2 }} />
                <List sx={{ '--ListItemDecorator-size': '40px', gap: 2 }}>
                  {person.companyData.map((company, companyIndex) => (
                    <ListItem key={companyIndex} sx={{ alignItems: 'flex-start' }}>
                      <ListItemDecorator
                        sx={{
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            height: '100%',
                            width: '1px',
                            bgcolor: 'divider',
                            left: 'calc(var(--ListItem-paddingLeft) + 12px)',
                            top: '50%',
                          },
                        }}
                      >
                        <Avatar
                          src={company.logo}
                          sx={{ '--Avatar-size': '24px' }}
                        />
                      </ListItemDecorator>
                      <ListItemContent>
                        <Typography level="title-sm">{company.role}</Typography>
                        <Typography level="body-xs">{company.name}</Typography>
                      </ListItemContent>
                      <Typography level="body-xs">{company.years}</Typography>
                    </ListItem>
                  ))}
                </List>
                <Button
                  size="sm"
                  variant="plain"
                  endDecorator={<KeyboardArrowRightRoundedIcon fontSize="small" />}
                  sx={{ px: 1, mt: 1 }}
                >
                  Plus
                </Button>
                <Divider component="div" sx={{ my: 2 }} />
                <Typography level="title-sm">Tags:</Typography>
                <Box sx={{ mt: 1.5, display: 'flex', gap: 1 }}>
                  {person.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      variant="outlined"
                      color="neutral"
                      size="sm"
                    >
                      {skill}
                    </Chip>
                  ))}
                </Box>
              </Sheet>
            ))}
          </List>
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
}
