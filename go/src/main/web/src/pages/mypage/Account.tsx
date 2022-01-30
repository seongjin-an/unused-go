import React from "react";
import {useParams} from "react-router-dom";
import {Params} from "../../types/types";

export const Account: React.FC = () => {
    const {id} = useParams<Params>()
    return(
        <div>
            ACCOUNT ID: {id}
        </div>
    )
}