import React from "react";

const Rank = ({ name, entries}) => {
    return (
        <div className="black f3 pt3">
            {`You've made ${entries} entries, ${name}`}
        </div>
    );
}

export default Rank
