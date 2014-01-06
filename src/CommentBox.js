/** @jsx React.DOM */ 

define(function(require){
    var React = require('react');
    var CommentList = require('CommentList');
    var CommentForm = require('CommentForm'); 
    var $ = require('jquery');

    var CommentBox = React.createClass({displayName: 'CommentBox',
        loadCommentsFromServer: function() {
            $.ajax({
                url: this.props.url,
                success: function(data) {
                    this.setState({data: data});
                }.bind(this)
            });
        },

        getInitialState: function() {
            return {data: []};
        },

        handleCommentSubmit: function(comment) {
            /* console.log('comment', comment); */
            var comments = this.state.data;
            var newComments = comments.concat([comment]);
            this.setState({data: newComments});

            $.ajax({
                url: this.props.url,
                type: 'POST',
                data: comment,
                success: function(data) {
                    this.setState({data: data});
                }.bind(this)
            });
        },

        componentWillMount: function() {
            this.loadCommentsFromServer();
            /* setInterval(this.loadCommentsFromServer, this.props.pollInterval); */
        },

        render: function() {
            return(
                React.DOM.div( {className:"commentBox"}, 
                React.DOM.h1(null, "Comments"),
                CommentList( {data:this.state.data}),
                CommentForm( {onCommentSubmit:this.handleCommentSubmit} )
                )
            );
        }
    });

    return CommentBox;
});
