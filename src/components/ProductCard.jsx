import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ProductsContext } from '../providers/ProductsProvider';

export default function ProductCard({ product }) {
  const { setIsModalOpen, setProductDetail } = useContext(ProductsContext)

  const handleOpen = () => {
    setProductDetail(product)
    setIsModalOpen(true)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        { `${product.title.slice(0, 20)}...` }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { `${product.description.slice(0, 100)}...` }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>See More</Button>
      </CardActions>
    </Card>
  );
}