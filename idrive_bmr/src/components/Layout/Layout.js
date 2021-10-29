import React from 'react'
import Header from './Header'
import Menu from './Menu'

class Layout extends React.Component {
    state = {
        toggleMenu: true,
        togglemenuList: true
    };

    toggleMenuHandler = e => {
        e.preventDefault();
        this.setState(prevState => {
            return { toggleMenu: !prevState.toggleMenu };
        });
    };
    menuListClickHandler = e => {
        e.preventDefault();
        this.setState(prevState => {
            return { togglemenuList: !prevState.togglemenuList };
        });
    }

    render() {
        /*  let attachedClasses = ["container__wrapper", "menu__hide"];
         if (this.state.openDrawer) {
             attachedClasses = ["container__wrapper", "menu__expended"];
         } */

        return (
            <div className={["menu__wrap", this.state.toggleMenu ? "menu__expended" : "menu__hide"].join(" ")}>
                <Header
                    toggleMenuHandler={this.toggleMenuHandler} />
                <Menu
                    menuListClickHandler={this.menuListClickHandler}
                />
                <React.Fragment>{this.props.children}</React.Fragment>
            </div>
        );
    }
}
export default Layout;