import CardInfo from "./CardInfo"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <div>
                <img alt="SomeImage" className="card-image" src={props.card.imageUrl} />
            </div>
            <CardInfo card = { props.card } />
        </div>
    )
}