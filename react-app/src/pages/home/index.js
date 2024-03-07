import React from "react";
import SimpleTable from '../../components/table/table.js'
import Base from "../../components/base/base"
import Create from '../create/create'
import './style.css'


function Home(){
    return (
        <Base>
            <Create />
            <SimpleTable />
        </Base>
    );
}

export default Home;