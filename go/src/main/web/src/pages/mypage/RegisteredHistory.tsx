import React from "react";
import {useParams} from "react-router-dom";
import {Params} from "../../types/types";

export const RegisteredHistory: React.FC = () => {
    const {id} = useParams<Params>()
    return(
        <div>
            REGISTERED-HISTORY ID: {id}
        </div>
    )
}