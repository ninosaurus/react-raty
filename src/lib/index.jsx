import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

class ReactRaty extends PureComponent {
    renderStarts() {
        let stars = [];
        let ratingOnHalf = Math.round(this.props.rating * 2) / 2;
        for (let i = 0.5; i < 5; i++) {
            if (i === ratingOnHalf) {
                stars.push(<span key={i} className="glyphicon glyphicon-star-half" style={{color: "orange"}}/>)
                continue;
            }
            if (i < ratingOnHalf) {
                stars.push(<span key={i} className="glyphicon glyphicon-star" style={{color: "orange"}}/>)
            } else {
                stars.push(<span key={i} className="glyphicon glyphicon-star-empty" style={{color: "orange"}}/>)
            }
        }
        return stars;
    }

    render() {
        return (
            this.renderStarts()
        );
    }
}

ReactRaty.defaultProps = {
    rating: 4.24
};

ReactRaty.propTypes = {
    readonly: PropTypes.bool,
    rating: PropTypes.number
};
export default ReactRaty;
