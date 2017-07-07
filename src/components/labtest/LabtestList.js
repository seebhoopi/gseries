import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LabtestList = ({labtests}) => {
    return ( 
      
                <div>
                {labtests.map(labtest =>              

                    <div className="belement" key={labtest._id}>
                        <Link className="belementn" to={'/labtestsf/' + labtest._id}>{labtest._id}</Link>
                        
                    </div>
              
                )}
                </div>
                
    );
};

LabtestList.propTypes = {
    labtests: PropTypes.array.isRequired
};

export default LabtestList;