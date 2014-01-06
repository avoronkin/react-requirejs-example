/** @jsx React.DOM */ 

define(function(require){
    var React = require('react');
    var Comment = require('Comment');

    var CommentList = React.createClass({displayName: 'CommentList',
        render: function() {
            var commentNodes = this.props.data.map(function(comment){
                return Comment( {author:comment.author}, comment.text); 
            })
            return (
                React.DOM.div( {className:"commentList"}, 
                    commentNodes
                )
            );
        }
    });

    return CommentList;
});
