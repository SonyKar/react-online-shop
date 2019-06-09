import React, { Component } from 'react';
import { connect } from 'react-redux';

import "./Collections.css";
import Spinner from '../../../components/Spinner/Spinner';
import Collection from '../../../components/Collection/Collection';
import Footer from '../../../components/Footer/Footer';
import * as actions from '../../../store/actions/index';

class Collections extends Component {
    componentDidMount() {
        if (this.props.collections.length === 0) {
            this.props.onFetchCollections();
        }
    }

    render() {
        let collections = <Spinner />;
        if (!this.props.loading) {
            collections = this.props.collections.map(collection => (
                <Collection 
                    key={collection.id}
                    name={collection.name}
                    image={require('../../../assets/img/' + collection.image)}
                />
            ));
        }

        return (
            <React.Fragment>
                <div className="Collections">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-2">
                                <h2 className="text-center">ALL COLLECTIONS</h2>
                            </div>
                        </div>
                        <div className="d-flex align-items-stretch flex-wrap">
                            {/* <Collection image={Collection1} name="URBAN T-SHIRTS" />
                            <Collection image={Collection2} name="SWEATSHIRTS" />
                            <Collection image={Collection3} name="SALE" /> */}
                            {collections}
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        collections: state.collection.collections,
        loading: state.collection.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCollections: () => dispatch(actions.fetchCollections())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);