import React from 'react';
import { connect } from 'react-redux';

import './table.css';

export const table = (props) => {
    return (
        <div className="table-container ">
            <table>
                <tr className="bg-imperial">
                    <th colSpan={3} className="title">Prize details</th>
                </tr>
                <tr className="bg-imperial">
                    <th className="price">Prize</th>
                    <th></th>
                    <th className="quota">Quota for each Lucky Draw Day</th>
                </tr>
                <tr className="bg-pastel">
                    <td><div className="first">1st Prize</div></td>
                    <td>iPhone 12 128GB and SmarTone 5G SIM only plan (12-month)*</td>
                    <td><div className="first">1</div></td>
                </tr>
                <tr className="bg-amour">
                    <td><div className="first">2nd Prize</div></td>
                    <td>iPhone 12 128GB and SmarTone 5G SIM only plan (12-month)*</td>
                    <td><div className="first">3</div></td>
                </tr>
                <tr className="bg-nasu">
                    <td><div className="first">3rd Prize</div></td>
                    <td>iPhone 12 128GB and SmarTone 5G SIM only plan (12-month)*</td>
                    <td><div className="first">3</div></td>
                </tr>
                <tr className="bg-bluebell">
                    <td><div className="first">4th Prize</div></td>
                    <td>iPhone 12 128GB and SmarTone 5G SIM only plan (12-month)*</td>
                    <td><div className="first">4</div></td>
                </tr>
                <tr className="bg-white">
                    <td colSpan={3}>
                        <div className="content">
                            *Grand Prize: iPhone 12 128 GB and SmarTone 5G SIM only plan (12-month, total monthly charge: $256)<br /><br />
                            **Second Prize: hotel staycation package at The Ritz Carlton, Hong Kong, Four Seasons Hotel Hong Kong, W Hong Kong, Alva Hotel by Royal, Hyatt Centric Victoria Harbour Hong Kong, The Royal Garden, Royal Plaza Hotel, Crowne Plaza Hong Kong Kowloon East, Royal Park Hotel, Holiday Inn Express Hong Kong Kowloon East, Noah Ark’s Hotel & Resort or Royal View Hotel<br /><br />
                            ***Fourth Prize: HKD$1,000 dining voucher of The Ritz Carlton, Hong Kong, Four Seasons Hotel Hong Kong, W Hong Kong, Alva Hotel by Royal, Hyatt Centric Victoria Harbour Hong Kong, The Royal Garden, Royal Plaza Hotel, Crowne Plaza Hong Kong Kowloon East, Royal Park Hotel, Noah Ark’s Hotel & Resort or Royal View Hotel<br /><br />
                            Prizes under Second and Fourth Prize will be distributed randomly.
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(table)
