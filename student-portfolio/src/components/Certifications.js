import React, { useEffect, useState } from 'react';
import './Certifications.css';
import awsImage from './aws.png';
import redhatImage from './redhat.png';
import salesforceImage from './salesforce.png';
import oracleImage from './oraclee.png';

function Certifications() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.certifications');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="certifications-container">
      <h2 className="certifications-heading">
        <i className="fa fa-certificate certification-icon" aria-hidden="true"></i>
        Certifications
      </h2>
      <div className={`certifications ${visible ? 'visible' : ''}`}>
        {/* AWS Certification */}
        <div className="certification-item">
          <img src={awsImage} alt="AWS Certification" className="certification-image" />
          <div className="certification-content">
            <p className="certification-name"><strong>Amazon Web Services Cloud Practitioner</strong></p>
            <p className="certification-details">(Issued by Amazon Web Services (AWS))</p>
            <p>▸  Gained foundational knowledge of AWS services, cloud architecture, and best practices.</p>
          </div>
          <button className="certification-button">
            <span>DETAILS</span>
            <span className="hover-text"> May 2024 - May 2027</span>
          </button>
        </div>
        
        {/* Red Hat Certification */}
        <div className="certification-item">
          <img src={redhatImage} alt="Red Hat Certification" className="certification-image" />
          <div className="certification-content">
            <p className="certification-name"><strong>Red Hat Certified Enterprise Application Developer</strong></p>
            <p className="certification-details">(Issued by Red Hat)</p>
            <p>▸  Certified in developing and deploying enterprise applications using Red Hat technologies.</p>
          </div>
          <button className="certification-button">
            <span>DETAILS</span>
            <span className="hover-text"> Sep 2024 - Sep 2027</span>
          </button>
        </div>
        
        {/* Salesforce Certification */}
        <div className="certification-item">
          <img src={salesforceImage} alt="Salesforce Certification" className="certification-image" />
          <div className="certification-content">
            <p className="certification-name"><strong>Salesforce Certified AI Associate</strong></p>
            <p className="certification-details">(Issued by Salesforce)</p>
            <p>▸  Skilled in integrating AI solutions within Salesforce for automation and enhanced processes.</p>
          </div>
          <button className="certification-button">
            <span>DETAILS</span>
            <span className="hover-text">Oct 2024 - Present 
            </span>
          </button>
        </div>
        
        {/* Oracle Certification */}
        <div className="certification-item">
          <img src={oracleImage} alt="Oracle Certification" className="certification-image" />
          <div className="certification-content">
            <p className="certification-name"><strong>Oracle Cloud Infrastructure 2024 Generative AI</strong></p>
            <p className="certification-details">(Issued by Oracle)</p>
            <p>▸  Certified in using Oracle Cloud for deploying AI-driven applications and generative AI techniques.</p>
          </div>
          <button className="certification-button">
            <span>DETAILS</span>
            <span className="hover-text">Jul 2024 Jul 2026</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
