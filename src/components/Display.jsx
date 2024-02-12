import React from 'react'
import ListHalls from './ListHalls'
import Filter from './Filter'
import Map from './Map'

export default function Display() {
  return (
    <div>
        <Filter/>
        <ListHalls/>
        <Map/>
    </div>
  )
}
