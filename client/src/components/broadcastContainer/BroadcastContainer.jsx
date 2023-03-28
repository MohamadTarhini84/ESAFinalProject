import "./broadcastContainer.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import Card from "./broadcastContainerCard";

const BroadcastContainer = ({ broadcast }) => {
    const { user } = useAuthContext()

    return (
        <div className="all-broadcasts-container">
            {broadcast.map((item) => (
                <Card key={item._id} item={item} user={user} className="broadcast-container"/>
            ))}
        </div>
    )
}

export default BroadcastContainer;
