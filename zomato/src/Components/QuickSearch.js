import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class QuickSearch extends Component {

    handleClick = (mealtype) => {
        this.props.history.push(`/filter?mealType=${mealtype}`);
       // this.props.history.push('/filter');
    }

    render() {
        const { image , title} = this.props;
        return (
            <>
                
                <div className="qs-box col-12 col-sm-12 col-md-6 col-lg-4" onClick = {() =>this.handleClick(title)}>
                    <div className="qs-box-items">
                        <img src={this.props.image} alt='not found'/>
                        <h4 className="qs-box-header">{this.props.title}</h4>
                        <p className="qs-box-desc">Start your day with exclusive breakfast options</p>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(QuickSearch)