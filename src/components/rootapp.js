import React from 'react';
import './style/style2.css';
import { connect } from "react-redux";
import {
    getAllDatas
} from './../store/app/action';

import Bg from './assets/img/girl.png';
import Logo from './assets/img/logo.png';

function Rootapp({ datas, getAllDatas }) {

    React.useEffect(() => {
        getAllDatas()
    }, [])

    return (
        <div className="container">
            {/* <div className="logo">
                <img src={Logo} />
            </div> */}
            <div className="bg">
                <img src={Bg} />
            </div>
            <div className="main">
                <div className="header">
                    Hasil Togel
                </div>
                <table className="tb">
                    {datas.length !== 0 ?
                        datas.map((data, i) =>
                            <tr key={i}>
                                <td >{data.nama}</td>
                                <td >{data.status === "1" ? <div><span className="open">Open</span></div> : <div><span className="close">Close</span></div>}</td>
                                <td >{data.status === "1" ? data.nomor : <div><span className="close">Close</span></div>}</td>
                            </tr>
                        )
                        :
                        <div>
                            Loading...
                        </div>
                    }
                </table>
            </div>
            {/* <div className="logo">
                    <img src={Logo} />
                </div>
                <div className="bg">
                    <img src={Bg} />
                </div>
                <div className="main">
                    <table className="tb">
                        {datas.length !== 0 ?
                            datas.map((data, i) =>
                                <tr key={i}>
                                    <td style={{ fontWeight: 'bold' }}>{data.name}</td>
                                    <td style={{ fontWeight: 'bold' }}>{data.date}</td>
                                    <td style={{ fontWeight: 'bold', fontSize: 20 }}>{data.nomor}</td>
                                </tr>
                            )
                            :
                            <div>
                                Loading...
                            </div>
                        }
                    </table>
                </div> */}
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas: app.datas,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDatas: () => dispatch(getAllDatas())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rootapp);
