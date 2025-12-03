import ActiveTrade from "../../components/Admin/NiftyUpDown/ActiveTrade";

const NiftyUpDown: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Nifty Up Down Prediction</h1>
            <ActiveTrade />
        </div>
    );
}   

export default NiftyUpDown;