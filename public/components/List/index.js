/**
 * NPM
 */
import React,{ Component } from 'react'; 
/**
 * LOCAL
 */
import './list.scss';
/**
 * CODE
 */
class List extends Component {
    render() {
        const { status } = this.props; 
        return ( 
            <div className="list-container">
                <h1 className="list-name">{status.name}</h1>
                <ul>
                    {status.task.map(task => <li>{task}</li>)}
                </ul>
            </div>
        );
    }
}
/**
 * EXPORT
 */
export default List;