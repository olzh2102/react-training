import axios from 'axios'

const getItems = async () => {
    const res = await axios({
        method: 'GET',
        url: 'https://private-3efa8-products123.apiary-mock.com/products'
    })

    return res.data
}

export {getItems}