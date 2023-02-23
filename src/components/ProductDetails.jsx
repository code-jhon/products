import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { ProductsContext } from '../providers/ProductsProvider';

import { styled } from '@mui/material/styles';

const ProductDetailContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductDetails() {
  const { isModalOpen, setIsModalOpen, productDetail } = useContext(ProductsContext);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const modalContent = productDetail.id && (
    <div>
      <Dialog
        fullScreen
        open={isModalOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              { productDetail.title }
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Back
            </Button>
          </Toolbar>
        </AppBar>
        <>
          <CssBaseline />
          <Container maxWidth="sm">
            <ProductDetailContent>
              <div >
                <img style={{ maxWidth: 350}} src={productDetail.image} alt={productDetail.title} />
              </div>
              <div>
                <List>
                  <ListItem>
                    <ListItemText primary={productDetail.title} secondary={productDetail.category} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Price: $${productDetail.price}`} secondary={`Rating: ${productDetail.rating.rate}`} />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText secondary={productDetail.description} />
                  </ListItem>
                  <Divider />
                </List>
              </div>
            </ProductDetailContent>
          </Container>
        </>
      </Dialog>
    </div>
  )


  return <>{ modalContent }</>
}