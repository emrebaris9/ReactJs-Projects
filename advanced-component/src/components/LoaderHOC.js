import React, {Component} from 'react';

const LoaderHOC = (WrappedComponent, field) => {  // Veriler henüz gelmediyse Loading ekrandaki
    return class LoaderHOC extends Component{
        render() {
         return this.props[field].length === 0 ? <div>Loading...</div> :
                <WrappedComponent {...this.props}/>
        }
    }
};
export default LoaderHOC;
