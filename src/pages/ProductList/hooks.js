import useFetch from 'hooks/useFetch';
import useCart from 'hooks/useCart';
import { METHOD, PATH_NAME } from 'constants';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useProductListPage = () => {
  const {
    isLoading,
    isError,
    data: products,
    fetchApi,
  } = useFetch({
    method: METHOD.GET,
    url: '/api/products',
  });

  const navigate = useNavigate();
  const { authenticated } = useSelector((state) => state.user);
  const { cartItems, addItem, getItems } = useCart();

  const isEmpty = products && !isLoading && products.length === 0;

  const includedInCart = (id) =>
    cartItems && cartItems?.findIndex((item) => item.productId === id) !== -1;

  const handleClickCartButton = (id) => (e) => {
    e.stopPropagation();
    if (!authenticated) {
      navigate(PATH_NAME.LOGIN);
      return;
    }
    addItem(id);
  };

  useEffect(() => {
    fetchApi();
    if (!cartItems) {
      getItems();
    }
  }, []);

  return {
    isLoading,
    isError,
    products,
    isEmpty,
    includedInCart,
    handleClickCartButton,
  };
};

export default useProductListPage;
