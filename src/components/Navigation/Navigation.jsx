import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, styled, Stack } from '@mui/material';

const NavigationTheme = styled(Grid)(({ theme }) => ({
    background: "#0E141E",
    borderBottom: "1px solid #eee",
    width: "100%",
    padding: "1rem",
    color: "#fff",
}));

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Experience', 'Projects'];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Stack>
        {navItems.map(link => {
            return (
                <Link href={`${(link === "Home") ? "/": "#"+link.toLowerCase()}`} underline="none" key={link} 
                sx={{ padding: "0 1rem", color: "#1D1F21", margin: "1.2rem 0"}}>
                    {link}
                </Link>
            )   
          })}
      </Stack>
      <Box sx={{ paddingTop: "1rem" }}>
            <Link href="https://www.instagram.com/muhammed_suwaneh/" target="_blank" underline="none" sx={{ padding: "0 .4rem", color: "#1D1F21"}}>
                <InstagramIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/muhammed-suwaneh-694261132/" target="_blank" underline="none" sx={{ padding: "0 .4rem", color: "#1D1F21"}}>
                <LinkedInIcon />
            </Link>
            <Link href="https://github.com/Muhammedsuwaneh" target="_blank" underline="none" sx={{ padding: "0 .4rem", color: "#1D1F21"}}>
                <GitHubIcon />
            </Link>
       </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <NavigationTheme container>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'block', xs: 'block', lg: 'none'}, margin: "0 1rem" }}
          >
          <MenuIcon />
          </IconButton>
          <Grid item xs={4} sx={{ paddingTop: "1rem", flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }}}>
            <Link href="https://www.instagram.com/muhammed_suwaneh/" target="_blank" underline="none" sx={{ padding: "0 1rem", color: "#fff"}}>
                <InstagramIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/muhammed-suwaneh-694261132/" target="_blank" underline="none" sx={{ padding: "0 1rem", color: "#fff"}}>
                <LinkedInIcon />
            </Link>
            <Link href="https://github.com/Muhammedsuwaneh" target="_blank" underline="none" sx={{ padding: "0 1rem", color: "#fff"}}>
                <GitHubIcon />
            </Link>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: { lg: 'center', sm: 'right', md: 'right', xs: 'right'}, 
          margin: { xs: '0 0 0 40%', sm: '0 0 0 40%', md: '0 0 0 50%', lg: '0'}}}>
             <Link href="/" underline="none" 
             sx={{ textTransform: "uppercase", fontSize: "2rem", color: "#FAB93C", fontWeight: "bold" }}>
                 MS
             </Link>
          </Grid>
          <Grid item xs={4} sx={{ paddingTop: "1rem",  display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }}}>
           {navItems.map(link => {
              return (
                <Link href={`${(link === "Home") ? "/": "#"+link.toLowerCase()}`} underline="none" key={link} sx={{ padding: "0 1rem", color: "#fff"}}>
                    {link}
                </Link>
            )   
           })}
       </Grid>
        </NavigationTheme>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', xs: 'block', lg: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;