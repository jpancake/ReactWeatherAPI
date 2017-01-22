/* eslint "react/prop-types": 0 */
import React from 'react'
import { GoogleMap } from 'react-google-maps'
import ScriptjsLoader from 'react-google-maps/lib/async/ScriptjsLoader'

export default props => {
  return (
      <ScriptjsLoader
        hostname={'maps.googleapis.com'}
        pathname={'/maps/api/js'}

        query={{
          key: 'AIzaSyB0NGuGw308FN3TpLmDv6AOFmn8OWSLVCk',
          v: '3',
          libraries: 'geometry, drawing, places'
        }}
        loadingElement={
          <div className="spinner" />
        }
        containerElement={
          <div style={{ height: '90%' }} />
        }
        googleMapElement={
          <GoogleMap
            zoom={12}
            defaultCenter={{ lat: props.lat, lng: props.lon }}
          />
        }
      />
  )
}
