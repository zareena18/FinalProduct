import React, { Component } from 'react';

import QuickSearch from './QuickSearch';

export default class QuickSearches extends Component {
    render() {
        return (
            <>
                <div className="bottomSection">
                    <h1 className="bottom-header">Quick Searches</h1>
                    <h3 className="bottom-subheader">Discover restaurants by type of meal</h3>
                    
                    <div className="qs">
                        <QuickSearch image={require('../Assets/breakfast.png').default} title={'Breakfast'}/>
                        <QuickSearch image={require('../Assets/lunch.png').default} title={'Lunch'}/>
                        <QuickSearch image={require('../Assets/dinner.png').default} title={'Dinner'}/>
                        <QuickSearch image={require('../Assets/snacks.png').default} title={'Snacks'}/>
                        <QuickSearch image={require('../Assets/drinks.png').default} title={'Drinks'}/>
                        <QuickSearch image={require('../Assets/nightlife.png').default} title={'Nightlife'}/>
                    </div> 
                </div>
            </>
        )
    }
}
