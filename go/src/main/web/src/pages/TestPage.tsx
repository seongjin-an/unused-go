import React from "react";
import {TestButton} from "../components/atoms/button";

const TestPage: React.FC = () => {
    return(
        <div style={{width: '200px', height: '200px'}}>
            <TestButton aType bType/>
            <TestButton bType aType/>
        </div>
    )
}
export default TestPage