import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';

class LeadsTable extends Component {
    state = { leads: [] }
    
    componentDidMount() {
        axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/leads/all')
            .then(resp => {
                console.log(resp.data)
                this.setState({ leads: resp.data })
            })
        }

    render() {
        const { leads } = this.state;

        return (
            <div>

                <div class="center">
                    <h1 class="header leads">LEADS</h1>
                    <div class="leads">
                        <h3>CaptureMortgage+ Leads Board</h3><span> </span>
                        <h3><FiscalYear /></h3>
                    </div>
                    <table id="myTable">
                        <tr class="leads-back">
                            <th>ID</th>
                            <th>Entered as Lead</th>
                            <th>Customer Name</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Referrer</th>
                            <th>Employee</th>
                        </tr>

                        {leads.map((lead, i) => {
                        return (
                            <tr key={i}>
                            <td>{lead.id}</td>
                            <td>{lead.dateOfLead}</td>
                            <td>{lead.customerName}</td>
                            <td>{lead.category}</td>
                            <td>${lead.amount}</td>
                            <td>{lead.referrer}</td>
                            <td>{lead.employee}</td>
                        </tr>
                            )})}

                    </table>
                </div>

            </div>
                
        );
    }
}

export default LeadsTable;


