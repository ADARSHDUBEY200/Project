import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './ResearchForm.css';

const ResearchForm = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    department: '',
    enrollmentNo: '',
    graduationYear: '',
    githubLink: '',
    linkedinLink: '',
    email: '',
    phone: '',
    facultyName: '',
    researchName: '',
    researchProof: '',
    aboutResearch: '',
    researchApproach: ''
  });

  const onDrop = (acceptedFiles) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional validation here if needed
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container fade-in">
      <form className="research-form" onSubmit={handleSubmit}>
        <div className="header">
          <div {...getRootProps()} className="profile-image-wrapper">
            <input {...getInputProps()} className="hidden-input" />
            <img
              src={image || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter user name"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            placeholder="Enter your department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Enrollment No.</label>
          <input
            type="text"
            name="enrollmentNo"
            placeholder="Enter your roll no."
            value={formData.enrollmentNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Year of Graduation</label>
          <input
            type="text"
            name="graduationYear"
            placeholder="2022-2026"
            value={formData.graduationYear}
            onChange={handleChange}
            pattern="\d{4}-\d{4}"
            required
          />
        </div>
        <div className="form-group">
          <label>Github Link</label>
          <input
            type="url"
            name="githubLink"
            placeholder="Enter your Github link"
            value={formData.githubLink}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>LinkedIn Link</label>
          <input
            type="url"
            name="linkedinLink"
            placeholder="Enter your LinkedIn link"
            value={formData.linkedinLink}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone No.</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            pattern="\d{10}"
            required
          />
        </div>
        <div className="form-group">
          <label>Faculty Name</label>
          <input
            type="text"
            name="facultyName"
            placeholder="Enter your supported faculty name"
            value={formData.facultyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Research Name</label>
          <input
            type="text"
            name="researchName"
            placeholder="Enter a research name"
            value={formData.researchName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group form-group-full">
          <label>Proof of Research in PDF Format</label>
          <input
            type="file"
            name="researchProof"
            accept=".pdf"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group form-group-full">
          <label>About Research</label>
          <textarea
            rows="3"
            name="aboutResearch"
            placeholder="Enter details about research papers"
            value={formData.aboutResearch}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group form-group-full">
          <label>Approach of Research</label>
          <textarea
            rows="3"
            name="researchApproach"
            placeholder="Enter approach of the research"
            value={formData.researchApproach}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResearchForm;
