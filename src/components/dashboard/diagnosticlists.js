import React, { PropTypes } from 'react';
import { Link } from 'react-router';
//labtestsfto={'/labtestsf/' + diagnosticcenter.id}to={'/diagnostics/' + diagnosticcenter.code}

const DiagnosticList = ({ diagnosticcenters }) => {
    
 return (

        <div>
            {diagnosticcenters.map(diagnosticcenter =>

 
 
                <div className="belement " key={diagnosticcenter.code}>
               <div className=" belementn dashboard-fontclr"><b>{diagnosticcenter.name}</b>
                <div className="floatright"><Link to={"labtestdf/"+diagnosticcenter.code}>Book Test</Link> </div>
               </div>

               {/*
                   
               */}
                

                </div>

            )}
        </div>

    );
};

DiagnosticList.propTypes = {
    diagnosticcenters: PropTypes.array.isRequired
};

export default DiagnosticList;