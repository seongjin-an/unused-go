import React from "react";
import {useParams} from "react-router-dom";
import {Params} from "../../types/types";

export const Profile: React.FC = () => {
    const {id} = useParams<Params>()
    return(
        <div>
            PROFILE ID: {id}
        </div>
    )
}