import './sell.scss'
import { useState } from 'react'
import { db } from '../../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

const CLOUD_NAME='djhmcbiq9'
const UPLOAD_PRESET='olx_clone'

function SellForm() {
    const navigate=useNavigate()
    const [product, setProduct]=useState({
        name:'',
        price:'',
        description:''
    })
    const [image, setImage]=useState(null)
    const handleChange = (e) =>{
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }
    const handleImageChange = (e) =>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }
    const uploadToCloudinary = async () =>{
        try {
            console.log('Hiiiiiiiiii')
            const formData=new FormData()
            formData.append('file', image)
            formData.append('upload_preset', UPLOAD_PRESET)
            const response=await axios.post(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                formData
            )
            console.log(response)
            return response.data.secure_url
        } catch (error) {
            console.log(error)
            toast.error('Server Errorasdasd')
        }
    }
    const addProduct = async () =>{
        try {
            let imageUrl=''
            if(image){
                imageUrl=await uploadToCloudinary()
            }
            console.log('started')
            await addDoc(collection(db, 'products'),{
                ...product,
                price:parseFloat(product.price),
                imageUrl,
                createdAt:Timestamp.now()
            })
            console.log('Done')            
            toast.success('Product Added Successfully')
            setProduct({name:'', price:'', desc:''})
            navigate('/')
        } catch (error) {
            toast.error('Server Error11111')
            console.log(error)
        }
    }

    return (
        <div className='sellForm'>
            <div className="inputFields">
                <h1>Add Product</h1>
                <div className="label">
                    Product Name:
                </div>
                <input type="text" name='name' value={product.name} onChange={handleChange}/>
                <div className="label">
                    Product Price:
                </div>
                <input type="text" name='price' value={product.price} onChange={handleChange}/>
                <div className="label">
                    Product Description:
                </div>
                <input type="text" name='description' value={product.description} onChange={handleChange}/>
                <div className="label">
                    Product Image:
                </div>
                <input type="file" accept='image/*' onChange={handleImageChange}/>
                <button className='addProductBtn' onClick={addProduct}>Submit</button>
            </div>
        </div>
    )
}

export default SellForm
