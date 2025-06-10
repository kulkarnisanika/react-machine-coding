import Card from "./Card";
import "./infinite-scroll.css";
const CardList = ({ productList }) => {

    return (
        <div className="card-list">
            {
                !!productList && productList?.map((product,index) => {
                    const { id, title, image, description, price } = product;
                    return (
                        <div key={index} >
                            <Card id={index+1}
                                title={title}
                                imageUrl={image}
                                description={description}
                                price={price}
                            />
                        </div>
                    )
                })
            }
        </div>

    )
}

export default CardList;