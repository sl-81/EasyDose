
interface DrugCardProps {
    name: string;
    picture: string;
    handleClick: () => void;
}

function DrugCard({name, picture, handleClick}: DrugCardProps) {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img src={picture} className="card-img-top" alt={name} style={{ width: "200px", height: "200px" }}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <a href="#" className="btn btn-primary" onClick={handleClick}>
          Click to calculate dose
        </a>
      </div>
    </div>
  )
}

export default DrugCard;
