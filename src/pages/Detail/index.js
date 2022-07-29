import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../api/productsApi'

function Detail() {
  const [product, setProduct] = useState({})
  const [price, setPrice] = useState(0)
  const [priceTopping, setPriceTopping] = useState(0)
  const params = useParams()

  // product detail
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await getProductDetail(params.id)
        if (response) {
          // console.log('response', response.size.length)
          let newProduct = { ...response }

          newProduct = {
            ...newProduct,
            size: newProduct.size.map((s, index) => {
              return {
                ...s,
                selected: index === 0,
              }
            }),
            topping: newProduct.topping.map((tp) => ({
              ...tp,
              selected: false,
            })),
          }
          // console.log('newProduct', newProduct)

          setProduct(newProduct)
          setPrice(response.size[0].pice)
        }
      } catch (error) {
        console.log('Failed', error)
      }
    }
    fetchProductDetail()
  }, [params.id])

  const handleClickSize = (item, indexSize) => () => {
    // console.log('indexSize', indexSize)

    let newProduct = { ...product }

    newProduct = {
      ...newProduct,
      size: newProduct.size.map((s, index) => ({
        ...s,
        selected: index === indexSize ? true : false,
      })),
      price: item.pice + priceTopping,
    }

    setProduct(newProduct)
    setPrice(item.pice)
  }

  const handleClickTopping = (item_topping, indexTopping) => () => {
    // console.log('item_topping', item_topping)
    let newProduct = { ...product }

    if (item_topping.selected === true) {
      // console.log('chon topping lan 2')
      newProduct = {
        ...newProduct,
        topping: newProduct.topping.map((tp, index) => ({
          ...tp,
          selected: index === indexTopping ? false : tp.selected,
        })),
        price: newProduct.price - item_topping.pice,
      }
      setProduct(newProduct)
    } else {
      newProduct = {
        ...newProduct,
        topping: newProduct.topping.map((tp, index) => ({
          ...tp,
          selected: index === indexTopping ? true : false,
        })),
        price: price + item_topping.pice,
      }
      setProduct(newProduct)
    }
  }

  const addOderLocalStorage = () => {
    const arrayProducts  = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
    if (Array.isArray(arrayProducts)) {
      // console.log('arrayProducts', arrayProducts)
      arrayProducts.push(product)
      localStorage.setItem('products', JSON.stringify(arrayProducts))
      alert('sản phẩm được thêm vào giỏ hàng')
    }
    window.location.reload(arrayProducts);
  }

  // console.log('product', product)

  return (
    <>
      <main>
        <div className="opacity-0">.</div>
        <div>
          {product.name && (
            <div className="flex justify-around mt-40 shadow-3xls gap-5">
              <img className="w-570 h-570" alt="" src={product.image} />

              <div>
                <div className="mb-5">
                  <h1>{product.name}</h1>
                  <span>{product.price} đ</span>
                  <br />
                </div>

                <div className="mb-5">
                  <span>kích thước</span>
                  <div className="grid gap-4 grid-cols-3">
                    
                    {product.size.map((item, indexSize) => (
                      <button
                        className={`px-5 border rounded ${
                          item.selected === true
                            ? 'bg-orange-500 text-white'
                            : ''
                        }`}
                        key={indexSize}
                        onClick={handleClickSize(item, indexSize)}
                      >
                        {item.size} {item.pice}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <span>Topping</span>
                  <div className="flex flex-wrap gap-5">
                    {product.topping.map((item, indexTopping) => (
                      <button
                        key={indexTopping}
                        className={`px-5 border rounded ${
                          item.selected ? 'bg-orange-500 text-white' : ''
                        }`}
                        onClick={handleClickTopping(item, indexTopping)}
                      >
                        {item.topping} {item.price}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={addOderLocalStorage}
                    className="px-5 py-2 bg-orange-500 text-white"
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default Detail
