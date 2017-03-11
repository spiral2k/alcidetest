import React from 'react';
import { connect } from 'react-redux';
import Image from '../components/Image';
import Loader from '../components/Loader';
import '../style/Grid.css';

const Grid = (props) => {
    let loader = (props.images.pixabay.fetching || props.images.flickr.fetching);
    let noResults = (!props.images.pixabay.fetching && !props.images.flickr.fetching && !props.images.imagesArr.length && !props.home);

    const renderImages = () => {
        return props.images.imagesArr.map((image) => {
            return <Image thumb={image.thumb} big={image.big} key={image.id} alt={image.text} dispatch={props.dispatch}/>
        })
    }

    if(loader)
        return <Loader />

    if(noResults)
        return <div className="no-results">There are no results that match your search :(</div>

    return (
        <div className="images-grid"> 
            { renderImages() } 
        </div>
    );
};

const mapStateToProps = (state) => {
        return {
                images: state.images,
                home: state.home
        }
}

export default connect(mapStateToProps)(Grid);

