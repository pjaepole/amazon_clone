import './Mockproducts.css'
function Mockproducts(props){
    const {product}=props
    return(
        <div className="mockproducts">
            <img className='mockproducts_img' alt='demo product'src={product.image}></img>
        </div>
    )
}

export default Mockproducts