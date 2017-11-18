import React, {Component, PropTypes} from 'react';
export class Tabs extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeTabIndex: props.defaultActiveTabIndex,
            tabType: this.props.tabType
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex,

        });
    }

    // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {

            return React.cloneElement(child, {
                onClick : this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }

    // Render current active tab content
    renderActiveTabContent() {
        const {children} = this.props;
        const {activeTabIndex} = this.state;
        if(children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }
    render() {
        return (
            <div>
                <div className={`tabs ${this.state.tabType}`}>
                    <ul>
                        {this.renderChildrenWithTabsApiAsProps()}
                    </ul>
                    </div>
                    {this.renderActiveTabContent()}
            </div>
        );
    }
};
Tabs.defaultProps = {
    defaultActiveTabIndex: 0
};
export default Tabs;