import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	render() {
		return (
			<div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this._renderPosts()}
				</ul>
			</div>
		);
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	_renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<li
					className="list-group-item"
					key={post.id}>
						{post.title}
				</li>
			);
		});
	}
}

function mapStateToProps(state) {
	return ({
		posts: state.posts
	});
}

// providing second argument as { fetchPosts } here, which is short for {fetchPosts: fetchPosts},
// is equivalent to passing method mapDispatchToProps(dispatch) (which returns fetchPosts)
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);