import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/styles';
import { change } from 'redux-form';
import { connect } from 'react-redux';


class GoogleAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.autocompletedInput = null;
    this.autocomplete = null;
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompletedInput,
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  getRef = (node) => { this.autocompletedInput = node };


  handlePlaceChanged = () => {
    let result,
    formatted_address,
      place = this.autocomplete.getPlace();

    if (place.geometry) {
      const { name, address_components, geometry: { location: { lat, lng } } } = place;
      result = {
        name,
        cauntry: address_components[3].short_name || '',
        lat: lat(),
        lng: lng()
      }
      formatted_address = place.formatted_address;
    }
    this.props.dispatch(change('my-form', `${this.props.input.name}Data`, result));
    this.props.dispatch(change('my-form', `${this.props.input.name}`, formatted_address));
  }

  render() {
    const { input, meta:{error} } = this.props;
    return (
      <div style={styles.textField}>
        <TextField
          {...input}
          inputRef={this.getRef}
          id="autocomplete"
          type="text"
          variant="outlined"
          label={input.label}
          autoFocus
        />
        {error && <FormHelperText style={styles.errorMsg}>{error}</FormHelperText>}
      </div>
    )
  }
}

export default connect(null, null)(GoogleAutocomplete);

const styles = {
  errorMsg: {
    color: 'red',
    position:'absolute'
  },
  textField: {
    marginBottom: '30px',
    position:'relative'
  }
};