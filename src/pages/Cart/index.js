import { useEffect, useState } from 'react'

function Cart() {
  const [listProductArray, setListProductArray] = useState([])
  // console.log('listProductArray', listProductArray)

  useEffect(() => {
    const fetchListProductArray = localStorage.getItem('products')
    const array = JSON.parse(fetchListProductArray)

    if (fetchListProductArray) {
      setListProductArray(array)
    }
  }, [])

  const totalCoin = listProductArray.reduce(function (total, course) {
    return total + course.price
  }, 0)
  // console.log('totalCoin', totalCoin)



  return (
    <main>
      <div className="opacity-0">.</div>
      <div className="mt-32 mb-32 flex justify-around">
        <div className="rounded-3xl w-570  shadow-3xl p-10">
          <h1 className="text-center">Xác nhận đơn hàng</h1>
          <ul>
            {listProductArray.map((product, index) => {
              return (
                <li className="flex justify-between" key={index}>
                  <div>
                    <p>{product.name}</p>

                    <button className="mr-10">Sửa</button>
                    <button>Xóa</button>
                  </div>
                  <p>{product.price} đ</p>
                  <p></p>
                </li>
              )
            })}
          </ul>
          <div className="mt-10 mb-5  border-b-4 border-[#e57905] flex justify-between boder-1-4">
            <p>Tổng tiền</p>
            <p>{totalCoin} đ</p>
          </div>
          <div className="text-center">
            <button className="bg-[#e57905] p-5 rounded-3xl">Đặt Hàng</button>
          </div>
        </div>

        <div className="rounded-3xl w-570 h-full shadow-3xl p-10 ">
          <h1 className="text-center">Thông tin khách hàng</h1>
          <div className="mt-5 flex justify-between">
            <label>Tên người đặt hàng</label>
            <input
              className="border-b-2 border-[#e57905]"
              type="text"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div className="mt-5 flex justify-between">
            <label>Số điện thoại đặt hàng</label>
            <input type="number" placeholder="số điện thoại" />
          </div>
          <div className="mt-5 flex justify-between">
            <label>địa chỉ giao hàng</label>
            <input type="number" placeholder="địa chỉ giao hàng" />
          </div>
          <h1 className="mt-5">Phương thức thanh toán</h1>
          <div className="flex items-center mt-5">
            <input type="radio" name='a' checked="checkked"/>
            <img
              className="h-7 ml-72"
              alt=""
              src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
            />
            <span>thanh toán tiền mặt</span>
          </div>
          <div className="flex items-center mt-5">
            <input type="radio" name='a'/>
            <img
              className="h-7 ml-72"
              alt=""
              src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png"
            />
            <span>thanh toán MoMo</span>
          </div>
          <div className="flex items-center mt-5">
            <input type="radio" name='a'/>
            <img
              className="h-7 ml-72"
              alt=""
              src="https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png"
            />
            <span>thanh toán ZaloPay</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart
