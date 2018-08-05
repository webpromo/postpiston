

import React, {Component} from 'react';

export default class Facebook extends Component {
    constructor(){
        super()
        this.state = {
            article:"",
            targetUrl:""
        }
    }

    updateArticle(article){
        this.setState({
            article: article
          })
    }

    updateURL(URL){
        this.setState({
            URL
          })
    }
    
    render() {
    return (
       <section className="fb-section">
            <h1> Paste your Press Release (or Article)</h1>
            <div className="row-of-divs">
                <div className="help-text"><h3>Directions</h3>Just post the text of your article here. Then paste the URL to where you want visitors to go to read more.  Then click "Save".</div>
                <textarea cols="120" rows="30" onChange={(e) => this.updateArticle(e.target.value)} defaultValue={this.state.article}/>
                <div className="fb-buttons">
                    <input placeholder="Paste target URL here"></input>
                    <button>Save</button>
                </div>
            </div>
        </section>
    )
    }
}


