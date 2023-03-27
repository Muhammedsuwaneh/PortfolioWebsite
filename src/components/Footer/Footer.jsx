import React from 'react'
import { Box, styled, Typography, Divider } from "@mui/material"

const FooterContainer = styled(Box)(() => ({
    background: "#E5E5E7",
    display:"flex",
    justifyContent: "space-around",
    padding: "2rem",
}));

export default function Footer() {
  return (
    <>
        <Divider />
        <FooterContainer sx={{ flexDirection: { sm: "row", xs: "column"}, textAlign: { xs: "center"} }}>
        <Typography variant="p" sx={{ margin: { xs: "1rem 0", sm: "0"}}}>Muhammed Suwaneh Dev</Typography>
        <Typography variant="p">Copyright &copy; 2023 - All rights reserved</Typography>
        </FooterContainer>
    </>
  )
}
