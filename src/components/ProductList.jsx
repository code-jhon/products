import { useContext } from 'react'
import { ProductsContext } from '../providers/ProductsProvider'
import ProductCard from './ProductCard'
import { styled } from '@mui/material/styles';

const ContentList = styled('div')(({ theme }) => ({
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

const ContentItem = styled('div')(({ theme }) => ({
  margin: '20px'
}));

function ProductList() {
  const { products, fetched } = useContext(ProductsContext)

  const productList = fetched && products.map(
    product => (
      <ContentItem key={product.id}>
        <ProductCard product={product} />
      </ContentItem>
    )
  )

  const content = fetched ? (<>{productList}</>) : ("There's no items to show");
  return (
    <ContentList>{ content }</ContentList>
  )
}

export default ProductList