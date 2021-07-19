import React from 'react';
import { Container, Wrapper, Row, Column, Link, Title, btn, btnlink } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};





Footer.btn = function FooterTitle({ children, ...restProps }) {
  return <btn {...restProps}>{children}</btn>;
};



Footer.info = function FooterTitle({ children, ...restProps }) {
  return <info {...restProps}>{children}</info>;
};

