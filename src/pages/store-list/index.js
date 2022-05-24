import React from 'react'
import VendorListView from '../../components/VenderListView'
import VenderProfile from '../../components/VenderProfile/VenderProfile'

const StoreList = () => {
  return (
    <div className='row'>

        <div className='col-md-2'>
            <VendorListView/>
            <VendorListView/>
            <VendorListView/>
        </div>
        <div className='col-md-10'>
            <VenderProfile/>
        </div>
    </div>
  )
}

export default StoreList