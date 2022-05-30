import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VendorListView from '../../components/VenderListView'
import VenderProfile from '../../components/VenderProfile/VenderProfile'
import './index.css'
export const vendorList = [
  {
    id: 1,
    brandName: 'Outfitter',
    brandDescription: 'Finest engraved wood watch for your.',
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
  },
  {
    id: 4,
    brandName: 'JDot',
    brandDescription: 'Shop Online',
    profileImage: require('../../assets/images/VendorProfile/brand2.PNG'),
    coverImage: require('../../assets/images/VenderCover/venderCoverPhotoavif.avif')
  }

]


const onClickVenderHandel = () => {
  console.log('Vender Clicked');
}

const StoreList = () => {
  const [vendor, setVendor] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const index = vendorList.findIndex(f => f.id == id)
      if (index != -1) {
      setVendor(vendorList[index])
      }
    }
  }, [id])
  return (
    <div className='store-list'>

      <div className='vendor-list p-3'>
        <div className='d-flex justify-content-between flex-wrap mb-2'>

        <select name="cars" id="cars" className="productsDropDowns">
          <option selected disabled hidden>
            Search by: <strong>Category</strong>
          </option>
          <option value="jackets">Jacket</option>
          <option value="shoe">Shoe</option>
          <option value="shoe">T Shirts</option>
        </select>
        <select name="cars" id="cars" className="productsDropDowns">
          <option selected disabled hidden>
            Sort by: <strong>Relevency</strong>
          </option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        </div>
        
        <VendorListView VendorList={vendorList}  onClick={onClickVenderHandel} />
      </div>

      <div className='vendor-view'>
        {vendor ? <VenderProfile vendor={vendor} /> :
          <div className='center-text'>
            <h3>Select vendor's name to preview their profiles</h3>
          </div>}
        </div>
    </div>
  )
}

export default StoreList