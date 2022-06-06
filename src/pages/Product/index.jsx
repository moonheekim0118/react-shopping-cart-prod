import * as Styled from './style';
import useProductPage from './hooks';
import ProductDetail from 'components/Product/ProductDetail/ProductDetail';
import Skeleton from 'components/Common/Skeleton/Skeleton';
import errorApiImg from 'assets/png/errorApiImg.png';
import ImgWrapper from 'components/Common/ImgWrapper/ImgWrapper';
import itemAltImg from 'assets/png/itemAltImg.png';

const Product = () => {
  const { isLoading, isError, product, handleAddCartItem } = useProductPage();
  if (isLoading)
    return (
      <Styled.Wrapper>
        <Skeleton size="large" />
      </Styled.Wrapper>
    );

  if (isError)
    return (
      <Styled.Wrapper>
        <ImgWrapper src={errorApiImg} />
      </Styled.Wrapper>
    );

  return (
    <Styled.Wrapper>
      {product && (
        <ProductDetail
          id={product.id}
          imgUrl={product.imgUrl || itemAltImg}
          name={product.name}
          price={product.price}
          onClickCartButton={handleAddCartItem}
        />
      )}
    </Styled.Wrapper>
  );
};

export default Product;
