/*
 * SettingsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col, Container, Header, Content } from 'rsuite';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './SettingsPage.scss';

const SettingsPage = () => (
    <TransitionGroup component={null}>
        <CSSTransition appear timeout={1000} classNames="fade">
            <React.Fragment>
                <Helmet>
                <title>Settings</title>
                <meta name="description" content="A React.js Boilerplate application SettingsPage" />
                </Helmet>
                <Container>
                    <Header>
                        <h2>Settings</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </React.Fragment>
        </CSSTransition>
    </TransitionGroup>
);
export default SettingsPage;
