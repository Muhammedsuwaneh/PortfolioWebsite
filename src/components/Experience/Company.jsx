import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';

const CardContainer = styled(Box)(({ theme }) => ({
    background: "#fff",
    margin: "1rem",
    boxShadow: "5px 10px 10px #eee",
    padding: "1.5rem 1.5rem",
}));

export default function Company({ company, logo, role, duration, description, link }) {
  return (
     <CardContainer sx={{ margin: { sm: "1rem", xs: "1rem"}, border: "1px solid #eee" }}>
            {/* <Divider textAlign="left" sx={{ textTransform: "uppercase", fontWeight: "bold"}}>
                <img src={logo} style={{ width: "100px", height: "100px"}} alt={company}/>
            </Divider> */}
            <Box sx={{ padding: "0 1rem", marginTop: "1rem"}}>
            <Typography sx={{ color: "#333"}}>
                {role}
            </Typography>
            <Typography variant="h2" sx={{ fontSize: "1.2rem", marginTop: "1rem", color: "#333"}}>
                {company}
            </Typography>
            <Typography variant="h2" sx={{ fontSize: "1.2rem", marginTop: "1rem", color: "#333"}}>
                {duration}
            </Typography>
            <Divider sx={{ color: "#B9BFC6", padding: "1rem 0"}}/>
            <Typography variant="h2" sx={{ fontSize: "1.2rem", marginTop: "1rem", color: "#333", lineHeight: "2rem"}}>
                {description}
            </Typography>
            <Divider sx={{ color: "#000", padding: ".5rem 0"}}/>
            <Link href={link} target="_blank" sx={{ textDecoration: "none"}}>
              company site: <LinkIcon />
            </Link>
       </Box>
     </CardContainer>
  );
}