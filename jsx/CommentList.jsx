/** @jsx React.DOM */ 

define(function(require){
    var React = require('react');
    var Comment = require('Comment');

    var CommentList = React.createClass({
        render: function() {
            var commentNodes = this.props.data.map(function(comment){
                return <Comment author={comment.author}>{comment.text}</Comment>; 
            })
            return (
                <div className='commentList'>
                    {commentNodes}
                </div>
            );
        }
    });

    return CommentList;
});
