import React, { Component } from 'react';
import c3 from 'c3'
import PropTypes from 'prop-types';

import './Chart.css';

export default class Chart extends Component {

    componentDidMount() {
        this.updateChart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateChart();
    }

    updateChart = () => {
        c3.generate({
            bindto: '#chart',
            data: {
                columns: this.props.columns,
                type: this.props.chartType
            }
        });
    }

    render() {
        return <div id="chart"/>
    }
}


Chart.propTypes = {
    columns: PropTypes.elementType.isRequired,
    type: PropTypes.string.isRequired
}