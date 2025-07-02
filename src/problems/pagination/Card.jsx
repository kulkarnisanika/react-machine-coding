const Card = ({title, imgSrc}) => {
  return (
    <div className="card-card">
        <img src={imgSrc}
            alt = {title}
        />
        <h4>{title}</h4>
    </div>
  )
}

export default Card;
