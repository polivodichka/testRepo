import { IBillet } from "../../models/IBillet";
import { Hexa } from "./Cell.styled";

const Billet = ({ x, y, z, value }: IBillet) => {
    return (<Hexa x={x} y={y} z={z} >
        <div className="value">{value ?? ''}</div>
    </Hexa>)
}

export default Billet;