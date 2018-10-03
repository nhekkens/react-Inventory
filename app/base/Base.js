/**
 *
 * Base
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Header, Content, Footer, Drawer, Sidenav } from 'rsuite';

import DashBoardPage from 'pages/DashBoardPage/Loadable';
import AddProductPage from 'pages/AddProductPage/Loadable';
import ProductsPage from 'pages/ProductsPage/Loadable';
import SettingsPage from 'pages/SettingsPage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import SideBar from 'components/SideBar';
import 'rsuite/styles/less/index.less';
import './Base.scss';

export class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen : true
        }
    }

    handleSideBarToggle = () => {
        this.setState(prevState => ({
            isSideBarOpen : !prevState.isSideBarOpen
        }))
    }

    componentWillMount() {
        //localStorage.removeItem('location');
    }
    render() {
        return (
            <Router>
                <Route
                    render={({ location }) => {
                        return (
                            <React.Fragment>
                                <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
                                    <meta name="description" content="A React.js Boilerplate application" />
                                </Helmet>

                                <Container>

                                    {/* Main Navigation */}
                                    <SideBar handleSideBarToggle={this.handleSideBarToggle} isOpen={this.state.isSideBarOpen} />
                                    
                                    <div className={"pageContainer " +  (this.state.isSideBarOpen ? 'isNotExpanded' : 'isExpanded')}>
                                        <Switch location={location}>
                                            <Route
                                                exact
                                                path="/"
                                                render={props => <DashBoardPage {...props} />}
                                            />
                                            <Route
                                                exact
                                                path="/add-product"
                                                render={props => <AddProductPage {...props} />}
                                            />
                                            <Route
                                                exact
                                                path="/products"
                                                render={props => <ProductsPage {...props} />}
                                            />
                                            <Route
                                                exact
                                                path="/settings"
                                                render={props => <SettingsPage {...props} />}
                                            />
                                            <Route path="*" component={NotFoundPage} />
                                        </Switch>
                                    </div>
                                </Container>
                            </React.Fragment>
                        );
                    }}
                />
            </Router>
        );
    }
}

export default Base;
