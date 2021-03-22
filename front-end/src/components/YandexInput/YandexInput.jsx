import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { split } from 'lodash';

import YandexInputWrapper from './styled';

class YandexInput extends React.Component {
  state = {
    city: '',
    street: '',
    home: '',
  };

  loadSuggest = ymaps => {
    const suggestView = new ymaps.SuggestView('suggest');

    suggestView.events.add('select', e => {
      const suggestAddress = e.get('item').value;
      const [, city, street, home] = split(suggestAddress, ',');

      this.setState({ city, street, home });
    });
  };

  render() {
    return (
      <YandexInputWrapper>
        <input type='text' id='suggest' />
        <div>{this.state.city}</div>
        <div>{this.state.street}</div>
        <div>{this.state.home}</div>
        <YMaps>
          <Map
            modules={['SuggestView']}
            height='0'
            onLoad={ymaps => this.loadSuggest(ymaps)}
            defaultState={{ center: [53.677834, 23.829529] }}
          />
        </YMaps>
      </YandexInputWrapper>
    );
  }
}

export default YandexInput;
