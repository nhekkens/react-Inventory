/*
 * AddProductPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col, Container, Header, Content } from 'rsuite';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './AddProductPage.scss';

const AddProductPage = () => (
    <TransitionGroup component={null}>
        <CSSTransition appear timeout={1000} classNames="fade">
            <React.Fragment>
                <Helmet>
                <title>Add product</title>
                <meta name="description" content="A React.js Boilerplate application AddProductPage" />
                </Helmet>
                <Container>
                    <Header>
                        <h2>Add Product</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </React.Fragment>
        </CSSTransition>
    </TransitionGroup>
);
export default AddProductPage;
