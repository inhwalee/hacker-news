import React from 'react';
import { Container } from '../Container';
import {
  HeaderBlock,
  HeaderTop,
  HeaderTitle,
  HeaderOption,
  OptionButton,
} from './Styles';
import { IconSearch, IconOption } from '../../Assets/Icons';

const HeaderSub = function ({ title }) {
  return (
    <HeaderBlock>
      <Container>
        <HeaderTop>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderOption>
            <OptionButton>
              <IconSearch />
            </OptionButton>
            <OptionButton>
              <IconOption />
            </OptionButton>
          </HeaderOption>
        </HeaderTop>
      </Container>
    </HeaderBlock>
  );
};

export default HeaderSub;
