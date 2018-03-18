import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GoThreeBars from 'react-icons/lib/go/three-bars';
import injectSheet from 'react-jss';
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart';
// import './Header.css';
import styles from './styles';
import { blue300, white } from '../../global/colors';
import { smallScreen } from '../../global/screenSize';

const MenuLink = ({ children, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Link to={to} className={match ? 'route--active' : ''} >
        {children}
      </Link>
    )}
  />
);

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandMenu: false,
    };
  }

  componentWillMount() {
    if (window.innerWidth > smallScreen) {
      this.setState({ expandMenu: true });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      // console.log('浏览器外宽：',window.outerWidth);
      if (this.state.expandMenu === false && window.innerWidth > smallScreen) {
        this.setState({ expandMenu: true });
      } else if (this.state.expandMenu && window.innerWidth < smallScreen) {
        this.setState({ expandMenu: false });
      }
    });
  }

  toggleMenuExpand = () => {
    this.setState({expandMenu: !this.state.expandMenu});
  }

  render() {
    return (
      <div>
        <div className={this.props.classes.header} >
          <GoThreeBars
            color={this.state.expandMenu ? blue300 : white}
            size={20}
            onClick={this.toggleMenuExpand}
            style={{ padding: 5, transitionDuration: '0.2s', cursor: 'pointer' }}
          />
          <span
            style={{ color: this.state.expandMenu ? blue300 : white, padding: 5, transitionDuration: '0.2s', fontSize: 12, cursor: 'pointer' }}
            onClick={this.toggleMenuExpand}  
          >
            MENU
          </span>
        </div>
        {
          this.state.expandMenu ?
            <nav className={this.props.classes.headerItems}>
              <MenuLink activeOnlyWhenExact to="/">HOME</MenuLink>
              <MenuLink to="/products">PRODUCTS</MenuLink>
              <MenuLink to="/orders">orders</MenuLink>
              <MenuLink to="/customers">customers</MenuLink>
              <MenuLink to="/cart" label="cart">CART<TiShoppingCart size={18} /></MenuLink>
            </nav>
            : null
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Header2);
