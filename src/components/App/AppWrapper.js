import React, {Fragment, Component} from 'react'
import AppHeader from "./AppHeader";
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import routes from '../../config/routes'
import history, {push} from "../../utils/history";
import AppFooter from "./AppFooter";



const appWrapper = (WrappedComponent) => {

    return class extends Component {
        render() {
            return <Fragment>
                <AppHeader/>
                <div className={"container-fluid"}>
                    <Nav tabs>
                        {routes.filter(r => r.hidden !== true).map(r => <NavItem  key={r.title}>
                            <NavLink href="#" onClick={e => {
                                e.preventDefault();
                                if (history.location.pathname !== r.path) {
                                    push(r.path)
                                }
                            }} active={history.location.pathname === r.path}>{r.title}</NavLink>
                        </NavItem>)}
                    </Nav>
                    <TabContent>
                        <TabPane>
                            <WrappedComponent {...this.props}/>
                        </TabPane>
                    </TabContent>
                </div>
                <AppFooter/>

            </Fragment>
        }
    }
}

export default appWrapper