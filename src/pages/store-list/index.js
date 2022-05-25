import React from 'react'
import VendorListView from '../../components/VenderListView'
import VenderProfile from '../../components/VenderProfile/VenderProfile'

export const VendorList = [
  {
    id: 1,
    brandName: 'Outfitter',
    brandDescription: 'Finest engraved wood watch for your love ones.',
    profileImage: require('../../assets/images/VendorProfile/brand2.PNG'),
    coverImage: require('../../assets/images/VenderCover/venderCoverPhotoavif.avif')
  },
  {
    id: 2,
    brandName: 'Huggo Boss',
    brandDescription: 'Products you Love the most',
    profileImage: require('../../assets/images/VendorProfile/brand2.PNG'),
    coverImage: require('../../assets/images/VenderCover/brandCover.webp')
  },
  {
    id: 3,
    brandName: 'Levise',
    brandDescription: 'Shop your Dreams',
    profileImage: require('../../assets/images/VendorProfile/brand2.PNG'),
    coverImage: require('../../assets/images/VenderCover/venderCoverPhotoavif.avif')
  }
]


const onClickVenderHandel = () => {
  console.log('Vender Clicked');
}

const StoreList = () => {
  return (
    <div className='row'>

        <div className='col-md-2'>
            <VendorListView VendorList={VendorList} onClick={onClickVenderHandel}/>
        </div>

        <div className='col-md-10'>
            <VenderProfile/>
        </div>
    </div>
  )
}

export default StoreList