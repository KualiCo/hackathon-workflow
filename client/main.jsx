/**
 * @jsx React.DOM
 */

var React = require('react');
var Terms = require("./terms/termStore")

var HelloWorld = React.createClass({

  loadTermsFromServer: function(){
    Terms.getTerms()
    .then(function(data){
      console.log("loadTermsFromServer");
      this.setState( {terms : data });
    }.bind(this));

  },
  getInitialState: function() {
    console.log("getInitialState");
    return {terms:[]}
  },
  componentDidMount: function() {
    console.log("didMount");
    this.loadTermsFromServer();
    console.log("terms loaded");
  },
  render: function() {
    var terms = this.state.terms;
    return (
      <div>
          Terms: <TermsList terms={terms}/>
      </div>
    );
  }

});

var TermsList = React.createClass({
  render: function(){
    var terms = (this.props.terms || []).map(function(term){
      return (

        <option value="{term.termId}">{term.termName}</option>
      )
    });
    return (
      <select>
        {terms}
      </select>
    )
  }
})

React.renderComponent(<HelloWorld/>, document.body);
