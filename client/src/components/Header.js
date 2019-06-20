import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    renderContent(){
        switch(this.props.auth){
            case null:
                return 'Still Deciding';
            case false:
                return 'Im Loggedout';
            default:
                return 'Im logged IN';
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }

}

function mapStatueToProps(state){
    return { auth: state.auth }
}

export default connect(mapStatueToProps)(Header);