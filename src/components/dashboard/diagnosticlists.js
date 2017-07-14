import React, { PropTypes } from 'react';
import { Link } from 'react-router';
//labtestsfto={'/labtestsf/' + diagnosticcenter.id}to={'/diagnostics/' + diagnosticcenter.code}

const DiagnosticList = ({ diagnosticcenters }) => {
    
 return (

        <div>
            {diagnosticcenters.map(diagnosticcenter =>

 
 
                <div className="belement div100per" key={diagnosticcenter.code}>
               <div className="div50per"><b>{diagnosticcenter.name}&nbsp;</b></div>

               <div className="div50per floatright">
                            <Link  className="belementn" to={"labtestdf/"+diagnosticcenter.code}>Book a test</Link>
                   </div>
                  

                </div>

            )}
        </div>

    );
};

DiagnosticList.propTypes = {
    diagnosticcenters: PropTypes.array.isRequired
};

export default DiagnosticList;