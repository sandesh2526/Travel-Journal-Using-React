import {MdLocationPin} from "react-icons/md"

export default function CardInfo(props) {
    console.log("From inside the Card INfo : ",props.card);
    return (
        <div className="card-info">
            <p className="card-location">
                <i> 
                    <MdLocationPin style = {{ color:'rgb(252, 152, 152)', margin:"0px 0 0 0", fontSize:"1rem"}}/>
                </i>
                <span> { props.card.location } </span>
                <a className="card-map-link" href={ props.card.googleMapUrl }>View on Google Maps</a>
            </p>
            <h1 className="card-title">{ props.card.title }</h1>
            <h5 className="card-date">{props.card.startDate} - {props.card.endDate}</h5>
            <p className="card-description">{props.card.description}</p>
        </div>
    );
}