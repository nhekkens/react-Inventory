import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Dropdown, Navbar, Sidebar, Sidenav, Nav } from 'rsuite';
import './SideBar.scss';

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: '56px',
    textAlign: 'center'
};

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Navbar.Body>
            
            <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    <Icon icon={expand ? 'angle-left' : 'angle-right'} />
                </Nav.Item>
            </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: true
        };
    }

    render() {
        const { isOpen } = this.props;
        const NavLink = props => <Nav.Item componentClass={Link} {...props} />;

        return (
        
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column' }}
                width={isOpen ? 260 : 56}
                collapsible
            >
                <Sidenav.Header>
                    <div style={headerStyles}>
                    <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                    <span style={{ marginLeft: 12 }}> Inventory Manager</span>
                    </div>
                </Sidenav.Header>
                
                <Sidenav
                    expanded={isOpen}            
                    appearance="subtle"
                >
                    <Sidenav.Body>
                        <Nav>
                            <NavLink to="/" icon={<Icon icon="dashboard" />}>Dashboard</NavLink>
                            <NavLink to="/add-product" icon={<Icon icon="magic" />}>Add Product</NavLink>
                            <NavLink to="/products" icon={<Icon icon="dashboard" />}>Products</NavLink>
                            <NavLink to="/settings" icon={<Icon icon="gear-circle" />}>Settings</NavLink>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
                <NavToggle expand={isOpen} onChange={this.props.handleSideBarToggle} />
            </Sidebar>
        );  
    }
}

export default SideBar;