/*
 * DashBoardPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col, Container, Header, Content } from 'rsuite';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './DashBoardPage.scss';

const DashBoardPage = () => (
    <TransitionGroup component={null}>
        <CSSTransition appear timeout={1000} classNames="fade">
            <React.Fragment>
                <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="A React.js Boilerplate application DashBoardPage" />
                </Helmet>
                <Container>
                    <Header>
                        <h2>Dashboard</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </React.Fragment>
        </CSSTransition>
    </TransitionGroup>
);
export default DashBoardPage;
