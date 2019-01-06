import React from 'react'
import ReactDOM from 'react-dom';
import faker from 'faker' ;
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui contatiner comments">
            <ApprovalCard>
                <div>
                    <h4>
                        Warning
                    </h4>
                </div>
                Are you sure you want to do this?
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="rudi" 
                    timeAgo={new Date()} 
                    content="nice blog"
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="alex" 
                    content="i like this"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="jane" 
                    content="bad thing"/>
            </ApprovalCard>
        </div>
    );

}

ReactDOM.render(<App />, document.querySelector('#root'));

//http://semantic-ui.com