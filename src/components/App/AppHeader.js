import React, {Component} from 'react'
import {faUser, faCog, faLock} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import logo from '../../assets/img/brand/logo.png'


class AppHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <div className="container-fluid oe-container">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img src={logo} alt={"KMS Online Exams"}/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                                <img
                                    src={'assets/img/avatars/6.jpg'}
                                    className="img-avatar" alt={"KMS Online Exams"}
                                />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <FontAwesomeIcon icon={faUser}/>{' '}Profile
                                </DropdownItem>
                                <DropdownItem>
                                    <FontAwesomeIcon icon={faCog}/>{' '}
                                    Setting
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    <FontAwesomeIcon icon={faLock}/>{' '}
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
            ;
    }
}

export default AppHeader;