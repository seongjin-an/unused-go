import React from "react";
import {useParams} from "react-router-dom";
import {Params} from "../../types/types";

export const Intro: React.FC = () => {
    const {id} = useParams<Params>()
    return(
        <div>
            INTRO ID: {id}
        </div>
    )
}