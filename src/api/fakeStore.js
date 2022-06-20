import axios from 'axios'

export const getItems = async (department) => {
  // department: electronics || jewelery  // <- that's the right spelling!!
  const url = `https://fakestoreapi.com/products/category/${department}`
  try {
    const data = await axios.get(url)
    return data
  } catch (err) {
    console.log('Error: ', err)
  }
}
