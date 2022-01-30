import React from "react";
import {useParams} from "react-router-dom";
import {Params} from "../../types/types";

export const SoldHistory: React.FC = () => {
    const {id} = useParams<Params>()
    return(
        <div>
            SOLD-HISTORY ID: {id}
        </div>
    )
}