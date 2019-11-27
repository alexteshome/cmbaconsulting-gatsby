import React, { Component } from "react"
import { Responsive } from "semantic-ui-react"
import DesktopContainer from "./desktopContainer"
//import MobileContainer from "./mobileContainer";
import PropTypes from "prop-types"
import Footer from "./footer"

let items = [
  {
    content: "Home",
    key: "home",
    to: "/",
  },
  { content: "About", key: "about", to: "/about" },
  {
    content: "Contact Us",
    key: "contact",
    to: "/contact",
  },
]

const getWidth = () => {
  const isSSR = typeof window === "undefined"

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class ResponsiveContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children, activeTab, setActiveTab } = this.props
    const { sidebarOpened } = this.state

    const containerProps = {
      getWidth: getWidth,
      items: items,
      handleSidebarHide: this.handleSidebarHide,
      handleToggle: this.handleToggle,
      sidebarOpened: sidebarOpened,
      setActiveTab: setActiveTab,
      activeTab: activeTab,
    }

    return (
      <div>
        <DesktopContainer {...containerProps}>{children}</DesktopContainer>
        {/* <MobileContainer {...containerProps}>{children}</MobileContainer> */}
        <Footer />
      </div>
    )
  }
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer
