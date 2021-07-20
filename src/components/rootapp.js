import React from 'react';
import './style/style2.css';
import { connect } from "react-redux";
import {
    getAllDatas,
    getDetails,
    resetDetails
} from './../store/app/action';
import CountUp from 'react-countup';
import moment from 'moment';
import 'moment/locale/id';  // without this line it didn't work

import Bg from './assets/img/logo.png';
import Logo from './assets/img/logo.png';

moment.locale('id');

function Rootapp({ datas, getAllDatas, getDetails, datas_detail, resetDetails }) {
    const [isDetail, setIsDetail] = React.useState(true)
    const [nama, setNama] = React.useState('')

    React.useEffect(() => {
        getAllDatas()
        getDetail()
    }, [])

    const getDetail = (name, id) => {
        setNama(name)
        setIsDetail(true)
        getDetails('69')
    }

    const resetDetail = () => {
        setIsDetail(false)
        resetDetails()
    }

    return (
        <div className="container">
          
            <div className="bg">
                <img src={Bg} />
            </div>
            <div className="main  border-gradient-gold">
                <div className="header">
                   All Days
                </div>
                {!isDetail ?
                    <table className="tb" id="table">
                        {datas.length !== 0 ?
                            datas.map((data, i) =>
                                <tr key={i} onClick={() => getDetail(data.nama, data.id)}>
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
                    :
                    <table className="tb"  id="table">
                        {datas_detail.length !== 0 ?
                            datas_detail.map((data, i) =>
                                <tr key={i} >
                                    <td >{moment(data.created_at).format("dddd")}</td>
                                    <td >{moment(data.created_at).format("Do MMMM YYYY")}</td>
                                    <td ><div className="numb-wrapper">
                                            {data.nomor.split('').map((n, i) => 
                                                  <div className="split" style={{ borderRight: data.nomor.split('').length === i+1 ? '' : '1px solid #fff' }}><CountUp end={n} duration={5} /> </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            )
                            :
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                Belum Ada Data
                            </div>
                        }
                    </table>
                }

            </div>
            {/* {isDetail ?
                <div className="back" onClick={resetDetail}>
                    Kembali
                </div>
                :
                ""
            } */}
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas: app.datas,
        datas_detail: app.datas_detail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDatas: () => dispatch(getAllDatas()),
        getDetails: (payload) => dispatch(getDetails(payload)),
        resetDetails: () => dispatch(resetDetails())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rootapp);
