import PropTypes from 'prop-types';
import { buttonColor, buttonSize } from './style';
import * as Styled from './style';

const Button = ({ colorType, size, children, ...rest }) => {
  return (
    <Styled.Button type="button" colorType={colorType} size={size} {...rest}>
      {children}
    </Styled.Button>
  );
};

Button.propTypes = {
  colorType: PropTypes.oneOf(Object.keys(buttonColor)),
  size: PropTypes.oneOf(Object.keys(buttonSize)),
  children: PropTypes.string,
};

export default Button;
