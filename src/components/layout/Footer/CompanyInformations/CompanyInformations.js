import React from 'react';
import PropTypes from 'prop-types';
import S from './CompanyInformations.styles';

const CompanyInformations = ({ className }) => (
  <S.Wrapper className={className}>
    <S.A href="tel:+48797709856">+48 797 709 856</S.A>
    <S.A href="mailto:biuro@codemon.pl">biuro@codemon.pl</S.A>
    <S.Paragraph>REGON: 000000000</S.Paragraph>
    <S.Paragraph>KRS: 0000000000</S.Paragraph>
  </S.Wrapper>
);

CompanyInformations.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CompanyInformations;
