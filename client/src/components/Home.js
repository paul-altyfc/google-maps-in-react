import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 53.3789, lng: -2.3435}}
					height='800px'
					zoom={16}
				/>
			</div>
		);
	}
}

export default Home;
