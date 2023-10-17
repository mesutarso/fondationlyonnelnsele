import Item from "./item"


type Props ={
    data:any
}


function List({data}:Props) {
    return (
        <div>
            {data.map((mission: any, index: number) => (
                <Item
                    key={index}
                    number={index + 1}
                    title={mission?.titre}
                    description={mission.description}
                />
            ))}
        </div>
    )
}

export default List