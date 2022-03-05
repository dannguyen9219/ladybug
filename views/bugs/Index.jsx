const React = require('react');
const DefaultLayout = require('../Default.jsx')

class Index extends React.Component {
    render() {
        const { bugs } = this.props;
        return(
            <DefaultLayout>
                <div>
                    {
                        bugs.map((bug) => (
                            <article>
                                {/* <a href={`/reviews/${review._id }`}> */}
                                    <h3>Support Ticket Subject: {bug.supportTicketTitle}</h3>
                                    <h3>Status: {bug.ticketStatus}</h3>
                                    <h3>Description: {bug.ticketDescription}</h3>
                                    <h3>Priority: {bug.priority}</h3>
                                {/* </a> */}
                            </article>
                        ))
                    }
                </div>
            </DefaultLayout>
        )
    }
};

module.exports = Index;