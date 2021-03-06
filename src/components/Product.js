import './Product.css'

function Product(props){
    const mockimg='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-MjFlYzFlOWUt-w186._SY116_CB650873007_.jpg'
    return (
        <div className='product'>
            <div className='product_category'>
                <h3>Mood-boosting activewear</h3>
                <div className='product_card_container'>
                    <div className='product_card'>
                        <img alt='loremipsum' src={mockimg}></img>
                        <p className='product_card_ptag'>lorem</p>
                    </div>
                    <div className='product_card'>
                        <img alt='loremipsum' src={mockimg}></img>
                        <p className='product_card_ptag'>lorem</p>
                    </div>
                    <div className='product_card'>
                        <img alt='loremipsum' src={mockimg}></img>
                        <p className='product_card_ptag'>lorem</p>
                    </div>
                    <div className='product_card'>
                        <img alt='loremipsum' src={mockimg}></img>
                        <p className='product_card_ptag'>lorem</p>
                    </div>
                </div>
                <div className='product_category_a_div'>
                <a href='google.com' className='product_category_a'>Shop overstock deals in Outlet</a>
                </div>            
            </div>
        </div>
    )
}

export default Product