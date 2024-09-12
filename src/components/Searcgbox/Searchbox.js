import { Button } from "@mui/material";
import { FiSearch } from "react-icons/fi";

const Searchbox = () => {
    return(
        <>
            <div className="headerSearch ml-3 mr-3">
                <input type="text" placeholder="Seach products"/>
                <Button><FiSearch /></Button>
            </div>
        </>
    )
}
export default Searchbox