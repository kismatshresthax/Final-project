import {
    AppBar,
    CssBaseline,
    Grid,
    Toolbar,
    Typography,
    Link,
    TextField,
    Button,
    Box,Container
  } from "@mui/material";
  import React from "react";
  import InfoIcon from "@mui/icons-material/Info";
  import SearchIcon from "@mui/icons-material/Search";
  
  const About = () => {
    return (
      <>
        <CssBaseline />
      
              <main>
                  <Grid>
                  <Box
                          sx={{
                              backgroundImage:
                                  'url("https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                              height: '90vh',
                              backgroundSize: '100% 100%',
                          }}
                      >
                          <Grid
                              py={5}
                              container
                              justifyContent="center"
                              sx={{ height: '100%' }}
                              alignItems="center"
                          >
                              
                              <Grid item>
                                  <Typography
                                      variant="h6"
                                      sx={{ color: 'black', fontWeight: 'bold',height: '100px'}}
                                  >Kist Colllection/ About Us 
                                  </Typography>
                              </Grid>
                           
                          </Grid>
                      </Box>
                      <Container>
                        <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18SO.dCzqK1RjSZFpXXakSXXa.jpg_2200x2200q75.jpg_.webp" alt="" />
                      </Container>
                      <Container>
<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1N80mrHj1gK0jSZFuXXcrHpXa.jpg_2200x2200q75.jpg_.webp" alt="" />
                      </Container>
                      <Container>
<img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB17wbidyrpK1RjSZFhXXXSdXXa.jpg_2200x2200q75.jpg_.webp" alt="" />
                      </Container>
                
                  </Grid>
  
  
              </main>
      </>
    );
  };
  
  export default About;
  