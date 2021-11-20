import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class BaseProps extends PureComponent {
    render() {
        const {name} = this.props
        return (
            <div>
                {name}
            </div>
        );
    }
}

BaseProps.propTypes = {
    name: PropTypes.string.isRequired
};

export default BaseProps;
