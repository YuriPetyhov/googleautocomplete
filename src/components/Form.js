import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Input from './GoogleAvtoComplete';
import { Field, reduxForm, change } from 'redux-form';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';




class Form extends Component {

    validation = (value) => value ? undefined : "Укажите локацию";

    render() {

        return (
            <form style={styles.form}>
                <Field
                    label = 'Старт'
                    name="startPoint"
                    type="text"
                    placeholder="Начальная точка маршрута"
                    component={Input}
                    validate={[this.validation]}

                />
                <div style={styles.addLocation}> 
                    <Fab color="primary" aria-label="Add" size="small"  > <AddIcon /></Fab>
                    <span style={styles.textLocation}>Дабавить точку маршута</span>
                </div>
                    
                <Field
                    label="Финиш"
                    name="finishPoint"
                    type="text"
                    placeholder="Конечная точка маршрута"
                    component={Input}
                />

            </form>
        )
    }
}

Form = reduxForm({
    form: "my-form"
})(Form)

export default Form;
const styles = {
    addLocation: {
        margin: "10px 0px"     
    },
    form:{
        fontFamily:'Arial',
        textTransform:'uppercase'  
    },

    textLocation: {
        padding: "0px 0px 0px 10px",
        display: 'inline-block'
    }
}