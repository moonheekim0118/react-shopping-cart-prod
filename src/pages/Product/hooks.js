import useFetch from 'hooks/useFetch';
import useCart from 'hooks/useCart';
import { useParams } from 'react-router-dom';
import { METHOD } from 'constants';
import { useEffect } from 'react';

const useProductPage = () => {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: product,
    fetchApi,
  } = useFetch({
    method: METHOD.GET,
    url: `/api/products/${id}`,
  });
  const { addItem } = useCart();

  const handleAddCartItem = () => {
    addItem(id);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { isLoading, isError, product, handleAddCartItem };
};

export default useProductPage;
