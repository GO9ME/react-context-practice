import React from 'react'

const Products = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        alt="product"
      />
      <form style={{ marginTop: '10px' }}>
        <label style={{ textAlign: 'right' }}></label>
        <input
          style={{ marginLeft: '7px' }}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
        />
      </form>
    </div>
  )
}

export default Products