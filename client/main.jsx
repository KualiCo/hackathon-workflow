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
        <TermsList terms={terms}/>
      </div>
    );
  }

});

var TermsList = React.createClass({
  render: function(){
    var terms = (this.props.terms || []).map(function(termName){
      return (
        <li>{termName}</li>
      )
    });
    return (
      <ul>
        {terms}
      </ul>
    )
  }
})

React.renderComponent(<HelloWorld/>, document.body);
