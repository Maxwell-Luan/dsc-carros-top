import './styles.css'
import carImg from '../../assets/car.png';

export default function ProductCard(){
    return(
        <>
        <div className='dsc-product-card'>
            <img src={carImg} alt="carro" />
            <h3>Lorem ipsum dolor</h3>
        </div>
        </>
    );
}