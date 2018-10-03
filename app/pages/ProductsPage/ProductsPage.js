/*
 * ProductsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col, Container, Header, Content } from 'rsuite';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './ProductsPage.scss';

const ProductsPage = () => (
    <TransitionGroup component={null}>
        <CSSTransition appear timeout={1000} classNames="fade">
            <React.Fragment>
                <Helmet>
                <title>Products</title>
                <meta name="description" content="A React.js Boilerplate application ProductsPage" />
                </Helmet>
                <Container>
                    <Header>
                        <h2>Products</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </React.Fragment>
        </CSSTransition>
    </TransitionGroup>
);
export default ProductsPage;
