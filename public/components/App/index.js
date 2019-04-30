/**
 * NPM
 */
import React,{ Component } from 'react';
/**
 * LOCAL
 */
import Head from '../Head';
import List from '../List';

/**
 * CODE
 */
class App extends Component {
    state = {
        status: {
            todo: {
                name: 'todo',
                task: ['fruit','legume']
            },
            pending: {
                name: 'pending',
                task: []
            },
            completed: {
                name: 'completed',
                task: []
            }
        }
    }

    addTask = (newtask) => {
        const newstatus = {...this.state.status,todo: {...this.state.status.todo,task: [...this.state.status.todo.task,newtask]}}
        this.setState({
            status: newstatus,
        });
        console.log(done);
    }

    render() {
        const { status } = this.state;
        return (
            <div>
                <Head add={this.addTask} />
                {console.log(status)}
                <div id="container">
                { 
                    Object.keys(status).map(state => <List status={status[state]} />)
                }
                </div>
                
            </div>
        );
    }
}
/**
 * EXPORT
 */
export default App;
