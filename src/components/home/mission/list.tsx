import Item from "./item"
import { missions } from "@/lib/constants"


function List() {
    return (
        <div>
            {missions.map((mission: any, index: number) => (
                <Item
                    key={index}
                    number={mission?.id}
                    title={mission?.title}
                    description={mission.description}
                />
            ))}
        </div>
    )
}

export default List