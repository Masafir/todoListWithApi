/**
 * NPM
 */

import React,{ Component } from 'react';
import ToolBar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/**
 * LOCAL
 */
import './head.scss';
/**
 * CODE
 */
class Head extends Component {
    state = {
        task: ""
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { add } = this.props;
        console.log('Voici donc votre nouvelle tâche : ',this.state.task);
        add(this.state.task);
        this.setState({
            task: "",
        });
    }


    handleChange = (evt) =>  {
        const { value } = evt.target;
        this.setState({
            task: value,
        });
        console.log(this.state.task);
    }

    render() {
        return (
            <div id="head">
                <ToolBar id="Head-title">
                    <h1>Tododew</h1>
                </ToolBar>
                <div className="add-task">
                    <form onSubmit={this.handleSubmit}>
                        <TextField 
                        className="add-task-bar"
                        name="add-task-bar"
                        label="Ajouter une tâche"
                        value={this.state.task}
                        onChange={this.handleChange}
                        variant="outlined"
                        />
                        <Button 
                        className="add-task-button"
                        name="add-button"
                        type="submit"
                        id="button"
                        >
                        Ajouter
                        </Button>
                    </form>
                </div>
                
            </div>
        );
    }
}
/**
 * EXPORT
 */
export default  Head;