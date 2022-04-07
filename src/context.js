import React, { Component } from 'react'

const HotelContext = React.createContext();
//<hotelContext.Provider value={}
export default class HotelProvider extends Component {
    state={

    }
    render() {
    return (
      <HotelContext.Provider value="hello">
          {this.props.children}
      </HotelContext.Provider>
    )
  }
}
